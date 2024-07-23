import { Module } from '@nestjs/common';
import { ShowImagesProfileService } from './show-images-profile.service';
import { ShowImagesProfileController } from './show-images-profile.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  providers: [ShowImagesProfileService, PrismaService],
  controllers: [ShowImagesProfileController],
})
export class ShowImagesProfileModule {}
