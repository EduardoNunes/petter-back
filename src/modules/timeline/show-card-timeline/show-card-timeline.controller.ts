import { Controller, Get } from '@nestjs/common';
import { ShowCardTimelineService } from './show-card-timeline.service';

@Controller('show-card-timeline')
export class ShowCardTimelineController {
  constructor(
    private readonly showCardTimelineService: ShowCardTimelineService,
  ) {}

  @Get('top-10-images')
  async getTop10PetterImages() {
    return await this.showCardTimelineService.getTop10PetterImages();
  }
}
