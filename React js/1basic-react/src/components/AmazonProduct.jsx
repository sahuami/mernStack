import Price from "./Price.jsx";
import "./Product.css";

export default function AmazonProduct({title , idx}){
let oldPrices = ["90000","70000","60000","50000"];
let newPrices = ["85000","65000","55000","45000"];
let description = ["Apple's own iOS mobile operating system","manufactured and marketed by Samsung Electronics.","phone comes with a 6.50-inch touchscreen display","China-based manufacturer of Android smartphones"]
    return(
    <div className = "product">
    <h3>{title}</h3>
    <p>{description [idx]}</p>
    <Price oldPrice ={oldPrices[idx]} newPrice = {newPrices[idx]}/>

    </div>
    )
}