import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { PetterRegisterImagesDTO } from './petter.register.images.dto';
import * as AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class PettersRegisterImagesService {
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
      throw new HttpException(
        'Erro ao fazer upload da imagem para o S3',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async createPetterRegisterImage(
    petterId: number,
    data: PetterRegisterImagesDTO, 
  ) {
    const petterExist = await this.prisma.petterInfo.findUnique({
      where: {
        id: Number(petterId),
      },
    });

    if (!petterExist) {
      throw new HttpException('Petter não encontrado.', HttpStatus.BAD_REQUEST);
    }

    const imageUrls: string[] = [];
    for (const file of data.images) { // Modificação: Itera sobre a array de arquivos
      const imageUrl = await this.uploadImageToS3(file);
      imageUrls.push(imageUrl);
    }

    const newPetterImages = await Promise.all(
      imageUrls.map((imageUrl) =>
        this.prisma.petterImages.create({
          data: {
            url: imageUrl,
            description: data.description,
            petterId: Number(petterId),
          },
        }),
      ),
    );

    console.log('Novas imagens do Petter criadas:', newPetterImages);
    return newPetterImages;
  }
}
