import { CuriosidadesService } from '../service/curiosidades.service.js';

const service = new CuriosidadesService();

export class CuriosidadesController {
  static async getAll(req, res) {
    const dados = await service.getAll();
    res.json(dados);
  }

  static async getById(req, res) {
    const { id } = req.params;
    const dado = await service.getById(Number(id));
    if (!dado) return res.status(404).json({ mensagem: 'Não encontrado' });
    res.json(dado);
  }

  static async create(req, res) {
    const novo = await service.create(req.body);
    res.status(201).json(novo);
  }

  static async update(req, res) {
    const { id } = req.params;
    try {
      const atualizado = await service.update(Number(id), req.body);
      res.json(atualizado);
    } catch (e) {
      res.status(404).json({ mensagem: 'Não encontrado' });
    }
  }

  static async delete(req, res) {
    const { id } = req.params;
    try {
      await service.delete(Number(id));
      res.json({ mensagem: 'Removido com sucesso' });
    } catch (e) {
      res.status(404).json({ mensagem: 'Não encontrado' });
    }
  }
}