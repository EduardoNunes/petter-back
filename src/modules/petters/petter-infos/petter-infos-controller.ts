import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PetterInfosDTO } from './petter-info-dto';
import { PetterInfosService } from './petter-infos-service';
import { AuthGuard } from 'src/auth/auth-guard';

@UseGuards(AuthGuard)
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

  @Get()
  async findOne(@Query('petterId', ParseIntPipe) petterId: number) {
    if (!petterId) {
      throw new HttpException('PetterId is required', HttpStatus.BAD_REQUEST);
    }
    return this.petterInfosService.findOne(petterId);
  }

  @Patch('/:userId/:petterId/edit-profile-petter')
  async updateProfilePetter(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('petterId', ParseIntPipe) petterId: number,
    @Body() data: PetterInfosDTO,
  ) {
    return this.petterInfosService.updateProfilePetter(userId, petterId, data);
  }
}
