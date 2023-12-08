import configMeasurements, { allMeasures } from 'convert-units';
import { readable } from 'svelte/store';

export const convert = readable(configMeasurements(allMeasures));
