/*
  Warnings:

  - You are about to drop the column `comments` on the `PetterImagesTimeline` table. All the data in the column will be lost.
  - You are about to drop the column `likes` on the `PetterImagesTimeline` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PetterImagesTimeline" DROP COLUMN "comments",
DROP COLUMN "likes";
