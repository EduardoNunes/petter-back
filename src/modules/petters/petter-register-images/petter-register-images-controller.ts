import {
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
  Body,
  UseGuards,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { PettersRegisterImagesService } from './petter-register-images-service';
import { PetterRegisterImagesDTO } from './petter-register-images-dto';
import { AuthGuard } from 'src/auth/auth-guard';

@UseGuards(AuthGuard)
@Controller('petter-register-images')
export class PettersRegisterImagesController {
  constructor(
    private readonly pettersRegisterImagesService: PettersRegisterImagesService,
  ) {}

  @Post()
  @UseInterceptors(FilesInterceptor('images'))
  async uploadImage(
    @UploadedFiles() files: Express.Multer.File[],
    @Body() data: PetterRegisterImagesDTO,
  ) {
    data.images = files;
    return this.pettersRegisterImagesService.createPetterRegisterImage(
      data.petterId,
      data,
    );
  }
}
