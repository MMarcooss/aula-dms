import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/modules/**/infra/database/schemas/*.ts",
  out: "./src/shared/infra/database/drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgres://postgres:postgres@localhost:5432/school_db",
  },
});