import { expect, test } from "vitest";

import { createSortedRows, compareRows } from "./index";

test("creates sorted rows from input", () => {
  const rows = createSortedRows("./input.txt");
  expect(rows.left.length).toBeGreaterThan(0);
  expect(rows.right.length).toBeGreaterThan(0);
});

test("compares rows and returns the difference total", () => {
  const rows = createSortedRows("./input.txt");
  const difference = compareRows(rows);
  expect(difference).toBe(2192892);
});
