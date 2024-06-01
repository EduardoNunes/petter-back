"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetterRegisterInfosModule = void 0;
const common_1 = require("@nestjs/common");
const petter_register_infos_controller_1 = require("./petter-register-infos.controller");
const petter_register_infos_service_1 = require("./petter.register.infos.service");
const PrismaService_1 = require("../../../database/PrismaService");
let PetterRegisterInfosModule = class PetterRegisterInfosModule {
};
exports.PetterRegisterInfosModule = PetterRegisterInfosModule;
exports.PetterRegisterInfosModule = PetterRegisterInfosModule = __decorate([
    (0, common_1.Module)({
        controllers: [petter_register_infos_controller_1.PetterRegisterInfosController],
        providers: [petter_register_infos_service_1.PetterRegisterInfosService, PrismaService_1.PrismaService],
        exports: [petter_register_infos_service_1.PetterRegisterInfosService],
    })
], PetterRegisterInfosModule);
//# sourceMappingURL=petter-register-infos.module.js.map