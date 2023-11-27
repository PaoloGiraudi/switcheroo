import type { AllMeasuresUnits, Unit } from 'convert-units';
import type { allMeasures } from 'convert-units';

export function transformDataToMap(data: AllMeasures) {
  return new Map(
    Object.entries(data).map(([measure, measureData]) => [
      measure,
      Object.values(measureData.systems).flatMap((system) =>
        Object.keys(system).map((systemUnit) => {
          const unit: Unit | undefined = system[systemUnit as AllMeasuresUnits];
          // unit@name
          return `${systemUnit}@${unit?.name.singular ?? systemUnit}`;
        })
      )
    ])
  );
}

export type AllMeasures = typeof allMeasures;
