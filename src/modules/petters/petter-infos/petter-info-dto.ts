export type PetterInfosDTO = {
  email: string;
  petterName: string;
  petterKind: string;
  petterBreed: string;
  petterBirth: string;
  profileImageFile?: Express.Multer.File;
  petterGender: string;
  descriptionBio?: string;
};
