import React from 'react'
import IstUseState from './components/IstUseState'
import SecondUseEffect from './components/SecondUseEffect'
import Parent from './components/thirdPropsDriling/parent'
import FifthUsereducer from './components/fifthUseReducer'
import SixthUseRef from './components/sixthUseRef'
import SeventhUseLayoutEffect from './components/seventhUseLayoutEffect'
import EighthUseCallback from './components/eighthUseCallback'
import NinethUseMemo from './components/ninethUseMemo'

export default function App() {
  const time = new Date()
  const currTime = time.toTimeString()


  const GrandData = {
    GrandName: "Amit",
    GrandAge: "23"
  }

  return (

    <>
    
      {currTime}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ color: 'blue' }}>useState hook</h1>
        <IstUseState />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ color: 'blue' }}>useEffect hook</h1>
        <SecondUseEffect />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ color: 'blue' }}>props Drilling</h1>
        <Parent Grand={GrandData} />
        {/* props driling ko remove krne ke liye hum (useContext) ka use krte hai */}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ color: 'blue' }}>useReducer hook</h1>
        <FifthUsereducer />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ color: 'blue' }}>useRef hook</h1>
        < SixthUseRef/>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ color: 'blue' }}>uselayoutEffect hook</h1>
        <SeventhUseLayoutEffect/>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ color: 'blue' }}>UseCallback hook</h1>
        <EighthUseCallback/>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ color: 'blue' }}>UseMemo hook</h1>
        <NinethUseMemo/>
      </div>





    </>
  )
}
