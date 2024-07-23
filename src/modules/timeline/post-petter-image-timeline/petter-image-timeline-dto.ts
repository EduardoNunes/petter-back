export class PetterImageTimelineDTO {
  petterId: number;
  userId: number;
  image: Express.Multer.File;
  description?: string;
}
