import run from "aocrunner"

const parseInput = (rawInput) => {
  return rawInput.split("\n\n").map((group) => {
    const lines = group.split("\n")
    const buttonA = lines[0]
      .match(/X\+(\d+), Y\+(\d+)/)
      .slice(1, 3)
      .map(Number)
    const buttonB = lines[1]
      .match(/X\+(\d+), Y\+(\d+)/)
      .slice(1, 3)
      .map(Number)
    const prize = lines[2]
      .match(/X=(\d+), Y=(\d+)/)
      .slice(1, 3)
      .map(Number)
    return { buttonA, buttonB, prize }
  })
}

function solveSystem(a, b, e, c, d, f) {
  // Calculate determinant
  const det = a * d - b * c

  if (det === 0) {
    return { x: 0, y: 0 }
  }

  // Apply Cramer's Rule
  const x = (e * d - b * f) / det
  const y = (a * f - e * c) / det

  return { x, y }
}

const part1 = (rawInput) => {
  const input = parseInput(rawInput)

  let sum = 0
  input.forEach(({ buttonA, buttonB, prize }) => {
    const { x, y } = solveSystem(
      buttonA[0],
      buttonB[0],
      prize[0],
      buttonA[1],
      buttonB[1],
      prize[1],
    )

    if (x >= 0 && y >= 0 && Number.isInteger(x) && Number.isInteger(y)) {
      sum += x * 3 + y
    }
  })

  return sum
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  let sum = 0
  input.forEach(({ buttonA, buttonB, prize }) => {
    const { x, y } = solveSystem(
      buttonA[0],
      buttonB[0],
      prize[0] + 10000000000000,
      buttonA[1],
      buttonB[1],
      prize[1] + 10000000000000,
    )

    if (x >= 0 && y >= 0 && Number.isInteger(x) && Number.isInteger(y)) {
      sum += x * 3 + y
    }
  })

  return sum
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
