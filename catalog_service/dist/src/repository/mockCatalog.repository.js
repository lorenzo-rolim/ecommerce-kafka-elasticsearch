"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockCatalogRepository = void 0;
class MockCatalogRepository {
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const mockProduct = Object.assign({ id: 123 }, data);
            return Promise.resolve(mockProduct);
        });
    }
    update(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(data);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(id);
        });
    }
    find(limit, offset) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve([]);
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve({ id });
        });
    }
}
exports.MockCatalogRepository = MockCatalogRepository;
