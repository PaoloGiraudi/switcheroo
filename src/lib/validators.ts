import { z } from 'zod';

export const acceleration = z.union([z.literal('g-force'), z.literal('m/s2')]);

export const angle = z.union([
  z.literal('rad'),
  z.literal('deg'),
  z.literal('grad'),
  z.literal('arcmin'),
  z.literal('arcsec')
]);

export const apparentPower = z.union([
  z.literal('VA'),
  z.literal('mVA'),
  z.literal('kVA'),
  z.literal('MVA'),
  z.literal('GVA')
]);

export const area = z.union([
  z.literal('nm2'),
  z.literal('\u03BCm2'),
  z.literal('mm2'),
  z.literal('cm2'),
  z.literal('m2'),
  z.literal('ha'),
  z.literal('km2'),
  z.literal('in2'),
  z.literal('yd2'),
  z.literal('ft2'),
  z.literal('ac'),
  z.literal('mi2')
]);

export const charge = z.union([
  z.literal('c'),
  z.literal('mC'),
  z.literal('\u03BCC'),
  z.literal('nC'),
  z.literal('pC')
]);

export const current = z.union([z.literal('A'), z.literal('mA'), z.literal('kA')]);

export const digital = z.union([
  z.literal('B'),
  z.literal('KB'),
  z.literal('MB'),
  z.literal('GB'),
  z.literal('TB'),
  z.literal('b'),
  z.literal('Kb'),
  z.literal('Mb'),
  z.literal('Gb'),
  z.literal('Tb')
]);

export const each = z.union([z.literal('ea'), z.literal('dz')]);

export const energy = z.union([
  z.literal('Wh'),
  z.literal('mWh'),
  z.literal('kWh'),
  z.literal('MWh'),
  z.literal('GWh'),
  z.literal('J'),
  z.literal('kJ'),
  z.literal('MJ'),
  z.literal('GJ')
]);

export const force = z.union([z.literal('N'), z.literal('kN'), z.literal('lbf')]);

export const frequency = z.union([
  z.literal('VA'),
  z.literal('mVA'),
  z.literal('kVA'),
  z.literal('MVA'),
  z.literal('GVA')
]);

export const illuminance = z.union([
  z.literal('mHz'),
  z.literal('Hz'),
  z.literal('kHz'),
  z.literal('MHz'),
  z.literal('GHz'),
  z.literal('THz'),
  z.literal('rpm'),
  z.literal('deg/s'),
  z.literal('rad/s')
]);

export const length = z.union([
  z.literal('in'),
  z.literal('yd'),
  z.literal('ft-us'),
  z.literal('ft'),
  z.literal('fathom'),
  z.literal('mi'),
  z.literal('nMi'),
  z.literal('nm'),
  z.literal('\u03BCm'),
  z.literal('mm'),
  z.literal('cm'),
  z.literal('m'),
  z.literal('km')
]);

export const mass = z.union([
  z.literal('oz'),
  z.literal('lb'),
  z.literal('t'),
  z.literal('mcg'),
  z.literal('mg'),
  z.literal('g'),
  z.literal('kg'),
  z.literal('mt')
]);

export const massFlowRate = z.union([
  z.literal('lb/s'),
  z.literal('lb/h'),
  z.literal('kg/s'),
  z.literal('kg/h'),
  z.literal('mt/h')
]);

export const pace = z.union([
  z.literal('min/mi'),
  z.literal('s/ft'),
  z.literal('min/km'),
  z.literal('s/m')
]);

export const partsPer = z.union([
  z.literal('ppm'),
  z.literal('ppb'),
  z.literal('ppt'),
  z.literal('ppq')
]);

export const pieces = z.union([
  z.literal('pcs'),
  z.literal('bk-doz'),
  z.literal('cp'),
  z.literal('doz-doz'),
  z.literal('doz'),
  z.literal('gr-gr'),
  z.literal('gros'),
  z.literal('half-dozen'),
  z.literal('long-hundred'),
  z.literal('ream'),
  z.literal('scores'),
  z.literal('sm-gr'),
  z.literal('trio')
]);

export const power = z.union([
  z.literal('Btu/s'),
  z.literal('ft-lb/s'),
  z.literal('hp'),
  z.literal('W'),
  z.literal('mW'),
  z.literal('kW'),
  z.literal('MW'),
  z.literal('GW'),
  z.literal('PS')
]);

export const pressure = z.union([
  z.literal('Pa'),
  z.literal('kPa'),
  z.literal('MPa'),
  z.literal('hPa'),
  z.literal('bar'),
  z.literal('torr'),
  z.literal('psi'),
  z.literal('ksi'),
  z.literal('inHg')
]);

export const reactiveEnergy = z.union([
  z.literal('VARh'),
  z.literal('mVARh'),
  z.literal('kVARh'),
  z.literal('MVARh'),
  z.literal('GVARh')
]);

