import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const teachersSchema = pgTable("teachers", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  department: text("department").notNull(),
  birthDate: timestamp("birth_date", { withTimezone: true }).notNull(),
  nationality: varchar("nationality", { length: 100 }).notNull(),
  phone: varchar("phone", { length: 20 }).notNull(),
  maritalStatus: varchar("marital_status", { length: 20 }).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull(),
});