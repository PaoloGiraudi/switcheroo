import { Category, Measures, MeasuresMap } from '$lib/validators';
import { z } from 'zod';

export const addSchema = z
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
