"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const show_images_profile_module_1 = require("./modules/petters/petter-images-profile/show-images-profile.module");
const petter_infos_module_1 = require("./modules/petters/petter-infos/petter-infos-module");
const petter_register_images_module_1 = require("./modules/petters/petter-register-images/petter-register-images-module");
const petter_image_timeline_module_1 = require("./modules/timeline/post-petter-image-timeline/petter-image-timeline.module");
const show_card_timeline_module_1 = require("./modules/timeline/show-card-timeline/show-card-timeline.module");
const user_infos_module_1 = require("./modules/users/user-infos/user-infos-module");
const users_credentials_module_1 = require("./modules/users/users-credentials/users-credentials-module");
const users_login_module_1 = require("./modules/users/users.login/users-login-module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            users_credentials_module_1.UsersCredentialsModule,
            users_login_module_1.UsersLoginModule,
            user_infos_module_1.UserInfosModule,
            petter_infos_module_1.PetterInfosModule,
            petter_register_images_module_1.PettersRegisterImageModule,
            show_card_timeline_module_1.ShowCardTimelineModule,
            petter_image_timeline_module_1.PetterImageTimelineModule,
            show_images_profile_module_1.ShowImagesProfileModule,
        ],
        providers: [],
        controllers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map