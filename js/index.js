function program(input) {
  var string = input;
  var array = string.split("");
  for(var i=0; i<array.length; i++) { 
    array[i] = +array[i];
  }
  //console.log(array);

  function findMin(array) {
    var myTable = "";
    var step = 1;
    while(array.length > 1) {
      if (array[0] > array[array.length - 1]) {
        array.splice(0, 1);
        myTable += "<tr class='table-active'><td>" + step + "</td><td>" + array.join("") + "</td></tr>";
      } else if (array[0] < array[array.length - 1]) {
        array.splice(array.length - 1, 1);
        myTable += "<tr class='table-active'><td>" + step + "</td><td>" + array.join("") + "</td></tr>";
      } else if (array[0] == array[array.length - 1]) {
        array.splice(array.length - 1, 1);
        myTable += "<tr class='table-active'><td>" + step + "</td><td>" + array.join("") + "</td></tr>";
      }

      step++;
    }

    $("#tableBody").html(myTable);
  }

  findMin(array);
}

$(document).ready(function(){
  $("#calc").click(function(){
    var input = $("#input").val();
    program(input);
    event.preventDefault();
  });
  $(window).keydown(function(event){
    if(event.keyCode == 13) {
      var input = $("#input").val();
      program(input);
      event.preventDefault();
      return false;
    }
  });
});
