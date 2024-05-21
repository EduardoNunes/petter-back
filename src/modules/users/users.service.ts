import { Injectable } from '@nestjs/common';
import { UsersDTO } from './users.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: UsersDTO) {
    const usersExist = await this.prisma.users.findFirst({
      where: {
        email: data.email,
      },
    });

    if (usersExist) {
      throw new Error('Email já cadastrado');
    }

    const user = await this.prisma.users.create({
      data,
    });

    return user;
  }
}
