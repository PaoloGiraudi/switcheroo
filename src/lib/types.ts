export type Def = {
  left: string;
  right: string;
  setFromLeft: (value: string) => number;
  setFromRight: (value: string) => number;
};

export declare type AccelerationUnits = 'g-force' | 'm/s2';
export declare type AngleUnits = 'rad' | 'deg' | 'grad' | 'arcmin' | 'arcsec';
export declare type ApparentPowerUnits = 'VA' | 'mVA' | 'kVA' | 'MVA' | 'GVA';
export declare type AreaUnits =
  | 'nm2'
  | 'μm2'
  | 'mm2'
  | 'cm2'
  | 'm2'
  | 'ha'
  | 'km2'
  | 'in2'
  | 'yd2'
  | 'ft2'
  | 'ac'
  | 'mi2';
export declare type ChargeUnits = 'c' | 'mC' | 'μC' | 'nC' | 'pC';
export declare type CurrentUnits = 'A' | 'mA' | 'kA';
export declare type DigitalUnits =
  | 'B'
  | 'KB'
  | 'MB'
  | 'GB'
  | 'TB'
  | 'b'
  | 'Kb'
  | 'Mb'
  | 'Gb'
  | 'Tb';
export declare type EachUnits = 'ea' | 'dz';
export declare type EnergyUnits = 'Wh' | 'mWh' | 'kWh' | 'MWh' | 'GWh' | 'J' | 'kJ' | 'MJ' | 'GJ';
export declare type ForceUnits = 'N' | 'kN' | 'lbf';
export declare type FrequencyUnits = 'VA' | 'mVA' | 'kVA' | 'MVA' | 'GVA';
export declare type IlluminanceUnits =
  | 'mHz'
  | 'Hz'
  | 'kHz'
  | 'MHz'
  | 'GHz'
  | 'THz'
  | 'rpm'
  | 'deg/s'
  | 'rad/s';
export declare type LengthUnits =
  | 'in'
  | 'yd'
  | 'ft-us'
  | 'ft'
  | 'fathom'
  | 'mi'
  | 'nMi'
  | 'nm'
  | 'μm'
  | 'mm'
  | 'cm'
  | 'm'
  | 'km';
export declare type MassUnits = 'oz' | 'lb' | 't' | 'mcg' | 'mg' | 'g' | 'kg' | 'mt';
export declare type MassFlowRateUnits = 'lb/s' | 'lb/h' | 'kg/s' | 'kg/h' | 'mt/h';
export declare type PaceUnits = 'min/mi' | 's/ft' | 'min/km' | 's/m';
export declare type PartsPerUnits = 'ppm' | 'ppb' | 'ppt' | 'ppq';
export declare type PiecesUnits =
  | 'pcs'
  | 'bk-doz'
  | 'cp'
  | 'doz-doz'
  | 'doz'
  | 'gr-gr'
  | 'gros'
  | 'half-dozen'
  | 'long-hundred'
  | 'ream'
  | 'scores'
  | 'sm-gr'
  | 'trio';
export declare type PowerUnits =
  | 'Btu/s'
  | 'ft-lb/s'
  | 'hp'
  | 'W'
  | 'mW'
  | 'kW'
  | 'MW'
  | 'GW'
  | 'PS';
export declare type PressureUnits =
  | 'Pa'
  | 'kPa'
  | 'MPa'
  | 'hPa'
  | 'bar'
  | 'torr'
  | 'psi'
  | 'ksi'
  | 'inHg';
export declare type ReactiveEnergyUnits = 'VARh' | 'mVARh' | 'kVARh' | 'MVARh' | 'GVARh';
export declare type ReactivePowerUnits = 'VAR' | 'mVAR' | 'kVAR' | 'MVAR' | 'GVAR';
export declare type SpeedUnits =
  | 'm/s'
  | 'km/h'
  | 'mm/h'
  | 'mph'
  | 'knot'
  | 'ft/s'
  | 'ft/min'
  | 'in/h';
export declare type TemperatureUnits = 'F' | 'R' | 'C' | 'K';
export declare type TimeUnits =
  | 'ns'
  | 'mu'
  | 'ms'
  | 's'
  | 'min'
  | 'h'
  | 'd'
  | 'week'
  | 'month'
  | 'year';
export declare type VoltageUnits = 'V' | 'mV' | 'kV';
export declare type VolumeUnits =
  | 'tsp'
  | 'Tbs'
  | 'in3'
  | 'fl-oz'
  | 'cup'
  | 'pnt'
  | 'qt'
  | 'gal'
  | 'ft3'
  | 'yd3'
  | 'mm3'
  | 'cm3'
  | 'ml'
  | 'l'
  | 'kl'
  | 'Ml'
  | 'Gl'
  | 'm3'
  | 'km3'
  | 'cl'
  | 'dl'
  | 'krm'
  | 'tsk'
  | 'msk'
  | 'kkp'
  | 'glas'
  | 'kanna';
export declare type VolumeFlowRateUnits =
  | 'tsp/s'
  | 'Tbs/s'
  | 'in3/s'
  | 'in3/min'
  | 'in3/h'
  | 'fl-oz/s'
  | 'fl-oz/min'
  | 'fl-oz/h'
  | 'cup/s'
  | 'pnt/s'
  | 'pnt/min'
  | 'pnt/h'
  | 'qt/s'
  | 'gal/s'
  | 'gal/min'
  | 'gal/h'
  | 'ft3/s'
  | 'ft3/min'
  | 'ft3/h'
  | 'yd3/s'
  | 'yd3/min'
  | 'yd3/h'
  | 'mm3/s'
  | 'cm3/s'
  | 'ml/s'
  | 'cl/s'
  | 'dl/s'
  | 'l/s'
  | 'l/min'
  | 'l/h'
  | 'kl/s'
  | 'kl/min'
  | 'kl/h'
  | 'm3/s'
  | 'm3/min'
  | 'm3/h'
  | 'km3/s';

export declare type AllMeasuresUnits =
  | AccelerationUnits
  | AngleUnits
  | ApparentPowerUnits
  | AreaUnits
  | ChargeUnits
  | CurrentUnits
  | DigitalUnits
  | EachUnits
  | EnergyUnits
  | ForceUnits
  | FrequencyUnits
  | IlluminanceUnits
  | LengthUnits
  | MassUnits
  | MassFlowRateUnits
  | PaceUnits
  | PartsPerUnits
  | PiecesUnits
  | PowerUnits
  | PressureUnits
  | ReactiveEnergyUnits
  | ReactivePowerUnits
  | SpeedUnits
  | TemperatureUnits
  | TimeUnits
  | VoltageUnits
  | VolumeUnits
  | VolumeFlowRateUnits;
