function changeToArr(inputNum) {
  //// for loop to create a number in an array for each number less than input number
  var numberArr = [];
  for(var i=inputNum; i>=0; i--) {
    numberArr.push(i.toString());
  }
  return numberArr;
};
function changeToBoop(array)  {
  var boopArr = array;
  for(i=0;i<boopArr.length;i++){
    if(boopArr[i] != '13' && boopArr[i] != '21' && boopArr[i] != '32') {

      if(boopArr[i].includes('1')) {
        boopArr[i] = "Beep!";
      }
      if(boopArr[i].includes('2')) {
        boopArr[i] = "Boop!";
      }
      if(boopArr[i].includes('3')) {
        boopArr[i] = "I'm sorry, Dave. I'm afraid I can't do that."
      }
    } else {
      if(boopArr[i] == '13') {
        boopArr[i] = "I'm sorry, Dave. I'm afraid I can't do that.";
      }
      if(boopArr[i] == '21') {
        boopArr[i] = "Boop";
      }
      if(boopArr[i] == '32') {
        boopArr[i] = "I'm sorry, Dave. I'm afraid I can't do that."
      }
    }
  }
  return boopArr;
};
//------------------
var timePerLetter = 400;

function typeOnScreen(text) {
  var index = 0;

  var typeNextLetter = function() {
    if (index < text.length) {
      var CHAR = text[index];

      switch(CHAR) {
        default:
          $('.results').append(CHAR + ' ');
          break;
      }

      index++;

      setTimeout(typeNextLetter, timePerLetter);
    }
  }

  typeNextLetter();
}






/////////////////////////////////////
$(document).ready(function(){
  $('form').submit(function(event) {
    event.preventDefault();
    var value = $("input").val();
    console.log("here " + value);
    var array1 = changeToArr(value).reverse();
    console.log(array1);
    var array2 = changeToBoop(array1);
    $(".results").append(typeOnScreen(array2));


  });

});
