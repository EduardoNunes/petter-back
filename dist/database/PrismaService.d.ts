import { OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
export declare class PrismaService extends PrismaClient implements OnModuleInit {
    [x: string]: any;
    onModuleInit(): Promise<void>;
    getPetterImages(): Promise<{
        id: number;
        url: string;
        description: string;
        petterId: number;
    }[]>;
}
