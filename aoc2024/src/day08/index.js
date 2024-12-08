import run from "aocrunner"

const parseInput = (rawInput) => {
  return rawInput.split("\n").map((line) => line.split(""))
}

const part1 = (rawInput) => {
  const input = parseInput(rawInput)
  const groups = {}

  input.forEach((line, rowIndex) => {
    line.forEach((char, colIndex) => {
      if (char !== ".") {
        if (!groups[char]) {
          groups[char] = []
        }
        groups[char].push([rowIndex, colIndex])
      }
    })
  })

  const pointsInLine = new Set()
  for (const char in groups) {
    const locations = groups[char]
    for (let i = 0; i < locations.length; i++) {
      for (let j = i + 1; j < locations.length; j++) {
        const [x1, y1] = locations[i]
        const [x2, y2] = locations[j]

        const dx = x2 - x1
        const dy = y2 - y1
        const newPoint1 = [x1 - dx, y1 - dy]
        const newPoint2 = [x2 + dx, y2 + dy]
        if (
          newPoint1[0] >= 0 &&
          newPoint1[0] < input.length &&
          newPoint1[1] >= 0 &&
          newPoint1[1] < input[0].length
        ) {
          pointsInLine.add(`${newPoint1}`)
        }
        if (
          newPoint2[0] >= 0 &&
          newPoint2[0] < input.length &&
          newPoint2[1] >= 0 &&
          newPoint2[1] < input[0].length
        ) {
          pointsInLine.add(`${newPoint2}`)
        }
      }
    }
  }

  return pointsInLine.size
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)
  const groups = {}

  input.forEach((line, rowIndex) => {
    line.forEach((char, colIndex) => {
      if (char !== ".") {
        if (!groups[char]) {
          groups[char] = []
        }
        groups[char].push([rowIndex, colIndex])
      }
    })
  })

  const pointsInLine = new Set()
  for (const char in groups) {
    const locations = groups[char]
    for (let i = 0; i < locations.length; i++) {
      for (let j = i + 1; j < locations.length; j++) {
        const [x1, y1] = locations[i]
        pointsInLine.add(`${locations[i]}`)
        const [x2, y2] = locations[j]
        pointsInLine.add(`${locations[j]}`)

        const dx = x2 - x1
        const dy = y2 - y1
        let newPoint1 = [x1 - dx, y1 - dy]
        while (true) {
          if (
            newPoint1[0] >= 0 &&
            newPoint1[0] < input.length &&
            newPoint1[1] >= 0 &&
            newPoint1[1] < input[0].length
          ) {
            pointsInLine.add(`${newPoint1}`)
          } else {
            break
          }
          newPoint1 = [newPoint1[0] - dx, newPoint1[1] - dy]
        }
        let newPoint2 = [x1 + dx, y1 + dy]
        while (true) {
          if (
            newPoint2[0] >= 0 &&
            newPoint2[0] < input.length &&
            newPoint2[1] >= 0 &&
            newPoint2[1] < input[0].length
          ) {
            pointsInLine.add(`${newPoint2}`)
          } else {
            break
          }
          newPoint2 = [newPoint2[0] + dx, newPoint2[1] + dy]
        }
      }
    }
  }

  return pointsInLine.size
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
