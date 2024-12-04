import run from "aocrunner"

const parseInput = (rawInput) => {
  return rawInput.split("\n")
}

const part1 = (rawInput) => {
  const input = parseInput(rawInput)

  let counter = 0
  for(let i = 0; i < input.length; i++) {
    for(let j = 0; j < input[i].length; j++) {
      if(input[i][j] === "X") {
        if(input[i][j+1] === "M" && input[i][j+2] === "A" && input[i][j+3] === "S") {
          counter++
        }
        if(input[i][j-1] === "M" && input[i][j-2] === "A" && input[i][j-3] === "S") {
          counter++
        }
        if(input[i+1] && input[i+1][j] === "M" && input[i+2] && input[i+2][j] === "A" && input[i+3] && input[i+3][j] === "S") {
          counter++
        }
        if(input[i-1] && input[i-1][j] === "M" && input[i-2] && input[i-2][j] === "A" && input[i-3] && input[i-3][j] === "S") {
          counter++
        }
        if(input[i+1] && input[i+1][j+1] === "M" && input[i+2] && input[i+2][j+2] === "A" && input[i+3] && input[i+3][j+3] === "S") {
          counter++
        }
        if(input[i-1] && input[i-1][j-1] === "M" && input[i-2] && input[i-2][j-2] === "A" && input[i-3] && input[i-3][j-3] === "S") {
          counter++
        }
        if(input[i+1] && input[i+1][j-1] === "M" && input[i+2] && input[i+2][j-2] === "A" && input[i+3] && input[i+3][j-3] === "S") {
          counter++
        }
        if(input[i-1] && input[i-1][j+1] === "M" && input[i-2] && input[i-2][j+2] === "A" && input[i-3] && input[i-3][j+3] === "S") {
          counter++
        }
      }
    }
  }

  return counter
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  let counter = 0
  for(let i = 0; i < input.length; i++) {
    for(let j = 0; j < input[i].length; j++) {
      if(input[i][j] === "A") {
        if(input[i-1] && input[i+1] && input[i+1][j+1] === "M" && input[i+1][j-1] === "M" && input[i-1][j+1] === "S" && input[i-1][j-1] === "S") {
          counter++
        }
        if(input[i-1] && input[i+1] && input[i+1][j+1] === "S" && input[i+1][j-1] === "S" && input[i-1][j+1] === "M" && input[i-1][j-1] === "M") {
          counter++
        }
        if(input[i-1] && input[i+1] && input[i+1][j+1] === "S" && input[i+1][j-1] === "M" && input[i-1][j+1] === "S" && input[i-1][j-1] === "M") {
          counter++
        }
        if(input[i-1] && input[i+1] && input[i+1][j+1] === "M" && input[i+1][j-1] === "S" && input[i-1][j+1] === "M" && input[i-1][j-1] === "S") {
          counter++
        }
      }
    }
  }

  return counter
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
