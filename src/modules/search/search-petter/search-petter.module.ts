import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { SearchPetterController } from './search-petter.controller';
import { SearchPetterService } from './search-petter.service';

@Module({
  providers: [SearchPetterService, PrismaService],
  controllers: [SearchPetterController],
})
export class SearchPetterModule {}
