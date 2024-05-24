import { Module } from '@nestjs/common';
import { UsersLoginService } from './users.login.service';
import { UsersLoginController } from './users.login.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [UsersLoginController],
  providers: [UsersLoginService, PrismaService],
})
export class UsersLoginModule {}
