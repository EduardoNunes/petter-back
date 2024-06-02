/// <reference types="multer" />
import { PrismaService } from 'src/database/PrismaService';
import { PetterRegisterImagesDTO } from './petter.register.images.dto';
export declare class PettersRegisterImagesService {
    private prisma;
    private s3;
    constructor(prisma: PrismaService);
    uploadImageToS3(file: Express.Multer.File): Promise<string>;
    createPetterRegisterImage(petterId: number, data: PetterRegisterImagesDTO): Promise<{
        id: number;
        url: string;
        description: string;
        petterId: number;
    }[]>;
}
