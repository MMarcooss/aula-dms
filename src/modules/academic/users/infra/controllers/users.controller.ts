import { CreateUserDto } from "../../application/dto/create-user.dto";
import { UserService } from "../../application/services/user.service";
import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { Public } from "../../../../../shared/infra/decorators/public.decorator";

@Controller("users")
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @Public()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() body: CreateUserDto): Promise<void> {
    return this.userService.create(body);
  }
}