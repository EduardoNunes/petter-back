import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { UsersLoginModule } from './modules/users/users.login/users.login.module';
import { UsersRegisterCredentialsModule } from './modules/users/users.register-credentials/users.register.module';

import { PetterRegisterInfosModule } from './modules/petters/petter-register-infos/petter-register-infos.module';
import { UserRegisterInfosModule } from './modules/users/user-register-infos/user-register-infos.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UsersRegisterCredentialsModule,
    UsersLoginModule,
    UserRegisterInfosModule,
    PetterRegisterInfosModule,
  ],
})
export class AppModule {}
