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

    const like = await this.prisma.like.create({
      data: {
        userId: data.userId,
        imageId: data.imageId || null,
        petterInfoId: data.petterInfoId,
        timelineId: data.timelineId || null,
      },
    });

    return like;
  }
}
