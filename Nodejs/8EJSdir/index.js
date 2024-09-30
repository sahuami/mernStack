// using ejs
const express = require("express");
const app = express();
const path = require("path");

const port = 8080;
app.listen(port, () => {
    console.log(`listening on port ${port}`);

})

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));


app.get("/", (req, res) => {
    res.render("home.ejs")
})
// app.get("/rolldice" , (req,res) => {
//     res.render("rolldice.ejs") 
// }) 
app.get("/rolldice", (req, res) => {
    let diceval = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", { diceval })
})
// app.get("/ig/:username", (req, res) => {
//     const followers = ["yash", "shubham",  "priya"]
//     let { username } = req.params;
//     res.render("instagram.ejs", { username, followers })

// }) 

// ab hum instagram page bnayge jiska sara data database se aayga or vo data hamare data.json file m store hai or us data ko use krne ke liye data.json file ko require krna hoga phele

app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    if(data){

        res.render("instagram.ejs" , {data});
    }
    else{
        res.render("error.ejs");
    }
});
