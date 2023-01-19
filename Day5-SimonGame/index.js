const buttonColors = ["red", "blue", "green", "yellow"];
const gamePattern = [];

const nextSequence = () => {
    return (randomNumber = Math.floor(Math.random() * 4));
};

const randomChosenColor = buttonColors[nextSequence()];
gamePattern.push(randomChosenColor);

console.log(gamePattern);
