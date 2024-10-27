import { ICatalogRepository } from "../interface/catalogRespository.interface";
import { Product } from "../models/product.model";

export class MockCatalogRepository implements ICatalogRepository {
    async create(data: Product): Promise<Product> {
        const mockProduct = {
            id: 123,
            ...data,
        } as Product;

        return Promise.resolve(mockProduct);
    }
    async update(data: Product): Promise<Product> {
        return Promise.resolve(data as unknown as Product);
    }
    async delete(id: number) {
        return Promise.resolve(id);
    }
    async find(limit: number, offset: number): Promise<Product[]> {
        return Promise.resolve([]);
    }
    async findOne(id: number): Promise<Product> {
        return Promise.resolve({ id } as unknown as Product)
    }
}
