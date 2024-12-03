import run from "aocrunner"

const parseInput = (rawInput) => {
  return rawInput.split('\n').map(row => row.split(' '))
}

const check = (row) => {
  let prev;
  let inc;
  for (let i = 0; i < row.length; i++) {
    const num = row[i]
    if(prev === undefined) {
      prev = num
      continue
    }

    const diff = prev - num
    if(Math.abs(diff) < 1 || Math.abs(diff) > 3) {
      break
    }

    if(inc !== undefined) {
      if((inc && diff < 0) || (!inc && diff > 0)) {
        break
      }
    }

    if(i === 1) {
      if(diff > 0) {
        inc = true
      } else {
        inc = false
      }
    }

    if(i === row.length - 1) {
      return 1
    }

    prev = num
  }

  return 0
}

const part1 = (rawInput) => {
  const input = parseInput(rawInput)

  let safe = 0
  for (let i = 0; i < input.length; i++) {
    const row = input[i]
    const result = check(row)
    safe = safe + result
  }

  return safe
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  let safe = 0
  for (let i = 0; i < input.length; i++) {
    const row = input[i]
    const result = check(row)
    if(result === 1) {
      safe = safe + result
    } else {
      for (let i = 0; i < row.length; i++) {
        const copy = [...row]
        copy.splice(i, 1)
        const result = check(copy)
        if(result === 1) {
          safe = safe + result
          break
        }
      }
    }
  }

  return safe
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
