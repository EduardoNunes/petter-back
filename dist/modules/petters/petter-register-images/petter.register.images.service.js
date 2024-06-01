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
let PettersRegisterImagesService = class PettersRegisterImagesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createPetterRegisterImage(data) {
        const petterExist = await this.prisma.petterInfo.findUnique({
            where: {
                id: data.petterId,
            },
        });
        if (!petterExist) {
            throw new common_1.HttpException('Petter não encontrado.', common_1.HttpStatus.BAD_REQUEST);
        }
        const newPetterImage = await this.prisma.petterImages.create({
            data: {
                url: data.url,
                description: data.description,
                petterId: data.petterId,
            },
        });
        console.log('Nova imagem do Petter criada:', newPetterImage);
        return newPetterImage;
    }
};
exports.PettersRegisterImagesService = PettersRegisterImagesService;
exports.PettersRegisterImagesService = PettersRegisterImagesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], PettersRegisterImagesService);
//# sourceMappingURL=petter.register.images.service.js.map