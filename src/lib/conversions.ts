export enum Conversion {
	MetersToFeet = 'MetersToFeet',
	CentimetersToInches = 'CentimetersToInches',
	KilogramsToPounds = 'KilogramsToPounds',
	LitersToGallons = 'LitersToGallons',
	CelsiusToFahrenheit = 'CelsiusToFahrenheit'
}

export const conversions: Conversion[] = [...Object.values(Conversion)];
