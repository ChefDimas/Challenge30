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

// invert HSL color, give complementary color
const invertHSL = (hsl) => {
    colorObject = toSHLObject(hsl);
    let hue = colorObject.hue;
    let saturation = colorObject.saturation;
    let lightness = colorObject.lightness;
    if (hue <= 180) {
        hue += 180;
        colorObject.hue = hue;
        return `hsl(${colorObject.hue}, ${colorObject.saturation}%, ${colorObject.lightness}%)`;
    } else {
        hue -= 180;
        colorObject.hue = hue;
        return `hsl(${colorObject.hue}, ${colorObject.saturation}%, ${colorObject.lightness}%)`;
    }
};

//change colors
const changeColor = () => {
    let color = randomHSLColor();
    let invertColor = invertHSL(color);
    document.getElementById("page").style.backgroundColor = color;
    document.getElementById("color").innerHTML = color;
    document.getElementById("color").style.color = invertColor;
    document.getElementById("button").style.color = invertColor;
    console.log(color);
    console.log(invertColor);
};
