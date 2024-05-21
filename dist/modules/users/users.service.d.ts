import { UsersDTO } from './users.dto';
import { PrismaService } from 'src/database/PrismaService';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: UsersDTO): Promise<{
        id: number;
        email: string;
        password: string;
        profileImage: string;
    }>;
}
