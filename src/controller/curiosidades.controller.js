

import curiosidadesService from "../service/curiosidades.service.js";

class CuriosidadesController {

async getCuriosidades(req, res) {
    const dados = await curiosidadesService.getCuriosidades();
    res.json(dados);
  }

async getById(req, res) {
    const { id } = req.params;
    const dado = await curiosidadesService.getById(Number(id));
    if (!dado) return res.status(404).json({ mensagem: 'Não encontrado' });
    res.json(dado);
  }

async create(req, res) {
    const novo = await curiosidadesService.create(req.body);
    res.status(201).json(novo);
  }

async update(req, res) {
    const { id } = req.params;
    try {
      const atualizado = await curiosidadesService.update(Number(id), req.body);
      res.json(atualizado);
    } catch (e) {
      res.status(404).json({ mensagem: 'Não encontrado' });
    }
  }

async delete(req, res) {
    const { id } = req.params;
    try {
      await curiosidadesService.delete(Number(id));
      res.json({ mensagem: 'Removido com sucesso' });
    } catch (e) {
      res.status(404).json({ mensagem: 'Não encontrado' });
    }
  }
}

export default new CuriosidadesController();