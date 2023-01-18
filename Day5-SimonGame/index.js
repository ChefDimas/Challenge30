let level = 1;
let flag = false;

const green = $(".green");
const red = $(".red");
const yellow = $(".yellow");
const blue = $(".blue");

const colors = [green, red, yellow, blue];
const gamePattern = [];

//Random pick a color
const randomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
};

//Function to start the game
const gameStart = () => {
    while (flag === false) {}
};

//Main
$("body").keypress(function () {
    console.log("Game started...");
    $("h1").html(`Level ${level}`);
    gameStart();
});

console.log(randomColor());
