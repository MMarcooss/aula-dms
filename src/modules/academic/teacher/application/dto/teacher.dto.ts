import type { Teacher } from "@academic/teacher/domain/models/teacher.entity";

export class TeacherDto {
  private constructor(
    public name: string,
    public email: string,
    public department: string,
    public birthDate: Date,
    public nationality: string,
    public phone: string,
    public maritalStatus: string,
  )
   {}

public static fromTeacher(teacher: Teacher | null): TeacherDto | null {
    if (!teacher) return null;
    return new TeacherDto(
        teacher.name,
        teacher.email,
        teacher.department,
        teacher.birthDate,
        teacher.nationality,
        teacher.phone,
        teacher.maritalStatus
    );
  }  
}