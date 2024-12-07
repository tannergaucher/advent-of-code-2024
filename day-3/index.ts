import fs from "fs";

export function getArrayFromInput(path: string) {
  return fs.readFileSync(path, "utf-8").split("mul(");
}

export function isValidSide(side: string) {
  return (
    side.length > 0 &&
    side.length <= 3 &&
    side.split("").every((el) => !isNaN(parseInt(el)))
  );
}

export function getValidEquationTotal({ equations }: { equations: string[] }) {
  let total = 0;

  equations.forEach((equation) => {
    const [left, right] = equation.split(")")[0].split(",");

    if (isValidSide(left) && isValidSide(right)) {
      total += parseInt(left) * parseInt(right);
    }
  });

  return total;
}
