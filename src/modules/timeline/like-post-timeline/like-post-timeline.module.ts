import { Module } from '@nestjs/common';
import { LikePostTimelineController } from './like-post-timeline.controller';
import { PrismaService } from 'src/database/PrismaService';
import { LikePostTimelineService } from './like-post-timeline.service';

@Module({
  controllers: [LikePostTimelineController],
  providers: [LikePostTimelineService, PrismaService],
  exports: [LikePostTimelineService],
})
export class LikePostTimelineModule {}
