import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersDTO } from './users.register.dto';
import { PrismaService } from 'src/database/PrismaService';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  private readonly saltOrRounds = 10;
  
  constructor(private prisma: PrismaService) {}

  async createUserCredentials(data: UsersDTO) {
    const userExist = await this.prisma.users.findFirst({
      where: {
        email: data.email,
      },
    });

    if (userExist) {
      throw new HttpException('Este email já está cadastrado.', HttpStatus.BAD_REQUEST);
    }

    const saltOrRounds = 10;
    const hash = await bcrypt.hash(data.password, saltOrRounds);
    const user = await this.prisma.users.create({
      data: {
        name: data.name,
        email: data.email,
        password: hash,
        profileImage: data.profileImage,
      },
    });

    return user;
  }

  private readonly users = this.prisma.users.findMany();
  async findOne(email: string): Promise<any | undefined> {
    return (await this.users).find((user) => user.email === email);
  }
}
