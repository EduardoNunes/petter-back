import { PrismaService } from 'src/database/PrismaService';
import { UsersLoginDTO } from './users.login.dto';
export declare class UsersLoginService {
    private prisma;
    constructor(prisma: PrismaService);
    login(data: UsersLoginDTO): Promise<{
        accessToken: string;
    }>;
}
