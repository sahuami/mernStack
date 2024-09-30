import "./Product.css";

function Product({think, price,  features}){
    const list = features.map((feature) => <li>{feature}</li>);
    let abc = {backgroundColor: price > 30000 ? "gray": null}
    return (
        <div className="Product" style ={abc}>
        <h2>{think}</h2>
        <h3>price: {price}</h3>
        
        <ul>{list}</ul>

        {price>30000? <p>"discount of 5%"</p> : null}
        {price>30000? <p>"discount of 5%"</p> : <a href="">get discount</a>}
        {price>30000 && <p>"discount of 5%"</p>}



    

        </div>
    );
}

export default Product;