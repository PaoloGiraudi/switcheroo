import type { PageLoad } from './$types';
import type { Def } from '$lib/types';
import { convert } from '$lib/stores/convert';
import { get } from 'svelte/store';

export const load: PageLoad = async ({ parent }) => {
  const conversions = new Map<string, Def>();
  const { userToConversions } = await parent();
  const c = get(convert);

  userToConversions?.forEach((item) => {
    const { left, right, left_unit, right_unit } = item.conversions;
    const name = `${left}To${right}`;
    const def: Def = {
      left: left,
      right: right,
      setFromLeft: (value: string) => +c(+value).from(left_unit).to(right_unit).toFixed(2),
      setFromRight: (value: string) => +c(+value).from(right_unit).to(left_unit).toFixed(2)
    };

    conversions.set(name, def);
  });

  return {
    conversions
  };
};
