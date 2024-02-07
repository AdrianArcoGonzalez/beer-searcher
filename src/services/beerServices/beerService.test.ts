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
});
