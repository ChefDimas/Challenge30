const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    let num1 = Number(req.body.n1);
    let num2 = Number(req.body.n2);

    let result = num1 + num2;

    res.send(`The result of calculation is ${result}`);
});

app.listen(port, () => {
    console.log(`Starting server at port: ${port}`);
});
