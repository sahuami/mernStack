import { useState } from "react";

export default function Comment() {

    let [formdata, setformdata] = useState({
        username: "",
        remark: "",
        rating: "",
    });

    let handleInputChange = (event) => {
        setformdata((currdata) => {
            return { ...currdata, [event.target.name]: event.target.value }
        })
    }

    let handleSubmit = (event) => {
        console.log(formdata);
        event.preventDefault();

        // submit hone ke baad form reset(empty) ho jayga
        setformdata(
           { username: "",
            remark: "",
            rating: "",
           }
           )
    }

    return (
        <>
            <h3>GIVE A COMMENT</h3>
            <form onSubmit={handleSubmit}>

                <label htmlFor="1">USERNAME</label>
                <input
                    placeholder="username"
                    type="text"
                    onChange={handleInputChange}
                    value={formdata.username}
                    name= "username"
                    id="1"
                /> 

                <br />

                <label htmlFor="3">REMARKS</label>
                <textarea
                    placeholder=" Add few remarks"
                    onChange={handleInputChange}
                    value= {formdata.remark} 
                    name = "remark"
                    id="3"

                >
                </textarea>

                <br />

                <label htmlFor="2">RATING</label>
                <input
                    placeholder="Rating"
                    type="number" min={1} max={5}
                    onChange={handleInputChange}
                    value={formdata.rating}
                    name= "rating"
                    id="2"
                />

                <br />

                <button>Add Comment</button>

            </form>
        </>

    )
}