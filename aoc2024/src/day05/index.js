import run from "aocrunner"

const parseInput = (rawInput) => {
  const input = rawInput.split("\n\n");
  const rules = input[0].split("\n");
  const updates = input[1].split("\n");

  return { rules, updates };
}

const part1 = (rawInput) => {
  const { rules, updates } = parseInput(rawInput)

  let sum = 0;
  for(let i = 0; i < updates.length; i++) {
    const update = updates[i].split(",");
    let correct = true;
    for(let j = 0; j < rules.length; j++) {
      const rule = rules[j].split("|");
      const first = rule[0]
      const second = rule[1]
      const firstIndex = update.findIndex((el) => el === first);
      const secondIndex = update.findIndex((el) => el === second);
      if(firstIndex !== -1 && secondIndex !== -1) {
        if(firstIndex > secondIndex) {
          correct = false;
          break;
        }
      }
    }
    if(correct) {
      sum += parseInt(update[(update.length - 1)/2]);
    }
  }

  return sum
}

const deepEqual = (a, b) => {
  if (a === b) return true;
  if (typeof a !== 'object' || typeof b !== 'object' || a == null || b == null) return false;
  let keysA = Object.keys(a), keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }
  return true;
}

const part2 = (rawInput) => {
  let { rules, updates } = parseInput(rawInput)

  rules = rules.map((rule) => {
    const [first, second] = rule.split("|");
    return [first, second];
  });

  updates = updates.map((update) => {
    return update.split(",");
  });

  const originalUpdates = updates.map(update => [...update]);

  let sum = 0;
  for(let i = 0; i < updates.length; i++) {
    updates[i].sort((a, b) => {
      const rule = rules.find((rule) => rule[0] === a && rule[1] === b || rule[0] === b && rule[1] === a);
      if(rule) {
        if(rule[0] === a) {
          return -1;
        }
        return 1;
      } else {
        return 0;
      }
    });
    if(!deepEqual(originalUpdates[i], updates[i])) {
      sum += parseInt(updates[i][(updates[i].length - 1)/2]);
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
