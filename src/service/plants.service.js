import { PrismaClient } from '@prisma/client'
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient(); // instancia do prisma

class PlantsService{
//C - Cadastrando planta
    async createPlant(data){ // data permite que seja passado um objeto de dados das plantas 
        const newPlant = await prisma.plant.create({
            data:{
                id: uuidv4(),
                name: data.name,
                specie: data.specie,
                botanicalDescription: data.botanicalDescription,
                naturalHabitat: data.naturalHabitat,
                benefits: data.benefits
            }
        })
        return newPlant;
    }

//R - Lendo todas as plantas cadastradas 
    async getPlants(){ 
        const plants = await prisma.plant.findMany()
        return plants
    }

//U - Atualizando planta cadastrada pelo ID
    async updatePlant(id, data){
        const updatePlant = await prisma.plant.update({
            where: {
                id: id
            },
            data: {
                name: data.name,
                specie: data.specie,
                botanicalDescription: data.botanicalDescription,
                naturalHabitat: data.naturalHabitat,
                benefits: data.benefits
            },
        })
        return updatePlant
    }

//D - Deletando planta cadastrada pelo ID
    async deletePlant(id){
        const deletePlant = await prisma.plant.delete({
            where: {
                id: id,
            },
        })
        return deletePlant
    }
}

export default PlantsService;