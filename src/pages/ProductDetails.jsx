import { Link, useParams } from "react-router-dom";

function ProductDetails (props) {

    const { productId } = useParams()

    const product = props.list.find((element)=> {
        return element.id === parseInt (movieId)
    })

    return (
        <>
        <h1>{product.title}</h1>
        {product.thumbnail && <img src={product.thumbnail} alt="Product image" />}
        <p>{product.rating}</p>
        <p>{product.price}</p>
        <p>{product.description}</p>

        <p>
            <Link to="/" className="btn btn-primary">Back</Link>
        </p>
        </>
    )

}

export default ProductDetails