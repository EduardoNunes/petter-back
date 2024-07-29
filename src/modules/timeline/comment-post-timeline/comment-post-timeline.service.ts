import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CommentPostTimeLineDTO } from './comment-post-timeline-dto';

@Injectable()
export class CommentPostTimelineService {
  constructor(private prisma: PrismaService) {}

  async showCommentsTimeline(data: CommentPostTimeLineDTO) {
    console.log('CHAMOU');
    try {
      const showComment = await this.prisma.comment.findMany({
        where: {
          userId: Number(data.userId),
          petterInfoId: Number(data.petterInfoId),
          imageId: Number(data.imageId) || undefined,
          timelineId: Number(data.timelineId) || undefined,
        },
        take: 10,
        orderBy: {
          id: 'desc',
        },
      });
      console.log('ACHOU', showComment);

      return showComment;
    } catch (error) {
      console.log('Não foi possivel carregar os comentários', error);
    }
  }
}
