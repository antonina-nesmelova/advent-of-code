import run from "aocrunner"

const parseInput = (rawInput) =>
  rawInput.split(" ").map((cell) => parseInt(cell))

const blink = (input) => {
  let output = [...input]
  let replaced = []
  input.forEach((element, i) => {
    if (element === 0) {
      output[i] = 1
    } else if (element.toString().length % 2 === 0) {
      const half = element.toString().length / 2
      const firstHalf = element.toString().slice(0, half)
      const secondHalf = element.toString().slice(half)

      output[i] = [parseInt(firstHalf), parseInt(secondHalf)]
    } else {
      output[i] = input[i] * 2024
    }
  })
  output = output.flat()
  return output
}
let count = 0;
const blinkTimes = (input, times) => {
  const processElement = (element) => {
    if (element === 0) {
      return [1];
    } else if (element.toString().length % 2 === 0) {
      const half = element.toString().length / 2;
      const firstHalf = element.toString().slice(0, half);
      const secondHalf = element.toString().slice(half);
      return [parseInt(firstHalf), parseInt(secondHalf)];
    } else {
      return [element * 2024];
    }
  };

  const queue = input.map((el) => ({ element: el, level: times }));

  while (queue.length > 0) {
    const { element, level } = queue.pop();
    const output = processElement(element);

    if (level === 1) {
      count += output.length;
    } else {
      for (const o of output) {
        queue.push({ element: o, level: level - 1 });
      }
    }
  }

  return count;
};


const part1 = (rawInput) => {
  const input = parseInput(rawInput)

  return blinkTimes(input, 25)
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)
  return blinkTimes(input, 75)
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
