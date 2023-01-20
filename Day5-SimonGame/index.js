const buttonColors = ["green", "red", "yellow", "blue"];
const gamePattern = [];
let level = 0;
let start = false;

var userClickedPattern = [];

$(document).keypress(function () {
    if (!start) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

const playSound = (name) => {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
};

const nextSequence = () => {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor)
        .fadeIn(100)
        .fadeOut(100)
        .fadeIn(100);

    playSound(randomChosenColor);
};

$(".btn").click(function () {
    var userChosenColor = $(this).attr("id");

    userClickedPattern.push(userChosenColor);
});
