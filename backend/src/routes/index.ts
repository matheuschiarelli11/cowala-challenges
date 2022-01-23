import { Router } from 'express';
import { marketRoutes } from './market.routes';
import { coinRoutes } from './coins.routes';

const routes = Router();

routes.use(marketRoutes);
routes.use(coinRoutes);

export default routes;