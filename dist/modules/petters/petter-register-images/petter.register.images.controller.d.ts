import { PetterRegisterImagesDTO } from './petter.register.images.dto';
import { PettersRegisterImagesService } from './petter.register.images.service';
export declare class PetterRegisterImagesController {
    private readonly petterRegisterImagesService;
    constructor(petterRegisterImagesService: PettersRegisterImagesService);
    create(data: PetterRegisterImagesDTO): Promise<{
        id: number;
        url: string;
        description: string;
        petterId: number;
    }>;
}
