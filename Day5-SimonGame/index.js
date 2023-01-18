let level = 1;

//Function to start the game
const gameStart = () => {};

$("body").keypress(function () {
    console.log("Game started...");
    $("h1").html(`Level ${level}`);
    gameStart();
});
