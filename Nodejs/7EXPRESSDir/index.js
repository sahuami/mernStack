const express = require("express");
const app = express();
// console.dir(app); 
let port = 3000;
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
})
// app.use((req, res) => {
//     console.log("request receive")

    // hum niche alag alag tarike se respone bhj rahe hai like string m , object m, html format m etc or ek time pe ek response send kr skte hai(means same path ke liye ek he response send hota hai) 
    // res.send("this is a response")
    // res.send({
    //     name: "apple", 
    //     color: "red"
    // })
    // let htmlformat = "<h1>Fruit</h1> <ul><li>apples</li><li>banana</li><ul/>"
    // res.send(htmlformat);
// });


// Routing
app.get("/", (req, res) => {
    res.send("hello, i am root path")
})
// app.get("/About", (req, res) => {
//     res.send("you contracted About path")
// })
// app.get("/Contact", (req, res) => {
//     res.send("you contracted contact path")
// })
// app.get("*", (req, res) => { 
//     res.send("this path does not exist")
// })



// path parameter
app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    let htmlStr = `<h1>welcome to page of @${username} ${id} </h1>`
    res.send(htmlStr); 
})

// query string
// app.get("/search", (req, res) => {
//     let { q } = req.query;
//     if (!q) {
//         res.send("<h1> nothing search</h1>");
//     }
//     res.send(`search result for query: ${q}`);
// });  