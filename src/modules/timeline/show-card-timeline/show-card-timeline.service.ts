import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import * as AWS from 'aws-sdk';
import { ShowCardtTimeLineDTO } from './show-card-timeline-dto';

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

  async getTop10PetterImages(data: ShowCardtTimeLineDTO) {
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
          Comment: {
            where: {
              timelineId: data.timelineId,
              imageId: data.imageId,
            },
          },
        },
      });

      const top10ImagesWithCounts = top10Images.map((image) => ({
        ...image,
        likesCount: image.Like.length,
        commentsCount: image.Comment.length,
      }));

      return { top10ImagesWithCounts };
    } catch (error) {
      throw new Error(
        `Você já viu todas as imagens, poste alguma ou volte mais tarde.: ${error.message}`,
      );
    }
  }
}
