import request from 'supertest';
import app from '../../../main.js';

console.log('DB em uso:', process.env.DATABASE_URL);

//teste rota read
describe('GET /plantas', () => {
    it('deve retornar uma lista de plantas com status 200', async () => {
      const response = await request(app).get('/plantas');
      expect(response.statusCode).toBe(200);
  });
});

//teste rota create
describe('POST /plantas/cadastrar', () => {
  it('deve cadastrar uma planta com status 201', async () => {
    const response = await request(app)
      .post('/plantas/cadastrar')
      .send({
          name: 'Andiroba',
          specie: 'Carapa guianensis',
          botanicalDescription: 'Árvore de grande porte com folhas compostas e frutos que se abrem liberando sementes oleaginosas.',
          naturalHabitat: 'Florestas tropicais úmidas da Amazônia, especialmente áreas alagadas.',
          benefits: 'Uso medicinal anti-inflamatório, cicatrizante e repelente natural de insetos.'
      })  
    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual({ message: "Planta criada com sucesso!"})
  });

  it('deve retornar erro 400 se algum dado não for preenchido', async () => {
    const response = await request(app)
      .post('/plantas/cadastrar')
      .send({});
    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({ message: "Você deve preencher todos os dados" });
  });
});

//teste rota delete
describe('DELETE /plantas/deletar/:id', () => {
  it('deve deletar a planta pelo id e retornar status 200', async () => {
    const idExemple = "1fb603bb-d953-457b-add4-0d874525f8d5"; // insira um id existente no seu banco
    const response = await request(app)
      .delete(`/plantas/deletar/${idExemple}`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({message: "Planta deletada com sucesso!"});
 });

  it('deve retornar 404 se a planta não existir', async () => {
    const idInexistente = '10b93e2a-f038-4c76-8510-ab0a1c13d982';
    const response = await request(app)
        .delete(`/plantas/deletar/${idInexistente}`);
    expect(response.statusCode).toBe(404);
    expect(response.body).toEqual({ message: "Planta não encontrada!" });
  });
});