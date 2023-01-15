const randomNumber = () => {
    let n = Math.floor(Math.random() * 7);
    return n;
};

const start = () => {
    console.log(randomNumber());
};
