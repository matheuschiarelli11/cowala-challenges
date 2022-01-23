import { Request, Response } from 'express';
import { MarketList } from '../model/MarketList';

const marketItems: MarketList[] =  [];

class MarketController {
  async create(request: Request, response: Response) {
    const { item, price } = request.body;

    const List = new MarketList();

    if (price <= 0) {
      return response.status(400).json({ message: 'Cost needs to be higher' });
    }

    Object.assign(List, {
      item,
      price
    });

    marketItems.push(List);

    return response.status(200).json(marketItems);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { newPrice } = request.body;

    const index = marketItems.findIndex(item => item.id === id);

    if (index < 0) {
      return response.status(400).json({ message: 'Item not found.' });
    }

    marketItems[index].price = newPrice;
    
    return response.status(200).json(marketItems[index]);
  }

  async readAll(request: Request, response: Response) {
    return response.status(200).json(marketItems);
  }

  async readOne(request: Request, response: Response) {
    const { id } = request.params;

    const item = marketItems.find(item => item.id === id);
    
    if (!item) {
      return response.status(400).json({ message: "Item not found" });
    }

    return response.status(200).json(item);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const index = marketItems.findIndex(item => item.id === id);

    if (index >= 0) {
      marketItems.splice(index, 1)
    } else {
      return response.status(400)
      .json({ message: 'Item not found or already deleted' });
    }

    return response.status(204).json();
  }
}

export default new MarketController;