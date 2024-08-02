import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { LikePostTimelineService } from './like-post-timeline.service';
import { LikePostTimeLineDTO } from './like-post-timeline-dto';
import { AuthGuard } from 'src/auth/auth-guard';

@UseGuards(AuthGuard)
@Controller('like-post-timeline')
export class LikePostTimelineController {
  constructor(
    private readonly likePostTimelineService: LikePostTimelineService,
  ) {}

  @Post()
  async create(@Body() data: LikePostTimeLineDTO) {
    return this.likePostTimelineService.createLikePostTimeline(data);
  }
}
