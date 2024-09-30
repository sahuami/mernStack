import { useState } from "react";
export default function Form() {
    let [formdata, setformdata] = useState({
        fullname: "",
        username: ""
    })

    // let handleInputChange = (event) => {
    //     let fieldName = event.target.name;
    //     let newValue = event.target.value;
    //     setformdata((currdata) => {
    //         currdata[fieldName] = newValue;
    //         return {...currdata};
    //     })
    // }

    // handleinputchange ko hum is tarike se bhi likh skte hai
    let handleInputChange = (event) => {
        setformdata((currdata) => {
            return { ...currdata, [event.target.name]: event.target.value };
        })
    }
    return (
        <form >
            <label htmlFor="1">Fullname</label>
            <input
                placeholder="enter your name"
                value={formdata.fullname}
                onChange={handleInputChange}
                id="1"
                name="fullname"
            />

            <br />
            <label htmlFor="2">username</label>
            <input
                placeholder="enter username"
                value={formdata.username}
                onChange={handleInputChange}
                id="2"
                name="username"
            />
            <button>submit</button>
        </form>
    )
}