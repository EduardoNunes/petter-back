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

  @Patch('/:userId/:petterId/description-bio')
  async updateDescriptionBio(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('petterId', ParseIntPipe) petterId: number,
    @Body('descriptionBio') descriptionBio: string,
  ) {
    return this.petterInfosService.updateDescriptionBio(userId, petterId, descriptionBio);
  }
}
