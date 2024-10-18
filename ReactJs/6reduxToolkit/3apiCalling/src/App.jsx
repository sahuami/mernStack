import React from 'react'
import { fetchTodos } from './redux/slice/todoSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function App() {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)
  console.log("State", state)

  if (state.todo.isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <button onClick={(e) => dispatch(fetchTodos())} >Fetch Todos data</button>
      {state.todo.data && state.todo.data.map((e) => <li>{e.title}</li>
      )}

    </>
  )
}
