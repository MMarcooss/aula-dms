import { TeacherDto } from "@academic/teacher/application/dto/teacher.dto";
import {
  TEACHER_REPOSITORY,
  type TeacherRepository,
} from "@academic/teacher/domain/repositories/teacher-repository.interface";
import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class ListTeachersService {
  constructor(
    @Inject(TEACHER_REPOSITORY)
    private readonly teacherRepository: TeacherRepository,
  ) {}

  async execute(): Promise<TeacherDto[]> {
    const response = await this.teacherRepository.findAll();
    return response.map((row) => TeacherDto.fromTeacher(row)!);
  }
}