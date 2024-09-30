const express = require("express")
const app = express();
const port = 8080;

app.listen(port, () => {
    console.log(`listening to port $(port)`);
});

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/register", (req, res) => {
    // hame pta hai jo bhi request aaygi vo query string m aaygi toh humne use destructure kiya hai phir usse respone ki tarah use kiya hai 
    let { user, password } = req.query;
    res.send(`standard GET response. welcome ${user} `)
})
app.post("/register", (req, res) => {
    let { user, password }= req.body; 
    res.send(`standard POST response welcome ${user} `)
})