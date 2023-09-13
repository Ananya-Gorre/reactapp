import express, { Router } from 'express';

import { ProductController } from '../controllers/productController';


const router: Router = express.Router();
const productController: ProductController = new ProductController();



router.get("/", productController.getProducts.bind(productController));


export default router; 


/*const express = require("express");
const router = express.Router();
const fakeStoreController = require("../controllers/fakeStoreController");

router.get("/fake-store-data", fakeStoreController.getFakeStoreData);

module.exports = router;*/