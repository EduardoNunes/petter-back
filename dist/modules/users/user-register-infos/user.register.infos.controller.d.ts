import { UserRegisterInfosDTO } from './user.register.info.dto';
import { UserRegisterInfosService } from './user.register.infos.service';
export declare class UserRegisterInfosController {
    private readonly userRegisterInfosService;
    constructor(userRegisterInfosService: UserRegisterInfosService);
    create(data: UserRegisterInfosDTO): Promise<{
        id: number;
        userId: number;
        date: string;
        gender: string;
        phone: string;
        cep: string;
        neighborhood: string;
        ddd: string;
        locality: string;
        publicPlace: string;
        uf: string;
    }>;
}
