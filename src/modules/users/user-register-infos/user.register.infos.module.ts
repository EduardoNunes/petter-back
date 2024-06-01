import { Module } from '@nestjs/common';
import { UserRegisterInfosController } from './user.register.infos.controller';
import { UserRegisterInfosService } from './user.register.infos.service';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [UserRegisterInfosController],
  providers: [UserRegisterInfosService, PrismaService],
  exports: [UserRegisterInfosService],
})
export class UserRegisterInfosModule {}
