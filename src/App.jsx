import { useState } from 'react'
import data from './data/dataset-products.json'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import ProductList from './components/ProductList'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import ProductDetails from './pages/ProductDetails'




function App() {

  const [productsToDisplay, setProductsToDisplay] = useState(data)


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
    <div className='box'>
      <NavBar />

      <div className='side'>


        <SideBar />
        <div className="content">
          <Routes>
            <Route path='/' element={<ProductList productsArr={productsToDisplay} />} />
            <Route path="/about" element={<About />} />
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
