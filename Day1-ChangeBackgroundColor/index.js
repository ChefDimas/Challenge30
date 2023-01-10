const randomColor = () => {
    return Math.floor(Math.random() * 16777215).toString(16);
};

const changeColor = () => {
    document.getElementById("page").style.backgroundColor = "#" + randomColor();
};
