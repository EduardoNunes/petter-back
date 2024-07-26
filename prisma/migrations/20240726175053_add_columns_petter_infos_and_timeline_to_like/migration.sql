/*
  Warnings:

  - Added the required column `petterInfoId` to the `Like` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timelineId` to the `Like` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Like" ADD COLUMN     "petterInfoId" INTEGER NOT NULL,
ADD COLUMN     "timelineId" INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX "Like_userId_idx" ON "Like"("userId");

-- CreateIndex
CREATE INDEX "Like_imageId_idx" ON "Like"("imageId");

-- CreateIndex
CREATE INDEX "Like_petterInfoId_idx" ON "Like"("petterInfoId");

-- CreateIndex
CREATE INDEX "Like_timelineId_idx" ON "Like"("timelineId");

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_petterInfoId_fkey" FOREIGN KEY ("petterInfoId") REFERENCES "petter_infos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_timelineId_fkey" FOREIGN KEY ("timelineId") REFERENCES "PetterImagesTimeline"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
