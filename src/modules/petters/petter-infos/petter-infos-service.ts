import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { PrismaService } from 'src/database/PrismaService';
import { v4 as uuidv4 } from 'uuid';
import { PetterInfosDTO } from './petter-info-dto';

@Injectable()
export class PetterInfosService {
  private s3: AWS.S3;

  constructor(private prisma: PrismaService) {
    this.s3 = new AWS.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION,
    });
  }

  async uploadImageToS3(file: Express.Multer.File): Promise<string> {
    const params = {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: `${uuidv4()}-${file.originalname}`,
      Body: file.buffer,
      ContentType: file.mimetype,
    };

    try {
      const uploadResult = await this.s3.upload(params).promise();
      return uploadResult.Location;
    } catch (error) {
      console.error('ERROR', error);
      throw new HttpException(
        'Erro ao fazer upload da imagem para o S3',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async createPetterInfos(data: PetterInfosDTO) {
    const userExist = await this.prisma.users.findFirst({
      where: {
        email: data.email,
      },
    });

    if (!userExist) {
      throw new HttpException(
        'Usuário para vincular o Petter não encontrado.',
        HttpStatus.BAD_REQUEST,
      );
    }

    const petterExist = await this.prisma.petterInfo.findFirst({
      where: {
        petterName: data.petterName,
        petterKind: data.petterKind,
        petterBreed: data.petterBreed,
        userId: userExist.id,
      },
    });

    if (petterExist) {
      throw new HttpException(
        'Este Petter já está cadastrado',
        HttpStatus.BAD_REQUEST,
      );
    }

    const profileUrl = await this.uploadImageToS3(data.profileImageFile);

    const petterInfo = await this.prisma.petterInfo.create({
      data: {
        petterName: data.petterName,
        petterKind: data.petterKind,
        petterBreed: data.petterBreed,
        petterBirth: data.petterBirth,
        profileImage: profileUrl,
        descriptionBio: data.descriptionBio,
        user: {
          connect: { id: userExist.id },
        },
      },
    });

    return petterInfo;
  }

  async updateDescriptionBio(userId: number, petterId: number, descriptionBio: string) {
    console.log('ENTROU AQUI', userId, petterId);
    return this.prisma.petterInfo.update({
      where: {
        userId: userId,
        id: petterId,
      },
      data: { descriptionBio },
    });
  }
}
