import request from 'supertest';
import app from '../../../server.js';

console.log('DB em uso:', process.env.DATABASE_URL);

describe('Testes de rotas de plantas', () => {
  let idCriado;

  const dadosPlanta = {
    name: 'TestPlanta',
    specie: 'Testus plantarum',
    botanicalDescription: 'Uma planta criada para fins de teste',
    naturalHabitat: 'Ambiente de testes unitários',
    benefits: 'Testabilidade, cobertura de código e paz no CI/CD'
  };

  beforeAll(async () => {
    const res = await request(app).post('/plantas/cadastrar').send(dadosPlanta);
    if (res.status === 201) {
      // Buscar a planta pelo nome
      const getRes = await request(app).get('/plantas');
      if (Array.isArray(getRes.body)) {
        const encontrada = getRes.body.find(p => p.name === dadosPlanta.name);
        if (encontrada) {
          idCriado = encontrada.id;
        }
      }
    }
  });

  afterAll(async () => {
    if (idCriado) {
      await request(app).delete(`/plantas/deletar/${idCriado}`);
    }
  });

  test('GET /plantas - deve retornar uma lista de plantas com status 200', async () => {
    const res = await request(app).get('/plantas');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.plantas)).toBeTruthy();
  });

  test('POST /plantas/cadastrar - deve cadastrar uma planta com status 201', async () => {
    const novaPlanta = {
      ...dadosPlanta,
      name: 'Planta Nova',
      specie: 'Specimen novus'
    };

    const res = await request(app).post('/plantas/cadastrar').send(novaPlanta);
    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual({ message: "Planta criada com sucesso!" });

    // Deleta a planta criada só pra esse teste
    const todas = await request(app).get('/plantas');
    const criada = todas.body.plantas.find(p => p.name === novaPlanta.name);
    if (criada) {
      await request(app).delete(`/plantas/deletar/${criada.id}`);
    }
  });

  test('POST /plantas/cadastrar - deve retornar erro 400 se dados estiverem ausentes', async () => {
    const res = await request(app).post('/plantas/cadastrar').send({});
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual({ message: "Você deve preencher todos os dados" });
  });

  test('DELETE /plantas/deletar/:id - deve deletar uma planta com status 200', async () => {
    // Criar planta pra deletar
    const resCriar = await request(app).post('/plantas/cadastrar').send({
      ...dadosPlanta,
      name: 'Planta para Deletar',
      specie: 'Deleteus plantarum'
    });

    const getAll = await request(app).get('/plantas');
    const planta = getAll.body.plantas.find(p => p.name === 'Planta para Deletar');

    expect(planta).toBeDefined();

    const resDel = await request(app).delete(`/plantas/deletar/${planta.id}`);
    expect(resDel.statusCode).toBe(200);
    expect(resDel.body).toEqual({ message: "Planta deletada com sucesso!" });
  });

  test('DELETE /plantas/deletar/:id - deve retornar 404 se a planta não existir', async () => {
    const idFake = '123e4567-e89b-12d3-a456-426614174000';
    const res = await request(app).delete(`/plantas/deletar/${idFake}`);
    expect(res.statusCode).toBe(404);
    expect(res.body).toEqual({ message: "Planta não encontrada!" });
  });
});