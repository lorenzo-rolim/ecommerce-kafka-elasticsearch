import { CartRespositoryType } from './../types/repository.type';
import * as Repository from "../repository/cart.repository";

import { CreateCart } from './cart.service';

describe("cartService", () => {
    let repo: CartRespositoryType;

    beforeEach(() => {
        repo = Repository.CartRespository;
    })

    afterEach(() => {
        repo = {} as CartRespositoryType;
    })

    it("should return correct data while creating cart", async () => {
        const mockCart = {
            title: "smartphone",
            amount: 2000
        }

        jest
            .spyOn(Repository.CartRespository, "create")
            .mockImplementationOnce(() => Promise.resolve({
                message: "fake response from cart repository",
                input: mockCart
            }))

        const res = await CreateCart(mockCart, repo)

        expect(res).toEqual({
            message: "fake response from cart repository",
            input: mockCart
        })
    })

})