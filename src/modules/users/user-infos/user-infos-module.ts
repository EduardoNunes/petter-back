import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { UserInfosController } from './user-infos-controller';
import { UserInfosService } from './user-infos-service';

@Module({
  controllers: [UserInfosController],
  providers: [UserInfosService, PrismaService],
  exports: [UserInfosService],
})
export class UserInfosModule {}
