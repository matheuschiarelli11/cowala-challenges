import { Router } from 'express';
import MarketController from '../controllers/MarketController';

const marketRoutes = Router();

marketRoutes.post("/items", MarketController.create);
marketRoutes.put("/items/:id", MarketController.update);
marketRoutes.get("/items", MarketController.readAll);
marketRoutes.get("/items/:id", MarketController.readOne);
marketRoutes.delete("/items/:id", MarketController.delete);

export { marketRoutes };

