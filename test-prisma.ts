import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.character.findMany(); // ou $queryRaw`SELECT 1`
  console.log(result);
}

main().catch(e => console.error(e));
