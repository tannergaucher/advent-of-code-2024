import { expect, test } from "vitest";

import { createRowsFromInput, compareRows } from "./index";

test("creates rows from input", () => {
  const rows = createRowsFromInput("./input.txt");
  expect(rows.left.length).toBeGreaterThan(0);
  expect(rows.right.length).toBeGreaterThan(0);
});

test("compares rows and returns the total difference", () => {
  const rows = createRowsFromInput("./input.txt");
  const totalDifference = compareRows(rows);
  expect(totalDifference).toBe(2192892);
});
