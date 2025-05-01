const convertBtn = document.getElementById("convert-btn");
const numberInput = document.getElementById('number');
const outputDiv = document.getElementById('output');


function convertToRoman(num){
  const romanMap = [
    [1000, 'M'], [900, 'CM'], [500, 'D'],
    [400, 'CD'], [100, 'C'], [90, 'XC'],
    [50, 'L'], [40, 'XL'], [10, 'X'],
    [9, 'IX'], [5, 'V'], [4, 'IV'],
    [1, 'I'],
  ];

  let result = '';

  for (const [value, symbol] of romanMap) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }
  return result;
};

convertBtn.addEventListener('click', () => {
  const inputValue = numberInput.value.trim();

  if(inputValue === ''){
    outputDiv.textContent = 'Please enter a valid number';
    outputDiv.classList.remove('hidden');
    return;
  }

  const num = parseInt(inputValue, 10);

  if(num < 1){
    outputDiv.textContent = "Please enter a number greater than or equal to 1";
    outputDiv.classList.remove('hidden');
    return;
  }
  
  if(num > 3999){
    outputDiv.textContent = "Please enter a number less than or equal to 3999";
    outputDiv.classList.remove('hidden');
    return;
  }
  
  outputDiv.textContent = convertToRoman(num);
  outputDiv.classList.remove('hidden');

});

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  convertBtn.click();
});