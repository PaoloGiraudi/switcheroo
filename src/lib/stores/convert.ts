import configMeasurements from 'convert-units';
import allMeasures from 'convert-units/definitions/all';
import { readable } from 'svelte/store';

export const convert = readable(configMeasurements(allMeasures));
