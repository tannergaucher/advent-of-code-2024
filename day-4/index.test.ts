import { test, expect } from "vitest";

import {
  getRowsFromInput,
  getColumnsFromInput,
  getStraightCount,
  getDiagonalCount,
  getTotalCount,
} from "./index";

test("it gets rows from input", () => {
  const rows = getRowsFromInput("./input.txt");

  expect(rows.length).toBe(140);
});

test("it gets columns from input", () => {
  const columns = getColumnsFromInput("./input.txt");

  expect(columns.length).toBe(140);
});

test("it gets straight, regular orientation matches", () => {
  const row = `XMMAMXMMSMXMMXMSMAXMAXSXMXXMXSMXXASMXSXMXMXMXMXXXXMASMSMAMMMSSSMASXMXSASXMXAAXXMMXAMXSXMASXAXMAMXXXMSAMSAMXXXMAXSAMXSAMMXXXSSMSMSSXMSMAAXXMX`;

  const count = getStraightCount({
    sequence: row,
    orientation: "regular",
  });

  console.log(count);

  expect(count).toBeDefined();
});

test("it gets straight, backward orientation matches", () => {
  const column = `XMMAMXMMSMXMMXMSMAXMAXSXMXXMXSMXXASMXSXMXMXMXMXXXXMASMSMAMMMSSSMASXMXSASXMXAAXXMMXAMXSXMASXAXMAMXXXMSAMSAMXXXMAXSAMXSAMMXXXSSMSMSSXMSMAAXXMX`;

  const count = getStraightCount({
    sequence: column,
    orientation: "backward",
  });

  expect(count).toBeDefined();
});

test("it gets diagonal, regular orientation, right direction matches", () => {
  const count = getDiagonalCount({
    rows: [
      `XMMAMXMMSMXMMXMSMAXMA`,
      `SMSAXXXXXXAMAMXAXXMMS`,
      `SXAMSMXAMSSMMASXSSMMA`,
      `SAXSSAMAAAXAXMAMMMAMM`,
    ],
    orientation: "regular",
    direction: "right",
  });

  expect(count).toBe(1);
});

test("it gets diagonal, backward orientation, right direction matches", () => {
  const count = getDiagonalCount({
    rows: [
      `SMMAMXMMSMXMMXMSMAXMA`,
      `SASAXXXXXXAMAMXAXXMMS`,
      `SXMMSMXAMSSMMASXSSMMA`,
      `SAXXXAMAAAXAXMAMMMAMM`,
    ],
    orientation: "backward",
    direction: "right",
  });

  expect(count).toBe(1);
});

test("it gets diagonal, regular orientation, left direction matches", () => {
  const count = getDiagonalCount({
    rows: [
      `SMMXMXMMSMXMMXMSMAXMA`,
      `SAMMXXXXXXAMAMXAXXMMS`,
      `SAMMSMXAMSSMMASXSSMMA`,
      `SAXXXAMAAAXAXMAMMMAMM`,
    ],
    orientation: "regular",
    direction: "left",
  });

  expect(count).toBe(1);
});

test("it gets diagonal, backward orientation, left direction matches", () => {
  const count = getDiagonalCount({
    rows: [
      `SMMSMXMMSMXMMXMSMAXMA`,
      `SAAMXXXXXXAMAMXAXXMMS`,
      `SMMMSMXAMSSMMASXSSMMA`,
      `XAXXXAMAAAXAXMAMMMAMM`,
    ],
    orientation: "backward",
    direction: "left",
  });

  expect(count).toBe(1);
});

test("it gets the total count", () => {
  const rows = getRowsFromInput("./input.txt");
  const columns = getColumnsFromInput("./input.txt");

  const totalCount = getTotalCount({
    rows,
    columns,
  });

  console.log(totalCount, "total count");

  expect(totalCount).toBeDefined();
});
