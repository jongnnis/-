import express from "express";
import * as storeController from '../controller/store.js' 

const router = express.Router();

// GET   /banapresso/store
router.get('/store', storeController.getStoresInfo)

export default router;