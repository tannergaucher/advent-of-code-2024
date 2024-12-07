import fs from "fs";

export function getRows(path: string) {
  return fs
    .readFileSync(path, "utf-8")
    .split("\n")
    .map((row) => row.split(" "))
    .map((row) => row.map((el) => parseInt(el)));
}

export function isGradual(
  direction: "ascending" | "descending",
  row: number[]
) {
  let validCount = 0;

  for (let i = 1; i < row.length; i++) {
    if (direction === "ascending") {
      if (row[i - 1] < row[i] && row[i] - row[i - 1] <= 3) {
        validCount++;
      }
    }

    if (direction === "descending") {
      if (row[i - 1] > row[i] && Math.abs(row[i] - row[i - 1]) <= 3) {
        validCount++;
      }
    }
  }

  return validCount === row.length - 1;
}

export function countValid(rows: number[][]) {
  let validCount = 0;

  rows.forEach((row) => {
    if (isGradual("ascending", row) || isGradual("descending", row)) {
      validCount++;
    }
  });

  return validCount;
}
