import { Body, Controller, Post } from '@nestjs/common';
import { PetterRegisterInfosDTO } from './petter.register.info.dto';
import { PetterRegisterInfosService } from './petter.register.infos.service';

@Controller('petter-register-infos')
export class PetterRegisterInfosController {
  constructor(
    private readonly petterRegisterInfosService: PetterRegisterInfosService,
  ) {}

  @Post()
  async create(@Body() data: PetterRegisterInfosDTO) {
    return this.petterRegisterInfosService.createPetterInfos(data);
  }
}
