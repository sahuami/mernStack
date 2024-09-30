import  Product from "./Product.jsx";

function FinalProduct(){
    
    let options = ["hi-tech","fast"];

    return(
        <>
         <Product think="Phone" price= "30000"  features= {options}/>
         <Product think="laptop" price= "40000" features= {options}/>
         <Product think="Tablet" price= { 20000} features= {options}/>

        </>
    )
}

export default FinalProduct;