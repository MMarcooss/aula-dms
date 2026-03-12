import { TeacherDto } from "@academic/teacher/application/dto/teacher.dto";
import { CreateTeacherService } from "@academic/teacher/application/services/create-teacher.service";
import { EditTeacherService } from "@academic/teacher/application/services/edit-teacher.service";
import { ListTeachersService } from "@academic/teacher/application/services/list-teachers.service";
import { RemoveTeacherService } from "@academic/teacher/application/services/remove-teacher.service";
import { ReturnTeacherService } from "@academic/teacher/application/services/return-teacher.service";
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";

@Controller("teachers")
export class TeachersController {
  constructor(
    private readonly createTeacherService: CreateTeacherService,
    private readonly editTeacherService: EditTeacherService,
    private readonly listTeacherService: ListTeachersService,
    private readonly returnTeacherService: ReturnTeacherService,
    private readonly removeTeacherService: RemoveTeacherService,
  ) {}

  @Get()
  async findAll() {
    return this.listTeacherService.execute();
  }

  @Get(":id")
  async findById(@Param("id") id: string) {
    return this.returnTeacherService.executeById(id);
  }

  @Post()
  async create(@Body() body: TeacherDto) {
    return this.createTeacherService.execute(body);
  }

  @Put(":id")
  async update(@Param("id") id: string, @Body() body: TeacherDto) {
    return this.editTeacherService.execute(id, body);
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    return this.removeTeacherService.execute(id);
  }
}