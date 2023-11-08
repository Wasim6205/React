import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './modules/Home/Home'
import { Routes, Route } from "react-router-dom"
import Product from './modules/Product/Product'
import Products from './modules/Products/Products'
import CategoryProducts from './modules/CategoryProducts/CategoryProducts'
import Cart from './modules/Cart/Cart'

function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/products/:id'  element={<Product/>}/>
        <Route path='/products'  element={<Products/>}/>
        <Route path='/categories/:name'  element={<CategoryProducts/>}/>
        <Route path='cart'  element={<Cart/>}/>
        <Route path='*'  element={<div>404</div>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
