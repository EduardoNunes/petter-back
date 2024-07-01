/*
  Warnings:

  - Added the required column `url` to the `PetterImagesTimeline` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PetterImagesTimeline" ADD COLUMN     "url" TEXT NOT NULL;
