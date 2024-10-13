import React from 'react'
import { useContext } from 'react'
import { Mycontext } from '../fourthUseContext/MyContext.jsx'

export default function child(Grand) {
  const { data, marks,arrays } = useContext(Mycontext)
  const { GrandName, GrandAge } = Grand
  return (
    <div>
      {GrandName}{GrandAge}
      <br />
      
      <h1 style={{ color: 'blue' }}>useContext hook</h1>
      {data.book}
      <br />
      {data.adition}
      <br />
      {marks.math}
      <br />
      {arrays[2]}


    </div>
  )
}
