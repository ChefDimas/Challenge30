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
    let lightness = colorObject.lightness;

    if (hue <= 180) {
        if (lightness <= 50) {
            colorObject.lightness += 50;
        } else {
            colorObject.lightness -= 50;
        }
        colorObject.hue += 180;
        return `hsl(${colorObject.hue}, ${colorObject.saturation}%, ${colorObject.lightness}%)`;
    } else {
        if (lightness <= 50) {
            colorObject.lightness += 50;
        } else {
            colorObject.lightness -= 50;
        }
        colorObject.hue -= 180;
        return `hsl(${colorObject.hue}, ${colorObject.saturation}%, ${colorObject.lightness}%)`;
    }
};

const shadeOne = (hsl) => {
    colorObject = toSHLObject(hsl);
    if (colorObject.lightness >= 50) {
        colorObject.lightness -= 8;
        return `hsl(${colorObject.hue}, ${colorObject.saturation}%, ${colorObject.lightness}%)`;
    } else {
        colorObject.lightness += 8;
        return `hsl(${colorObject.hue}, ${colorObject.saturation}%, ${colorObject.lightness}%)`;
    }
};

const shadeTwo = (hsl) => {
    colorObject = toSHLObject(hsl);
    if (colorObject.lightness >= 50) {
        colorObject.lightness -= 16;
        return `hsl(${colorObject.hue}, ${colorObject.saturation}%, ${colorObject.lightness}%)`;
    } else {
        colorObject.lightness += 16;
        return `hsl(${colorObject.hue}, ${colorObject.saturation}%, ${colorObject.lightness}%)`;
    }
};

const shadeThree = (hsl) => {
    colorObject = toSHLObject(hsl);
    if (colorObject.lightness >= 50) {
        colorObject.lightness -= 20;
        return `hsl(${colorObject.hue}, ${colorObject.saturation}%, ${colorObject.lightness}%)`;
    } else {
        colorObject.lightness += 20;
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
    //First Shade
    document.getElementById("hue1").style.backgroundColor = shadeOne(color);
    document.getElementById("hue1").innerHTML = shadeOne(color);
    //Second Shade
    document.getElementById("hue2").style.backgroundColor = shadeTwo(color);
    document.getElementById("hue2").innerHTML = shadeTwo(color);
    //Third Shade
    document.getElementById("hue3").style.backgroundColor = shadeThree(color);
    document.getElementById("hue3").innerHTML = shadeThree(color);
    console.log(color);
    console.log(invertColor);
};
