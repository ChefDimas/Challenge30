// return random HEX color
const randomColor = () => {
    return Math.floor(Math.random() * 16777215).toString(16);
};

// return random HSL Color
const randomHSLColor = () => {
    let h = Math.floor(Math.random() * 360);
    let s = Math.floor(Math.random() * 101) + "%";
    let l = Math.floor(Math.random() * 101) + "%";
    return `hsl(${h}, ${s}, ${l})`;
};

const toSHLObject = (hsl) => {
    const [hue, saturation, lightness] = String(hsl).match(/\d+/g).map(Number);
    return { hue, saturation, lightness };
};

console.log(toSHLObject(randomHSLColor()));

// invert HSL color, give complementary color
const invertHSL = (hsl) => {
    invertColor = [];
    let hue = parseInt(hsl.slice(4, 7));
    if (hue <= 180) {
        hue += 180;
        return hue;
    } else {
        hue -= 180;
        return hue;
    }
};
console.log(invertHSL(randomHSLColor()));
console.log(randomColor.s);

//change colors
const changeColor = () => {
    let color = randomHSLColor();
    let invertColor = invertHSL(color);
    document.getElementById("page").style.backgroundColor = color;
    document.getElementById("color").innerHTML = color;
    document.getElementById("color").style.color = "#" + invertColor;
    document.getElementById("button").style.color = "#" + invertColor;
};
