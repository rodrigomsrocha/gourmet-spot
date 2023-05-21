/*
  Warnings:

  - You are about to alter the column `prepTime` on the `Dish` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Dish" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "coverURL" TEXT NOT NULL,
    "prepTime" INTEGER NOT NULL
);
INSERT INTO "new_Dish" ("coverURL", "description", "id", "name", "prepTime") SELECT "coverURL", "description", "id", "name", "prepTime" FROM "Dish";
DROP TABLE "Dish";
ALTER TABLE "new_Dish" RENAME TO "Dish";
CREATE UNIQUE INDEX "Dish_id_key" ON "Dish"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
