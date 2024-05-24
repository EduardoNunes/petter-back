import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { PrismaService } from 'src/database/PrismaService';
import { UsersLoginDTO } from './users.login.dto';
import { jwtConstants } from 'src/utils/jwt-config';

@Injectable()
export class UsersLoginService {
  constructor(private prisma: PrismaService) {}

  async login(data: UsersLoginDTO) {
    const user = await this.prisma.users.findFirst({
      where: {
        email: data.email,
      },
    });

    if (!user) {
      throw new NotFoundException('Email ou senha inválidos');
    }

    const isPasswordValid = await bcrypt.compare(data.password, user.password);

    if (!isPasswordValid) {
      throw new HttpException(
        'Email ou senha inválidos.',
        HttpStatus.UNAUTHORIZED,
      );
    }

    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
        password: user.password,
        profileImage: user.profileImage,
      },
      jwtConstants.secret,
      {
        expiresIn: jwtConstants.expiresIn,
      },
    );

    console.log(token);
  }
}
