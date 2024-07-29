import { Controller, Get, Query } from '@nestjs/common';
import { CommentPostTimelineService } from './comment-post-timeline.service';
import { CommentPostTimeLineDTO } from './comment-post-timeline-dto';

@Controller('comment-post-timeline')
export class CommentPostTimelineController {
  constructor(
    private readonly commentPostTimelineService: CommentPostTimelineService,
  ) {}

  @Get()
  async showCommentsTimeline(@Query() data: CommentPostTimeLineDTO) {
    return await this.commentPostTimelineService.showCommentsTimeline(data);
  }
}
