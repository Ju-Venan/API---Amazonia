import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Operação CREATE: cria o animal
export async function criarAnimal(data) {
  try {
    const novoAnimal = await prisma.animal.create({
      data: {
        nome: data.nome,
        nomeCientifico: data.nomeCientifico,
        genero: data.genero,
        familia: data.familia,
        descricao: data.descricao,
        popEstimada: data.popEstimada,
        bioma: data.bioma,
        nivelAmeaca: data.nivelAmeaca,
      },
    });
    return novoAnimal;
    // caso não funcione, captura o erro e lança uma mensagem ao usuário
  } catch (error) {
    throw new Error('Erro ao criar animal: ' + error.message);
  }
}

// OPERAÇÃO READ: lista todos os animais
export async function listarAnimais() {
    const animais = await prisma.animal.findMany(); // PARECIDO COM O SELECT DO SQL
    return animais;
  }

// OPERAÇÃO UPDATE: ATUALIZA O ANIMAL COM BASE NOS DADOS FORNECIDOS USANDO O MÉTODO UPDATE DO PRISMA
export async function atualizarAnimal(id, data) {
  try {
    const animalAtualizado = await prisma.animal.update({
      where: { id: id },
      data: {
        nome: data.nome,
        nomeCientifico: data.nomeCientifico,
        genero: data.genero,
        familia: data.familia,
        descricao: data.descricao,
        popEstimada: data.popEstimada,
        bioma: data.bioma,
        nivelAmeaca: data.nivelAmeaca,
      },
    });
    return animalAtualizado;
  } catch (error) {
    throw new Error('Erro ao atualizar animal: ' + error.message);
  }
}