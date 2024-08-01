import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/database/PrismaService';
import { AuthDto } from './auth-DTO';

@Injectable()
export class AuthService {
  private jwtExpirationTimeInSeconds: number;

  constructor(
    private prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {
    this.jwtExpirationTimeInSeconds = +this.configService.get<number>(
      'JWT_EXPIRATION_TIME',
    );
  }

  async login(data: AuthDto) {
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

    const petterInfo = await this.prisma.petterInfo.findFirst({
      where: { userId: user.id },
    });

    const payload = {
      id: user.id,
      name: user.name,
      sub: user.email,
      profileImage: user.profileImage,
    };

    const accessToken = this.jwtService.sign(payload);

    return {
      accessToken,
      expiresIn: this.jwtExpirationTimeInSeconds,
      petterInfo,
    };
  }
}
