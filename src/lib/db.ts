import type { AllMeasuresUnits } from 'convert-units';

export type Definition = {
  left: string;
  right: string;
  leftUnit: AllMeasuresUnits;
  rightUnit: AllMeasuresUnits;
  decimals: number;
};

export const db: Definition[] = [
  { left: 'Meters', right: 'Feets', leftUnit: 'm', rightUnit: 'ft', decimals: 2 },
  { left: 'Centimeters', right: 'Inches', leftUnit: 'cm', rightUnit: 'in', decimals: 2 },
  { left: 'Celsius', right: 'Faranheit', leftUnit: 'C', rightUnit: 'F', decimals: 2 }
];
