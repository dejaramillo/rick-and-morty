import {getCharByCache, setChar} from "../../../src/repositories/cache/CharacterCacheRepository";
import {getCharactersByFilter} from "../../../src/services/CharacterServices";
import {getCharacters} from "../../../src/api/controller/CharacterController";
import characterMock from "../../features/CharacterFeatures";


jest.mock("../../../src/services/CharacterServices");
jest.mock("../../../src/repositories/cache/CharacterCacheRepository");


beforeEach(() => {
    jest.clearAllMocks();
});

describe("getCharacters", () => {
    const mockFoundsCriteria = { name: "Test Character" };
    const mockCacheKey = "name:Test Character";
    const mockCharacters = [characterMock];

    it("returns characters from cache if available", async () => {
        (getCharByCache as jest.Mock ).mockResolvedValueOnce(JSON.stringify(mockCharacters));

        const result = await getCharacters.characters(mockFoundsCriteria);

        expect(result).toEqual(mockCharacters);
        expect(getCharactersByFilter).not.toHaveBeenCalled();
    });

    it("fetches characters using the service and saves to cache if not in cache", async () => {
        (getCharByCache as jest.Mock ).mockResolvedValueOnce(null);
        (getCharactersByFilter as jest.Mock ).mockReturnValue(mockCharacters);
        (setChar as jest.Mock).mockResolvedValue('Mock process');

        const result = await getCharacters.characters(mockFoundsCriteria);

        expect(result[0].id).toEqual(mockCharacters[0].id);
        expect(getCharByCache).toHaveBeenCalledWith(mockCacheKey);
        expect(getCharactersByFilter).toHaveBeenCalledWith(mockFoundsCriteria);
        expect(setChar).toHaveBeenCalledWith(mockCacheKey, mockCharacters);
    });
    it('should generate error when call cacheData', async () => {
        (getCharByCache as jest.Mock ).mockRejectedValue(new Error('Mock error'));

        const result = await getCharacters.characters(mockFoundsCriteria);

        expect(result.length).toEqual(0);

    });
});
