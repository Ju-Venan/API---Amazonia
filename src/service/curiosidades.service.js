import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

 class CuriosidadesService {
  async getCuriosidades() {
    const curiosidades = await prisma.curiosidade.findMany();
    return curiosidades;
  }

  async getById(id) {
    return await prisma.curiosidade.findUnique({ where: { id } });
  }

  async create(data) {
    return await prisma.curiosidade.create({ data });
  }

  async update(id, data) {
    return await prisma.curiosidade.update({
      where: { id },
      data
    });
  }

  async delete(id) {
    return await prisma.curiosidade.delete({ where: { id } });
  }
}

export default new CuriosidadesService();