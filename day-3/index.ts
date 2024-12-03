import fs from "fs";

function getArrayFromInput(path: string) {
  return fs.readFileSync(path, "utf-8").split("mul(");
}

function getValidEquationTotal({ equations }: { equations: string[] }) {
  let total = 0;

  equations.forEach((equation) => {
    const equationSides = equation.split(")")[0].split(",");

    if (
      isValidEquationSide(equationSides[0]) &&
      isValidEquationSide(equationSides[1])
    ) {
      total += parseInt(equationSides[0]) * parseInt(equationSides[1]);
    }
  });

  return total;
}

console.log(
  getValidEquationTotal({
    equations: getArrayFromInput("./input.txt"),
  })
);

function isValidEquationSide(side: string) {
  if (
    side.length > 0 &&
    side.length <= 3 &&
    side.split("").every((el) => !isNaN(parseInt(el)))
  ) {
    return true;
  }
  return false;
}
