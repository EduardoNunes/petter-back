import { Module } from '@nestjs/common';
import { UsersService } from './users-credentials-service';
import { UsersController } from './users-credentials-controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService],
})
export class UsersCredentialsModule {}
