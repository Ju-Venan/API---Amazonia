import request from 'supertest';
import app from '../../../server.js'; 

describe('Testes de rotas de animal', () => {
  let idCriado;
  
  // Dados completos para teste incluindo TODOS os campos obrigatórios
  const dadosAnimal = {
    nome: 'Capivara',
    nomeCientifico: 'Hydrochoerus hydrochaeris',
    genero: 'Hydrochoerus',
    familia: 'Caviidae',
    descricao: 'Maior roedor do mundo, semi-aquático e herbívoro',
    popEstimada: 500000,
    bioma: 'Amazônia',
    nivelAmeaca: 'Pouco preocupante'
  };

  // Garantir que cada teste seja independente
  beforeAll(async () => {
    // Criar um animal para usar em todos os testes
    const res = await request(app).post('/animal/criar').send(dadosAnimal);
    if (res.status === 201 && res.body.id) {
      idCriado = res.body.id;
    } else {
      console.error('Falha ao criar animal no beforeAll:', res.status, res.body);
    }
  });

  // Limpar após todos os testes
  afterAll(async () => {
    if (idCriado) {
      await request(app).delete(`/animal/deletar/${idCriado}`);
    }
  });

  test('POST /animal/criar - deve criar um animal', async () => {
    const novoAnimal = {
      ...dadosAnimal,
      nome: 'Capivara de Teste',
      nomeCientifico: 'Hydrochoerus hydrochaeris test'
    };
    
    const res = await request(app).post('/animal/criar').send(novoAnimal);
    
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
    
    // Limpar o animal criado neste teste específico
    if (res.body.id) {
      await request(app).delete(`/animal/deletar/${res.body.id}`);
    }
  });

  test('GET /animal - deve listar os animais', async () => {
    const res = await request(app).get('/animal');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  test('PUT /animal/atualizar/:id - deve atualizar o animal', async () => {
    // Só executa se tivermos um ID válido
    if (!idCriado) {
      console.warn('ID não disponível para teste PUT');
      return;
    }
    
    const res = await request(app).put(`/animal/atualizar/${idCriado}`).send({
      ...dadosAnimal,
      nome: 'Capivara Gigante',
      popEstimada: 600000,
    });

    expect(res.status).toBe(200);
    expect(res.body.nome).toBe('Capivara Gigante');
  });

  test('DELETE /animal/deletar/:id - deve deletar o animal', async () => {
    // Criamos um animal especificamente para deletar
    const criarRes = await request(app).post('/animal/criar').send({
      ...dadosAnimal,
      nome: 'Animal para Deletar',
      nomeCientifico: 'Deleterus animalis'
    });
    
    expect(criarRes.status).toBe(201);
    const idParaDeletar = criarRes.body.id;
    
    const res = await request(app).delete(`/animal/deletar/${idParaDeletar}`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('id', idParaDeletar);
  });
});