import run from "aocrunner"

const parseInput = (rawInput) => rawInput

const calculatePerimeter = (input) => {
  const rows = input.split('\n');
  const height = rows.length;
  const width = rows[0].length;
  let total = 0;

  const visited = Array.from({ length: height }, () => Array(width).fill(false));

  const directions = [
    [-1, 0], [1, 0], [0, -1], [0, 1]
  ];

  const dfs = (x, y, char) => {
    const stack = [[x, y]];
    let perimeter = 0;
    let area = 0;

    while (stack.length) {
      const [cx, cy] = stack.pop();
      if (visited[cy][cx]) continue;
      visited[cy][cx] = true;
      area++;

      for (const [dx, dy] of directions) {
        const nx = cx + dx;
        const ny = cy + dy;

        if (nx < 0 || ny < 0 || nx >= width || ny >= height || rows[ny][nx] !== char) {
          perimeter++;
        } else if (!visited[ny][nx]) {
          stack.push([nx, ny]);
        }
      }
    }

    return perimeter * area;
  };

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (!visited[y][x] && rows[y][x] !== ' ') {
        total += dfs(x, y, rows[y][x]);
      }
    }
  }

  return total;
};

const calculateAreaSides = (input) => {
  const rows = input.split('\n');
  const height = rows.length;
  const width = rows[0].length;
  let total = 0;

  const visited = Array.from({ length: height }, () => Array(width).fill(false));

  const directions = [
    [-1, 0], [1, 0], [0, -1], [0, 1]
  ];

  const dfs = (x, y, char) => {
    const stack = [[x, y]];
    let sides = 0;
    let area = 0;

    while (stack.length) {
      const [cx, cy] = stack.pop();
      if (visited[cy][cx]) continue;
      visited[cy][cx] = true;
      area++;

      for (const [dx, dy] of directions) {
        const nx = cx + dx;
        const ny = cy + dy;

        if (nx < 0 || ny < 0 || nx >= width || ny >= height || rows[ny][nx] !== char) {
          sides++;
        } else if (!visited[ny][nx]) {
          stack.push([nx, ny]);
        }
      }
    }

    return sides * area;
  };

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (!visited[y][x] && rows[y][x] !== ' ') {
        total += dfs(x, y, rows[y][x]);
      }
    }
  }

  return total;
};

const part1 = (rawInput) => {
  const input = parseInput(rawInput);
  return calculatePerimeter(input);
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput);
  return calculateAreaSides(input);
};

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
