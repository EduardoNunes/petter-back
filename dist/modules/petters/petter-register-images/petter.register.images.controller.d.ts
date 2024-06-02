/// <reference types="multer" />
import { PettersRegisterImagesService } from './petter.register.images.service';
import { PetterRegisterImagesDTO } from './petter.register.images.dto';
export declare class PettersRegisterImagesController {
    private readonly pettersRegisterImagesService;
    constructor(pettersRegisterImagesService: PettersRegisterImagesService);
    uploadImage(files: Express.Multer.File[], data: PetterRegisterImagesDTO): Promise<{
        id: number;
        url: string;
        description: string;
        petterId: number;
    }[]>;
}
