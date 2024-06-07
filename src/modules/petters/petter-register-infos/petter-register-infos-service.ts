import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { PetterRegisterInfosDTO } from './petter-register-info-dto';

@Injectable()
export class PetterRegisterInfosService {
  constructor(private prisma: PrismaService) {}

  async createPetterInfos(data: PetterRegisterInfosDTO) {
    const userExist = await this.prisma.users.findFirst({
      where: {
        email: data.email,
      },
    });

    if (!userExist) {
      throw new HttpException(
        'Usuário para vincular o Petter não encontrado.',
        HttpStatus.BAD_REQUEST,
      );
    }

    const petterExist = await this.prisma.petterInfo.findFirst({
      where: {
        petterName: data.petterName,
        petterKind: data.petterKind,
        petterBreed: data.petterBreed,
        userId: userExist.id,
      },
    });

    if (petterExist) {
      throw new HttpException(
        'Este Petter já está cadastrado',
        HttpStatus.BAD_REQUEST,
      );
    }

    const petterInfo = await this.prisma.petterInfo.create({
      data: {
        petterName: data.petterName,
        petterKind: data.petterKind,
        petterBreed: data.petterBreed,
        petterBirth: data.petterBirth,
        user: {
          connect: { id: userExist.id },
        },
      },
    });

    return petterInfo;
  }
}
