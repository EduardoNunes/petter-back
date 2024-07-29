-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "imageId" INTEGER,
    "petterInfoId" INTEGER NOT NULL,
    "timelineId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "commented" TEXT NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Comment_userId_idx" ON "Comment"("userId");

-- CreateIndex
CREATE INDEX "Comment_imageId_idx" ON "Comment"("imageId");

-- CreateIndex
CREATE INDEX "Comment_petterInfoId_idx" ON "Comment"("petterInfoId");

-- CreateIndex
CREATE INDEX "Comment_timelineId_idx" ON "Comment"("timelineId");

-- CreateIndex
CREATE UNIQUE INDEX "Comment_userId_petterInfoId_timelineId_key" ON "Comment"("userId", "petterInfoId", "timelineId");

-- CreateIndex
CREATE UNIQUE INDEX "Comment_userId_petterInfoId_imageId_key" ON "Comment"("userId", "petterInfoId", "imageId");

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "petter_images"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_petterInfoId_fkey" FOREIGN KEY ("petterInfoId") REFERENCES "petter_infos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_timelineId_fkey" FOREIGN KEY ("timelineId") REFERENCES "PetterImagesTimeline"("id") ON DELETE SET NULL ON UPDATE CASCADE;
