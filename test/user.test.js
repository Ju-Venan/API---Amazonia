import supertest from "supertest";
import app from "../main.js"; // ou o nome que exporta seu app

test("POST /user cria um novo usuário", async () => {
  const response = await supertest(app)
    .post("/users")
    .send({ name: "Julianne", email: "julianne@gamil.com", password: "123456" });

  expect(response.statusCode).toBe(201);
  expect(response.body.message).toBe("Usuário inserido com sucesso!");
});
