import ThreatService from "../service/threat.service.js";

class ThreatController {
  async getThreat(req, res) {
    const threats = await ThreatService.getThreats();
    res.status(200).json({ threats: threats });
  }

  async getThreatById(req, res) {
    const threat = await ThreatService.getThreatById(req.params.id);

    if (!threat) {
      return res.status(404).json({ message: "Ameaça não encontrada" });
    }

    res.status(200).json(threat);
  }

  async createThreat(req, res) {
    const newThreat = await ThreatService.createThreat(req.body);

    res.status(201).json({ message: "Ameaça cadastrada com sucesso!", newThreat });
  }

  async updateThreat(req, res) {
    const updated = await ThreatService.updateThreat(req.params.id, req.body);
    
    res.status(200).json({ message: "Ameaça atualizada com sucesso!", updated });
  }

  async deleteThreat(req, res) {
    await ThreatService.deleteThreat(req.params.id);

    res.status(200).json({ message: "Ameaça removida com sucesso!" });
  }
}

export default new ThreatController();
