import * as storeRepository from '../data/store.js'

export async function getStoresInfo(req, res){
    console.log(1)
    const data = await storeRepository.storeInfo()
    res.status(200).json(data)
}