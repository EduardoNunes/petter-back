-- CreateTable
CREATE TABLE "Like" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "imageId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Like_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "petter_images"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
