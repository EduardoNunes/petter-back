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
exports.PetterRegisterInfosService = void 0;
const common_1 = require("@nestjs/common");
const PrismaService_1 = require("../../../database/PrismaService");
let PetterRegisterInfosService = class PetterRegisterInfosService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createPetterInfos(data) {
        const userExist = await this.prisma.users.findFirst({
            where: {
                email: data.email,
            },
        });
        if (!userExist) {
            throw new common_1.HttpException('Usuário para vincular o Petter não encontrado.', common_1.HttpStatus.BAD_REQUEST);
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
            throw new common_1.HttpException('Este Petter já está cadastrado', common_1.HttpStatus.BAD_REQUEST);
        }
        const petterInfo = await this.prisma.petterInfo.create({
            data: {
                petterName: data.petterName,
                petterKind: data.petterKind,
                petterBreed: data.petterBreed,
                petterBirth: data.petterBirth,
                user: {
                    connect: { id: userExist.id },
                },
            },
        });
        return petterInfo;
    }
};
exports.PetterRegisterInfosService = PetterRegisterInfosService;
exports.PetterRegisterInfosService = PetterRegisterInfosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], PetterRegisterInfosService);
//# sourceMappingURL=petter-register-infos.service.js.map