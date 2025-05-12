import { CuriosidadesService } from '../service/curiosidades.service.js';

const service = new CuriosidadesService();

export class CuriosidadesController {
  static getAll(req, res) {
    res.json(service.getAll());
  }

  static getById(req, res) {
    const { id } = req.params;
    const curiosidade = service.getById(Number(id));
    if (!curiosidade) return res.status(404).json({ mensagem: 'Não encontrada' });
    res.json(curiosidade);
  }

  static create(req, res) {
    const nova = service.create(req.body);
    res.status(201).json(nova);
  }

  static update(req, res) {
    const { id } = req.params;
    const atualizada = service.update(Number(id), req.body);
    if (!atualizada) return res.status(404).json({ mensagem: 'Não encontrada' });
    res.json(atualizada);
  }

  static delete(req, res) {
    const { id } = req.params;
    const sucesso = service.delete(Number(id));
    if (!sucesso) return res.status(404).json({ mensagem: 'Não encontrada' });
    res.json({ mensagem: 'Removida com sucesso' });
  }
}
