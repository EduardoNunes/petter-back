export type PetterRegisterImagesDTO = {
  petterId: number;
  imageId?: number;
  userId?: number;
  images: Express.Multer.File[];
  singleImage?: Express.Multer.File;
  description?: string;
};
