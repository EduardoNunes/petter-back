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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetterRegisterInfosController = void 0;
const common_1 = require("@nestjs/common");
const petter_register_infos_service_1 = require("./petter.register.infos.service");
let PetterRegisterInfosController = class PetterRegisterInfosController {
    constructor(petterRegisterInfosService) {
        this.petterRegisterInfosService = petterRegisterInfosService;
    }
    async create(data) {
        return this.petterRegisterInfosService.createPetterInfos(data);
    }
};
exports.PetterRegisterInfosController = PetterRegisterInfosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PetterRegisterInfosController.prototype, "create", null);
exports.PetterRegisterInfosController = PetterRegisterInfosController = __decorate([
    (0, common_1.Controller)('petter-register-infos'),
    __metadata("design:paramtypes", [petter_register_infos_service_1.PetterRegisterInfosService])
], PetterRegisterInfosController);
//# sourceMappingURL=petter.register.infos.controller.js.map