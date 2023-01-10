// return random color
const randomColor = () => {
    return Math.floor(Math.random() * 16777215).toString(16);
};

// invert hexcolor, give complementary color
function invertHex(hex) {
    return (Number(`0x1${hex}`) ^ 0xffffff)
        .toString(16)
        .substr(1)
        .toUpperCase();
}

//change colors
const changeColor = () => {
    let color = randomColor();
    let invertColor = invertHex(color);
    document.getElementById("page").style.backgroundColor = "#" + color;
    document.getElementById("color").innerHTML = "#" + color;
    document.getElementById("button").style.color = "#" + invertColor;
    document.getElementById("color").style.color = "#" + invertColor;
};
