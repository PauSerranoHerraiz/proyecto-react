import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

function EditProductPage(props) {

    const [product, setProduct] = useState("")
    const [price, setPrice] = useState("")
    const [rating, setRating] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [description, setDescription] = useState("")
    const [stock, setStock] = useState("")

    const { productId } = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        const currentProduct = props.productsArr.find((el) => el.id === parseInt(productId))
        if (currentProduct) {
            setProduct(currentProduct.title)
            setPrice(currentProduct.price)
            setRating(currentProduct.rating)
            setImageUrl(currentProduct.thumbnail)
            setDescription(currentProduct.description || "")
            setStock(currentProduct.stock)
        }
    }, [productId, props.productsArr])

    const handleSubmit = (e) => {
        e.preventDefault();

        const editedProduct = {
            id: productId,
            title: product,
            price: price,
            rating: rating,
            thumbnail: imageUrl,
            description: description,
            stock: stock,
        }

        props.onEdit(editedProduct)
        navigate("/")
    }

    return (
        <>
            <section className="card">
                <h2>Edit product</h2>

                <form onSubmit={handleSubmit}>

                    <label>
                        Product:
                        <input
                            type="text"
                            name="product"
                            placeholder="Basket ball"
                            value={product}
                            required
                            onChange={(e) => { setProduct(e.target.value) }}
                        />
                    </label>

                    <label>
                        Price:
                        <input
                            type="number"
                            name="price"
                            placeholder="80"
                            min={0}
                            value={price}
                            required
                            onChange={(e) => { setPrice(e.target.value) }}
                        />
                    </label>

                    <label>
                        Rating:
                        <input
                            type="number"
                            name="rating"
                            placeholder="3.5"
                            min={0}
                            max={5}
                            value={rating}
                            onChange={(e) => { setRating(e.target.value) }}
                        />
                    </label>

                    <label>
                        Image URL:
                        <input
                            type="url"
                            name="imageUrl"
                            placeholder="https://domain.com/image.jpg"
                            value={imageUrl}
                            onChange={(e) => { setImageUrl(e.target.value) }}
                        />
                    </label>

                    <label>
                        Stock:
                        <input
                            type="number"
                            name="stock"
                            placeholder="50"
                            min={0}
                            value={stock}
                            onChange={(e) => { setStock(e.target.value) }}
                        />
                    </label>

                    <label>
                        Description:
                        <input
                            value={description}
                            onChange={(e) => { setDescription(e.target.value) }}
                        />
                    </label>



                    <button>Edit</button>

                </form>

            </section>
        </>
    )
}

export default EditProductPage