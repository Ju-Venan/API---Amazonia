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
