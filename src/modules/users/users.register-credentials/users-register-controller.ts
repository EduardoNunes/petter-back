import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users-register-service';
import { UsersDTO } from './users-register-dto';

@Controller('users-register-credentials')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() data: UsersDTO) {
    return this.usersService.createUserCredentials(data);
  }
}
