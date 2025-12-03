import data from "../data/dataset-products.json"
import { useState } from "react"

function List() {


    const [itemsToDisplay, setItemsToDisplay] = useState(data)

    const deleteItem = (itemId) => {
        const newList = itemsToDisplay.filter((element) => {
            if (element.id !== itemId) {
                return true
            }
            else {
                return false
            }
        })
        setItemsToDisplay(newList)
    }

    return (
        <>
            {itemsToDisplay.map((element) => {
                return (
                    <div key={element.id} className="items">
                        <p >{element.stock > 0 ? element.title + " ✅ " : element.title + " ❌"}</p>

                        <button onClick={() => { deleteItem(element.id) }}>delete</button>
                    </div>


                )
            })}
        </>
    )
}

export default List