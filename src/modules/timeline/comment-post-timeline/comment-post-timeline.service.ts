import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CommentPostTimeLineDTO } from './comment-post-timeline-dto';

@Injectable()
export class CommentPostTimelineService {
  constructor(private prisma: PrismaService) {}

  async showCommentsTimeline(data: CommentPostTimeLineDTO) {
    const page = data.page || 1;
    const take = 15;
    const skip = (page - 1) * take;

    try {
      const showComment = await this.prisma.comment.findMany({
        where: {
          imageId: Number(data.imageId) || undefined,
          timelineId: Number(data.timelineId) || undefined,
        },
        take: take,
        skip: skip,
        orderBy: {
          id: 'desc',
        },
        include: {
          petterInfo: true,
        },
      });

      return showComment;
    } catch (error) {
      console.log('Não foi possivel carregar os comentários', error);
    }
  }

  async createCommentPostTimeline(data: CommentPostTimeLineDTO) {
    try {
      const response = await this.prisma.comment.create({
        data: {
          userId: Number(data.userId),
          petterInfoId: Number(data.petterId),
          imageId: Number(data.imageId) || null,
          timelineId: Number(data.timelineId) || null,
          commented: data.commented,
        },
      });
      console.log("DATA", data)
      const commentsCount = await this.prisma.comment.count({
        where: {
          imageId: data.imageId || null,
          timelineId: data.timelineId || null,
        },
      });

      console.log('Comentado com sucesso', response);
      return { response, commentsCount };
    } catch (error) {
      console.log('Não foi possivel salvar o comentário', error);
    }
  }
}
