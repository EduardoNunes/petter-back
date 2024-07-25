import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersDTO } from './users-credentials-dto';
import { PrismaService } from 'src/database/PrismaService';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  private readonly saltOrRounds = 10;

  constructor(private prisma: PrismaService) {}

  async createUserCredentials(data: UsersDTO) {
    const userExist = await this.prisma.users.findFirst({
      where: {
        email: data.email,
      },
    });

    if (userExist) {
      throw new HttpException(
        'Este email já está cadastrado.',
        HttpStatus.BAD_REQUEST,
      );
    }

    const hash = await bcrypt.hash(data.password, this.saltOrRounds);
    const user = await this.prisma.users.create({
      data: {
        name: data.name,
        email: data.email,
        password: hash,
        profileImage: data.profileImage,
        loggedBy: data.loggedBy,
      },
      select: {
        id: true,
        name: true,
        email: true,
        profileImage: true,
        loggedBy: true,
      },
    });

    return user;
  }

  async findOne(email: string): Promise<any | undefined> {
    const user = await this.prisma.users.findFirst({
      where: { email },
      select: {
        id: true,
        name: true,
        email: true,
        profileImage: true,
        loggedBy: true,
      },
    });
    return user;
  }
}
