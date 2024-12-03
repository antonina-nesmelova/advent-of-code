import run from "aocrunner"

const parseInput = (rawInput) => rawInput

const part1 = (rawInput) => {
  const input = parseInput(rawInput)
  const regex = /mul\((\d{1,3}),(\d{1,3})\)/g
  let total = 0

  let match
  while ((match = regex.exec(input)) !== null) {
    const num1 = parseInt(match[1], 10)
    const num2 = parseInt(match[2], 10)
    total += num1 * num2
  }

  return total
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)
  const regex = /(?:mul\((\d{1,3}),(\d{1,3})\)|do\(\)|don't\(\))/g
  let total = 0
  let on = true

  let match
  while ((match = regex.exec(input)) !== null) {
    if (match[0] === "do()") {
      on = true
    } else if (match[0] === "don't()") {
      on = false
    } else if (on) {
      const num1 = parseInt(match[1], 10)
      const num2 = parseInt(match[2], 10)
      total += num1 * num2
    }
  }

  return total
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
