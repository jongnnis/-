import MongoDb from 'mongodb'
import { getStores } from '../db/database.js';

export async function storeInfo() {
    console.log(2)
    return getStores()
        .find()
        .toArray()
        .then(mapStores)
}

function mapOptionalStores(store){
    return store? {...store, id: store._id.toString()} : store;
}

function mapStores(stores){
    return stores.map(mapOptionalStores)
}