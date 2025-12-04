
import { Link } from "react-router-dom"
import ProductCard from "../pages/ProductCard"

function ProductList(props) {



    return (
        <>
            {props.productsArr.map((element) => {
                return (
                    <ProductCard />
                )
            })}
        </>
    )
}

export default ProductList