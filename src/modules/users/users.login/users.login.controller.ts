import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { UsersLoginService } from './users.login.service';
import { UsersLoginDTO } from './users.login.dto';

@Controller('users-login')
export class UsersLoginController {
  constructor(private readonly usersLoginService: UsersLoginService) {}

  @Post()
  async create(@Body() data: UsersLoginDTO) {
    try {
      const token = await this.usersLoginService.login(data);
      return { token };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.UNAUTHORIZED);
    }
  }
}
