import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class FollowUnfollowService {
  constructor(private prisma: PrismaService) {}

  async getFollower(petterId: number): Promise<any | undefined> {
    const followers = await this.prisma.follow.findMany({
      where: {
        followerId: petterId,
      },
    });
    return followers;
  }

  async getFollowed(petterId: number): Promise<any | undefined> {
    const followed = await this.prisma.follow.findMany({
      where: {
        followedId: petterId,
      },
    });
    return followed;
  }

  async getFollowerAndFollowed(
    petterId: number,
    petterUserId: number,
  ): Promise<any | undefined> {
    
    const [follower, followed, followerCount, followedCount] = await Promise.all([
      this.prisma.follow.findMany({
        where: {
          followerId: petterId,
          isFollowing: true,
        },
      }),
      
      this.prisma.follow.findMany({
        where: {
          followedId: petterId,
          isFollowing: true,
        },
      }),
  
      this.prisma.follow.count({
        where: {
          followerId: petterId,
          isFollowing: true,
        },
      }),
  
      this.prisma.follow.count({
        where: {
          followedId: petterId,
          isFollowing: true,
        },
      }),
    ]);
  
    // Verifica se petterUserId está seguindo petterId
    const isFollowed = followed.some(
      (item) => item.followerId === petterUserId && item.followedId === petterId,
    );
  
    // Verifica se petterId está seguindo petterUserId
    const isFollower = follower.some(
      (item) => item.followedId === petterUserId && item.followerId === petterId,
    );
  
    return {
      follower,
      followed,
      followerCount,
      followedCount,
      isFollower,
      isFollowed,
    };
  }
  

  async follow(data: { followerId: number; followedId: number }) {
    const { followerId, followedId } = data;

    try {
      const existingFollow = await this.prisma.follow.findUnique({
        where: {
          followerId_followedId: { followerId, followedId },
        },
      });

      if (existingFollow) {
        return await this.prisma.follow.update({
          where: { id: existingFollow.id },
          data: { isFollowing: !existingFollow.isFollowing },
        });
      }

      return await this.prisma.follow.create({
        data: {
          followerId,
          followedId,
        },
      });
    } catch (error) {
      throw new HttpException(
        'Failed to follow/unfollow',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
