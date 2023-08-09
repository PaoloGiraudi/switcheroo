export enum Conversion {
  CelsiusToFahrenheit = 'CelsiusToFahrenheit',
  CentimetersToInches = 'CentimetersToInches',
  MetersToFeet = 'MetersToFeet',
  SqMetersToSqFeet = 'SqMetersToSqFeet',
  KilogramsToPounds = 'KilogramsToPounds',
  LitersToGallons = 'LitersToGallons'
}

export const conversions: Conversion[] = [...Object.values(Conversion)];
