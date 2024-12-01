import run from "aocrunner"

const parseInput = (rawInput) => {
  const lines = rawInput.trim().split('\n');
  const firstColumn = [];
  const secondColumn = [];

  lines.forEach(line => {
    const [first, second] = line.split(/\s+/).map(Number);
    firstColumn.push(first);
    secondColumn.push(second);
  });

  return [firstColumn, secondColumn];
};

const part1 = (rawInput) => {
  const [firstColumn, secondColumn] = parseInput(rawInput)

  firstColumn.sort((a, b) => a - b);
  secondColumn.sort((a, b) => a - b);

  let totalDistance = 0;
  for (let i = 0; i < firstColumn.length; i++) {
    totalDistance += Math.abs(firstColumn[i] - secondColumn[i]);
  }

  return totalDistance;
}

const part2 = (rawInput) => {
  const [firstColumn, secondColumn] = parseInput(rawInput)

  let similarityScore = 0;
  for (let i = 0; i < firstColumn.length; i++) {
    const count = secondColumn.filter(value => value === firstColumn[i]).length;
    similarityScore += count * firstColumn[i];
  }

  return similarityScore;
}

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
})
