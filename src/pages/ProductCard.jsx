import { Link } from "react-router-dom"


function ProductCard(props) {
    return (
        <div key={props.id} className="items">
            <p> <img className="productImg" src={props.thumbnail} alt="Product Image" /></p>
            
            <p >{props.stock > 0 ? props.title + " ✅ " : props.title + " ❌"}</p>
            
            <button onClick={() => { props.deleteItem(props.id) }}>delete</button>
            <Link to={`/product/${props.id}`}>
                <button>More Details</button>
            </Link>

        </div>
    )
}

export default ProductCard



