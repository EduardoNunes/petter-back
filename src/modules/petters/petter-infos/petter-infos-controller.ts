import {
  Body,
  Controller,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PetterInfosDTO } from './petter-info-dto';
import { PetterInfosService } from './petter-infos-service';

@Controller('petter-infos')
export class PetterInfosController {
  constructor(private readonly petterInfosService: PetterInfosService) {}

  @Post()
  @UseInterceptors(FileInterceptor('profileImageFile'))
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body() data: PetterInfosDTO,
  ) {
    if (file) {
      data.profileImageFile = file;
    }
    return this.petterInfosService.createPetterInfos(data);
  }

  @Patch('/:id/description-bio')
  async updateDescriptionBio(
    @Param('id', ParseIntPipe) id: number,
    @Body('descriptionBio') descriptionBio: string,
  ) {
    return this.petterInfosService.updateDescriptionBio(id, descriptionBio);
  }
}
