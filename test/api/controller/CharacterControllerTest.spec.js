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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CharacterCacheRepository_1 = require("../../../src/repositories/cache/CharacterCacheRepository");
const CharacterServices_1 = require("../../../src/services/CharacterServices");
const CharacterController_1 = require("../../../src/api/controller/CharacterController");
const CharacterFeatures_1 = __importDefault(require("../../features/CharacterFeatures"));
jest.mock("../../../src/services/CharacterServices");
jest.mock("../../../src/repositories/cache/CharacterCacheRepository");
beforeEach(() => {
    jest.clearAllMocks();
});
describe("getCharacters", () => {
    const mockFoundsCriteria = { name: "Test Character" };
    const mockCacheKey = "name:Test Character";
    const mockCharacters = [CharacterFeatures_1.default];
    it("returns characters from cache if available", () => __awaiter(void 0, void 0, void 0, function* () {
        CharacterCacheRepository_1.getCharByCache.mockResolvedValueOnce(JSON.stringify(mockCharacters));
        const result = yield CharacterController_1.getCharacters.characters(mockFoundsCriteria);
        expect(result).toEqual(mockCharacters);
        expect(CharacterServices_1.getCharactersByFilter).not.toHaveBeenCalled();
    }));
    it("fetches characters using the service and saves to cache if not in cache", () => __awaiter(void 0, void 0, void 0, function* () {
        CharacterCacheRepository_1.getCharByCache.mockResolvedValueOnce(null);
        CharacterServices_1.getCharactersByFilter.mockReturnValue(mockCharacters);
        CharacterCacheRepository_1.setChar.mockResolvedValue('Mock process');
        const result = yield CharacterController_1.getCharacters.characters(mockFoundsCriteria);
        expect(result[0].id).toEqual(mockCharacters[0].id);
        expect(CharacterCacheRepository_1.getCharByCache).toHaveBeenCalledWith(mockCacheKey);
        expect(CharacterServices_1.getCharactersByFilter).toHaveBeenCalledWith(mockFoundsCriteria);
        expect(CharacterCacheRepository_1.setChar).toHaveBeenCalledWith(mockCacheKey, mockCharacters);
    }));
    it('should generate error when call cacheData', () => __awaiter(void 0, void 0, void 0, function* () {
        CharacterCacheRepository_1.getCharByCache.mockRejectedValue(new Error('Mock error'));
        const result = yield CharacterController_1.getCharacters.characters(mockFoundsCriteria);
        expect(result.length).toEqual(0);
    }));
});
