const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.college.createMany({
    data: [
      {
        name: "IIT Hyderabad",
        location: "Hyderabad",
        state: "Telangana",
        type: "Engineering",
        ranking: 1,
        fees: 250000,
      },
      {
        name: "NIT Warangal",
        location: "Warangal",
        state: "Telangana",
        type: "Engineering",
        ranking: 2,
        fees: 180000,
      },
      {
        name: "IIIT Hyderabad",
        location: "Hyderabad",
        state: "Telangana",
        type: "Technology",
        ranking: 3,
        fees: 300000,
      },
    ],
  });

  console.log("Database seeded");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });