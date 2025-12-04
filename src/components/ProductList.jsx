
import ProductCard from "../pages/ProductCard"

function ProductList(props) {



    return (
        <>
            {props.productsArr.map((element) => {
                return (
                    <ProductCard className="product"
                        key={element.id}
                        id={element.id}
                        title={element.title}
                        thumbnail={element.thumbnail}
                        stock={element.stock}
                        deleteItem={props.deleteItem}
                    />
                )
            })}

        </>
    )
}

export default ProductList