import request from "supertest";
import express from "express";
import threatRouter from "../threat.routes";

// Criar uma instância do express e usar só a rota threat para testes isolados
const app = express();
app.use(express.json());
app.use("/threat", threatRouter);

let createdThreatId;

describe("POST /threat", () => {
  test("deve criar uma nova ameaça", async () => {
    const newThreat = { 
        name: "Desmatamento", 
        description: "Queimada em larga escala" 
    };
    const response = await request(app).post("/threat").send(newThreat);

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("newThreat");
    expect(response.body.newThreat.name).toBe(newThreat.name);
    createdThreatId = response.body.newThreat.id;
  });
});

describe("GET /threat", () => {
    test("deve retornar uma lista de ameaças", async () => {
    const response = await request(app).get("/threat");
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body.threats)).toBe(true);
  });
});

describe("GET /threat/:id", () => {
    test("deve retornar a ameaça criada", async () => {
        const response = await request(app).get(`/threat/${createdThreatId}`);

        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe("Desmatamento");
  });
});

describe("PUT /threat/:id", () => {
    test("PUT /threat/:id - deve atualizar a ameaça", async () => {
        const updatedData = { name: "Desmatamento Atualizado", description: "Descrição atualizada" };
        const response = await request(app).put(`/threat/${createdThreatId}`).send(updatedData);

        expect(response.statusCode).toBe(200);
        expect(response.body.updated.name).toBe(updatedData.name);
  });
});

describe("DELETE /threat/:id", () => {
    test("DELETE /threat/:id - deve deletar a ameaça", async () => {
        const response = await request(app).delete(`/threat/${createdThreatId}`);

        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe("Ameaça removida com sucesso!");
  });
}); 
