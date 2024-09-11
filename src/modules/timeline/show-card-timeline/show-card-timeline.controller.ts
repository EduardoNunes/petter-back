import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ShowCardTimelineService } from './show-card-timeline.service';
import { AuthGuard } from 'src/auth/auth-guard';

@UseGuards(AuthGuard)
@Controller('show-card-timeline')
export class ShowCardTimelineController {
  constructor(
    private readonly showCardTimelineService: ShowCardTimelineService,
  ) {}

  @Get('images')
  async getImages(
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '10',
  ) {
    const pageNumber = parseInt(page, 10);
    const pageSize = parseInt(limit, 10);

    return await this.showCardTimelineService.getImagesTimeline(pageNumber, pageSize);
  }
}
