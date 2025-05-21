import PlantsService from "../service/plants.service.js";
const plantService = new PlantsService(); 

class PlantsController{
    async create(req, res){
        // Desestruturação dos objetos 
        const{
            name,
            specie,
            botanicalDescription,
            naturalHabitat,
            benefits
        } = req.body;

        // Validação de preenchimento dos dados
        if(
            !name ||
            !specie ||
            !botanicalDescription ||
            !naturalHabitat ||
            !benefits
        ){
            return res.status(400).json({ message: "Você deve preencher todos os dados"});
        }

        // Conecetando com o service para criar planta com os dados passados no corpo 
        try {
            const plantData = req.body;
            const newPlant = await plantService.createPlant(plantData)
            res.status(201).json({ message: "Planta criada com sucesso!"})
        } catch (error) {
            res.status(400).json({ error: error.message});
        }
    }

    async read(req, res){
        //Conectando com o service para ler todas as plantas cadastradas 
        try{
            const allPlants = await plantService.getPlants();
            res.status(200).json({ plantas: allPlants })
        } catch (error) {
            res.status(400).json({ error: error.message});
        }
    }

    async update(req, res){
         // Desestruturação dos objetos 
        const{
            name,
            specie,
            botanicalDescription,
            naturalHabitat,
            benefits
        } = req.body;

        // Validação de preenchimento dos dados
        if(
            !name ||
            !specie ||
            !botanicalDescription ||
            !naturalHabitat ||
            !benefits
        ){
            return res.status(400).json({ message: "Você deve preencher todos os dados"})
        }

        //Conecta com o service para atualizar a planta pelo id passado no paramentro
        try{
            const id = req.params.id;
            const plantData = req.body; // retorna a planta atualizada com as informações passadas no corpo
            const updatePlant = await plantService.updatePlant(id, plantData)
            res.status(200).json({ message: "Planta atualizada com sucesso!" })
        } catch (error) {
            if (error.code === 'P2025'){
               return res.status(404).json({ message: "Planta não encontrada!" })
            } res.status(400).json({ error: error.message});
        }
    }

    async delete(req, res){
        //Conecta com o service para deletar a planta pelo id passado no paramentro
        try{
            const id = req.params.id;
            const deletePlant = await plantService.deletePlant(id)
            return res.status(200).json({ message: "Planta deletada com sucesso!" })
        } catch (error) {
            if (error.code === 'P2025'){
               return res.status(404).json({ message: "Planta não encontrada!" })
            } return res.status(400).json({ error: error.message });
        }
    }
}

export default new PlantsController();