import { PrismaService } from 'src/database/PrismaService';
import { UserRegisterInfosDTO } from './user.register.info.dto';
export declare class UserRegisterInfosService {
    private prisma;
    constructor(prisma: PrismaService);
    createUserInfos(data: UserRegisterInfosDTO): Promise<{
        id: number;
        userId: number;
        date: string;
        gender: string;
        phone: string;
        cep: string;
        neighborhood: string;
        ddd: string;
        locality: string;
        publicPlace: string;
        uf: string;
    }>;
}
