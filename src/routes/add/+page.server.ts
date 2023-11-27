import { redirect, type Actions, fail } from '@sveltejs/kit';
import { toCamelCase, unwrap } from '$lib/helpers/formatters';
import { db } from '$lib/server/database.js';
import { conversions, userToConversions } from '$lib/server/schema.js';
import { eq } from 'drizzle-orm';
import { Category, Measures, MeasuresMap } from '$lib/server/validators';
import { z } from 'zod';

type NewConversion = typeof conversions.$inferInsert;

export const load = async ({ locals }) => {
  const session = await locals.auth.validate();
  if (!session) throw redirect(302, '/signup');
  return {};
};

export const actions: Actions = {
  default: async ({ request, locals }) => {
    const session = await locals.auth.validate();

    if (!session) {
      return 'You need to login first';
    }

    const formData = await request.formData();

    const form = addSchema.safeParse({
      category: formData.get('category'),
      right: {
        name: unwrap(formData.get('right')).name,
        unit: unwrap(formData.get('right')).unit
      },
      left: {
        name: unwrap(formData.get('left')).name,
        unit: unwrap(formData.get('left')).unit
      }
    });

    if (!form.success) {
      return fail(400, {
        message: form.error.issues[0].message
      });
    }

    const { data } = form;

    const key = `${toCamelCase(data.left?.name)}_to_${toCamelCase(data.right?.name)}`;

    try {
      const newConv: NewConversion = {
        key: key,
        left_unit: data.left.unit,
        right_unit: data.right.unit,
        left: data.left.name,
        right: data.right.name
      };
      // save conversion in db
      const insertedConversion = await db
        .insert(conversions)
        .values(newConv)
        .onConflictDoNothing({ target: conversions.key })
        .returning({ columnId: conversions.id });

      const conversionId = insertedConversion.length
        ? insertedConversion
        : await db
            .select({ columnId: conversions.id })
            .from(conversions)
            .where(eq(conversions.key, newConv.key));

      // save conversionId to user
      await db.insert(userToConversions).values({
        conversionsId: conversionId[0].columnId,
        userId: session?.user.userId
      });
    } catch (e) {
      return fail(500, {
        message: 'An unknown error occurred'
      });
    }

    throw redirect(302, '/dashboard');
  }
};

const addSchema = z
  .object({
    category: Category,
    right: z.object({
      name: z.string(),
      unit: Measures
    }),
    left: z.object({
      name: z.string(),
      unit: Measures
    })
  })
  .refine(
    ({ category, right, left }) => {
      if (!category) return false;

      const allowed = MeasuresMap.get(category);
      const isRightValid = allowed?.safeParse(right?.unit);
      const isLeftValid = allowed?.safeParse(left?.unit);
      const isDifferent = right?.unit !== left?.unit;

      return isRightValid && isLeftValid && isDifferent;
    },
    {
      message: 'Pick different units',
      path: ['right', 'left']
    }
  );
