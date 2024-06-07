import { Module } from '@nestjs/common';
import { ShowCardTimelineService } from './show-card-timeline.service';
import { ShowCardTimelineController } from './show-card-timeline.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  providers: [ShowCardTimelineService, PrismaService],
  controllers: [ShowCardTimelineController],

})
export class ShowCardTimelineModule {}
