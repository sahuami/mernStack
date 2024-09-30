
import './App.css'
import  Title from "./components/Title.jsx";
import  Product from "./components/Product.jsx";
import  FinalProduct from "./components/FinalProduct.jsx";
import  ActivityMsgBox from "./components/ActivityMsgBox.jsx";
import  ActivityAmazonCard from "./components/ActivityAmazonCard.jsx";
import  Button from "./components/Button.jsx";
import  FormCreate from "./components/FormCreate.jsx";

function App() {
  let name = "amit sahu"
  
  return(
  <div>
    <Title/>
    <h2>2*2 ={2 * 2}</h2>
     <h3>hi, {name}</h3>
     <h3>hi, {name.toUpperCase()}</h3>
     

    <FinalProduct/>

    <ActivityMsgBox username ="Amit" textColor="purple"/>

    <ActivityAmazonCard/>

    <Button/>

    <FormCreate/>
    

  </div>
  )  
}

export default App

