/*
  Warnings:

  - Made the column `profileImage` on table `petter_infos` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "petter_infos" ALTER COLUMN "profileImage" SET NOT NULL,
ALTER COLUMN "profileImage" SET DEFAULT '';
