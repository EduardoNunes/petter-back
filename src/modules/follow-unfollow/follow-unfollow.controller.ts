import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth-guard';
import { FollowUnfollowService } from './follow-unfollow.service';

@UseGuards(AuthGuard)
@Controller('follow-unfollow')
export class FollowUnfollowController {
  constructor(private readonly followUnfollowService: FollowUnfollowService) {}

  @Get('follower')
  async getFollower(@Query('petterId') petterId: string) {
    const parsedPetterId = Number(petterId);
    const petters =
      await this.followUnfollowService.getFollower(parsedPetterId);
    return petters;
  }

  @Get('followed')
  async getFollowed(@Query('petterId') petterId: string) {
    const parsedPetterId = Number(petterId);
    const petters =
      await this.followUnfollowService.getFollowed(parsedPetterId);
    return petters;
  }

  @Get('follower-and-followed')
  async getFollowerAndFollowed(
    @Query('petterId') petterId: string,
    @Query('petterUserId') petterUserId: string,
  ) {
    const parsedPetterId = Number(petterId);
    const parsedPetterUserId = Number(petterUserId);
    
    if (isNaN(parsedPetterId) || isNaN(parsedPetterUserId)) {
      throw new HttpException(
        'Valid petterId ou petterUserId is required',
        HttpStatus.BAD_REQUEST,
      );
    }

    const follow = await this.followUnfollowService.getFollowerAndFollowed(
      parsedPetterId,
      parsedPetterUserId,
    );

    return follow;
  }

  @Post('follow')
  async follow(
    @Body('followerId') followerId: number,
    @Body('followedId') followedId: number,
  ) {
    if (!followerId || !followedId) {
      throw new HttpException(
        'Both followerId and followedId are required',
        HttpStatus.BAD_REQUEST,
      );
    }

    const result = await this.followUnfollowService.follow({
      followerId,
      followedId,
    });

    return result;
  }
}
