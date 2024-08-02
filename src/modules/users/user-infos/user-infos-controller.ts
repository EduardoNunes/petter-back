import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UserInfosDTO } from './user-info-dto';
import { UserInfosService } from './user-infos-service';
import { AuthGuard } from 'src/auth/auth-guard';

@UseGuards(AuthGuard)
@Controller('user-infos')
export class UserInfosController {
  constructor(private readonly userInfosService: UserInfosService) {}

  @Post()
  async create(@Body() data: UserInfosDTO) {
    return this.userInfosService.createUserInfos(data);
  }

  @Get()
  async findOne(@Query('userId') userId: number) {
    if (!userId) {
      throw new HttpException('UserId is required', HttpStatus.BAD_REQUEST);
    }
    return this.userInfosService.findOne(userId);
  }
}
