/*
  Warnings:

  - A unique constraint covering the columns `[userId,petterInfoId,timelineId]` on the table `Like` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,petterInfoId,imageId]` on the table `Like` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Like_userId_petterInfoId_imageId_timelineId_key";

-- CreateIndex
CREATE UNIQUE INDEX "Like_userId_petterInfoId_timelineId_key" ON "Like"("userId", "petterInfoId", "timelineId");

-- CreateIndex
CREATE UNIQUE INDEX "Like_userId_petterInfoId_imageId_key" ON "Like"("userId", "petterInfoId", "imageId");
