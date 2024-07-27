/*
  Warnings:

  - A unique constraint covering the columns `[userId,petterInfoId,imageId,timelineId]` on the table `Like` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Like_userId_petterInfoId_imageId_timelineId_key" ON "Like"("userId", "petterInfoId", "imageId", "timelineId");
