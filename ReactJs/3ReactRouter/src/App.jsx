
import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Page1 from './components/page1'
import Home from './components/Home'
import Navbar from './components/navbar'
import Page2 from './components/page2'

export default function App() {




  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/page1' element={<Page1 />} />
          <Route path='/page2' element={<Page2 />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}












// // question 1
// import React, { useState } from 'react';

// export default function App() {

//     const countries = [
//         {
//             name: 'India',
//             value: 'IN',
//             cities: ['Delhi', 'Mumbai']

//         },
//         {
//             name: 'Pak',
//             value: 'PK',
//             cities: ['Lahore', 'Karachi']
//         },
//         {
//             name: 'Bangladesh',
//             value: 'BG',
//             cities: ['Dhaka', 'Chittagong']
//         }]

//     const [selectedCountry, setSelectedCountry] = useState('');

//     return (
//         <>
//             <select onChange={(e) => setSelectedCountry(e.target.value)}>

//                 {countries.map((country, index) => {
//                     return (
//                         <option key={index} value={index}>{country.name}
//                         </option>

//                     )

//                 })}

//             </select>

//             {selectedCountry && (
//                 <select>
//                     {countries[selectedCountry].cities.map((city, index) => (
//                         <option key={index} value={city}>
//                             {city}
//                         </option>
//                     ))}
//                 </select>
//             )}

//         </>
//     );
// }


//question 2

// import React, { useEffect, useState } from 'react'

// export default function App() {

//     // const [data, setData] = useState(null);

//     const fetchdata = async () => {
//         const res = await fetch("https://dog.ceo/api/breeds/image/random")
//         const result = await res.json()
//         // setData(result);
//         console.log(result)
//     }

//     useEffect(() => {
//         fetchdata()

//     }, [])
//     return (

//         <div>

//             {/* {data && (<img src={data.message} alt="A Random Dog" width="300" />
// )}
//            */}
//         </div>



//     )
// }

