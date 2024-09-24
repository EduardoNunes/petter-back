import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth-module';
import { PrismaService } from './database/PrismaService';
import { ShowImagesProfileModule } from './modules/petters/petter-images-profile/show-images-profile.module';
import { PetterInfosModule } from './modules/petters/petter-infos/petter-infos-module';
import { PetterProfilePageModule } from './modules/petters/petter-profile-page/petter-profile-page.module';
import { PettersRegisterImageModule } from './modules/petters/petter-register-images/petter-register-images-module';
import { CommentPostTimelineModule } from './modules/timeline/comment-post-timeline/comment-post-timeline.module';
import { LikePostTimelineModule } from './modules/timeline/like-post-timeline/like-post-timeline.module';
import { PetterImageTimelineModule } from './modules/timeline/post-petter-image-timeline/petter-image-timeline.module';
import { ShowCardTimelineModule } from './modules/timeline/show-card-timeline/show-card-timeline.module';
import { UserInfosModule } from './modules/users/user-infos/user-infos-module';
import { UsersCredentialsModule } from './modules/users/users-credentials/users-credentials-module';
import { SearchPetterModule } from './modules/search/search-petter/search-petter.module';
import { FollowUnfollowModule } from './modules/follow-unfollow/follow-unfollow.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UsersCredentialsModule,
    UserInfosModule,
    PetterInfosModule,
    PettersRegisterImageModule,
    ShowCardTimelineModule,
    PetterImageTimelineModule,
    ShowImagesProfileModule,
    LikePostTimelineModule,
    CommentPostTimelineModule,
    AuthModule,
    PetterProfilePageModule,
    SearchPetterModule,
    FollowUnfollowModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
