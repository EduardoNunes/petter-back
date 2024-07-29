import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CommentPostTimelineController } from './comment-post-timeline.controller';
import { CommentPostTimelineService } from './comment-post-timeline.service';

@Module({
  controllers: [CommentPostTimelineController],
  providers: [CommentPostTimelineService, PrismaService],
  exports: [CommentPostTimelineService],
})
export class CommentPostTimelineModule {}
