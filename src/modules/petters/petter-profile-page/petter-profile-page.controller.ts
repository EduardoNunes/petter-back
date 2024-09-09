import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { PetterProfilePageService } from './petter-profile-page.service';
import { AuthGuard } from 'src/auth/auth-guard';

@UseGuards(AuthGuard)
@Controller('petter-profile-page')
export class PetterProfilePageController {
  constructor(
    private readonly petterProfilePageService: PetterProfilePageService,
  ) {}

  @Get()
  async findOne(@Query('petterId', ParseIntPipe) petterId: number) {

    if (!petterId) {
      throw new HttpException('petterId is required', HttpStatus.BAD_REQUEST);
    }

    const petter = await this.petterProfilePageService.findOne(petterId);

    if (!petter) {
      throw new HttpException('Petter not found', HttpStatus.NOT_FOUND);
    }

    return petter;
  }
}
