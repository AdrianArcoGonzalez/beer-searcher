import { render, screen } from "@testing-library/react";
import Pagination from "./Pagination";
import userEvent from "@testing-library/user-event";

describe("Given a Pagination component", () => {
  const page = 1;
  const disabled = true;
  const nonDisabled = false;
  const previousPageAction = jest.fn();
  const nextPageAction = jest.fn();
  const nextButtonText = "Next Page";
  const previousButtonText = "Previous Page";
  describe("When it's instantiated with its props", () => {
    test("Then it should render 2 buttons and the page number", () => {
      render(
        <Pagination
          page={page}
          nextDisabled={nonDisabled}
          previousDisabled={disabled}
          previousPageAction={previousPageAction}
          nextPageAction={nextPageAction}
        />,
      );
      const previousButton = screen.getByRole("button", {
        name: previousButtonText,
      });
      const nextButton = screen.getByRole("button", {
        name: nextButtonText,
      });
      const pageNumber = screen.getByText(page);

      expect(pageNumber).toBeInTheDocument();
      expect(previousButton).toBeInTheDocument();
      expect(nextButton).toBeInTheDocument();
    });

    test("And if if the buttons are disabled shouldn't call its function", async () => {
      render(
        <Pagination
          page={page}
          nextDisabled={disabled}
          previousDisabled={disabled}
          previousPageAction={previousPageAction}
          nextPageAction={nextPageAction}
        />,
      );
      const previousButton = screen.getByRole("button", {
        name: previousButtonText,
      });
      const nextButton = screen.getByRole("button", {
        name: nextButtonText,
      });

      await userEvent.click(previousButton);
      await userEvent.click(nextButton);
      expect(previousPageAction).not.toHaveBeenCalled();
      expect(nextPageAction).not.toHaveBeenCalled();
    });
    test("And if previousDisabled is false the button should call its function", async () => {
      render(
        <Pagination
          page={page}
          nextDisabled={nonDisabled}
          previousDisabled={nonDisabled}
          previousPageAction={previousPageAction}
          nextPageAction={nextPageAction}
        />,
      );
      const previousButton = screen.getByRole("button", {
        name: previousButtonText,
      });
      const nextButton = screen.getByRole("button", {
        name: nextButtonText,
      });

      await userEvent.click(previousButton);
      await userEvent.click(nextButton);

      expect(previousPageAction).toHaveBeenCalled();
      expect(nextPageAction).toHaveBeenCalled();
    });
  });
});
