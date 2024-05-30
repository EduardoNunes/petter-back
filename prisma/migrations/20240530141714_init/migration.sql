-- CreateTable
CREATE TABLE "petter_infos" (
    "id" SERIAL NOT NULL,
    "petterName" TEXT NOT NULL,
    "petterKind" TEXT NOT NULL,
    "petterBreed" TEXT NOT NULL,
    "petterBirth" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "petter_infos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "petter_infos" ADD CONSTRAINT "petter_infos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
