import { LoginDto } from "@auth/application/dto/login.dto";
import { AuthService } from "@auth/application/services/auth.service";
import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { Public } from "@shared/infra/decorators/public.decorator";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  @Public()
  @HttpCode(HttpStatus.OK)
  async login(@Body() body: LoginDto): Promise<{ accessToken: string }> {
    return this.authService.login(body);
  }
}