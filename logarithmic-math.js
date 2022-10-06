// A solution for e ^ x = 0 doesn't exist and because ln(1) = 0,
// we want 0 if the argument x = 0 and max(1, ln(x)) otherwise.
const safeLog = x => x === 0 ? 0 : Math.max(1, Math.log(x));

// safeLog will not be used for bases because we trust the
// user to input a base that's above or equal to 2. And
// even if not, the code will return some value that will
// indicate to the user that they did something wrong.

function prependDigit (digit, number, base = 10) {
  const logBase = Math.log(base);
  const logDigit = Math.ceil(safeLog(digit) / logBase);
  return digit + number * base ** logDigit;
}

function prependBit (bit, number) {
  // Count-leading-zeroes optimization because
  // 32 - clz(x) = floor(log2(x)) for any 1 < x < 2 ^ 32
  return number | bit << (32 - Math.clz32(number));
}

function appendDigit (digit, number, base = 10) {
  const expo = Math.ceil(safeLog(digit) / Math.log(base));
  return digit + number * base ** expo;
}

function appendBit (bit, number) {
  const shifts = 32 - Math.clz32(bit);
  return (number << shifts) | bit;
}

// prependDigit(4, 20)         => 0n420
// prependDigit(0o4, 0o20, 8)  => 0o420
// prependBit(0b10, 0b100)     => 0b10100
// appendDigit(9, 6)          => 0n69
// appendDigit(0o20, 0o4, 8)  => 0o420
// appendBit(0b100, 0b10)     => 0b10100
