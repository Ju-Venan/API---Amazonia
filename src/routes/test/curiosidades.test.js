import request from 'supertest';
import app from '../../../server.js';

describe('API Curiosidades', () => {
  let createdId;

  it('GET /curiosidades - deve retornar lista de curiosidades', async () => {
    const res = await request(app).get('/curiosidades');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /curiosidades/criar - deve criar uma curiosidade', async () => {
    const novaCuriosidade = {
      titulo: 'Curiosidade Teste',
      descricao: 'Descrição da curiosidade de teste'
    };

    const res = await request(app)
      .post('/curiosidades/criar')
      .send(novaCuriosidade);

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.titulo).toBe(novaCuriosidade.titulo);

    createdId = res.body.id;  // salvar id para testes seguintes
  });

  it('GET /curiosidades/:id - deve retornar curiosidade pelo id', async () => {
    const res = await request(app).get(`/curiosidades/${createdId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id', createdId);
  });

  it('PUT /curiosidades/atualizar/:id - deve atualizar curiosidade', async () => {
    const atualizacao = {
      titulo: 'Curiosidade Atualizada'
    };

    const res = await request(app)
      .put(`/curiosidades/atualizar/${createdId}`)
      .send(atualizacao);

    expect(res.statusCode).toBe(200);
    expect(res.body.titulo).toBe(atualizacao.titulo);
  });

  it('DELETE /curiosidades/deletar/:id - deve deletar curiosidade', async () => {
    const res = await request(app).delete(`/curiosidades/deletar/${createdId}`);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('mensagem', 'Removido com sucesso');
  });
});
