-- CreateTable
CREATE TABLE "CoffeeProduct" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "notes" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Price" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "regular" INTEGER NOT NULL,
    "large" INTEGER NOT NULL,
    "coffeeProductId" TEXT NOT NULL,
    CONSTRAINT "Price_coffeeProductId_fkey" FOREIGN KEY ("coffeeProductId") REFERENCES "CoffeeProduct" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Review" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "coffeeProductId" TEXT NOT NULL,
    CONSTRAINT "Review_coffeeProductId_fkey" FOREIGN KEY ("coffeeProductId") REFERENCES "CoffeeProduct" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Price_coffeeProductId_key" ON "Price"("coffeeProductId");
