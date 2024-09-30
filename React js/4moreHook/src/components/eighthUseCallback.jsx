// The useCallback and useMemo Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function
// The React useCallback Hook returns a memoized callback function.
// The useCallback Hook only runs when one of its dependencies update.



import React, { useCallback, useEffect, useState } from 'react'


export default function eighthUseCallback() {
  const [num, setNum] = useState(0)
  // const child = () => {
  //   console.log("child component")
  //   return "This is the child component";

  // }

  // toh ye uper wala child function m usecallback ke andar likh dunga toh button click krne  pe baar baar render nhi hoga 

  const child = useCallback(() => {
    console.log("child component")
    return "This is the child component";

  }, [])

  const childresult = child()




  return (
    <div>
      <p>
        {childresult}
      </p>

      <h5>{num}</h5>
      {/* jb bhi m button click kr rah hu child wala function apne ap call ho rah hai ye hona nhi chaheye kyuki child function ka button se koi lena dena he nhi hai  toh ese he problem ko thik krne ke liya hum usecallback hook ka use krte hai */}
      <button onClick={() => setNum(num + 1)}>click me</button>
    </div>
  )
}
