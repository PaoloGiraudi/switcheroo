import type { Conversion } from './conversions';

export type Def = {
	left: string;
	right: string;
	setFromLeft: (value: string) => number | null;
	setFromRight: (value: string) => number | null;
};

export const definitions: Record<Conversion, Def> = {
	MetersToFeet: {
		left: 'Meters',
		right: 'Feet',
		setFromLeft: (value: string) => +(+value * 3.28084).toFixed(2),
		setFromRight: (value: string) => +(+value / 3.28084).toFixed(2)
	},
	CentimetersToInches: {
		left: 'Centimeters',
		right: 'Inches',
		setFromLeft: (value: string) => +(+value / 2.54).toFixed(2),
		setFromRight: (value: string) => +(+value * 2.54).toFixed(2)
	},
	CelsiusToFahrenheit: {
		left: 'Celsius',
		right: 'Fahrenheit',
		setFromLeft: (value: string) => +(32 + (9 / 5) * +value).toFixed(1),
		setFromRight: (value: string) => +((5 / 9) * (+value - 32)).toFixed(1)
	},
	LitersToGallons: {
		left: 'Liters',
		right: 'Gallons',
		setFromLeft: (value: string) => +(+value * 0.264172).toFixed(2),
		setFromRight: (value: string) => +(+value / 0.264172).toFixed(2)
	},
	KilogramsToPounds: {
		left: 'Kilograms',
		right: 'Pounds',
		setFromLeft: (value: string) => +(+value * 2.2046).toFixed(2),
		setFromRight: (value: string) => +(+value / 2.2046).toFixed(2)
	}
};
