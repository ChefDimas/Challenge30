const randomColor = () => {
    return Math.floor(Math.random() * 16777215).toString(16);
};

const changeColor = () => {
    let color = randomColor();
    document.getElementById("page").style.backgroundColor = "#" + color;
    document.getElementById("color").innerHTML = "#" + color;
    document.getElementById("button").style.color = "#" + randomColor();
};
