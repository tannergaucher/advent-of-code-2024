import fs from "fs";

function getRowsFromInput(path: string) {
  const rows = fs
    .readFileSync(path, "utf-8")
    .split("\n")
    .map((row) => row.split(" "));

  return rows.map((row) => row.map((el) => parseInt(el)));
}

function isGraduallyAscending({ row }: { row: number[] }) {
  let validTestsCount = 0;

  for (let i = 1; i < row.length; i++) {
    if (row[i - 1] < row[i] && row[i] - row[i - 1] <= 3) {
      validTestsCount++;
    }
  }

  return validTestsCount === row.length - 1;
}

function isGraduallyDescending({ row }: { row: number[] }) {
  let validTestsCount = 0;

  for (let i = 1; i < row.length; i++) {
    if (row[i - 1] > row[i] && row[i] - row[i - 1] <= 3) {
      validTestsCount++;
    }
  }

  return validTestsCount === row.length - 1;
}

function countValidRows({ rows }: { rows: number[][] }) {
  let validRowCount = 0;

  rows.forEach((row) => {
    if (isGraduallyAscending({ row }) || isGraduallyDescending({ row })) {
      validRowCount++;
    }
  });

  return validRowCount;
}

console.log(
  countValidRows({
    rows: getRowsFromInput("./input.txt"),
  })
);
