export enum Conversion {
	MetersToFeet = 'MetersToFeet',
	CentimitersToInches = 'CentimitersToInches',
	CelsiusToFahrenheit = 'CelsiusToFahrenheit'
}

export const conversions: Conversion[] = [...Object.values(Conversion)];
