import { derived } from 'svelte/store';
import { convert } from './convert';

export const options = derived(convert, ($c) => {
  const result = new Map();

  const measures = $c().measures();

  for (let i = 0; i < measures.length; i++) {
    const units = $c().list(measures[i]);
    const options = units.map((unit) => `${unit.abbr}@${unit.singular}`);
    result.set(measures[i], options);
  }
  return result;
});
