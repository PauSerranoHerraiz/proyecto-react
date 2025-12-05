import { useState } from 'react'
import data from './data/dataset-products.json'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import ProductList from './components/ProductList'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import ProductDetails from './pages/ProductDetails'
import AddProduct from './pages/AddProduct'




function App() {

  const [productsToDisplay, setProductsToDisplay] = useState(data)


  const deleteItem = (itemId) => {
    const newList = productsToDisplay.filter((element) => {
      return element.id !== parseInt(itemId)
    })
    setProductsToDisplay(newList)
  }

    const createProduct = (newProductDetails) => {
      const productIds = productsToDisplay.map((element)=> {
        return element.id
      });
      const maxId = Math.max(...productIds);
      const nextId = maxId +1

      const newProduct = {
        ...newProductDetails,
        id: nextId
      }

      const newList = [ newProduct, ...productsToDisplay]

      setProductsToDisplay(newList)

    }


  return (
    <div className='box'>
      <NavBar />

      <div className='side'>


        <SideBar />
        <div className="content">
          <Routes>
            <Route path='/' element={<ProductList productsArr={productsToDisplay} deleteItem={deleteItem} />} />
            <Route path="/about" element={<About />} />
            <Route path="/create" element= {<AddProduct onCreate={createProduct}/>}/>
            <Route path="/product/:productId" element={<ProductDetails productsArr={productsToDisplay} />} />
            <Route path="*" element={<h1>Page not found</h1>} />
          </Routes>

        </div>


      </div>



      <Footer />
    </div>

  )

}
export default App
