import express from 'express';
import UserController from "../controller/amazonia.controller.js"

const router = express.Router();

router.get("/users", UserController.getAllUsers);

router.post("/users", UserController.createUser);

router.put("/users/:id", UserController.updateUser);

router.delete("/users/:id", UserController.deleteUser);

export default router;