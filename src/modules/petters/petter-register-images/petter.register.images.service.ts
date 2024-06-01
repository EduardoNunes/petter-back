import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { PetterRegisterImagesDTO } from './petter.register.images.dto';

@Injectable()
export class PettersRegisterImagesService {
  constructor(private prisma: PrismaService) {}

  async createPetterRegisterImage(data: PetterRegisterImagesDTO) {
    const petterExist = await this.prisma.petterInfo.findUnique({
      where: {
        id: data.petterId,
      },
    });

    if (!petterExist) {
      throw new HttpException(
        'Petter não encontrado.',
        HttpStatus.BAD_REQUEST,
      );
    }

    const newPetterImage = await this.prisma.petterImages.create({
      data: {
        url: data.url,
        description: data.description,
        petterId: data.petterId,
      },
    });

    console.log('Nova imagem do Petter criada:', newPetterImage);
    return newPetterImage;
  }
}
