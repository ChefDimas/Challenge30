// return random HEX color
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

// return random HSL Color
const randomHSLColor = () => {
    h = Math.floor(Math.random() * 360);
    s = Math.floor(Math.random() * 101) + "%";
    l = Math.floor(Math.random() * 101) + "%";
    return `hsl(${h}, ${s}, ${l})`;
};
console.log(randomHSLColor());

//change colors
const changeColor = () => {
    let color = randomHSLColor();
    let invertColor = invertHex(color);
    document.getElementById("page").style.backgroundColor = color;
    document.getElementById("color").innerHTML = color;
    document.getElementById("color").style.color = "#" + invertColor;
    document.getElementById("button").style.color = "#" + invertColor;
};
