import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { PetterInfosService } from './petter-infos-service';
import { PetterInfosController } from './petter-infos-controller';

@Module({
  controllers: [PetterInfosController],
  providers: [PetterInfosService, PrismaService],
})
export class PetterInfosModule {}
