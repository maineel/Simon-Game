const gamePattern = [];
const buttonColours = ["red","blue","green",'yellow'];
function nextSequence(){
    var rand = Math.floor(Math.random() * 4);
    gamePattern.push(buttonColours[rand]);
    $("#" + buttonColours[rand]).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
}

