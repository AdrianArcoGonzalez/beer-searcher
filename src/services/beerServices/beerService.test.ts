import beerServices from ".";
import customRequest from "../../utils/customRequest";

jest.mock("../../utils/customRequest");

describe("Given a beerService", () => {
  describe("When it is called with getRandomBeer", () => {
    test("Then it should return a beer and a succes if it's ok", async () => {
      const mockResponse = {
        data: [{ name: "beer" }],
        success: true,
      };
      const expectedReturn = {
        data: { name: "beer" },
        success: true,
      };
      (customRequest as jest.Mock).mockResolvedValue(mockResponse);

      const data = await beerServices.getRandomBeer();

      expect(data).toEqual(expectedReturn);
    });

    test("Then it should return an error and a success if it's ko", async () => {
      const mockResponse = { error: "testError", success: false };
      (customRequest as jest.Mock).mockResolvedValue(mockResponse);

      const data = await beerServices.getRandomBeer();

      expect(data).toEqual(mockResponse);
    });
  });

  describe("When it is called with getRandomNonAlcoholicBeer", () => {
    test("Then it should return a beer and a succes if it's ok", async () => {
      const mockResponse = {
        data: [{ name: "beer" }],
        success: true,
      };
      const expectedReturn = {
        data: { name: "beer" },
        success: true,
      };
      (customRequest as jest.Mock).mockResolvedValue(mockResponse);

      const data = await beerServices.getRandomNonAlcoholicBeer();

      expect(data).toEqual(expectedReturn);
    });

    test("Then it should return an error and a success if it's ko", async () => {
      const mockResponse = { error: "testError", success: false };
      (customRequest as jest.Mock).mockResolvedValue(mockResponse);

      const data = await beerServices.getRandomNonAlcoholicBeer();

      expect(data).toEqual(mockResponse);
    });
  });

  describe("When it is called with searchBeers", () => {
    const text = "beer";
    const findBy = "name";
    const page = 1;
    test("Then it should return a beer and a succes if it's ok", async () => {
      const mockResponse = {
        data: [{ name: "beer" }],
        success: true,
      };

      (customRequest as jest.Mock).mockResolvedValue(mockResponse);

      const data = await beerServices.searchBeers(text, findBy, page);

      expect(data).toEqual(mockResponse);
    });

    test("Then it should return an error and a success if it's ko", async () => {
      const mockResponse = { error: "testError", success: false };
      (customRequest as jest.Mock).mockResolvedValue(mockResponse);

      const data = await beerServices.searchBeers(text, findBy, page);

      expect(data).toEqual(mockResponse);
    });
  });
});
