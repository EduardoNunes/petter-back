"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PettersRegisterImageModule = void 0;
const common_1 = require("@nestjs/common");
const PrismaService_1 = require("../../../database/PrismaService");
const petter_register_images_controller_1 = require("./petter.register.images.controller");
const petter_register_images_service_1 = require("./petter.register.images.service");
let PettersRegisterImageModule = class PettersRegisterImageModule {
};
exports.PettersRegisterImageModule = PettersRegisterImageModule;
exports.PettersRegisterImageModule = PettersRegisterImageModule = __decorate([
    (0, common_1.Module)({
        controllers: [petter_register_images_controller_1.PetterRegisterImagesController],
        providers: [petter_register_images_service_1.PettersRegisterImagesService, PrismaService_1.PrismaService],
        exports: [petter_register_images_service_1.PettersRegisterImagesService],
    })
], PettersRegisterImageModule);
//# sourceMappingURL=petter.register.images.module.js.map