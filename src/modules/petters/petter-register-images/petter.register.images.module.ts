import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { PetterRegisterImagesController } from './petter.register.images.controller';
import { PettersRegisterImagesService } from './petter.register.images.service';

@Module({
    controllers: [PetterRegisterImagesController],
    providers: [PettersRegisterImagesService, PrismaService],
    exports: [PettersRegisterImagesService],
  })
export class PettersRegisterImageModule {}
