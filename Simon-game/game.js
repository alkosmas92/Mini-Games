
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var level=0;
var started = false;

//3. At the top of the game.js file, create a new empty array with the name userClickedPattern.
var userClickedPattern = [];

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});


function animatePress(currentColor) {
    
    $("#" + currentColor).addClass( ["pressed"] );
    
    setTimeout(function() {
        $("#" + currentColor).removeClass( ["pressed"] );
    }, 40);
    
  };


$(".btn").click(function() {
  
  var userChosenColour = $(this).attr("id");
  
  userClickedPattern.push(userChosenColour);
  
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);  
});

function checkAnswer(currentLevel){
  
  if(userClickedPattern[currentLevel] === gamePattern[currentLevel] ){
    console.log("success");

    if(currentLevel === level){
      setTimeout(function() {
        nextSequence();
      }, 1000);
      level++;
    }
  }
  else{
    console.log("wrong");
    game_over();
  }
}

function game_over(){
  playSound("wrong");
  $("body").addClass(["game-over"]);

  setTimeout(function() {
    $("body").removeClass(["game-over"]);
  }, 200);

  $("h1").text("Game Over, Press Any Key to Restart");
  $("body").keypress(function(event){
    gamePattern=[];
    nextSequence();

  });
  
  level=0;
  start = false;

}



function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}


function nextSequence() {
  userClickedPattern=[];
  
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  //console.log(randomChosenColour);

  $("h1").text("level " + level);

  
}













