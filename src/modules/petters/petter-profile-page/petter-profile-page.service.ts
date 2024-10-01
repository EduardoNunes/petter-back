import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class PetterProfilePageService {
  constructor(private prisma: PrismaService) {}

  async findOne(petterId: number): Promise<any | undefined> {
    const petter = await this.prisma.petterInfo.findFirst({
      where: { id: petterId },
      select: {
        petterName: true,
        petterKind: true,
        petterBreed: true,
        petterBirth: true,
        petterGender: true,
        profileImage: true,
        userId: true,
        descriptionBio: true,
        PetterImages: {
          select: {
            id: true,
            url: true,
          },
        },
      },
    });
    return petter;
  }
}
