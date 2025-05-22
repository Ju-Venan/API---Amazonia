import supertest from "supertest";
import app from "../../../server.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

let createdUserId;

  // CREATE
  test("POST /users/cadastrar deve criar um novo usuário", async () => {
    const response = await supertest(app)
      .post("/users/cadastrar")
      .send({
        name: "Julianne Teste",
        email: `julianne${Date.now()}@gmail.com`,
        password: "123456"
      });

    expect(response.statusCode).toBe(201);
    expect(response.body.message).toBe("Usuário inserido com sucesso!");

    const users = await prisma.user.findMany({
      where: { name: "Julianne Teste" }
    });

    createdUserId = users[0]?.id;
  });

  // READ
  test("GET /users deve retornar uma lista de usuários", async () => {
    const response = await supertest(app).get("/users");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  