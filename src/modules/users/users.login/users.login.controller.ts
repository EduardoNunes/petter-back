import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { UsersLoginService } from './users.login.service';
import { UsersLoginDTO } from './users.login.dto';

@Controller('auth')
export class UsersLoginController {
  constructor(private readonly usersLoginService: UsersLoginService) {}

  @Post('login')
  async login(@Body() data: UsersLoginDTO) {
    try {
      const { accessToken } = await this.usersLoginService.login(data);
      return { accessToken };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Erro interno do servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
