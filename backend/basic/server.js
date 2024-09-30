import fs from "fs"
import os from "os"
import _ from "lodash"

// console.log(os)
// console.log(fs)
// console.log(_)



import ex from "express"
const app = ex()
import db from './db.js';
import Menu from './models/Menu.js'
import PersonRoutes from "./routes/personRoutes.js"
import passport from "./auth.js"

import bodyParser from 'body-parser'
app.use(bodyParser.json())



const port = 3000

//middleware function
const logRequest = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] Request made to : ${req.originalUrl}`)
    next() //move on to the next phase
}
app.use(logRequest)
// logRequest middleware function ko hum chaete ki sirf vo home ke liye hit ho ya person page ke liye ya menu page ke liye toh hum is tarike se middleware pass kr skte hai 
// app.get('/', logRequest, (req, res) => {
//     res.send("this is home page ")
// })




app.use(passport.initialize())
// ab m chata hu ki ye humara home page tabhi dikhe jb hum isko authenticate kre username and password se toh uske liye hume ese krna hoga
const localAuthMiddleware =passport.authenticate('local', { session: false })
//ab ye authentication hum jisme chahe usme lga skte hai person/ menu kise m bhi
// app.get('/', localAuthMiddleware, (req, res) => {
//     res.send("this is home page ")
// })








 app.get('/', (req, res) => {
    res.send("this is home page ")
 })

// app.get('/about', (req, res) => {
//     var myProfile = {
//         name: "amit",
//         age:24,
//         photo: false
//     }
//     res.send(myProfile)
// })


// //post method to add person detail
// app.post('/person', async (req, res) => {
//     const data = req.body  //assuming the request body contain the person data

//     // this show error
//     //Create a new person document using the Mongoose model
//     // const newPerson = new Person(data)

//     //save the new person to the database

//     // this code show error like : MongooseError: Model.prototype.save() no longer accepts a callback
//     // The error you're encountering is because the latest versions of Mongoose no longer support the use of callbacks for operations like save. Instead, you should use Promises or async/await syntax.
//     // newPerson.save((error, savedPerson) => {
//     //     if (error) {
//     //         console.log("Error saving person", error)
//     //         res.status(500).json({error: 'Internal server error'})
//     //     }else{
//     //         console.log("data saved sucessfully")
//     //         res.status(200).json({savedPerson})
//     //     }
//     // })

//     // correct code

//     try {
//         // Create a new person document using the Mongoose model
//         const newPerson = new Person(data);

//         // Save the new person to the database
//         const savedPerson = await newPerson.save();
//         console.log("Data saved successfully");
//         res.status(200).json({ savedPerson });
//     } catch (error) {
//         console.log("Error saving person", error);
//         res.status(500).json({ error: 'Internal server error' });
//     }

// })

// //get method to get person detail
// app.get('/person', async (req, res) => {
//     try {
//         const data = await Person.find()
//         console.log('data fetched sucessful')
//         res.status(200).json(data)
//     } catch (err) {
//         console.log(err)
//         res.status(500).json({ error: 'Internal server error' });
//     }
// })

// // jase ki humare pass alag category ke person hai sabka role alag hai toh jaruri nhi hai na ki hum sbka data dekhna chate hai toh isliye hum (/person/:parameter) pass krdenge
// app.get('/person/:workType', async (req, res) => {
//     try {
//         const worktype = req.params.workType
//         if (worktype == 'chef' || worktype == 'manager' || worktype == 'waiter') {
//             const data = await Person.find({ work: worktype })
//             console.log('data fetched sucessful')
//             res.status(200).json(data)
//         } else {
//             res.status(400).json({ error: 'Invalid worktype' })
//         }
//     } catch (err) {
//         console.log(err)
//         res.status(500).json({ error: 'Internal server error' });
//     }
// })


// ab server.js file m bhot jada conjested ho gai hai humne person ka, menu ka sab ek ki file m bna diya code readibility ke hisab se sahi nhi hai 
// isliye hum ab new folder bna ka express router ka use krege
app.use('/person',  PersonRoutes)
 
//// isse tarah hum menu ka route bhi new file m bna skte hai



app.post('/menu', async (req, res) => {
    const data = req.body

    try {
        // Create a new person document using the Mongoose model
        const newMenu = new Menu(data);

        // Save the new person to the database
        const savedMenu = await newMenu.save();
        console.log("menu Data saved successfully");
        res.status(200).json({ savedMenu });
    } catch (error) {
        console.log("Error saving person", error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

app.get('/menu', async (req, res) => {
    try {
        const data = await Menu.find()
        console.log('menu data fetched sucessfull')
        res.status(200).json(data)
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Internal server error' });
    }
})



app.listen(port, () => {
    console.log(`server at listening port ${port}`)
})
