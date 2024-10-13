import React from 'react'
import Child from './child'

export default function parent({Grand}) {
  
  const {GrandName , GrandAge} = Grand
  return (

    <div>
      This concept is props driling (means: dataflow are Grand to parent then parent to child )
      
      my name is {GrandName} and age is {GrandAge}
      <Child  {...Grand}/>
    </div>
  )
}
