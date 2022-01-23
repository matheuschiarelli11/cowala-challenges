import { v4 as uuidV4 } from 'uuid';

class CoinConversionInfo {
    originalCoin: string;
    conversionCoin: string;
    value: Number;
    convertedValue: string;
    id?: string;

    constructor(){
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}



export { CoinConversionInfo }