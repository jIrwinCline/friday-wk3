function changeArr(inputNum) {
  //// for loop to create a number in an array for each number less than input number
  var numberArr = [];
  for(var i=inputNum; i>0; i--) {
    numberArr.push(i);
  }
  return numberArr;

}






/////////////////////////////////////
$(document).ready(function(){
  $('form').submit(function(event) {
    event.preventDefault();
    var value = $("input").val();
    console.log("here " + value);
    var array1 = changeArr(value);
    console.log(array1)
    $(".results").text(value);
  });

});
