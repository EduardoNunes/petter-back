"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRegisterInfosModule = void 0;
const common_1 = require("@nestjs/common");
const user_register_infos_controller_1 = require("./user.register.infos.controller");
const user_register_infos_service_1 = require("./user.register.infos.service");
const PrismaService_1 = require("../../../database/PrismaService");
let UserRegisterInfosModule = class UserRegisterInfosModule {
};
exports.UserRegisterInfosModule = UserRegisterInfosModule;
exports.UserRegisterInfosModule = UserRegisterInfosModule = __decorate([
    (0, common_1.Module)({
        controllers: [user_register_infos_controller_1.UserRegisterInfosController],
        providers: [user_register_infos_service_1.UserRegisterInfosService, PrismaService_1.PrismaService],
        exports: [user_register_infos_service_1.UserRegisterInfosService],
    })
], UserRegisterInfosModule);
//# sourceMappingURL=user.register.infos.module.js.map