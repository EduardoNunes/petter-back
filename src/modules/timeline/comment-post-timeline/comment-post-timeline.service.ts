import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CommentPostTimeLineDTO } from './comment-post-timeline-dto';

@Injectable()
export class CommentPostTimelineService {
  constructor(private prisma: PrismaService) {}

  async showCommentsTimeline(data: CommentPostTimeLineDTO) {
    console.log('CHAMOU')
/*     try {
      const showComment = await this.prisma.comment.findFirst({
        where: {
          userId: data.userId,
          petterInfoId: data.petterInfoId,
          imageId: data.imageId || undefined,
          timelineId: data.timelineId || undefined,
        },
      });
      console.log('ACHOU', showComment);
    } catch (error) {
      console.log('Não foi possivel carregar os comentários', error);
    } */
  }
}
