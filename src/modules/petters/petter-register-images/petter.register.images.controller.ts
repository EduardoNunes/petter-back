import { Body, Controller, Post } from '@nestjs/common';
import { PetterRegisterImagesDTO } from './petter.register.images.dto';
import { PettersRegisterImagesService } from './petter.register.images.service';

@Controller('petter-register-images')
export class PetterRegisterImagesController {
  constructor(
    private readonly petterRegisterImagesService: PettersRegisterImagesService,
  ) {}

  @Post()
  async create(@Body() data: PetterRegisterImagesDTO) {
    return this.petterRegisterImagesService.createPetterRegisterImage(data);
  }
}
