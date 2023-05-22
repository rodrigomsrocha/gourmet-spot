-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Table" (
    "id" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "capacity" INTEGER NOT NULL,
    "isFree" BOOLEAN NOT NULL DEFAULT true
);
INSERT INTO "new_Table" ("capacity", "id", "isFree", "number") SELECT "capacity", "id", "isFree", "number" FROM "Table";
DROP TABLE "Table";
ALTER TABLE "new_Table" RENAME TO "Table";
CREATE UNIQUE INDEX "Table_id_key" ON "Table"("id");
CREATE UNIQUE INDEX "Table_number_key" ON "Table"("number");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
