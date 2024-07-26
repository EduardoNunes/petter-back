-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_imageId_fkey";

-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_timelineId_fkey";

-- AlterTable
ALTER TABLE "Like" ALTER COLUMN "imageId" DROP NOT NULL,
ALTER COLUMN "timelineId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "petter_images"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_timelineId_fkey" FOREIGN KEY ("timelineId") REFERENCES "PetterImagesTimeline"("id") ON DELETE SET NULL ON UPDATE CASCADE;
