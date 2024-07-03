import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { PetterImageTimelineDTO } from './petter-image-timeline-dto';
import * as AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class PetterImageTimelineService {
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
    console.log('PARAMS', params);
    try {
      const uploadResult = await this.s3.upload(params).promise();
      return uploadResult.Location;
    } catch (error) {
      console.log('ERROR', error);
      throw new HttpException(
        'Erro ao fazer upload da imagem para o S3',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async createPetterImageTimeline(
    petterId: number,
    data: PetterImageTimelineDTO,
  ) {
    const petterExist = await this.prisma.petterInfo.findUnique({
      where: {
        id: Number(petterId),
      },
    });

    if (!petterExist) {
      throw new HttpException('Petter não encontrado.', HttpStatus.BAD_REQUEST);
    }

    const userExist = await this.prisma.users.findUnique({
      where: {
        id: Number(data.userId),
      },
    });

    if (!userExist) {
      throw new HttpException(
        'Usuário não encontrado.',
        HttpStatus.BAD_REQUEST,
      );
    }

    const imageUrl = await this.uploadImageToS3(data.image);

    const newPetterImageTimeline =
      await this.prisma.petterImagesTimeline.create({
        data: {
          url: imageUrl,
          description: data.description,
          petterInfo: { connect: { id: Number(petterId) } },
          user: { connect: { id: userExist.id } },
        },
      });

    console.log(
      'Nova imagem do Petter na timeline criada:',
      newPetterImageTimeline,
    );
    return newPetterImageTimeline;
  }
}
