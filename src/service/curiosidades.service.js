// File: src/service/curiosidades.service.js
export class CuriosidadesService {
  constructor() {
    this.curiosidades = [];
    this.idAtual = 1;
  }

  getAll() {
    return this.curiosidades;
  }

  getById(id) {
    return this.curiosidades.find(c => c.id === id);
  }

  create(dados) {
    const nova = { id: this.idAtual++, ...dados };
    this.curiosidades.push(nova);
    return nova;
  }

  update(id, dados) {
    const index = this.curiosidades.findIndex(c => c.id === id);
    if (index === -1) return null;
    this.curiosidades[index] = { ...this.curiosidades[index], ...dados };
    return this.curiosidades[index];
  }

  delete(id) {
    const index = this.curiosidades.findIndex(c => c.id === id);
    if (index === -1) return false;
    this.curiosidades.splice(index, 1);
    return true;
  }
}

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class CuriosidadesService {
  async getAll() {
    return await prisma.curiosidade.findMany();
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

