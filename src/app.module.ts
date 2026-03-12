import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { StudentsModule } from './modules/academic/students/students.module';
import { DatabaseModule } from './shared/infra/database/database.module';
import { TeacherModule } from './modules/academic/teacher/teacher.module';

@Module({
  imports: [ConfigModule.forRoot(), StudentsModule, DatabaseModule, TeacherModule],
})
export class AppModule {}
