import axios from "axios";
import { NotFoundError } from "../error";
import { logger } from "../logger";
import { Product } from "../../dto/product.dto";

const CATALOG_BASE_URL = process.env.CATALOG_BASE_URL || 'http://localhost:9001';

export const GetProductDetails = async (productId: number) => {
    try {
        console.log(productId)
        const response = await axios.get<Product>(`${CATALOG_BASE_URL}/products/${productId}`)
        const product = response.data;
        return product;
    } catch (error) {
        const err = error as Error;
        logger.error(err);
        throw new NotFoundError("Product not found");
    }
};