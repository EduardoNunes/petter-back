import { PrismaService } from 'src/database/PrismaService';
import { PetterRegisterImagesDTO } from './petter.register.images.dto';
export declare class PettersRegisterImagesService {
    private prisma;
    constructor(prisma: PrismaService);
    createPetterRegisterImage(data: PetterRegisterImagesDTO): Promise<{
        id: number;
        url: string;
        description: string;
        petterId: number;
    }>;
}
