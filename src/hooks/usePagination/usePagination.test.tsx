import { renderHook } from "@testing-library/react";
import usePagination from "./usePagination";

const mockSetState = jest.fn();
const mockState = [1, mockSetState];
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: mockState,
}));

describe("Given a usePagination customHook", () => {
  describe("when its called with method handleUp", () => {
    test("It should call the useState setter with correct page", () => {
      const {
        result: {
          current: { handleUp },
        },
      } = renderHook(() => usePagination());

      handleUp(1);

      expect(mockSetState).toHaveBeenCalledWith(2);
    });
  });
  describe("when its called with method handleDown", () => {
    test("It should call the useState setter with correct page", () => {
      const {
        result: {
          current: { handleUp },
        },
      } = renderHook(() => usePagination());

      handleUp(2);

      expect(mockSetState).toHaveBeenCalledWith(1);
    });
  });
});
