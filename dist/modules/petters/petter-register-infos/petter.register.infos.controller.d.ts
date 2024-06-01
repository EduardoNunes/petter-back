import { PetterRegisterInfosDTO } from './petter.register.info.dto';
import { PetterRegisterInfosService } from './petter.register.infos.service';
export declare class PetterRegisterInfosController {
    private readonly petterRegisterInfosService;
    constructor(petterRegisterInfosService: PetterRegisterInfosService);
    create(data: PetterRegisterInfosDTO): Promise<{
        id: number;
        petterName: string;
        petterKind: string;
        petterBreed: string;
        petterBirth: string;
        userId: number;
    }>;
}
