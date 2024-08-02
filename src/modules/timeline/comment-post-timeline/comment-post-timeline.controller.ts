import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { CommentPostTimelineService } from './comment-post-timeline.service';
import { CommentPostTimeLineDTO } from './comment-post-timeline-dto';
import { AuthGuard } from 'src/auth/auth-guard';

@UseGuards(AuthGuard)
@Controller('comment-post-timeline')
export class CommentPostTimelineController {
  constructor(
    private readonly commentPostTimelineService: CommentPostTimelineService,
  ) {}

  @Get()
  async showCommentsTimeline(@Query() data: CommentPostTimeLineDTO) {
    return await this.commentPostTimelineService.showCommentsTimeline(data);
  }

  @Post()
  async create(@Body() data: CommentPostTimeLineDTO) {
    return this.commentPostTimelineService.createCommentPostTimeline(data);
  }
}
