import { Module } from '@nestjs/common';
import { PetterImageTimelineService } from './petter-image-timeline.service';
import { PetterImageTimelineController } from './petter-image-timeline.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  providers: [PetterImageTimelineService, PrismaService],
  controllers: [PetterImageTimelineController],
  exports: [PetterImageTimelineService],
})
export class PetterImageTimelineModule {}
