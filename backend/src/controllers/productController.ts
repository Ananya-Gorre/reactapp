import { ProductService } from "../services/productServices";

import { Request, Response } from "express";

const productService = new ProductService();

export class ProductController {

  public async getProducts(req: Request, res: Response): Promise<void> {

    try {

      const products = await productService.getProducts();

      res.json(products);

    } catch (error) {

        console.error('Error getting products:', error);
        res.status(500).send('Error retrieving jobs');

    }

  }

} 


