import { renderHook } from "@testing-library/react";
import usePagination from "./usePagination";
import { useState } from "react";
const mockState = [1, jest.fn()];
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given a usePagination customHook", () => {
  describe("when its called with method handleUp", () => {
    test("It should call the useState setter with correct page", () => {
      (useState as jest.Mock).mockReturnValue(mockState);
      const {
        result: {
          current: { handleUp },
        },
      } = renderHook(() => usePagination());

      handleUp(1);

      expect(mockState[1]).toHaveBeenCalledWith(2);
    });
  });
  describe("when its called with method handleDown", () => {
    test("It should call the useState setter with correct page", () => {
      (useState as jest.Mock).mockReturnValue(mockState);
      const {
        result: {
          current: { handleDown },
        },
      } = renderHook(() => usePagination());

      handleDown(2);

      expect(mockState[1]).toHaveBeenCalledWith(1);
    });
  });
});
