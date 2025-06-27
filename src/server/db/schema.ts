// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import { index, sqliteTableCreator } from "drizzle-orm/sqlite-core";
import { d } from "node_modules/drizzle-kit/index-BAUrj6Ib.mjs";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = sqliteTableCreator(
  (name) => `${name}`,
);

export const products = createTable(
  "products",
  (d) => ({
    id: d.integer({ mode: "number" }).primaryKey({ autoIncrement: true }),
    product_name: d.text({ length: 256 }).notNull(),
    image: d.text().notNull(),
    kind: d.text({ length: 1024}).notNull(),
    description: d.text().notNull(),
    materials: d.text().notNull(),
    enclosure_dimensions: d.text().notNull(),
    charge_protocol: d.text().notNull(),
    input_voltage: d.text().notNull(),
    protection: d.text().notNull(),
    createdAt: d
      .integer({ mode: "timestamp" })
      .default(sql`(unixepoch())`)
      .notNull(),
    updatedAt: d.integer({ mode: "timestamp" }).$onUpdate(() => new Date()),
  }),
  (t) => [index("name_idx").on(t.product_name)],
);

export const emails = createTable(
  "Emails",
  (d) => ({
    id:  d.integer({mode:"number"}).primaryKey({autoIncrement: true}),
    email: d.text().notNull().unique()
  }),
);