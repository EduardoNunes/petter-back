/// <reference types="multer" />
export declare class PettersRegisterImageModule {
}
export type PetterRegisterImagesDTO = {
    petterId: string;
    images: Express.Multer.File[];
    description?: string;
};
