import { Module } from '@nestjs/common';
import { UsersService } from './users.register.service';
import { UsersController } from './users.register.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService],
})
export class UsersRegisterCredentialsModule {}
