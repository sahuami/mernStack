import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Page1() {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/')
    }



    return (
        <>
            <h1>page1</h1>


            <button onClick={handleNavigate }>click me and navigate to home page</button>



        </>
    )
}
