import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { AuthDto } from './auth-DTO';
import { AuthService } from './auth-service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() data: AuthDto) {
    try {
      const {
        accessToken,
        expiresIn,
        id,
        name,
        email,
        profileImage,
        petterInfo,
        userInfo,
      } = await this.authService.login(data);
      return {
        accessToken,
        expiresIn,
        id,
        name,
        email,
        profileImage,
        petterInfo,
        userInfo,
      };
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

  @Get('user/:id')
  async getUser(@Param('id') id: number) {
    console.log("ATT")
    try {
      const user = await this.authService.getUserById(id);
      return user;
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
