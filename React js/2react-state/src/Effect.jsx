import{ useState, useEffect  } from "react";

export default function Effect() {
    let [Countx, setCountx] = useState(0);
    let [County, setCounty] = useState(0);

    let inCountx = () => {
        setCountx((currCount) => currCount + 1);
    };

    let inCounty = () => {
        setCounty((currCount) => currCount + 1);
    };

    useEffect(function printSomething(){
        console.log("this is a side-effect");
    },  [Countx])
    return (
        <>
            <h3>COUNTx = {Countx} </h3>
            <button onClick = {inCountx}> +1</button>

            <h3>COUNTy = {County} </h3>
            <button onClick = {inCounty}> +1</button>
        </>
    )
}
