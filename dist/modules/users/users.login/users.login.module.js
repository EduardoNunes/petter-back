"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersLoginModule = void 0;
const common_1 = require("@nestjs/common");
const users_login_service_1 = require("./users.login.service");
const users_login_controller_1 = require("./users.login.controller");
const PrismaService_1 = require("../../../database/PrismaService");
let UsersLoginModule = class UsersLoginModule {
};
exports.UsersLoginModule = UsersLoginModule;
exports.UsersLoginModule = UsersLoginModule = __decorate([
    (0, common_1.Module)({
        controllers: [users_login_controller_1.UsersLoginController],
        providers: [users_login_service_1.UsersLoginService, PrismaService_1.PrismaService],
    })
], UsersLoginModule);
//# sourceMappingURL=users.login.module.js.map