import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersLoginModule } from './modules/users/users.login/users-login-module';
import { UsersRegisterCredentialsModule } from './modules/users/users.register-credentials/users-register-module';
import { PetterRegisterInfosModule } from './modules/petters/petter-register-infos/petter-register-infos-module';
import { UserRegisterInfosModule } from './modules/users/user-register-infos/user-register-infos-module';
import { PettersRegisterImageModule } from './modules/petters/petter-register-images/petter-register-images-module';
import { ShowCardTimelineModule } from './modules/timeline/show-card-timeline/show-card-timeline.module';
import { PetterImageTimelineModule } from './modules/timeline/post-petter-image-timeline/petter-image-timeline.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UsersRegisterCredentialsModule,
    UsersLoginModule,
    UserRegisterInfosModule,
    PetterRegisterInfosModule,
    PettersRegisterImageModule,
    ShowCardTimelineModule,
    PetterImageTimelineModule,
  ],
  providers: [],
  controllers: [],
})
export class AppModule {}
