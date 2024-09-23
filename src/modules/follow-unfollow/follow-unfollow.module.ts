import { Module } from '@nestjs/common';
import { FollowUnfollowService } from './follow-unfollow.service';
import { FollowUnfollowController } from './follow-unfollow.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  providers: [FollowUnfollowService, PrismaService],
  controllers: [FollowUnfollowController],
})
export class FollowUnfollowModule {}
