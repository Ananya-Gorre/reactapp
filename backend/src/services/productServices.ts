const axios = require("axios");



export class ProductService {

    async getProducts() {

        try {

            const response = await axios.get("https://fakestoreapi.com/products");

            return response.data;

        } catch (error) {
            console.error(error);
            throw error;

        }

    }

}