import { PrismaService } from 'src/database/PrismaService';
import { PetterRegisterInfosDTO } from './petter-register-info-dto';
export declare class PetterRegisterInfosService {
    private prisma;
    constructor(prisma: PrismaService);
    createPetterInfos(data: PetterRegisterInfosDTO): Promise<{
        id: number;
        petterName: string;
        petterKind: string;
        petterBreed: string;
        petterBirth: string;
        userId: number;
    }>;
}
