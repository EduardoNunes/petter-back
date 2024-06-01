-- CreateTable
CREATE TABLE "petter_images" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "description" TEXT,
    "petterId" INTEGER NOT NULL,

    CONSTRAINT "petter_images_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "petter_images" ADD CONSTRAINT "petter_images_petterId_fkey" FOREIGN KEY ("petterId") REFERENCES "petter_infos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
