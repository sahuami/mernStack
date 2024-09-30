import AmazonProduct from "./AmazonProduct.jsx"

export default function ActivityAmazonCard(){
let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
}

    return(
<div style ={styles}>

<AmazonProduct title ="Apple"idx = {0}/>
<AmazonProduct title ="Sumsung"idx = {1}/>
<AmazonProduct title ="Sony"idx = {2}/>
{/* <AmazonProduct title ="oneplus"idx = {3}/> */}


</div>
    )
}