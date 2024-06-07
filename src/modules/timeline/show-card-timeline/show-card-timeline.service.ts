import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import * as AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';
import * as dotenv from 'dotenv';

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
      const top10Images = await this.prisma.petterImages.findMany({
        take: 10,
        orderBy: {
          id: 'desc',
        },
      });

      const publicImageUrls = top10Images.map((image) => {
        return `${image.url}`;
      });

      console.log('TOP 10 Imagens1:', publicImageUrls);
      return publicImageUrls;
    } catch (error) {
      throw new Error(
        `Você já viu todas as imagens, poste alguma ou volte mais tarde.: ${error.message}`,
      );
    }
  }
}
