import { Teacher } from "../models/teacher.entity";
import { ConflictException, Inject, Injectable } from "@nestjs/common";
import  { TEACHER_REPOSITORY, type TeacherRepository } from "./teacher-repository.interface";

export const TEACHER_REPOSITORY = Symbol("TEACHER_REPOSITORY");

export interface TeacherRepository {
  create(teacher: Teacher): Promise<void>;
  update(teacher: Teacher): Promise<void>;
  delete(id: string): Promise<void>;
  findAll(): Promise<Teacher[]>;
  findById(id: string): Promise<Teacher | null>;
  findByEmail(email: string): Promise<Teacher | null>;
}

