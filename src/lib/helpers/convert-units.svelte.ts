import configMeasurements from 'convert-units';
import allMeasures from 'convert-units/definitions/all';

export function loadConvertUnits() {
  const convertUnits = $state(configMeasurements(allMeasures));
  const options = new Map();
  const measures = convertUnits().measures();

  $effect(() => {
    for (let i = 0; i < measures.length; i++) {
      const units = convertUnits().list(measures[i]);
      const measureOptions = units.map((unit) => `${unit.abbr}@${unit.plural}`);
      options.set(measures[i], measureOptions);
    }
  });

  return {
    measures,
    convertUnits,
    options
  };
}
