-- CreateTable
CREATE TABLE "Dish" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "coverURL" TEXT NOT NULL,
    "prepTime" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Dish_id_key" ON "Dish"("id");
