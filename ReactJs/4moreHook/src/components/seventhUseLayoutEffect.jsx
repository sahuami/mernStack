// // useLayoutEffect is a hook that is similar to useEffect, but with a key difference in timing
// // useLayoutEffect, runs synchronouly after a render but before the screen is updated(means: screen update hone se phele data update ho jana )
// // Use it only when you need to perform DOM reads/writes before the browser updates the screen.
// // jb bhi hum useffect and useLayoutEffect ko sath m use krege toh phele useLayoutEffect wala part chalega fir useEffect wala chalega 


import React, { useEffect, useLayoutEffect, useState } from "react";

const seventhUseLayoutEffect = () => {
  const [value, setValue] = useState(0);




  // useLayoutEffect(() => {
  //   if (value == 0) {
  //     setValue(value + Math.random() * 100)
  //   }
  // }, [value]);


  useEffect(() => {
    if (value == 0) {
      setValue(value + Math.random() * 100)
    }
  }, [value]);



  //check which one run firstly useeffect or uselayouteffct
  // useEffect(() => {
  //   console.log("i am first useeffect")
  // }, [])
  // useLayoutEffect(() => {
  //   console.log("i am second useeffect to change uselayout")
  // }, [])
  // useEffect(() => {
  //   console.log("i am third useeffect")
  // }, [])


  return (
    <div >
      <h3> my new random number {value}</h3>
      <button onClick={() => setValue(0)}>random value</button>

      <p>
        if value is 0, using useLayoutEffect will immediately update the value before the user ever sees 0. Using useEffect, the user might see 0 for a moment before the value is updated.
      </p>

    </div>
  );
};

export default seventhUseLayoutEffect



