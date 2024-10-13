import './App.css'
import Counter from "./Counter.jsx"
import LikeButton from "./LikeButton.jsx"
import Form from "./FormCreate.jsx"
import Comment from "./CommentForm.jsx";
import Effect from "./Effect.jsx";
import Joker from "./joker.jsx"

 
function App() {
  return (
    <>
      <h2>STATE IN REACT</h2>
      <Counter />

      <h2>THIS IS MY LIKE BUTTTON</h2>
      <LikeButton />

      <Form />
      <Comment />

      <Effect />

      <Joker/>
      


    </>
  )

}


export default App
