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
      include: {
        userInfo: true,
        PetterInfo: true,
      },
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
      sub: user.email,
      profileImage: user.profileImage,
    };

    const accessToken = this.jwtService.sign(payload);

    return {
      accessToken,
      expiresIn: this.jwtExpirationTimeInSeconds,
      id: user.id,
      name: user.name,
      email: user.email,
      profileImage: user.profileImage,
      petterInfo: user.PetterInfo,
      userInfo: user.userInfo,
    };
  }

  async getUserById(id: number) {
    const userId = typeof id === 'string' ? parseInt(id, 10) : id;

    const user = await this.prisma.users.findUnique({
      where: { id: userId },
      include: {
        userInfo: true,
        PetterInfo: true,
      },
    });

    if (!user) {
      throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND);
    }

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      profileImage: user.profileImage,
      petterInfo: user.PetterInfo,
      userInfo: user.userInfo,
    };
  }
}
