import { UsersDTO } from './users.register.dto';
import { PrismaService } from 'src/database/PrismaService';
export declare class UsersService {
    private prisma;
    private readonly saltOrRounds;
    constructor(prisma: PrismaService);
    createUserCredentials(data: UsersDTO): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        profileImage: string;
    }>;
    private readonly users;
    findOne(email: string): Promise<any | undefined>;
}
