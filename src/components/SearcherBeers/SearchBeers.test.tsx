import { render, screen, waitFor } from "@testing-library/react";
import SearcherBeers from "./SearcherBeers";
import userEvent from "@testing-library/user-event";
import useBeer from "../../hooks/useBeer/useBeer";
import { partialBeer } from "../../utils/BeerUtils";

jest.mock("../../hooks/useBeer/useBeer");

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given SearchBeers component", () => {
  const searchBeers = jest.fn().mockResolvedValue([partialBeer]);
  const isLoadingSearch = false;
  const isValidSearchString = jest.fn().mockReturnValue(true);
  const useBeerReturn = { searchBeers, isLoadingSearch, isValidSearchString };
  describe("When it when it rendered", () => {
    const inputRadioValue = "name";
    const page = 1;
    const text = "beer";
    test("Then it should show 3 inputs", () => {
      (useBeer as jest.Mock).mockReturnValue(useBeerReturn);
      render(<SearcherBeers />);

      const input = screen.getByRole("textbox");
      const inputsRadio = screen.getAllByRole("radio");

      expect(input).toBeInTheDocument();
      inputsRadio.forEach((input) => {
        expect(input).toBeInTheDocument();
      });
      expect(inputsRadio).toHaveLength(2);
    });

    test("And if the user write on the text it should call the search function from useBeer", async () => {
      (useBeer as jest.Mock).mockReturnValue(useBeerReturn);

      render(<SearcherBeers />);

      const input = screen.getByRole("textbox");
      await userEvent.type(input, text);

      expect(input).toHaveValue(text);

      expect(searchBeers).not.toHaveBeenCalled();
      jest.advanceTimersByTime(800);
      await waitFor(() => {
        expect(searchBeers).toHaveBeenCalledWith(text, inputRadioValue, page);
      });
    });

    test("And when it's shearching it should show the skeleton", async () => {
      (useBeer as jest.Mock).mockReturnValue({
        ...useBeerReturn,
        isLoadingSearch: true,
      });

      render(<SearcherBeers />);

      const skeletons = screen.getAllByLabelText("skeleton");

      skeletons.forEach((skeleton) => {
        expect(skeleton).toBeInTheDocument();
      });
      expect(skeletons).toHaveLength(10);
    });

    test("And it should show the pagination component", async () => {
      (useBeer as jest.Mock).mockReturnValue(useBeerReturn);
      const paginationText = "pagination";
      render(<SearcherBeers />);

      const pagination = screen.getByLabelText(paginationText);

      expect(pagination).toBeInTheDocument();
    });
  });
});
