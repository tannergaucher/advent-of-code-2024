import fs from "fs";

export function createRowsFromInput(path: string) {
  const left: number[] = [];
  const right: number[] = [];

  const rows = fs
    .readFileSync(path, "utf-8")
    .split("\n")
    .map((el) => el.split("   "));

  rows.forEach((el) => {
    left.push(parseInt(el[0]));
    right.push(parseInt(el[1]));
  });

  return {
    left: left.sort(),
    right: right.sort(),
  };
}

const { left, right } = createRowsFromInput("./input.txt");

export function compareRows({
  left,
  right,
}: {
  left: number[];
  right: number[];
}) {
  if (left.length !== right.length) {
    throw new Error("Rows must be same length");
  }

  let totalDiff = 0;

  left.forEach((el, i) => {
    const leftEl = el;
    const rightEl = right[i];

    const difference = Math.abs(rightEl - leftEl);

    totalDiff += difference;
  });

  return totalDiff;
}

console.log(
  compareRows({
    left,
    right,
  })
);
// Answer: 2192892
