import { renderHook } from "@testing-library/react";
import useBeer from "./useBeer";
import beerServices from "../../services/beerServices";
import { beerWithNameAndDescription, partialBeer } from "../../utils/BeerUtils";

jest.mock("../../services/beerServices");

describe("Given a useBeer hook", () => {
  const mockBeerResponseOk = {
    success: true,
    data: { name: "test", image_url: "test", description: "test" },
  };
  const mockBeerResponseOkIncomplete = {
    success: true,
    data: { name: "test", image_url: null, description: "test" },
  };
  const mockBeerResponseKo = { success: false, error: "testError" };

  describe("When it is called with method getRandomBeer", () => {
    test("Then it should call the beerService and return the data if success", async () => {
      (beerServices.getRandomBeer as jest.Mock)
        .mockResolvedValueOnce(mockBeerResponseOkIncomplete)
        .mockResolvedValueOnce(mockBeerResponseOk);
      const {
        result: {
          current: { getRandomBeer },
        },
      } = renderHook(() => useBeer());

      const getRandomBeerResult = await getRandomBeer();

      expect(beerServices.getRandomBeer).toHaveBeenCalled();
      expect(getRandomBeerResult).toEqual(mockBeerResponseOk.data);
    });

    test("Then it should call the beerService and return the data if success false", async () => {
      (beerServices.getRandomBeer as jest.Mock).mockResolvedValue(
        mockBeerResponseKo,
      );
      const {
        result: {
          current: { getRandomBeer },
        },
      } = renderHook(() => useBeer());

      const getRandomBeerResult = await getRandomBeer();

      expect(beerServices.getRandomBeer).toHaveBeenCalled();
      expect(getRandomBeerResult).toEqual(beerWithNameAndDescription);
    });
  });

  describe("When it is called with method getRandomNonAlcoholicBeer", () => {
    test("Then it should call the beerService and return the data if success", async () => {
      (beerServices.getRandomNonAlcoholicBeer as jest.Mock)
        .mockResolvedValueOnce(mockBeerResponseOkIncomplete)
        .mockResolvedValueOnce(mockBeerResponseOk);
      const {
        result: {
          current: { getRandomNonAlcoholicBeer },
        },
      } = renderHook(() => useBeer());

      const getRandomBeerResult = await getRandomNonAlcoholicBeer();

      expect(beerServices.getRandomNonAlcoholicBeer).toHaveBeenCalled();
      expect(getRandomBeerResult).toEqual(mockBeerResponseOk.data);
    });

    test("Then it should call the beerService and return the data if success false", async () => {
      (beerServices.getRandomNonAlcoholicBeer as jest.Mock).mockResolvedValue(
        mockBeerResponseKo,
      );
      const {
        result: {
          current: { getRandomNonAlcoholicBeer },
        },
      } = renderHook(() => useBeer());

      const getRandomBeerResult = await getRandomNonAlcoholicBeer();

      expect(beerServices.getRandomNonAlcoholicBeer).toHaveBeenCalled();
      expect(getRandomBeerResult).toEqual(beerWithNameAndDescription);
    });
  });

  describe("When it is called with method isValidString", () => {
    test("Then it return true if it's valid", async () => {
      const stringToTest = "test string";
      const {
        result: {
          current: { isValidSearchString },
        },
      } = renderHook(() => useBeer());

      const result = isValidSearchString(stringToTest);

      expect(result).toBe(true);
    });

    test("And return false if it's not valid", async () => {
      const stringToTest = "test////string";

      const {
        result: {
          current: { isValidSearchString },
        },
      } = renderHook(() => useBeer());

      const result = await isValidSearchString(stringToTest);

      expect(result).toBe(false);
    });
  });

  describe("When it is called with method searchBeers", () => {
    const text = "test";
    const type = "name";
    const page = 1;
    test("Then it should call the beerService and return the data if success", async () => {
      (beerServices.searchBeers as jest.Mock).mockResolvedValueOnce(
        mockBeerResponseOk,
      );
      const {
        result: {
          current: { searchBeers },
        },
      } = renderHook(() => useBeer());

      const getRandomBeerResult = await searchBeers(text, type, page);

      expect(beerServices.searchBeers).toHaveBeenCalled();
      expect(getRandomBeerResult).toEqual(mockBeerResponseOk.data);
    });

    test("Then it should call the beerService and return the data if success false", async () => {
      (beerServices.searchBeers as jest.Mock).mockResolvedValue(
        mockBeerResponseKo,
      );
      const {
        result: {
          current: { searchBeers },
        },
      } = renderHook(() => useBeer());

      const getRandomBeerResult = await searchBeers(text, type, page);

      expect(beerServices.searchBeers).toHaveBeenCalled();
      expect(getRandomBeerResult).toEqual([partialBeer]);
    });
  });
});
