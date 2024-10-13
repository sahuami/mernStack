
// React Context is a way to manage state globally.
// The useContext hook in React is used to access the context values provided by a Context.Provider higher up in the component tree. It allows you to avoid prop drilling by accessing global data (like themes, user information, etc.) directly in the component where it's needed.
// 1. Create Context: Think of it as a way to create a "global state" for your app. You set it up once with the information you want to share.

// 2. Provide Context: Wrap your components with a "provider" component that makes this information available to all the components inside it.

//3.  Consume Context: In any component that needs the shared information, use useContext to get that information easily, without needing to pass it through multiple levels of components.



import React, { createContext } from 'react'
const Mycontext = createContext() // first Creating the context

// second make some data you will provide to any other files
const Myprovider = ({ children }) => {
    const data = {
        book: "computer",
        adition: 2001
    }

    const marks = {
        math: 77,
        english: 67
    }
    const arrays = ["amit", 24, "priyaDarling"]

    return <Mycontext.Provider value={{data , marks,arrays}}>
        {children}
    </Mycontext.Provider>
}
export { Mycontext, Myprovider }


