export type PetterRegisterImagesDTO = {
  petterId: number;
  images: Express.Multer.File[];
  description?: string;
};