export const reactivePower = z.union([
  z.literal('VAR'),
  z.literal('mVAR'),
  z.literal('kVAR'),
  z.literal('MVAR'),
  z.literal('GVAR')
]);

export const speed = z.union([
  z.literal('m/s'),
  z.literal('km/h'),
  z.literal('mm/h'),
  z.literal('mph'),
  z.literal('knot'),
  z.literal('ft/s'),
  z.literal('ft/min'),
  z.literal('in/h')
]);

export const temperature = z.union([
  z.literal('F'),
  z.literal('R'),
  z.literal('C'),
  z.literal('K')
]);

export const time = z.union([
  z.literal('ns'),
  z.literal('mu'),
  z.literal('ms'),
  z.literal('s'),
  z.literal('min'),
  z.literal('h'),
  z.literal('d'),
  z.literal('week'),
  z.literal('month'),
  z.literal('year')
]);

export const voltage = z.union([z.literal('V'), z.literal('mV'), z.literal('kV')]);

export const volume = z.union([
  z.literal('tsp'),
  z.literal('Tbs'),
  z.literal('in3'),
  z.literal('fl-oz'),
  z.literal('cup'),
  z.literal('pnt'),
  z.literal('qt'),
  z.literal('gal'),
  z.literal('ft3'),
  z.literal('yd3'),
  z.literal('mm3'),
  z.literal('cm3'),
  z.literal('ml'),
  z.literal('l'),
  z.literal('kl'),
  z.literal('Ml'),
  z.literal('Gl'),
  z.literal('m3'),
  z.literal('km3'),
  z.literal('cl'),
  z.literal('dl'),
  z.literal('krm'),
  z.literal('tsk'),
  z.literal('msk'),
  z.literal('kkp'),
  z.literal('glas'),
  z.literal('kanna')
]);

export const volumeFlowRate = z.union([
  z.literal('tsp/s'),
  z.literal('Tbs/s'),
  z.literal('in3/s'),
  z.literal('in3/min'),
  z.literal('in3/h'),
  z.literal('fl-oz/s'),
  z.literal('fl-oz/min'),
  z.literal('fl-oz/h'),
  z.literal('cup/s'),
  z.literal('pnt/s'),
  z.literal('pnt/min'),
  z.literal('pnt/h'),
  z.literal('qt/s'),
  z.literal('gal/s'),
  z.literal('gal/min'),
  z.literal('gal/h'),
  z.literal('ft3/s'),
  z.literal('ft3/min'),
  z.literal('ft3/h'),
  z.literal('yd3/s'),
  z.literal('yd3/min'),
  z.literal('yd3/h'),
  z.literal('mm3/s'),
  z.literal('cm3/s'),
  z.literal('ml/s'),
  z.literal('cl/s'),
  z.literal('dl/s'),
  z.literal('l/s'),
  z.literal('l/min'),
  z.literal('l/h'),
  z.literal('kl/s'),
  z.literal('kl/min'),
  z.literal('kl/h'),
  z.literal('m3/s'),
  z.literal('m3/min'),
  z.literal('m3/h'),
  z.literal('km3/s')
]);

export const MeasuresMap = new Map(
  Object.entries({
    acceleration,
    angle,
    apparentPower,
    area,
    charge,
    current,
    digital,
    each,
    energy,
    force,
    frequency,
    illuminance,
    length,
    mass,
    massFlowRate,
    pace,
    partsPer,
    pieces,
    power,
    pressure,
    reactiveEnergy,
    reactivePower,
    speed,
    temperature,
    time,
    voltage,
    volume,
    volumeFlowRate
  })
);

export const Measures = z.union([
  acceleration,
  angle,
  apparentPower,
  area,
  charge,
  current,
  digital,
  each,
  energy,
  force,
  frequency,
  illuminance,
  length,
  mass,
  massFlowRate,
  pace,
  partsPer,
  pieces,
  power,
  pressure,
  reactiveEnergy,
  reactivePower,
  speed,
  temperature,
  time,
  voltage,
  volume,
  volumeFlowRate
]);

export const Category = z.union([
  z.literal('acceleration'),
  z.literal('angle'),
  z.literal('apparentPower'),
  z.literal('area'),
  z.literal('charge'),
  z.literal('current'),
  z.literal('digital'),
  z.literal('each'),
  z.literal('energy'),
  z.literal('force'),
  z.literal('frequency'),
  z.literal('illuminance'),
  z.literal('length'),
  z.literal('mass'),
  z.literal('massFlowRate'),
  z.literal('pace'),
  z.literal('partsPer'),
  z.literal('pieces'),
  z.literal('power'),
  z.literal('pressure'),
  z.literal('reactiveEnergy'),
  z.literal('reactivePower'),
  z.literal('speed'),
  z.literal('temperature'),
  z.literal('time'),
  z.literal('voltage'),
  z.literal('volume'),
  z.literal('volumeFlowRate')
]);
