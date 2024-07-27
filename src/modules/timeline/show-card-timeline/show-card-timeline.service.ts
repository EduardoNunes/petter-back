import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import * as AWS from 'aws-sdk';

@Injectable()
export class ShowCardTimelineService {
  private s3: AWS.S3;

  constructor(private prisma: PrismaService) {
    this.s3 = new AWS.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION,
    });
  }

  async getTop10PetterImages() {
    try {
      const top10Images = await this.prisma.petterImagesTimeline.findMany({
        take: 10,
        orderBy: {
          id: 'desc',
        },
        include: {
          Like: {
            where: {
              liked: true,
            },
          },
        },
      });

      const imagesWithLikesCount = top10Images.map((image) => ({
        ...image,
        likesCount: image.Like.length,
      }));

      return imagesWithLikesCount;
    } catch (error) {
      throw new Error(
        `Você já viu todas as imagens, poste alguma ou volte mais tarde.: ${error.message}`,
      );
    }
  }
}
