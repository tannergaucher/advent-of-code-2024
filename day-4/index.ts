import fs from "fs";

export function getRowsFromInput(path: string) {
  return fs.readFileSync("./input.txt", "utf-8").split("\n");
}

export function getColumnsFromInput(path: string) {}

type Orientation = "regular" | "backward";
type Direction = "left" | "right";

export function getHorizontalCount({
  row,
  orientation,
}: {
  row: string;
  orientation: Orientation;
}) {
  return [...row.matchAll(orientation === "regular" ? /XMAS/g : /SAMX/g)].map(
    (row) => row[0]
  );
}

export function getVerticalCount({
  column,
  orientation,
}: {
  column: string;
  orientation: Orientation;
}) {
  return [
    ...column.matchAll(orientation === "regular" ? /XMAS/g : /SAMX/g),
  ].map((col) => col[0]);
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

  const match = orientation === "regular" ? ["XMAS"] : ["SAMX"];

  const firstOffset = direction === "right" ? 1 : -1;
  const secondOffset = direction === "right" ? 2 : -2;
  const thirdOffset = direction === "right" ? 3 : -3;

  for (let i = 0; i < rows[0].length; i++) {
    if (
      rows[i][i] === match[i] &&
      rows[i + firstOffset][i + firstOffset] === match[i + firstOffset] &&
      rows[i + secondOffset][i + secondOffset] === match[i + secondOffset] &&
      rows[i + thirdOffset][i + thirdOffset] === match[i + thirdOffset]
    ) {
    }
  }

  return count;
}
