import { expect, test } from "vitest";

import {
  getRowsFromInput,
  isGraduallyAscending,
  isGraduallyDescending,
  countValidRows,
} from "./index";

test("it gets rows from input", () => {
  const rows = getRowsFromInput("./input.txt");

  console.log(rows);
  expect(rows.length).toBeGreaterThan(0);
});

test("it returns true on gradually ascending sequence", () => {
  expect(isGraduallyAscending([19, 21, 24, 27, 28])).toBe(true);
});

test("it returns false on non-gradually ascending sequence", () => {
  expect(isGraduallyAscending([19, 21, 34, 47, 58])).toBe(false);
});

test("it returns false on non-ascending sequence", () => {
  expect(isGraduallyAscending([19, 21, 24, 29, 30])).toBe(false);
});

test("it returns true on gradually descending sequence", () => {
  expect(isGraduallyDescending([20, 19, 17, 14, 12])).toBe(true);
});

test("it returns false on non-descending sequence", () => {
  expect(isGraduallyDescending([20, 22, 24, 26, 28])).toBe(false);
});

test("it returns false on non-gradually descending sequence", () => {
  expect(isGraduallyDescending([20, 19, 18, 16, 12])).toBe(false);
});

test("is counts the valid rows", () => {
  const rows = getRowsFromInput("./input.txt");

  const validRowCount = countValidRows(rows);

  expect(validRowCount).toBe(407);
});
