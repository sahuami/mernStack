// It can be used to store/create a mutable value that will not re-render the components when updated.

// It can be used to access a DOM element directly.
// useRef() only returns one item. It returns an Object called current.


import React, { useEffect, useRef, useState } from 'react'


export default function sixthUseRef() {
    // jase he m count ki initial value dunga or useEffect m  setcount increse hota rahega ya kahe ki render hota rahega rukega nhi jisse ki final output nhi mil payga toh use ko thik krne ke liye hum useref ka use krte hai
    // const [count, setcount] = useState()
    const count = useRef(0)
    const [userInput, setUserInput] = useState()


    useEffect(() => {
        // setcount(count+1)
        count.current = count.current + 1
    })

    // Accessing DOM Elements
    const inputElement = useRef();

    const focusInput = () => {
        inputElement.current.focus();
        inputElement.current.style.backgroundColor = "red"


    };




    return (
        <div>
            <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
            <p>The number of times compnent render:{count.current}</p>

            <h2>Accessing DOM Elements</h2>
            <input type="text" ref={inputElement} />
            <button onClick={focusInput}>click me and change the color</button>
        </div>
    )
}
