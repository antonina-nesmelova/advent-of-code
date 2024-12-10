import run from "aocrunner"

const parseInput = (rawInput) => {
  return rawInput.split("\n").map((line) => {
    return line.split("").map((cell) => parseInt(cell))
  })
}

let trails = new Set()
const stepForward = (startY, startX, y, x, map) => {
  const start = map[y][x]
  const possibleNextSteps = [
    [y + 1, x],
    [y, x + 1],
    [y - 1, x],
    [y, x - 1],
  ].filter(
    (step) =>
      step[0] >= 0 &&
      step[1] >= 0 &&
      step[0] < map.length &&
      step[1] < map[0].length,
  )

  possibleNextSteps.forEach((step) => {
    const [y1, x1] = step
    if (map[y1][x1] === start + 1) {
      if (map[y1][x1] === 9) {
        trails[`${startY},${startX}`].add(`${y1},${x1}`)
      } else {
        stepForward(startY, startX, y1, x1, map)
      }
    }
  })
}

const part1 = (rawInput) => {
  const input = parseInput(rawInput)

  const startPositions = []
  input.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (cell === 0) {
        startPositions.push([y, x])
      }
    })
  })

  startPositions.forEach((start) => {
    const [y, x] = start
    trails[`${y},${x}`] = new Set()
    stepForward(y, x, y, x, input)
  })

  return Object.values(trails).reduce((acc, val) => acc + val.size, 0)
}

let trails2 = {}
const stepForward2 = (startY, startX, y, x, map) => {
  const start = map[y][x]
  const possibleNextSteps = [
    [y + 1, x],
    [y, x + 1],
    [y - 1, x],
    [y, x - 1],
  ].filter(
    (step) =>
      step[0] >= 0 &&
      step[1] >= 0 &&
      step[0] < map.length &&
      step[1] < map[0].length,
  )

  possibleNextSteps.forEach((step) => {
    const [y1, x1] = step
    if (map[y1][x1] === start + 1) {
      if (map[y1][x1] === 9) {
        trails2[`${startY},${startX}`] = trails2[`${startY},${startX}`] + 1
      } else {
        stepForward2(startY, startX, y1, x1, map)
      }
    }
  })
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  const startPositions = []
  input.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (cell === 0) {
        startPositions.push([y, x])
      }
    })
  })

  startPositions.forEach((start) => {
    const [y, x] = start
    trails2[`${y},${x}`] = 0
    stepForward2(y, x, y, x, input)
  })

  return Object.values(trails2).reduce((acc, val) => acc + val, 0)
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
