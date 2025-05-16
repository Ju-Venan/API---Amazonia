import cors from "cors";
import express from "express";

const globalMiddleware = (app) => {

  app.use(cors());

  app.use(express.json());

};

export default globalMiddleware;
