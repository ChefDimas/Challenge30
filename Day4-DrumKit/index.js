// Add event listener to buttons
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document
        .querySelectorAll(".drum")
        [i].addEventListener("click", function () {
            let buttonInnerHTML = this.innerHTML;
            makeSound(buttonInnerHTML);
        });
}

//Play sound on event
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
});

//Which sound to play
const makeSound = (key) => {
    switch (key) {
        case "w":
            let audio1 = new Audio("./assets/sounds/tom-1.mp3");
            audio1.play();
            break;
        case "a":
            let audio2 = new Audio("./assets/sounds/tom-2.mp3");
            audio2.play();
            break;
        case "s":
            let audio3 = new Audio("./assets/sounds/tom-3.mp3");
            audio3.play();
            break;
        case "d":
            let audio4 = new Audio("./assets/sounds/tom-4.mp3");
            audio4.play();
            break;
        case "j":
            let audio5 = new Audio("./assets/sounds/crash.mp3");
            audio5.play();
            break;
        case "k":
            let audio6 = new Audio("./assets/sounds/kick-bass.mp3");
            audio6.play();
            break;
        case "l":
            let audio7 = new Audio("./assets/sounds/snare.mp3");
            audio7.play();
            break;
        default:
            console.log("Error");
    }
};
