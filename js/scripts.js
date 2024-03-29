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

function typeOnScreen(text) {
  var timePerIndex = 400;
  var index = 0;
  var showBtn = function () {
    $("#beepBtn").show();
  }
  var typeNextLetter = function() {
    if (index < text.length) {
      var beep = text[index];

      switch(beep) {
        default:
          $('.results').append(beep + ' ');
          $('.resultIndex h2').text(beep);
          break;
      }

      index++;

      setTimeout(typeNextLetter, timePerIndex);
      setTimeout(showBtn, (timePerIndex*2) * text.length)
    }
  }

  typeNextLetter();
}







/////////////////////////////////////
$(document).ready(function(){
  $('form').submit(function(event) {
    event.preventDefault();
    $("#beepBtn").hide();
    $(".results").text('');
    var value = $("input").val();
    var array1 = changeToArr(value).reverse();
    var array2 = changeToBoop(array1);
    $(".results").append(typeOnScreen(array2));
    printIndex(array2);

  });

});
