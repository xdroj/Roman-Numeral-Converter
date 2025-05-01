const convertBtn = document.getElementById("convert-btn");
const numberInput = document.getElementById('number');
const outputDiv = document.getElementById('output');
const form = document.getElementById('form');

function convertToRoman(number){
  const romanNumerals = [
    {value : 1000, numeral: 'M'},
    {value : 900, numeral: 'CM'},
    {value : 500, numeral: 'D'},
    {value : 400, numeral: 'CD'},
    {value : 100, numeral: 'C'},
    {value : 90, numeral: 'XC'},
    {value : 50, numeral: 'L'},
    {value : 40, numeral: 'XL'},
    {value : 10, numeral: 'X'},
    {value : 9, numeral: 'IX'},
    {value : 5, numeral: 'V'},
    {value : 4, numeral: 'IV'},
    {value : 1, numeral: 'I'},
  ];

  let result = ``;

  for (let i = 0; i < romanNumerals.length; i++) {
    while (number >= romanNumerals[i].value) {
      result += romanNumerals[i].numeral;
      number -= romanNumerals[i].value;
    }
  }
  return result;
};


form.addEventListener('submit', (e) => {
  e.preventDefault();
  convertBtn.click();
  });

convertBtn.addEventListener('click', () => {
  const inputValue = numberInput.value.trim();

  if(inputValue === ''){
    outputDiv.textContent = 'Please enter a valid number';
    outputDiv.classList.remove('hidden');
    return;
  }

  if(inputValue < 1){
    outputDiv.textContent = "Please enter a number greater than or equal to 1";
    outputDiv.classList.remove('hidden');
    return;
  }
  
  if(inputValue > 3999){
    outputDiv.textContent = "Please enter a number less than or equal to 3999";
    outputDiv.classList.remove('hidden');
    return;
  }

  const romanNumeral = convertToRoman(number);
  outputDiv.textContent = romanNumeral;
  outputDiv.classList.remove('hidden');

});