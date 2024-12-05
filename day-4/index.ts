import fs from "fs";

export function getRowsFromInput(path: string) {
  return fs.readFileSync("./input.txt", "utf-8").split("\n");
}

export function getColumnsFromInput(path: string) {
  const rows = getRowsFromInput("./input.txt");

  if (rows.length !== rows[0].length) {
    throw new Error("input is not grid format");
  }

  const columns: string[] = [];

  let index = 0;
  let pointer = 0;
  let column: string[] = [];

  while (columns.length !== rows[0].length) {
    column.push(rows[index][pointer]);

    if (index === rows[0].length - 1) {
      columns.push(...column);
      column = [];
      index = 0;
      pointer++;
    } else {
      index++;
    }
  }

  return columns;
}

type Orientation = "regular" | "backward";
type Direction = "left" | "right";

export function getHorizontalCount({
  row,
  orientation,
}: {
  row: string;
  orientation: Orientation;
}) {
  const matches = [
    ...row.matchAll(orientation === "regular" ? /XMAS/g : /SAMX/g),
  ];

  return matches.length;
}

export function getVerticalCount({
  column,
  orientation,
}: {
  column: string;
  orientation: Orientation;
}) {
  const matches = [
    ...column.matchAll(orientation === "regular" ? /XMAS/g : /SAMX/g),
  ];

  return matches.length;
}

export function getDiagonalCount({
  rows,
  direction,
  orientation,
}: {
  rows: string[];
  direction: Direction;
  orientation: Orientation;
}) {
  let count = 0;

  const match =
    orientation === "regular" ? ["X", "M", "A", "S"] : ["S", "A", "M", "X"];

  const firstOffset = direction === "right" ? 1 : -1;
  const secondOffset = direction === "right" ? 2 : -2;
  const thirdOffset = direction === "right" ? 3 : -3;

  for (let i = 0; i < rows[0].length - 5; i++) {
    if (
      rows[0][i] === match[0] &&
      rows[1][i + firstOffset] === match[1] &&
      rows[2][i + secondOffset] === match[2] &&
      rows[3][i + thirdOffset] === match[3]
    ) {
      count++;
    }
  }

  return count;
}
