import { Link, useParams } from "react-router-dom";

function ProductDetails(props) {

    const { productId } = useParams()

    const product = props.productsArr.find((element) => {
        return element.id === parseInt(productId)
    })
    if (!product) return <h1>Product not found</h1>
    
    return (
        <>
            <h1>{product.title}</h1>
            {product.thumbnail && <img src={product.thumbnail} alt="Product image" />}
            <p>RATING: {product.rating}</p>
            <p>PRICE: {product.price}€</p>
            <p>{product.description}</p>

            <p>
                <Link to="/" className="btn btn-primary">Back</Link>
            </p>
        </>
    )

}

export default ProductDetails