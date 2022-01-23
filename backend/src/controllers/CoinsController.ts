import { Request, Response } from 'express';
import { api } from '../services/api';
import { CoinConversionInfo } from '../model/CoinConversionInfo';

const coinInfo: CoinConversionInfo[] = [];

class ConvertController {
    async create(request: Request, response: Response) {
        const { value, originalCoin, conversionCoin  } = request.body;

        const apiResponse = await api.get(`/${originalCoin}-${conversionCoin}`);

        const coinsNames = originalCoin + conversionCoin;

        const bid = apiResponse.data[coinsNames].bid;

        const coins = new CoinConversionInfo();
       
        const converted = value * bid;

        const convertedValue = Number(converted.toFixed(2));

        Object.assign(coins, {
            originalCoin,
            conversionCoin,
            value,
            convertedValue, 
        })

        coinInfo.push(coins);

        return response.status(201).json(coins);
    }

    async readAll(request: Request, response: Response) {
        return response.status(200).json(coinInfo);
    }

    async readOne(request: Request, response: Response) {
        const { id } = request.params;

        const coin = coinInfo.find(item => item.id === id);

        if (!coin) {
            return response.status(400).json({ message: "Conversion not found" });
        }

        return response.status(200).json(coin);
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params;

        const index = coinInfo.findIndex(item => item.id === id)

        if (index < 0) {
            return response.status(400)
            .json({ message: 'Conversion not found or already deleted.' });
        }
    
        coinInfo.splice(index, 1);
     
        return response.status(204).json();
    }
}

export default new ConvertController;