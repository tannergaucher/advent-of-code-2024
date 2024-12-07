import fs from "fs";

export function createSortedRows(path: string) {
  const left: number[] = [];
  const right: number[] = [];

  fs.readFileSync(path, "utf-8")
    .split("\n")
    .map((el) => el.split("   "))
    .forEach((el) => {
      left.push(parseInt(el[0]));
      right.push(parseInt(el[1]));
    });

  return {
    left: left.sort(),
    right: right.sort(),
  };
}

export function compareRows({
  left,
  right,
}: {
  left: number[];
  right: number[];
}) {
  let totalDiff = 0;

  left.forEach((el, i) => {
    totalDiff += Math.abs(right[i] - el);
  });

  return totalDiff;
}
