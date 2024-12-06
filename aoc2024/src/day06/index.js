import run from "aocrunner"

const parseInput = (rawInput) => {
  return rawInput.split("\n").map((line) => line.split(""))
}

const directions = {
  UP: [-1, 0],
  LEFT: [0, -1],
  RIGHT: [0, 1],
  DOWN: [1, 0],
}

const findStart = (input) => {
  let x = input.findIndex((row) => row.includes("^"))
  let y = input[x].indexOf("^")
  return [x, y]
}

const findVisited = (input) => {
  let direction = "UP"
  let [x, y] = findStart(input)
  let visited = new Set()
  while (true) {
    visited.add(`${x},${y}`)
    const [dx, dy] = directions[direction]
    const newX = x + dx
    const newY = y + dy

    if (
      newX < 0 ||
      newX >= input.length ||
      newY < 0 ||
      newY >= input[0].length
    ) {
      break
    }

    if (input[newX][newY] === "#") {
      if (direction === "UP") {
        direction = "RIGHT"
      } else if (direction === "RIGHT") {
        direction = "DOWN"
      } else if (direction === "DOWN") {
        direction = "LEFT"
      } else if (direction === "LEFT") {
        direction = "UP"
      }
    } else {
      x = newX
      y = newY
    }
  }

  return visited
}

const part1 = (rawInput) => {
  const input = parseInput(rawInput)
  const visited = findVisited(input)
  return visited.size
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  const visited = findVisited(input)
  const simulate = () => {
    let [x, y] = findStart(input)
    let direction = "UP"
    let visited = new Set()
    while (true) {
      visited.add(`${x},${y},${direction}`)
      const [dx, dy] = directions[direction]
      const newX = x + dx
      const newY = y + dy

      if (
        newX < 0 ||
        newX >= input.length ||
        newY < 0 ||
        newY >= input[0].length
      ) {
        return false
      }

      if (input[newX][newY] === "#") {
        if (direction === "UP") {
          direction = "RIGHT"
        } else if (direction === "RIGHT") {
          direction = "DOWN"
        } else if (direction === "DOWN") {
          direction = "LEFT"
        } else if (direction === "LEFT") {
          direction = "UP"
        }
      } else {
        x = newX
        y = newY
      }

      if (visited.has(`${x},${y},${direction}`)) {
        return true
      }
    }
  }

  let possiblePositions = 0
  visited.forEach((position) => {
    const [i, j] = position.split(",").map(Number)
    if (input[i][j] === ".") {
      input[i][j] = "#"
      if (simulate()) {
        possiblePositions++
      }
      input[i][j] = "."
    }
  })

  return possiblePositions
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
