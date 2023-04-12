const express = require("express");
const bodyParser = require("body-parser");

const app = express();
//make app use body parser
app.use(bodyParser.urlencoded({ extended: true })); //take value from request by form
//Creates an Express application. The express() function is a top-level function exported by the express module.
const port = 3000;
//at the route send a function with req and res parameter
app.get("/", (req, res) => {
    res.send('<h1>Hello World</h1>'); //like print writer
})


// handle with get method
//__dirname: give the relative directory path
app.get("/contact", (req, res) => {
    res.send('contact korebau kaitou satsuki');
})
app.get("/testNodemon", (req, res) => {
    res.send('test success');
})
app.get("/form", (req, res) => {
    res.sendFile(__dirname + "/index.html");
    console.log(__dirname + "/index.html");
})
//setup in port and web will be in port = 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
//remember that `` is different than '' or "". `` allow to use ${value}
//Ctr + C to close
// value get from body-parser is just a text type

//handle with post method
app.post("/form", (req, res) => {
    let n1 = Number(req.body.num1);
    let n2 = Number(req.body.num2);
    let result = n1 + n2;
    res.send(""+result);
})
//to pass information from form to server. One method is using body parser