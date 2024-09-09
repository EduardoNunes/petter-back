import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class SearchPetterService {
  constructor(private prisma: PrismaService) {}

  async getPettersByName(petterName: string): Promise<any | undefined> {
    const petters = await this.prisma.petterInfo.findMany({
      where: {
        petterName: {
          contains: petterName,
          mode: 'insensitive', 
        },
      },
      select: {
        petterName: true,
        petterKind: true,
        petterBreed: true,
        profileImage: true,
        id: true,
      },
      take: 20,
    });
    return petters;
  }
}
