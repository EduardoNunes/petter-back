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

  async getTop15ProfileImages(dto: ShowImagesProfileDTO) {
    const page = dto.page || 1;
    const take = 15;
    const skip = (page - 1) * take;

    try {
      const totalImages = await this.prisma.petterImages.count({
        where: {
          petterId: Number(dto.petterId),
        },
      });

      const showImagesProfile = await this.prisma.petterImages.findMany({
        where: {
          petterId: Number(dto.petterId),
        },
        take: take,
        skip: skip,
        orderBy: {
          id: 'desc',
        },
      });
      
      const profileImageUrls = showImagesProfile.map((image) => {
        return `${image.id} ${image.url} ${image.description}`;
      });

      return {
        images: profileImageUrls,
        total: totalImages,
      };
    } catch (error) {
      throw new Error(`No more images. ${error.message}`);
    }
  }

  async getGalleryLikes(dto: ShowImagesProfileDTO) {
    try {
      const petterImageId = Number(dto.petterImageId);
  
      const getLikes = await this.prisma.like.findMany({
        where: {
          imageId: petterImageId,
          liked: true,
        },
      });
  
      const commentCount = await this.prisma.comment.count({
        where: {
          imageId: petterImageId,
        },
      });
  
      if (!getLikes) {
        throw new Error('Imagem não encontrada.');
      }
  
      return {
        likes: getLikes,
        commentCount: commentCount,
      };
    } catch (error) {
      throw new Error(`Erro ao buscar informações da imagem. ${error.message}`);
    }
  }
}
