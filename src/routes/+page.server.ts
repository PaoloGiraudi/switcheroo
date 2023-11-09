import type { PageServerLoad } from './$types';
import type { AllMeasuresUnits } from 'convert-units';
import { redirect } from '@sveltejs/kit';

type Definition = {
  left: string;
  right: string;
  leftUnit: AllMeasuresUnits;
  rightUnit: AllMeasuresUnits;
  decimals: number;
};

const db: Definition[] = [
  { left: 'Meters', right: 'Feets', leftUnit: 'm', rightUnit: 'ft', decimals: 2 },
  { left: 'Centimeters', right: 'Inches', leftUnit: 'cm', rightUnit: 'in', decimals: 2 },
  { left: 'Celsius', right: 'Faranheit', leftUnit: 'C', rightUnit: 'F', decimals: 2 }
];

export const load: PageServerLoad = async ({ locals }) => {
  const session = await locals.auth.validate();
  if (session) throw redirect(302, '/dashboard');
  return {
    db
  };
};

export const prerender = true;
