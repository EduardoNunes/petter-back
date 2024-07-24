import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { UserInfosDTO } from './user-info-dto';

@Injectable()
export class UserInfosService {
  constructor(private prisma: PrismaService) {}

  async createUserInfos(data: UserInfosDTO) {
    const userExist = await this.prisma.users.findFirst({
      where: {
        email: data.email,
      },
    });

    if (!userExist) {
      throw new HttpException(
        'Este email não foi encontrado.',
        HttpStatus.BAD_REQUEST,
      );
    }

    const userInfosExist = await this.prisma.userInfo.findFirst({
      where: {
        userId: userExist.id,
      },
    });

    if (userInfosExist) {
      throw new HttpException(
        'As informações do usuário já estão cadastradas.',
        HttpStatus.BAD_REQUEST,
      );
    }

    const userInfo = await this.prisma.userInfo.create({
      data: {
        userId: userExist.id,
        date: data.date,
        gender: data.gender,
        phone: data.phone,
        cep: data.cep,
        neighborhood: data.neighborhood,
        ddd: data.ddd,
        locality: data.locality,
        publicPlace: data.publicPlace,
        uf: data.uf,
      },
    });

    return userInfo;
  }

  async findOne(userId: number): Promise<any | undefined> {
    const user = await this.prisma.userInfo.findFirst({
      where: { userId },
      select: {
        id: true,
        userId: true,
        date: true,
        gender: true,
        phone: true,
        cep: true,
        neighborhood: true,
        ddd: true,
        locality: true,
        publicPlace: true,
        uf: true,
      },
    });
    return user;
  }
}
