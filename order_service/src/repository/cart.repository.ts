import { DB } from "../db/db.connection";
import { carts } from "../db/schema";
import { CartRespositoryType } from "../types/repository.type";

const db = {};

const createCart = async (input: any): Promise<{}> => {

    const result = await DB
        .insert(carts)
        .values({
            customerId: 123,
        })
        .returning({ cartId: carts.id })


    return result;
}

const findCart = async (input: any): Promise<{}> => {
    return Promise.resolve({})
}

const updateCart = async (input: any): Promise<{}> => {
    return Promise.resolve({})
}

const deleteCart = async (input: any): Promise<{}> => {
    return Promise.resolve({})
}


export const CartRespository: CartRespositoryType = {
    create: createCart,
    find: findCart,
    update: updateCart,
    delete: deleteCart
}