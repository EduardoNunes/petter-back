import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth-guard';
import { SearchPetterService } from './search-petter.service';

@UseGuards(AuthGuard)
@Controller('search-petter')
export class SearchPetterController {
  constructor(private readonly searchPetterService: SearchPetterService) {}

  @Get()
  async getPettersByName(@Query('petterName') petterName: string) {
    if (!petterName) {
      throw new HttpException(
        'petter Name is required',
        HttpStatus.BAD_REQUEST,
      );
    }

    const petters = await this.searchPetterService.getPettersByName(petterName);

    return petters;
  }
}
