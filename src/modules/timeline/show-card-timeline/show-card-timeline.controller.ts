import { Body, Controller, Get } from '@nestjs/common';
import { ShowCardTimelineService } from './show-card-timeline.service';
import { ShowCardtTimeLineDTO } from './show-card-timeline-dto';


@Controller('show-card-timeline')
export class ShowCardTimelineController {
  constructor(
    private readonly showCardTimelineService: ShowCardTimelineService,
  ) {}

  @Get('top-10-images')
  async getTop10PetterImages(@Body() data: ShowCardtTimeLineDTO) {
    return await this.showCardTimelineService.getTop10PetterImages(data);
  }
}
