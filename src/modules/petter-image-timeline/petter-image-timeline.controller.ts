import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { PetterImageTimelineService } from './petter-image-timeline.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { PetterImageTimelineDTO } from './petter-image-timeline-dto';

@Controller('petter-image-timeline')
export class PetterImageTimelineController {
  constructor(
    private readonly petterImageTimelineService: PetterImageTimelineService,
  ) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async uploadImage(
    @UploadedFile() file: Express.Multer.File,
    @Body() data: PetterImageTimelineDTO,
  ) {
    data.image = file;
    return this.petterImageTimelineService.createPetterImageTimeline(
      data.petterId,
      data,
    );
  }
}
