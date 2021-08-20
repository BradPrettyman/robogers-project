function numberInput(number) {

  let numberArray = [];
  let beep = 'Beep!';
  let boop = 'Boop!';

  for (let i = 0; i <= input; i++) {
    numberString = i.toString();

    if (numberString.includes('1')) {
      numberArray.push(beep)
    }
    else if (numberString.includes('2')) {
      numberArray.push(boop)
    }
  }
  return numberArray;
}