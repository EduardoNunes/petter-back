import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { FollowUnfollowController } from './follow-unfollow.controller';
import { FollowUnfollowService } from './follow-unfollow.service';

@Module({
  providers: [FollowUnfollowService, PrismaService],
  controllers: [FollowUnfollowController],
})
export class FollowUnfollowModule {}
