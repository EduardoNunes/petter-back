import {
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
  Body,
  UseGuards,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
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
    return this.pettersRegisterImagesService.createPetterManyImages(
      data.petterId,
      data,
    );
  }

  @Post('petter-image-gallery')
  @UseInterceptors(FileInterceptor('imagesFile'))
  async uploadGalleryImage(
    @Body() data: PetterRegisterImagesDTO,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (file) {
      data.singleImage = file;
    } else {
      data.singleImage = undefined;
    }
    return this.pettersRegisterImagesService.postPetterImageGallery(data);
  }

  @Post('petter-image-timeline')
  @UseInterceptors(FileInterceptor('imagesFile'))
  async uploadTimelineImage(
    @Body() data: PetterRegisterImagesDTO,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (file) {
      data.singleImage = file;
    } else {
      data.singleImage = undefined;
    }
    return this.pettersRegisterImagesService.postPetterImageTimeline(
      data.petterId,
      data,
    );
  }
}
