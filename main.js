
var input = document.getElementById("input");
var text = document.getElementById("warning");
// var text2 = document.getElementById("attention");
input.addEventListener("keyup", function(event) {

if (event.getModifierState("CapsLock")) {
    text.style.display = "block";
  } else {
    text.style.display = "none"
  }

  if(event.getModifierState("NumLock")){
      text2.style.display = "block";

  }else{
      text2.style.display = "none"
  }


});


