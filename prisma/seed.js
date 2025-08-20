const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const courts = ["Altaar Court","Court Roland","Singel Court"];
  for (const name of courts) {
    await prisma.court.upsert({
      where: { name },
      update: {},
      create: { name }
    });
  }
  console.log("Seeded courts:", courts.join(", "));
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());

