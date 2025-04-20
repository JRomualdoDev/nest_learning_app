-- CreateEnum
CREATE TYPE "StatusTarefa" AS ENUM ('COMPLETED', 'IN_PROGRESS', 'PENDING', 'CANCELLED');

-- CreateTable
CREATE TABLE "Tarefa" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT,
    "status" "StatusTarefa" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tarefa_pkey" PRIMARY KEY ("id")
);
