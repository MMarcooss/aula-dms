
import { Injectable, type OnModuleDestroy } from "@nestjs/common";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as studentSchema from "@academic/students/infra/database/schemas/student.schema";
import * as teacherSchema from "@academic/teacher/infra/database/schemas/teacher.schema";
import * as userSchema from "@academic/users/infra/database/schemas/user.schema";

const schema = { ...studentSchema, ...teacherSchema, ...userSchema };

@Injectable()
export class DrizzleService implements OnModuleDestroy {
  private readonly pool: Pool;
  public readonly db;

  constructor() {
    this.pool = new Pool({
      connectionString: process.env.DATABASE_URL,
    });

    this.db = drizzle(this.pool, { schema });
  }

  async onModuleDestroy() {
    await this.pool.end();
  }
}