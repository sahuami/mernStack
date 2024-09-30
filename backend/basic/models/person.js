import mongoose from "mongoose";
import bcrypt from 'bcrypt';

//define the person schema
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,

    },
    work: {
        type: String,
        enum: ['chef', 'waiter', 'manager'],
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },

    //ab hame authentication dena hai toh kise ko authenticate hum uske username and password se krege 
    //  person Schema ke andar username and password kro
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },


})

personSchema.pre('save', async function (next) {
    const person = this;

    // Hash the password only if it has been modified (or is new)
    if (!person.isModified('password')) return next();

    try {
        // hash password generation
        const salt = await bcrypt.genSalt(10);

        // hash password
        const hashedPassword = await bcrypt.hash(person.password, salt);

        // Override the plain password with the hashed one
        person.password = hashedPassword;
        next();
    } catch (err) {
        return next(err);
    }
})

personSchema.methods.comparePassword = async function (candidatePassword) {
    try {
        // Use bcrypt to compare the provided password with the hashed password
        const isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    } catch (err) {
        throw err;
    }
}




// Create person model
const Person = mongoose.model('Person', personSchema)

export default Person