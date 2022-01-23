import { Router } from 'express'
import CoinsController from '../controllers/CoinsController';

const coinRoutes = Router();

coinRoutes.post("/coins", CoinsController.create);
coinRoutes.get("/coins", CoinsController.readAll);
coinRoutes.get("/coins/:id", CoinsController.readOne);
coinRoutes.delete("/coins/:id", CoinsController.delete);

export { coinRoutes };