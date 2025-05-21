import { Router } from "express";
import ThreatController from "../controller/threat.controller.js";

const threat = Router();

threat.get("/", ThreatController.getThreat);
threat.get("/:id", ThreatController.getThreatById);
threat.post("/", ThreatController.createThreat);
threat.put("/:id", ThreatController.updateThreat);
threat.delete("/:id", ThreatController.deleteThreat);

export default threat;