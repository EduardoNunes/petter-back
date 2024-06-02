"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PettersRegisterImagesService = void 0;
const common_1 = require("@nestjs/common");
const PrismaService_1 = require("../../../database/PrismaService");
const AWS = require("aws-sdk");
const uuid_1 = require("uuid");
const dotenv = require("dotenv");
dotenv.config();
let PettersRegisterImagesService = class PettersRegisterImagesService {
    constructor(prisma) {
        this.prisma = prisma;
        this.s3 = new AWS.S3({
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            region: process.env.AWS_REGION,
        });
    }
    async uploadImageToS3(file) {
        const params = {
            Bucket: process.env.S3_BUCKET_NAME,
            Key: `${(0, uuid_1.v4)()}-${file.originalname}`,
            Body: file.buffer,
            ContentType: file.mimetype,
        };
        try {
            const uploadResult = await this.s3.upload(params).promise();
            return uploadResult.Location;
        }
        catch (error) {
            throw new common_1.HttpException('Erro ao fazer upload da imagem para o S3', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async createPetterRegisterImage(petterId, data) {
        const petterExist = await this.prisma.petterInfo.findUnique({
            where: {
                id: Number(petterId),
            },
        });
        if (!petterExist) {
            throw new common_1.HttpException('Petter não encontrado.', common_1.HttpStatus.BAD_REQUEST);
        }
        const imageUrls = [];
        for (const file of data.images) {
            const imageUrl = await this.uploadImageToS3(file);
            imageUrls.push(imageUrl);
        }
        const newPetterImages = await Promise.all(imageUrls.map((imageUrl) => this.prisma.petterImages.create({
            data: {
                url: imageUrl,
                description: data.description,
                petterId: Number(petterId),
            },
        })));
        console.log('Novas imagens do Petter criadas:', newPetterImages);
        return newPetterImages;
    }
};
exports.PettersRegisterImagesService = PettersRegisterImagesService;
exports.PettersRegisterImagesService = PettersRegisterImagesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], PettersRegisterImagesService);
//# sourceMappingURL=petter.register.images.service.js.map