// useReducer is a React Hook used for managing state in functional components. It’s similar to useState, but is preferable when dealing with complex state logic that involves multiple sub-values or when the next state depends on the previous state. It’s particularly useful for managing state in a more predictable and structured way.
// The useReducer Hook accepts two arguments.
// useReducer(<reducer>, <initialState>)
// The reducer function contains your custom state logic and the initialState can be a simple value but generally will contain an object.
// The useReducer Hook returns the current state and a dispatch method.

import React, { useReducer } from 'react'

export default function fifthUseReducer() {
  
  const reducer = (state, action) => {
    // third step(1 way)
    // if (action.type == "Incre") {
      //   return (state += 1)

    // }
    // if (action.type == "Decre") {

    //   return (state == 0 ? state = 0 : state -= 1)
    // }
    // return state

    // 2nd way
    switch (action.type) {
      case "Incre":
        return (state += 1)

      case "Decre":
        return (state == 0 ? state = 0 : state -= 1)
      default:
        return state
    }

  }


  const [state, dispatch] = useReducer(reducer, 0)


  // second step
  let handleIncrement = () => {
    dispatch({ type: "Incre" })   //dispatch ka kaam ki dekhna ki kis type ka operetion perform krna hai phir use type ka operation/action hum reducer se krwayge
  }
  let handleDecrement = () => {
    dispatch({ type: "Decre" })
  }
  return (
    <div>
      {/* first step */}
      <button onClick={handleIncrement}>+</button>
      <h3>{state}</h3>
      <button onClick={handleDecrement}>-</button>
    </div>
  )
}
