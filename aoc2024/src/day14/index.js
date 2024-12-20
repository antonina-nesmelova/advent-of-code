import run from "aocrunner"

const parseInput = (rawInput) => {
  return rawInput.split('\n').map(line => {
    const [p, v] = line.split(' ').map(part => part.split('=')[1].split(',').map(Number));
    return { p, v };
  });
}

const part1 = (rawInput) => {
  const input = parseInput(rawInput);
  const width = 101;
  const height = 103;
  const steps = 100;

  const positions = input.map(({ p, v }) => {
    const newPosition = [
      (p[0] + v[0] * steps) % width,
      (p[1] + v[1] * steps) % height,
    ];
    return newPosition.map((coord, index) => {
      while (coord < 0) {
        coord += (index === 0 ? width : height);
      }
      return coord;
    });
  });

  const midX = Math.floor(width / 2);
  const midY = Math.floor(height / 2);

  const quadrants = { Q1: 0, Q2: 0, Q3: 0, Q4: 0 };

  positions.forEach(([x, y]) => {
    if (x === midX || y === midY) return;
    if (x > midX && y > midY) quadrants.Q1++;
    else if (x < midX && y > midY) quadrants.Q2++;
    else if (x < midX && y < midY) quadrants.Q3++;
    else if (x > midX && y < midY) quadrants.Q4++;
  });

  let factor = 1;
  for (const [quadrant, count] of Object.entries(quadrants)) {
    factor *= count;
  }

  return factor;
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput);
  const width = 101;
  const height = 103;
  const steps = 4000;

  const positions = input.map(({ p, v }) => {
    const newPosition = [
      (p[0] + v[0] * steps) % width,
      (p[1] + v[1] * steps) % height,
    ];
    return newPosition.map((coord, index) => {
      while (coord < 0) {
        coord += (index === 0 ? width : height);
      }
      return coord;
    });
  });

  let grid = Array.from({ length: height }, () => Array(width).fill('.'));
  positions.forEach(([x, y]) => {
    grid[y][x] = '#';
  });
  grid = grid.map(row => row.join('')).join('\n');
  return grid;
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
