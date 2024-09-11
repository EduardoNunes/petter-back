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

  async getImagesTimeline(page: number, limit: number) {
    try {
      const skip = (page - 1) * limit;

      const images = await this.prisma.petterImagesTimeline.findMany({
        skip,
        take: limit,
        orderBy: {
          id: 'desc',
        },
        include: {
          Like: {
            where: {
              liked: true,
            },
          },
          petterInfo: true,
          Comment: true,
        },
      });

      const imagesWithCounts = images.map((image) => ({
        ...image,
        likesCount: image.Like.length,
        commentsCount: image.Comment.length,
      }));

      return { imagesWithCounts };
    } catch (error) {
      throw new Error(
        `Erro ao buscar imagens: ${error.message}`,
      );
    }
  }
}
