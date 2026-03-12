import type { TeacherDto } from "@academic/teacher/application/dto/teacher.dto";
import {
  TEACHER_REPOSITORY,
  type TeacherRepository,
} from "@academic/teacher/domain/repositories/teacher-repository.interface";
import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from "@nestjs/common";

@Injectable()
export class EditTeacherService {
  constructor(
    @Inject(TEACHER_REPOSITORY)
    private readonly teacherRepository: TeacherRepository,
  ) {}

  async execute(id: string, dto: TeacherDto): Promise<void> {
    const teacher = await this.teacherRepository.findById(id);

    if (!teacher) {
      throw new NotFoundException("Teacher not found");
    }

    if (dto.email && dto.email !== teacher.email) {
      const existing = await this.teacherRepository.findByEmail(dto.email);

      if (existing) {
        throw new ConflictException("Email already registered");
      }
    }

    teacher
      .withName(dto.name)
      .withEmail(dto.email)
      .withDepartment(dto.department)
      .withBirthDate(dto.birthDate)
      .withNationality(dto.nationality)
      .withPhone(dto.phone)
      .withMaritalStatus(dto.maritalStatus);

    await this.teacherRepository.update(teacher);
  }
}