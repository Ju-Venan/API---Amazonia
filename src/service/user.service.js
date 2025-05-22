import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UserService {
    async getUser() {
      const users = await prisma.user.findMany(); 
      return users;
    }
  
    async criaUser(data) {
    
      const novoUser = await prisma.user.create({
        data: {
             name: data.name,
             email: data.email,
             password: data.password,
        },
      }); 
      return novoUser;
    }
  
    async updateUser(id, data){
        const userUpdate = await prisma.user.update({
            where: {id: id},
            data: {
                name: data.name,
                email: data.email,
                password: data.password,
                updatedAt: new Date(),
            },
        })

        return userUpdate;
    }
  
   async deletaUser(id) {
    const userDeleted = await prisma.user.delete({
        where:{id:id}, 
    })
    return userDeleted;
   }
  }
  
  export default new UserService();
  

