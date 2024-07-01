-- CreateTable
CREATE TABLE "PetterImagesTimeline" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "likes" INTEGER NOT NULL,
    "comments" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "petterInfoId" INTEGER NOT NULL,

    CONSTRAINT "PetterImagesTimeline_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PetterImagesTimeline" ADD CONSTRAINT "PetterImagesTimeline_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PetterImagesTimeline" ADD CONSTRAINT "PetterImagesTimeline_petterInfoId_fkey" FOREIGN KEY ("petterInfoId") REFERENCES "petter_infos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
