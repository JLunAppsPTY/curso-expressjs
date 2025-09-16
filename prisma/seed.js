// Utilizamos el cliente de Prisma para interactuar con la base de datos
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

async function main() {
  const demoUsers = [
    { name: 'Juan PÃ©rez', email: 'juan.perez@example.com' },
    { name: 'MarÃ­a LÃ³pez', email: 'maria.lopez@example.com' },
    { name: 'Carlos GarcÃ­a', email: 'carlos.garcia@example.com' }
  ];

  for (const user of demoUsers) {
    await prisma.user.create({
      data: user
    });
  }

  console.log('Usuarios de demostración creados con éxito');
  await prisma.user.deleteMany();
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());