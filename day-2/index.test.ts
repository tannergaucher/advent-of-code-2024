import { expect, test } from "vitest";

import { getRowsFromInput, isGradual, countValidRows } from "./index";

test("it gets rows from input", () => {
  expect(getRowsFromInput("./input.txt").length).toBeGreaterThan(0);
});

test("it returns true on gradually ascending sequence", () => {
  expect(isGradual("ascending", [19, 21, 24, 27, 28])).toBe(true);
});

test("it returns false on non-gradually ascending sequence", () => {
  expect(isGradual("ascending", [19, 21, 34, 47, 58])).toBe(false);
});

test("it returns false on non-ascending sequence", () => {
  expect(isGradual("ascending", [19, 21, 24, 29, 30])).toBe(false);
});

test("it returns true on gradually descending sequence", () => {
  expect(isGradual("descending", [20, 19, 17, 14, 12])).toBe(true);
});

test("it returns false on non-descending sequence", () => {
  expect(isGradual("descending", [20, 22, 24, 26, 28])).toBe(false);
});

test("it returns false on non-gradually descending sequence", () => {
  expect(isGradual("descending", [20, 19, 18, 16, 12])).toBe(false);
});

test("is counts the valid rows", () => {
  expect(countValidRows(getRowsFromInput("./input.txt"))).toBe(407);
});
