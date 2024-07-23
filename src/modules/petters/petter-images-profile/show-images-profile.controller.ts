import { Controller, Get, Query } from '@nestjs/common';
import { ShowImagesProfileService } from './show-images-profile.service';
import { ShowImagesProfileDTO } from './show-images-profile-dto';

@Controller('show-images-profile')
export class ShowImagesProfileController {
  constructor(
    private readonly showImagesProfileService: ShowImagesProfileService,
  ) {}

  @Get('top-20-images')
  async getTop10ProfileImages(@Query() query: ShowImagesProfileDTO) {
    return await this.showImagesProfileService.getTop20ProfileImages(query);
  }
}
