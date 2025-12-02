
import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'



function App() {


  return (
    <div className='box'>
      <NavBar /> 

      <h1>Proyecto React</h1>

      <SideBar />
      <br />

      <Footer />
    </div>
  )
}

export default App
