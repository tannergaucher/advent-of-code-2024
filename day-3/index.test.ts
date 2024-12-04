import { test, expect } from "vitest";

import {
  getArrayFromInput,
  getValidEquationTotal,
  isValidEquationSide,
} from "./index";

test("it returns an array from the input", () => {
  const arr = getArrayFromInput("./input.txt");
  expect(arr.length).toBeGreaterThan(0);
});

test("it returns true on valid equation side", () => {
  const valid = isValidEquationSide(`506`);
  expect(valid).toBe(true);
});

test("it returns true on valid equation side", () => {
  const valid = isValidEquationSide(`5`);
  expect(valid).toBe(true);
});

test("it returns false on invalid equation side", () => {
  expect(isValidEquationSide(`855how(`)).toBe(false);
});

test("it returns false on invalid equation side", () => {
  expect(isValidEquationSide(`8555`)).toBe(false);
});

test("it gets the valid equation total", () => {
  const arr = getArrayFromInput("./input.txt");

  const total = getValidEquationTotal({
    equations: arr,
  });

  expect(total).toBe(164730528);
});
