const randomNumber = () => {
    let n = Math.floor(Math.random() * 7);
    return n;
};

let player1 = null;
let player2 = null;

const reset = () => {
    document.querySelector("img").classList.remove("image1");
    document.querySelector("img").classList.remove("image2");
    document.querySelector(".player1").innerHTML += "";
    document.querySelector(".player2").innerHTML += "";
};

const start = () => {
    let flag = false;
    player1 = randomNumber();
    player2 = randomNumber();
    if (flag === false) {
        if (player1 > player2) {
            document.querySelector("h1").textContent = "Player 1 Wins!";
            // document.querySelector("img").classList.remove("image2");
            document.querySelector("img").classList.add("image1");
            for (let n = 0; n < player1 + 1; n++) {
                document.querySelector(".player1").innerHTML +=
                    '<div class="bullet"></div>';
                flag = true;
            }
        } else if (player1 < player2) {
            document.querySelector("h1").textContent = "Player 2 Wins!";
            // document.querySelector("img").classList.remove("image1");
            document.querySelector("img").classList.add("image2");
            for (let n = 0; n < player2 + 1; n++) {
                document.querySelector(".player2").innerHTML +=
                    '<div class="bullet"></div>';
                flag = true;
            }
        } else {
            document.querySelector("h1").textContent = "It's a Draw";
            document.querySelector("img").classList.remove("image1");
            document.querySelector("img").classList.remove("image2");
            flag = true;
        }
        console.log(player1, player2);
    } else if (flag === true) {
        reset();
    } else {
        console.log("Error");
    }
};
