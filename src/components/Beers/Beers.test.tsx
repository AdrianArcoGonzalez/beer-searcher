import { render, screen } from "@testing-library/react";
import Beers from "./Beers";
import { partialBeer } from "../../utils/BeerUtils";

describe("Given a Beers component", () => {
  describe("When it is called with a list of beers", () => {
    test("Then it should render a list of beers", () => {
      const beers = [partialBeer];
      render(<Beers beers={beers} />);

      const beerItem = screen.getByText(partialBeer.name);

      expect(beerItem).toBeInTheDocument();
    });
  });

  describe("When it is called with an empty list of beers", () => {
    test("Then it should render a text", () => {
      const notFoundText = "No Beers Found";
      render(<Beers beers={[]} />);

      const notFound = screen.getByText(notFoundText);

      expect(notFound).toBeInTheDocument();
    });
  });
});
