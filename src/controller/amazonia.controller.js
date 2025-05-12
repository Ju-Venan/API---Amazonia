import UserService from "../service/amazonia.service.js"

class UserController {
    
    async getAllUsers(req, res) {
      try {
        const users = await userService.getUser();
        return res.status(200).json(users);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao buscar usuários" });
      }
    }
  
    async createUser(req, res) {
      const { id, name, email, password, createdAt } = req.body;
  
      try {
        if (!name || !email || !password) {
          return res.status(400).json({ message: "Campos obrigatórios faltando" });
        }
  
        const userData = { id, name, email, password, createdAt };
        const newUser = await userService.criaUser(userData);
        return res.status(201).json(newUser);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao criar usuário" });
      }
    }
  
    async updateUser(req, res) {
      const { id } = req.params;
      const { name, email, password } = req.body;
  
      try {
        if (!name || !email || !password) {
          return res.status(400).json({ message: "Campos obrigatórios faltando" });
        }
  
        const updatedUser = await userService.updateUser(id, { name, email, password });
        return res.status(200).json(updatedUser);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao atualizar usuário" });
      }
    }
  
    async deleteUser(req, res) {
      const { id } = req.params;
  
      try {
        const deletedUser = await userService.deletaUser(id);
        return res.status(204).json(deletedUser); // Status 204 para deletar com sucesso, sem corpo
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao deletar usuário" });
      }
    }
  }
  
  export default new UserController();