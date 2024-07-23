import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PetterRegisterInfosDTO } from './petter-register-info-dto';
import { PetterRegisterInfosService } from './petter-register-infos-service';

@Controller('petter-register-infos')
export class PetterRegisterInfosController {
  constructor(
    private readonly petterRegisterInfosService: PetterRegisterInfosService,
  ) {}

  @Post()
  @UseInterceptors(FileInterceptor('profileImageFile'))
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body() data: PetterRegisterInfosDTO,
  ) {
    if (file) {
      data.profileImageFile = file;
    }
    return this.petterRegisterInfosService.createPetterInfos(data);
  }
}
