
import express, { Express, Router } from 'express';
import cors from 'cors';

import router from './routes/productRoute';

const axios = require("axios");

const app = express();

const port = 5000;




app.use(express.json());

app.use(cors());
app.use('/products', router);









// app.get("/fake-store-data", async (req, res) => {

//     try {

//         const response = await axios.get("https://fakestoreapi.com/products");

//         const data = response.data;

//         res.json(data);

//     } catch (error) {

//         console.error("Error fetching data from the fake store API:", error);

//         res.status(500).json({ error: "An error occurred while fetching data" });

//     }

// });
app.listen(port, () => {

    console.log(`Server is running on port ${port}`);

});
