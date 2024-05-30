import { Module } from '@nestjs/common';
import { PetterRegisterInfosController } from './petter-register-infos.controller';
import { PetterRegisterInfosService } from './petter-register-infos.service';
import { PrismaService } from 'src/database/PrismaService';

@Module({
    controllers: [PetterRegisterInfosController],
    providers: [PetterRegisterInfosService, PrismaService],
    exports: [PetterRegisterInfosService],
})
export class PetterRegisterInfosModule {}
