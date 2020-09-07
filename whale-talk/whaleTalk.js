const input = 'i love money';

const vowels = ['a', 'e', 'i', 'o', 'u'];

const resultArray = [];

for (let i = 0; i < input.length; i++) {
    input[i];
  for (let v = 0; v < vowels.length; v++)
    if (input[i] === vowels[v]) {
      resultArray.push(input[i]);
    }
    if (input[i] === 'e') {
      resultArray.push(input[i]);
    }
    if (input[i] === 'u') {
      resultArray.push(input[i]);
    }
};

console.log(resultArray.join('').toUpperCase());
