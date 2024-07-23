import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import * as AWS from 'aws-sdk';
import { ShowImagesProfileDTO } from './show-images-profile-dto';

@Injectable()
export class ShowImagesProfileService {
  private s3: AWS.S3;

  constructor(private prisma: PrismaService) {
    this.s3 = new AWS.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION,
    });
  }

  async getTop20ProfileImages(dto: ShowImagesProfileDTO) {
    try {
      const ShowImagesProfileDTO = await this.prisma.petterImages.findMany({
        where: {
          petterId: dto.petterId,
        },
        take: 20,
        orderBy: {
          id: 'desc',
        },
      });

      const profileImageUrls = ShowImagesProfileDTO.map((image) => {
        return `${image.url}`;
      });

      return profileImageUrls;
    } catch (error) {
      throw new Error(`No more images. ${error.message}`);
    }
  }
}
