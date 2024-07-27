import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { LikePostTimeLineDTO } from './like-post-timeline-dto';

@Injectable()
export class LikePostTimelineService {
  constructor(private prisma: PrismaService) {}

  async createLikePostTimeline(data: LikePostTimeLineDTO) {
    const userExist = await this.prisma.users.findFirst({
      where: {
        id: data.userId,
      },
    });

    if (!userExist) {
      throw new HttpException(
        'Somente usuários cadastrados no Petter podem curtir postagens.',
        HttpStatus.BAD_REQUEST,
      );
    }

    const petterExist = await this.prisma.petterInfo.findFirst({
      where: {
        id: data.petterInfoId,
      },
    });

    if (!petterExist) {
      throw new HttpException(
        'Crie o perfil de Petter para curtir outros Petters.',
        HttpStatus.BAD_REQUEST,
      );
    }

    let postExist;
    if (data.imageId) {
      postExist = await this.prisma.petterImagesTimeline.findFirst({
        where: {
          id: data.imageId,
        },
      });
    } else if (data.timelineId) {
      postExist = await this.prisma.petterImagesTimeline.findFirst({
        where: {
          id: data.timelineId,
        },
      });
    }

    if (!postExist) {
      throw new HttpException(
        'Postagem não encontrada, parece que ela foi excluída agora pouco.',
        HttpStatus.BAD_REQUEST,
      );
    }

    const currentLikeExist = await this.prisma.like.findFirst({
      where: {
        userId: data.userId,
        petterInfoId: data.petterInfoId,
        imageId: data.imageId || undefined,
        timelineId: data.timelineId || undefined,
      },
    });

    let like;
    if (currentLikeExist) {
      if (data.imageId) {
        like = await this.prisma.like.update({
          where: {
            userId_petterInfoId_imageId: {
              userId: data.userId,
              petterInfoId: data.petterInfoId,
              imageId: data.imageId,
            },
          },
          data: {
            liked: !currentLikeExist.liked,
          },
        });
      } else if (data.timelineId) {
        like = await this.prisma.like.update({
          where: {
            userId_petterInfoId_timelineId: {
              userId: data.userId,
              petterInfoId: data.petterInfoId,
              timelineId: data.timelineId,
            },
          },
          data: {
            liked: !currentLikeExist.liked,
          },
        });
      } else {
        throw new Error('Nem imageId nem timelineId foram fornecidos.');
      }
    } else {
      like = await this.prisma.like.create({
        data: {
          userId: data.userId,
          petterInfoId: data.petterInfoId,
          imageId: data.imageId || null,
          timelineId: data.timelineId || null,
          liked: true,
        },
      });
    }

    const likeCount = await this.prisma.like.count({
      where: {
        imageId: data.imageId || null,
        timelineId: data.timelineId || null,
        liked: true,
      },
    });

    return { like, likeCount };
  }
}
