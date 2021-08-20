// Business Logic

function numberInput(number) {

  let numberArray = [];
  let beep = 'Beep!';
  let boop = 'Boop!';
  let neighbor = 'Wont you be my neighbor?';
  let input = number


  for (let i = 0; i <= input; i++) {
    numberString = i.toString();

    if (numberString.includes('3')) {
      numberArray.push(neighbor)
    }
    else if (numberString.includes('2')) {
      numberArray.push(boop)
    }
    else if (numberString.includes('1')) {
      numberArray.push(beep)
    }
    else {
      numberArray.push(numberString)
    }
  }
  return numberArray;
}

// UI Logic

$(document).ready(function(){
  $("form#enterNumber").submit(function(event) {
    event.preventDefault();
    const number = $('#number1').val();
    const result = numberInput(number);

    $('#output').text(result);
  })
})
