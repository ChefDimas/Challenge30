for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelector(".drum")[i].addEventListener("click", function () {
        const audio = new Audio("./assets/sounds/tom-1.mp3");
        audio.play();
        console.log("dsa");
    });
}
