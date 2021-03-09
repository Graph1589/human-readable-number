
const numbers = {
  0: '',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: '',
}

const teens = {
  0: '',
  1: 'eleven',
  2: 'twelve',
  3: 'thirteen',
  4: 'fourteen',
  5: 'fifteen',
  6: 'sixteen',
  7: 'seventeen',
  8: 'eighteen',
  9: 'nineteen',
}

const decs = {
  0: '',
  1: 'ten',
  2: 'twenty',
  3: 'thirty',
  4: 'forty',
  5: 'fifty',
  6: 'sixty',
  7: 'seventy',
  8: 'eighty',
  9: 'ninety',
}

const makeDecs = (d, n) => {
  if (d === '1') {
    if (n === '0') {
      return 'ten';
    } 
    return `${teens[n]}`;
  }
  if (d === '0') {
    return `${numbers[n]}`;
  }

  return `${decs[d]} ${numbers[n]}`;
}

module.exports = function toReadable (number) {
  console.log(number);
  const array = String(number).split('');
  let result = '';
  if (number >= 100) {
    return `${numbers[array[0]]} hundred ${makeDecs(array[1], array[2])}`.trim();
  }
  if (number >= 10) {
    return ` ${makeDecs(array[0], array[1])}`.trim();
  }
  if (number === 0) {
    return 'zero';
  }
  return `${numbers[number]}`;
}
