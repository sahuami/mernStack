import { useState } from "react";

export default function Counter() {

    function initialization() {
        return Math.random();
    }
    let [count, setCount] = useState(initialization);   //useState me direct number ka deke function ko bhi call kra skte hai
    let inCount = () => {

        // setCount(count + 2); hum ese bhi value increase kra skte hai  ya phir callback ka use krke jo likha hai
        setCount((currCount) => {
            
            return currCount + 1;

        });
        //// ek or value same ese he ek or callback function bna denge
        // setCount((currCount) => {
        //     return currCount + 1;
        // });

        console.log(`count = ${count}`);
    };

    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick={inCount} >Increase Count</button>
        </div>
    );
}   