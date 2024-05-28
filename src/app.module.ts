import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserRegisterInfosModule } from './modules/users/user-register-infos/user-register-infos.module';
import { UsersLoginModule } from './modules/users/users.login/users.login.module';
import { UsersRegisterCredentialsModule } from './modules/users/users.register-credentials/users.register.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UsersRegisterCredentialsModule,
    UsersLoginModule,
    UserRegisterInfosModule,
  ],
})
export class AppModule {}
