import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { PetterProfilePageController } from './petter-profile-page.controller';
import { PetterProfilePageService } from './petter-profile-page.service';

@Module({
  controllers: [PetterProfilePageController],
  providers: [PetterProfilePageService, PrismaService],
})
export class PetterProfilePageModule {}
