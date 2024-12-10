import run from "aocrunner"
import fs from "fs"

const parseInput = (rawInput) => {
  return rawInput.split("").reduce((acc, char, index) => {
    const num = parseInt(char)

    for (let i = 0; i < num; i++) {
      if (index % 2 === 0) {
        acc.push(index / 2)
      } else {
        acc.push(".")
      }
    }
    return acc
  }, [])
}

const part1 = (rawInput) => {
  const input = parseInput(rawInput)

  let checkSum = 0
  for (let i = 0; i < input.length - 1; i++) {
    if (input[i] === ".") {
      let start = input.length - 1
      while (start >= i) {
        if (input[start] === ".") {
          start--
        } else {
          input[i] = input[start]
          input[start] = "."
          checkSum += input[i] * i
          break
        }
      }
      if (input[i] === ".") {
        break
      }
    } else {
      checkSum += input[i] * i
    }
  }

  return checkSum
}

function parse(source) {
  return source.trim().split('').map(Number);
}


function part2(rawInput) {
  const data = parse(rawInput)
  const id = (index) => Math.floor(index / 2);
  const isFile = (index) => index % 2 === 0;
  const queue = [];
  for (
    let arr = [...data], l = 0, r = arr.length - 1, offset = 0;
    l <= r;
    l++
  ) {
    if (arr[l] === 0) {
      offset += data[l];
      continue;
    }

    if (isFile(l)) {
      if (arr[l]) {
        queue.push({ len: arr[l], id: id(l), offset });
        offset += arr[l];
      }
    } else {
      let free = arr[l];
      let virtualr = r;
      while (free > 0 && virtualr > l) {
        if (isFile(virtualr)) {
          if (arr[virtualr] === 0 && r === virtualr) {
            r--;
            virtualr--;
            continue;
          }
          if (arr[virtualr] > free || arr[virtualr] === 0) {
            virtualr--;
            continue;
          }

          queue.push({ len: arr[virtualr], id: id(virtualr), offset });

          offset += arr[virtualr];
          free -= arr[virtualr];
          arr[virtualr] = 0;
        } else {
          virtualr--;
        }
      }
      offset += free;
    }
  }

  return queue.reduce((checksum, block) => {
    for (let i = 0; i < block.len; ++i) {
      checksum += block.id * (block.offset + i);
    }
    return checksum;
  }, 0);
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
