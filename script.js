var guisnum = document.getElementById("input");
var result = document.getElementById("result");
var scoreDisplay = document.getElementById("score"); 
var pass = document.getElementById("pass");

var randomnum = Math.floor(Math.random() * 10);
console.log(randomnum);

var score = 10;

function check() {
  var enterednum = parseInt(guisnum.value); 

  if (isNaN(enterednum)) {  
      result.textContent = "Please enter a valid number";
      return; 
  }

  if (randomnum === enterednum) {
    result.textContent = "CORRECT";
    alert("YOU FOUND THE CORRECT PASSWORD!!!... And your Score :"+score);
  }
   else {
    result.textContent = "WRONG";
    score = score - 1;
    scoreDisplay.textContent = "SCORE: " + score; 
    if(score==0){
        alert("Game Over! You ran out of tries.")
    }
  }
}
function answer(){
    pass.textContent=randomnum
}