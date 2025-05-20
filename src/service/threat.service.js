import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient(); // Cria a instância do cliente Prisma (Funções do SQL)

class ThreatService {
    async getThreats() {
      const threats = await prisma.threat.findMany(); // SELECT * FROM Ameaças
      return threats;
    }

    async getThreatById(id) {
      return await prisma.threat.findUnique({ where: { id } });
    }

    async createThreat(data) {
      const newThreat = await prisma.threat.create({
        data: {
          name: data.name,
          description: data.description,
        },
      });

      return newThreat;
    }

    async updateThreat(id, data) {
      const updatedThreat = await prisma.threat.update({
        where: { id },
        data: {
          name: data.name,
          description: data.description,
        },
      });

      return updatedThreat;
    }

    async deleteThreat(id) {
      return await prisma.threat.delete({ where: { id } });
    }
}

export default new ThreatService();