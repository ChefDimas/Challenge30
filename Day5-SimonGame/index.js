const buttonColors = ["green", "red", "yellow", "blue"];
const gamePattern = [];

const nextSequence = () => {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor)
        .fadeIn(100)
        .fadeOut(100)
        .fadeIn(100);

    var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    audio.play();
};
console.log(gamePattern);
