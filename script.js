document.getElementById('convert-btn').addEventListener('click', function() {
  const numberInput = document.getElementById('number').value.trim();
  const outputElement = document.getElementById('output');

  if (numberInput === '') {
    outputElement.textContent = "Please enter a valid number";
    return;
  }

  const num = parseInt(numberInput, 10);

  if (isNaN(num) || num < 1) {
      outputElement.textContent = "Please enter a number greater than or equal to 1";
  } else if (num >= 4000) {
      outputElement.textContent = "Please enter a number less than or equal to 3999";
  } else {
      outputElement.textContent = intToRoman(num);
  }
});

function intToRoman(num) {
  const romanMap = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' }
  ];

  let result = '';

  for (let i = 0; i < romanMap.length; i++) {
    while (num >= romanMap[i].value) {
      result += romanMap[i].numeral;
      num -= romanMap[i].value;
    }
  }

  return result;
}