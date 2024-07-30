import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CommentPostTimeLineDTO } from './comment-post-timeline-dto';

@Injectable()
export class CommentPostTimelineService {
  constructor(private prisma: PrismaService) {}

  async showCommentsTimeline(data: CommentPostTimeLineDTO) {
    try {
      const showComment = await this.prisma.comment.findMany({
        where: {
          imageId: Number(data.imageId) || undefined,
          timelineId: Number(data.timelineId) || undefined,
        },
        take: 10,
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

      console.log('Comentado com sucesso', response);
    } catch (error) {
      console.log('Não foi possivel salvar o comentário', error);
    }
  }
}
