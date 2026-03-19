import { UserService } from "@academic/users/application/services/user.service";
import { USER_REPOSITORY } from "@academic/users/domain/repositories/user-repository.interface";
import { UsersController } from "@academic/users/infra/controllers/users.controller";
import { DrizzleUserRepository } from "@academic/users/infra/repositories/drizzle-user.repository";
import { DatabaseModule } from "@infra/database/database.module";
import { Module } from "@nestjs/common";

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [
    UserService,
    DrizzleUserRepository,
    {
      provide: USER_REPOSITORY,
      useExisting: DrizzleUserRepository,
    },
  ],
  exports: [UserService],
})
export class UsersModule {}