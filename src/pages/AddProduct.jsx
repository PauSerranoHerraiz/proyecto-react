import { useState } from "react"
import { useNavigate } from "react-router-dom"

function AddProduct(props) {

    const [product, setProduct] = useState("")
    const [price, setPrice] = useState("")
    const [rating, setRating] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [stock, setStock] = useState("")

    const navigate = useNavigate()


    const handleSubmit = (e) => {


        e.preventDefault();

        const newProduct = {
            title: product,
            price: price,
            rating: rating,
            thumbnail: imageUrl,
            stock: stock
        }

        props.onCreate(newProduct) 

  

        navigate("/")


    }
    
    return (
        
        <section className="card">
            <h2>Add product</h2>

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
                    Image URL:
                    <input
                        type="url"
                        name="imageUrl"
                        placeholder="https://domain.com/image.jpg"
                        value={imageUrl}
                        onChange={(e) => { setImageUrl(e.target.value) }}
                    />
                </label>

                <button>Create</button>

            </form>


        </section>

    
    )
}

export default AddProduct