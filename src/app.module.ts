import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.register-credentials/users.register.module';
import { UsersLoginModule } from './modules/users/users.login/users.login.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    UsersLoginModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
