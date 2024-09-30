import React, { useState } from 'react'

export default function IstUseState() {

    const initial = true
    const [toggle, setToggle] = useState(initial)
    const showWord = () => {
        setToggle(!toggle)
    }


    const [formData, setFormData] = useState({
        name: '',
        city: ''
    })

    let handleNameChange = (event) => {

        setFormData({
            ...formData,
            name: event.target.value // Update the name value
        });
    }
    let handleCityChange = (event) => {
        setFormData({
            ...formData,
            city: event.target.value // Update the name value
        });
    }

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h1 style={{ color: 'blue' }}>use state hook</h1>
                <p style={{ background: "pink" }}>
                    Example 1: click the button to change the state(means helloworld to india and vice cersa)
                </p>
                {
                    toggle ? <h3>Hello world</h3> : <h2>INDIA</h2>
                }
                <button onClick={showWord}>click me!</button>
                <br /><br />
                <p style={{ background: "pink" }}>
                    Example 2:
                </p>
                <input type="text" onChange={handleNameChange} name='name' placeholder='Enter name' />
                <select onChange={handleCityChange} name="city" id="">
                    <option>noida</option>
                    <option>delhi</option>
                    <option>chennai</option>
                    <option>benguluru</option>
                </select>

                <h3>My name is <span style={{ color: 'red' }}>{formData.name}</span>  and i belong city
                     <span style={{ color: 'red' }}>{formData.city}</span>

                </h3>

            </div>





        </>
    )
}
