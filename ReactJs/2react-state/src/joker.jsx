import {useState, useEffect} from "react";
export default function Joker() {
   let[joke, setJoke] = useState({}); 

    const URL = "https://official-joke-api.appspot.com/random_joke  "
    const getNewJoke = async () => {
        let response = await fetch(URL);    // the Response object returned by fetch is a promise that resolves to the HTTP response. It does not contain the properties setup and punchline directly. You need to call response.json() to parse the JSON body of the response.
        let jsonResponse = await response.json();
        setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline})

    }


    // useEffect ka use yaha isliye  kiya hai ki jaise hame first render pe hume apne page pe joke dikhana hai or useffect ka use direct function m na krke arrow function ke sath kre react hame yahi suggestion deta hai 
    useEffect(() => {
        async function getFirstJoke() {
            let response = await fetch(URL);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline})
        }
        getFirstJoke();
    } , [])

    return (
        <>
            <h1>JOKER</h1>
            <h2 style={{color: "red"}}>{joke.setup}</h2>
            <h3 style={{color: "green"}}>{joke.punchline}</h3>
            <button onClick={getNewJoke}>NewJoke</button>
        </>
    )
}