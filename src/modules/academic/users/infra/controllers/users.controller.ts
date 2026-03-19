import { CreateUserDto } from "@academic/users/application/dto/create-user.dto";
import { UserService } from "@academic/users/application/services/user.service";
import { Public } from "@shared/infra/decorators/public.decorator";
import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";

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