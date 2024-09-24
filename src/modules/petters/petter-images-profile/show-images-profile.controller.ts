import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth-guard';
import { ShowImagesProfileDTO } from './show-images-profile-dto';
import { ShowImagesProfileService } from './show-images-profile.service';

@UseGuards(AuthGuard)
@Controller('show-images-profile')
export class ShowImagesProfileController {
  constructor(
    private readonly showImagesProfileService: ShowImagesProfileService,
  ) {}

  @Get('top-15-images')
  async getTop15ProfileImages(@Query() query: ShowImagesProfileDTO) {
    return await this.showImagesProfileService.getTop15ProfileImages(query);
  }

  @Get('petter-gallery-likes')
  async getGalleryLikes(@Query() query: ShowImagesProfileDTO) {
    return await this.showImagesProfileService.getGalleryLikes(query);
  }
}
