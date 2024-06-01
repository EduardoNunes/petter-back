import { Body, Controller, Post } from '@nestjs/common';
import { UserRegisterInfosDTO } from './user.register.info.dto';
import { UserRegisterInfosService } from './user.register.infos.service';

@Controller('user-register-infos')
export class UserRegisterInfosController {
  constructor(
    private readonly userRegisterInfosService: UserRegisterInfosService,
  ) {}

  @Post()
  async create(@Body() data: UserRegisterInfosDTO) {
    return this.userRegisterInfosService.createUserInfos(data);
  }
}
