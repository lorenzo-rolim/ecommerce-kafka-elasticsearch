import { PrismaClient } from "@prisma/client";
import { ICatalogRepository } from "../interface/catalogRespository.interface";
import { Product } from "../models/product.model";
import { ProductFactory } from "../utils/fixtures";

export class CatalogRepository implements ICatalogRepository {

  _prisma: PrismaClient;

  constructor() {
    this._prisma = new PrismaClient();
  }

  async create(data: Product): Promise<Product> {
    return this._prisma.product.create({ data })
  }
  async update(data: Product): Promise<Product> {
    return this._prisma.product.update({
      where: {
        id: data.id
      },
      data
    })
  }
  async delete(id: number) {
    return this._prisma.product.delete({
      where: {
        id
      }
    })
  }
  async find(limit: number, offset: number): Promise<Product[]> {
    return this._prisma.product.findMany({
      take: limit,
      skip: offset
    });
  }
  async findOne(id: number): Promise<Product> {
    return this._prisma.product.findFirstOrThrow({
      where: {
        id
      },
    })
  }
}
