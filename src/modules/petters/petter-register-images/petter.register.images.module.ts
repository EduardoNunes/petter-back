import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { PettersRegisterImagesController } from './petter.register.images.controller';
import { PettersRegisterImagesService } from './petter.register.images.service';

@Module({
    controllers: [PettersRegisterImagesController],
    providers: [PettersRegisterImagesService, PrismaService],
    exports: [PettersRegisterImagesService],
  })
export class PettersRegisterImageModule {}


export type PetterRegisterImagesDTO = {
  petterId: string;
  images: Express.Multer.File[]; 
  description?: string;
};
