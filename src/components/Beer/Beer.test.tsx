import { render, screen } from "@testing-library/react";
import Beer from "./Beer";
import {
  beerWithNameImageAndDescription,
  partialBeer,
} from "../../utils/BeerUtils";

describe("Given a Beer component", () => {
  describe("When it's instantiated with a Beer", () => {
    test("then it should show a title an image and a description", () => {
      render(<Beer beer={beerWithNameImageAndDescription} />);

      const image = screen.getByRole("img");
      const description = screen.getByText(
        beerWithNameImageAndDescription.description,
      );
      const title = screen.getByText(beerWithNameImageAndDescription.name);

      expect(description).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(image).toBeInTheDocument();
    });
  });

  describe("When it's instantiated with a Beer and Search on true", () => {
    test("then it should show a title an image and a description and more data", () => {
      const abvText = `Alcohol By Volume: ${partialBeer.abv}`;
      render(<Beer beer={partialBeer} isSearch />);

      const image = screen.getByRole("img");
      const description = screen.getByText(partialBeer.description);
      const title = screen.getByText(partialBeer.name);
      const abv = screen.getByText(abvText);
      const pairing = screen.getByText(partialBeer.food_pairing[0]);

      expect(description).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(image).toBeInTheDocument();
      expect(abv).toBeInTheDocument();
      expect(pairing).toBeInTheDocument();
    });
  });
});
