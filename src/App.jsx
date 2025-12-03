import data from './data/dataset-products.json'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import List from './components/List'



function App() {


  return (
    <div className='box'>
      <NavBar />

      <div className='side'>
        <SideBar />
        <div className="content">
          <h1>Proyecto React</h1>
          <List />
        </div>
      </div>
      
        <Footer />
      
    </div>
  )
}

export default App
