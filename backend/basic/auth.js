import passport from "passport"
import { Strategy as LocalStrategy } from 'passport-local';

import Person from './models/person.js'


passport.use(new LocalStrategy(async (UserName, password, done) => {
   
   
    try {
        // console.log('receive credential', UserName, password)          
        const user = await Person.findOne({ username: UserName })
        if (!user) {
            return done(null, false, { message: 'incorrect username' })
            
        }
        const isPasswordMatch = await user.comparePassword(password)
        if (isPasswordMatch) {
            return done(null, user)
        } else {
            return done(null, false, { message: 'incorrect password' })
        }

    } catch (err) {
        return done(err)

    }
}))

export default passport