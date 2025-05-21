import animalService from "../service/animal.Service.js";

class animalController{

//FUNÇÃO DE CRIAR ANIMAL
 async criarAnimal(req, res) {
  try {
    const novoAnimal = await animalService.criarAnimal(req.body); // cria no corpo da requisição
    res.status(201).json(novoAnimal);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// FUNÇÃO DE LISTAR OS ANIMAIS
 async listarAnimais(req, res) {
  try {
    const animais = await animalService.listarAnimais(); 
    res.status(200).json(animais);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// FUNÇÃO DE ATUALIZAR O ANIMAL
async atualizarAnimal(req, res) {
  const { id } = req.params;
  try {
    const animalAtualizado = await animalService.atualizarAnimal(id, req.body);
    res.status(200).json(animalAtualizado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// FUNÇÃO DE EXCLUIR O ANIMAL
async excluirAnimal(req, res) {
  const { id } = req.params; // a função está extraindo o parâmetro id da URL da requisição. Por exemplo, se a URL for /animais/123, o id será 123.
  try {
    const animalExcluido = await animalService.excluirAnimal(id);
    res.status(200).json(animalExcluido);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
}

export default new animalController();