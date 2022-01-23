import { v4 as uuidV4 } from 'uuid';

class MarketList {
    item: string;
    price: Number;
    id?: string;

    constructor(){
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}



export { MarketList }