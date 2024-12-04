import { test, expect } from "vitest";

import {
  getRowsFromInput,
  getHorizontalCount,
  getVerticalCount,
  getDiagonalCount,
} from "./index";

test("it gets rows from input", () => {
  expect(getRowsFromInput("./input.txt").length).toBeGreaterThan(0);
});

test("it gets horizontal, regular orientation matches", () => {
  const row = `XMMAMXMMSMXMMXMSMAXMAXSXMXXMXSMXXASMXSXMXMXMXMXXXXMASMSMAMMMSSSMASXMXSASXMXAAXXMMXAMXSXMASXAXMAMXXXMSAMSAMXXXMAXSAMXSAMMXXXSSMSMSSXMSMAAXXMX`;

  const count = getHorizontalCount({
    row,
    orientation: "regular",
  });

  expect(count).toBeDefined();
});

test("it gets horizontal, backward orientation matches", () => {
  const row = `XMMAMXMMSMXMMXMSMAXMAXSXMXXMXSMXXASMXSXMXMXMXMXXXXMASMSMAMMMSSSMASXMXSASXMXAAXXMMXAMXSXMASXAXMAMXXXMSAMSAMXXXMAXSAMXSAMMXXXSSMSMSSXMSMAAXXMX`;

  const count = getHorizontalCount({
    row,
    orientation: "backward",
  });

  expect(count).toBeDefined();
});

test("it gets vertical, regular orientation matches", () => {
  const column = `XMMAMXMMSMXMMXMSMAXMAXSXMXXMXSMXXASMXSXMXMXMXMXXXXMASMSMAMMMSSSMASXMXSASXMXAAXXMMXAMXSXMASXAXMAMXXXMSAMSAMXXXMAXSAMXSAMMXXXSSMSMSSXMSMAAXXMX`;

  const count = getVerticalCount({
    column,
    orientation: "regular",
  });

  expect(count).toBeDefined();
});

test("it gets vertical, backward orientation matches", () => {
  const column = `XMMAMXMMSMXMMXMSMAXMAXSXMXXMXSMXXASMXSXMXMXMXMXXXXMASMSMAMMMSSSMASXMXSASXMXAAXXMMXAMXSXMASXAXMAMXXXMSAMSAMXXXMAXSAMXSAMMXXXSSMSMSSXMSMAAXXMX`;

  const count = getVerticalCount({
    column,
    orientation: "backward",
  });

  expect(count).toBeDefined();
});

test("it gets diagonal, regular orientation, right direction matches");

test("it gets diagonal, backward orientation, right direction matches");

test("it gets diagonal, regular orientation, left direction matches");

test("it gets diagonal, backward orientation, left direction matches");
