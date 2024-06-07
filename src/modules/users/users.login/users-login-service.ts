import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { PrismaService } from 'src/database/PrismaService';
import { jwtConstants } from 'src/utils/jwt-config';
import { UsersLoginDTO } from './users-login-dto';

@Injectable()
export class UsersLoginService {
  constructor(private prisma: PrismaService) {}

  async login(data: UsersLoginDTO) {
    const user = await this.prisma.users.findFirst({
      where: { email: data.email },
    });

    if (!user) {
      throw new HttpException(
        'Email ou senha inválidos',
        HttpStatus.BAD_REQUEST,
      );
    }

    const isPasswordValid = await bcrypt.compare(data.password, user.password);

    if (!isPasswordValid) {
      throw new HttpException(
        'Email ou senha inválidos',
        HttpStatus.UNAUTHORIZED,
      );
    }

    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
      profileImage: user.profileImage,
    };

    const accessToken = jwt.sign(payload, jwtConstants.secret, {
      expiresIn: jwtConstants.expiresIn,
    });
    console.log("USER ID", user.id)
    return { accessToken, userId: user.id };
  }
}
