import { message, superValidate } from 'sveltekit-superforms/server';
import { redirect, type Actions } from '@sveltejs/kit';
import { toCamelCase } from '$lib/helpers/formatters';
import { db } from '$lib/server/database.js';
import { conversions, userToConversions } from '$lib/server/schema.js';
import { addSchema } from './add-schema.js';
import { eq } from 'drizzle-orm';

type NewConversion = typeof conversions.$inferInsert;

export const load = async ({ locals }) => {
  const session = await locals.auth.validate();
  if (!session) throw redirect(302, '/signup');
  const form = await superValidate(addSchema);

  return { form };
};

export const actions: Actions = {
  default: async ({ request, locals }) => {
    const session = await locals.auth.validate();

    if (!session) {
      return 'You need to login first';
    }

    const form = await superValidate(request, addSchema);
    const { data } = form;

    // Convenient validation check:
    if (!form.valid || !data.left || !data.right) {
      return message(form, 'Please check out the selection');
    }

    const key = `${toCamelCase(form.data.left?.name)}_to_${toCamelCase(form.data.right?.name)}`;

    try {
      const newConv: NewConversion = {
        key: key,
        left_unit: data.left.unit,
        right_unit: data.right.unit,
        left: data.left.name,
        right: data.right.name
      };

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

      const result = await db.insert(userToConversions).values({
        conversionsId: conversionId[0].columnId,
        userId: session?.user.userId
      });

      return result;
    } catch (error) {
      console.log(error);
    }

    return { form };
  }
};
