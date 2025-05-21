export class AmazoniaService {
  constructor() {
    this.regioes = [
      { id: 1, nome: 'Reserva Mamirauá', tipo: 'reserva', estado: 'AM' },
      { id: 2, nome: 'Parque Nacional do Jaú', tipo: 'parque', estado: 'AM' },
    ];
    this.idAtual = 3;
  }

  getAll() {
    return this.regioes;
  }

  getById(id) {
    return this.regioes.find(r => r.id === id);
  }

  create(dados) {
    const nova = { id: this.idAtual++, ...dados };
    this.regioes.push(nova);
    return nova;
  }

  update(id, dados) {
    const index = this.regioes.findIndex(r => r.id === id);
    if (index === -1) return null;
    this.regioes[index] = { ...this.regioes[index], ...dados };
    return this.regioes[index];
  }

  delete(id) {
    const index = this.regioes.findIndex(r => r.id === id);
    if (index === -1) return false;
    this.regioes.splice(index, 1);
    return true;
  }
}
