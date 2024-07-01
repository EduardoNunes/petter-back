import { Module } from '@nestjs/common';
import { PetterImageTimelineService } from './petter-image-timeline.service';
import { PetterImageTimelineController } from './petter-image-timeline.controller';

@Module({
  providers: [PetterImageTimelineService],
  controllers: [PetterImageTimelineController]
})
export class PetterImageTimelineModule {}
