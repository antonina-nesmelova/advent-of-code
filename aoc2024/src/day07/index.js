import run from "aocrunner"

const parseInput = (rawInput) => {
  return rawInput.split("\n").map((line) => line.split(": "))
}

const calculate = (values, combination) => {
  let result = parseInt(values[0])
  for (let i = 0; i < combination.length; i++) {
    if (combination[i] === "+") {
      result += parseInt(values[i + 1])
    } else {
      result *= parseInt(values[i + 1])
    }
  }
  return result
}

const calculate2 = (values, combination) => {
  let result = parseInt(values[0])
  for (let i = 0; i < combination.length; i++) {
    if (combination[i] === "+") {
      result += parseInt(values[i + 1])
    } else if (combination[i] === "*") {
      result *= parseInt(values[i + 1])
    } else {
      result = parseInt(`${result}${values[i + 1]}`)
    }
  }
  return result
}

const part1 = (rawInput) => {
  const input = parseInput(rawInput)

  let sum = 0
  for (let i = 0; i < input.length; i++) {
    let [result, values] = input[i]
    result = parseInt(result)
    values = values.split(" ")

    for (let j = 0; j < 2 ** (values.length - 1); j++) {
      let combination = j
        .toString(2)
        .padStart(values.length - 1, "0")
        .split("")
        .map((x) => {
          if (x === "1") {
            return "+"
          } else if (x === "2") {
            return "*"
          } else {
            return "||"
          }
        })

      if (calculate(values, combination) === result) {
        sum += result
        break
      }
    }
  }

  return sum
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  let sum = 0
  for (let i = 0; i < input.length; i++) {
    let [result, values] = input[i]
    result = parseInt(result)
    values = values.split(" ")

    for (let j = 0; j < 3 ** (values.length - 1); j++) {
      let combination = j
        .toString(3)
        .padStart(values.length - 1, "0")
        .split("")
        .map((x) => {
          if (x === "1") {
            return "+"
          } else if (x === "2") {
            return "*"
          } else {
            return "||"
          }
        })

      if (calculate2(values, combination) === result) {
        sum += result
        break
      }
    }
  }

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
