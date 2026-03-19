import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { StudentsModule } from './modules/academic/students/students.module';
import { DatabaseModule } from './shared/infra/database/database.module';
import { TeacherModule } from './modules/academic/teacher/teacher.module';
import { UsersModule } from './modules/academic/users/users.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    UsersModule,
    AuthModule,
    StudentsModule,
    TeacherModule,
  ],
})
export class AppModule {}