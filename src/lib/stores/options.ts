import { transformDataToMap } from '$lib/helpers/transformDataToMap';
import { allMeasures } from 'convert-units';
import { writable } from 'svelte/store';

export const options = writable(transformDataToMap(allMeasures));
