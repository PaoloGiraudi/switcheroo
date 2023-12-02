import configMeasurements, { allMeasures } from 'convert-units';
import type { PageLoad } from './$types';
import type { Def } from '$lib/types';

export const load: PageLoad = async ({ parent }) => {
  const convert = configMeasurements(allMeasures);
  const conversions = new Map<string, Def>();
  const { userToConversions } = await parent();

  userToConversions?.forEach((item) => {
    const { left, right, left_unit, right_unit } = item.conversions;
    const name = `${left}To${right}`;
    const def: Def = {
      left: left,
      right: right,
      setFromLeft: (value: string) => +convert(+value).from(left_unit).to(right_unit).toFixed(2),
      setFromRight: (value: string) => +convert(+value).from(right_unit).to(left_unit).toFixed(2)
    };

    conversions.set(name, def);
  });

  return {
    conversions
  };
};
