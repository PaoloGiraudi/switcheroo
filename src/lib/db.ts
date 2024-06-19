import type { AllMeasuresUnits } from 'convert-units/definitions/all';
import Dexie, { type EntityTable } from 'dexie';

interface Conversion {
  id: number;
  key: string;
  left: string;
  right: string;
  left_unit: AllMeasuresUnits;
  right_unit: AllMeasuresUnits;
}

const db = new Dexie('ConversionsDB') as Dexie & {
  conversions: EntityTable<Conversion, 'id'>;
};

db.version(1).stores({
  conversions: '++id, &key, left, right, left_unit, right_unit'
});

export type { Conversion };
export { db };
