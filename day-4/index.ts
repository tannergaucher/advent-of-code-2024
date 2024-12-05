import { verify } from "crypto";
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
  let column: string = "";

  while (columns.length !== rows[0].length) {
    column += rows[index][pointer];

    if (index === rows[0].length - 1) {
      columns.push(column);
      column = "";
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

export function getStraightCount({
  sequence,
  orientation,
}: {
  sequence: string;
  orientation: Orientation;
}) {
  const matches = [
    ...sequence.matchAll(orientation === "regular" ? /XMAS/g : /SAMX/g),
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

export function getTotalCount({
  rows,
  columns,
}: {
  rows: string[];
  columns: string[];
}) {
  let totalCount = 0;

  rows.forEach((row, i) => {
    const horizontalRegular = getStraightCount({
      sequence: row,
      orientation: "regular",
    });

    const horizontalBackward = getStraightCount({
      sequence: row,
      orientation: "backward",
    });

    const diagonalLeftRegular = getDiagonalCount({
      rows: [row[i], row[i + 1], row[i + 2], row[i + 3]],
      direction: "left",
      orientation: "regular",
    });

    const diagonalLeftBackward = getDiagonalCount({
      rows: [row[i], row[i + 1], row[i + 2], row[i + 3]],
      direction: "left",
      orientation: "backward",
    });

    const diagonalRightRegular = getDiagonalCount({
      rows: [row[i], row[i + 1], row[i + 2], row[i + 3]],
      direction: "right",
      orientation: "regular",
    });

    const diagonalRightBackward = getDiagonalCount({
      rows: [row[i], row[i + 1], row[i + 2], row[i + 3]],
      direction: "right",
      orientation: "backward",
    });

    totalCount += horizontalRegular;
    totalCount += horizontalBackward;

    totalCount += diagonalLeftRegular;
    totalCount += diagonalRightRegular;
    totalCount += diagonalLeftBackward;
    totalCount += diagonalRightBackward;
  });

  columns.forEach((column, i) => {
    const verticalRegular = getStraightCount({
      sequence: column,
      orientation: "regular",
    });

    const verticalBackward = getStraightCount({
      sequence: column,
      orientation: "backward",
    });

    totalCount += verticalRegular;
    totalCount += verticalBackward;
  });

  return totalCount;
}
