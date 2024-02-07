import { act, render, screen, waitFor } from "@testing-library/react";
import RandomBeerSection from "./RandomBeerSection";
import useBeer from "../../hooks/useBeer/useBeer";
import { beerWithNameImageAndDescription } from "../../utils/BeerUtils";
import userEvent from "@testing-library/user-event";

jest.mock("../../hooks/useBeer/useBeer");

describe("Given a RandomBeerSection component", () => {
  const mockGetRandomBeer = jest
    .fn()
    .mockReturnValue(beerWithNameImageAndDescription);
  (useBeer as jest.Mock).mockReturnValue({
    getRandomBeer: mockGetRandomBeer,
    isLoadingRandomBeer: false,
    getRandomNonAlcoholicBeer: jest.fn(),
  });
  describe("When it is rendered", () => {
    test("Then it call the getRandomBeer method from useBeer", () => {
      const mockGetRandomBeer = jest
        .fn()
        .mockReturnValue(beerWithNameImageAndDescription);
      (useBeer as jest.Mock).mockReturnValue({
        getRandomBeer: mockGetRandomBeer,
        isLoadingRandomBeer: false,
        getRandomNonAlcoholicBeer: jest.fn(),
      });

      render(<RandomBeerSection />);

      act(() => {
        expect(mockGetRandomBeer).toHaveBeenCalled();
      });
    });
  });

  test("And if the user press to the button to get another one it should call getRandomBeer method from useBeer", async () => {
    const mockGetRandomBeer = jest
      .fn()
      .mockReturnValue(beerWithNameImageAndDescription);
    (useBeer as jest.Mock).mockReturnValue({
      getRandomBeer: mockGetRandomBeer,
      isLoadingRandomBeer: false,
      getRandomNonAlcoholicBeer: jest.fn(),
    });

    render(<RandomBeerSection />);
    const button = screen.getByText("Another Beer");

    await act(async () => {
      await userEvent.click(button);
      await waitFor(() => {
        expect(mockGetRandomBeer).toHaveBeenCalledTimes(2);
      });
    });
  });

  test("And if the user press to the button to get another nonAlcoholicBeer it should call getRandomNonAlcoholicBeer method from useBeer", async () => {
    const mockGetRandomBeer = jest
      .fn()
      .mockReturnValue(beerWithNameImageAndDescription);
    const mockGetRandomNonAlcoholicBeer = jest
      .fn()
      .mockResolvedValue(beerWithNameImageAndDescription);

    (useBeer as jest.Mock).mockReturnValue({
      getRandomBeer: mockGetRandomBeer,
      isLoadingRandomBeer: false,
      getRandomNonAlcoholicBeer: mockGetRandomNonAlcoholicBeer,
    });

    render(<RandomBeerSection />);
    const button = screen.getByText("Random non alcoholic beer");

    await act(async () => {
      await userEvent.click(button);
      await waitFor(() => {
        expect(mockGetRandomNonAlcoholicBeer).toHaveBeenCalled();
      });
    });
  });
});
