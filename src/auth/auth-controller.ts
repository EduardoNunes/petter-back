import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';

import { AuthDto } from './auth-DTO';
import { AuthService } from './auth-service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
  @Post('login')
  async login(@Body() data: AuthDto) {
    try {
      const { accessToken, expiresIn, petterInfo } =
        await this.authService.login(data);
      return { accessToken, expiresIn, petterInfo };
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
