import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Query,
} from '@nestjs/common';
import { UsersDTO } from './users-credentials-dto';
import { UsersService } from './users-credentials-service';

@Controller('users-credentials')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() data: UsersDTO) {
    return this.usersService.createUserCredentials(data);
  }

  @Get()
  async findOne(@Query('email') email: string) {
    if (!email) {
      throw new HttpException('Email is required', HttpStatus.BAD_REQUEST);
    }
    return this.usersService.findOne(email);
  }
}
