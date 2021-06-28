var x = document.querySelectorAll("button");

for (var i = 0; i < x.length; i++) {
  // console.log(key);
  x[i].addEventListener("click", function() {
    var key = this.innerHTML;
    checkAudio(key);
    buttonAnimation(key);
  });
}
// document.addEventListener("click", function(event) {
//   var key1 = event.key;
//   checkAudio(key1);
//
// });
document.addEventListener("keydown", function(even) {
  var key1 = even.key;
  checkAudio(key1);
  buttonAnimation(key1);
});

function checkAudio(ch) {
  switch (ch) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
  }
}

function buttonAnimation(temp) {
  document.querySelector("." + temp).classList.add("pressed");
  setTimeout(function() {
    document.querySelector("." + temp).classList.remove("pressed");
  }, 150);
}