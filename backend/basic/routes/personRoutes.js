import express from 'express'
const router = express.Router();
import Person from './../models/person.js'



// post route to add person detail
router.post('/', async (req, res) => {
    const data = req.body  //assuming the request body contain the person data

    try {
        // Create a new person document using the Mongoose model
        const newPerson = new Person(data);

        // Save the new person to the database
        const savedPerson = await newPerson.save();
        console.log("Data saved successfully");
        res.status(200).json({ savedPerson });
    } catch (error) {
        console.log("Error saving person", error);
        res.status(500).json({ error: 'Internal server error' });
    }

})

//get method to get person detail
router.get('/', async (req, res) => {
    try {
        const data = await Person.find()
        console.log('person data fetched sucessfull')
        res.status(200).json(data)
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Internal server error' });
    }
})

// jase ki humare pass alag category ke person hai sabka role alag hai toh jaruri nhi hai na ki hum sbka data dekhna chate hai toh isliye hum (/person/:parameter) pass krdenge
router.get('/:workType', async (req, res) => {
    try {
        const worktype = req.params.workType
        if (worktype == 'chef' || worktype == 'manager' || worktype == 'waiter') {
            const data = await Person.find({ work: worktype })
            console.log('worktype data fetched sucessful')
            res.status(200).json(data)
        } else {
            res.status(400).json({ error: 'Invalid worktype' })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Internal server error' });
    }
})


// update kena document ko 
router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id;   //extract the id from the url parameter
        const updatedPersonData = req.body

        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true, //return the updated document
            runValidators: true  // run mongoose validation
        })

        if (!response) {
            return res.status(404).json({ error: 'person  not found' })
        }
        console.log('data updated')
        res.status(200).json(response)

    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Internal server error' });
    }

})


router.delete('/:id', async (req, res) => {

    try {
        const personId = req.params.id;   //extract the id from the url parameter
        const response = await Person.findByIdAndDelete(personId)
        if (!response) {
            return res.status(404).json({ error: 'person  not found' })
        }
        console.log('data delete')
        res.status(200).json(response)

    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Internal server error' });
    }

})

export default router
