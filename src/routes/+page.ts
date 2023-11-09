import configureMeasurements, { allMeasures } from 'convert-units';
import type { PageLoad } from './$types';

type Def = {
  left: string;
  right: string;
  setFromLeft: (value: string) => number;
  setFromRight: (value: string) => number;
};

export const load: PageLoad = async ({ data }) => {
  const convert = configureMeasurements(allMeasures);
  const conversions = new Map<string, Def>();

  data.db.forEach((item) => {
    const { left, right, leftUnit, rightUnit, decimals } = item;
    const name = `${left}To${right}`;
    const def: Def = {
      left: left,
      right: right,
      setFromLeft: (value: string) =>
        +convert(+value).from(leftUnit).to(rightUnit).toFixed(decimals),
      setFromRight: (value: string) =>
        +convert(+value).from(rightUnit).to(leftUnit).toFixed(decimals)
    };

    conversions.set(name, def);
  });
  return {
    conversions
  };
};
