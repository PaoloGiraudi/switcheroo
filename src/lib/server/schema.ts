import type { AllMeasuresUnits } from 'convert-units';
import { relations } from 'drizzle-orm';
import { blob, integer, primaryKey, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const conversions = sqliteTable('conversions', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  key: text('key').notNull().unique(),
  left: text('left').notNull(),
  right: text('right').notNull(),
  left_unit: text('left_unit').$type<AllMeasuresUnits>().notNull(),
  right_unit: text('right_unit').$type<AllMeasuresUnits>().notNull()
});

export const conversionsRelations = relations(conversions, ({ many }) => ({
  userToConversions: many(userToConversions)
}));

export const user = sqliteTable('user', {
  id: text('id').primaryKey(),
  username: text('username').notNull().unique()
});

export const userRelations = relations(user, ({ many }) => ({
  userToConversions: many(userToConversions)
}));

export const userToConversions = sqliteTable(
  'user_to_conversions',
  {
    userId: text('user_id')
      .notNull()
      .references(() => user.id),
    conversionsId: integer('conversions_id')
      .notNull()
      .references(() => conversions.id)
  },
  (t) => ({
    pk: primaryKey({
      columns: [t.conversionsId, t.userId]
    })
  })
);

export const userToConversionsRelations = relations(userToConversions, ({ one }) => ({
  conversions: one(conversions, {
    fields: [userToConversions.conversionsId],
    references: [conversions.id]
  }),
  user: one(user, {
    fields: [userToConversions.userId],
    references: [user.id]
  })
}));

export const session = sqliteTable('user_session', {
  id: text('id').primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => user.id),
  activeExpires: blob('active_expires', {
    mode: 'bigint'
  }).notNull(),
  idleExpires: blob('idle_expires', {
    mode: 'bigint'
  }).notNull()
});

export const key = sqliteTable('user_key', {
  id: text('id').primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => user.id),
  hashedPassword: text('hashed_password')
});
