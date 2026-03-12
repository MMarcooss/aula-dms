import { CreateTeacherService } from "@academic/teacher/application/services/create-student.service";
import { EditTeacherService } from "@academic/teacher/application/services/edit-teacher.service";
import { ListTeachersService } from "@academic/teacher/application/services/list-teacher.service";
import { RemoveTeacherService } from "@academic/teacher/application/services/remove-teacher.service";
import { ReturnTeacherService } from "@academic/teacher/application/services/return-teacher.service";
import { TEACHER_REPOSITORY } from "@academic/teacher/domain/repositories/teacher-repository.interface";
import { TeachersController } from "@academic/teacher/infra/controllers/teacher.controller";
import { DrizzleTeacherRepository } from "@academic/teacher/infra/repositories/drizzle-teacher.repository";
import { DatabaseModule } from "@infra/database/database.module";
import { Module } from "@nestjs/common";

@Module({
  imports: [DatabaseModule],
  controllers: [TeachersController],
  providers: [
    CreateTeacherService,
    EditTeacherService,
    ListTeachersService,
    ReturnTeacherService,
    RemoveTeacherService,
    DrizzleTeacherRepository,
    {
      provide: TEACHER_REPOSITORY,
      useExisting: DrizzleTeacherRepository,
    },
  ],
})
export class TeacherModule {}