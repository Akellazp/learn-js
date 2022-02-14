function sum (...args) {
  return args.reduce((acc, num) => acc + num, 0) * this;
}

const multiplier = 1

sum = sum.bind(multiplier)