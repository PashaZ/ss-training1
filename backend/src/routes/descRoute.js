import express from "express";
const descRoute = express.Router();
import { descController } from "../controllers/descController";

descRoute.get("/products/:id", descController);

export default descRoute;
