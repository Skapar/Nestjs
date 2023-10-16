/*
  Warnings:

  - You are about to drop the column `user_id` on the `courses` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "courses" DROP CONSTRAINT "courses_user_id_fkey";

-- AlterTable
ALTER TABLE "courses" DROP COLUMN "user_id",
ADD COLUMN     "userId" INTEGER;

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "courses_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
