import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/pages/HomePage/HomePage'
import Cart from '../customer/components/Cart/Cart'
import Navigation from '../customer/components/Navigation/Navigation'
import Footer from '../customer/components/Footer/Footer'
import Product from '../customer/components/Product/Product'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import Checkout from '../customer/components/Checkout/Checkout'
import Order from '../customer/components/Order/Order'
import OrderDetails from '../customer/components/Order/OrderDetails'
import ProductCard from '../customer/components/HomeSectionCard/ProductCard'
import Login from '../customer/components/Auth/Login'
import SignUp from '../customer/components/Auth/SignUp'
import Forgot_Password from '../customer/components/Auth/Forgot_Password'


const CustomersRouters = () => {
  return (
    <div>

      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/SignUp' element={<SignUp />}></Route>
        <Route path='/Forgot-Password' element={<Forgot_Password />}></Route>
        {/* <Route path='/' element={<ProductCard/>}></Route> */}
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/:lavelOne/:lavelTwo' element={<Product />}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/product/:productId' element={<ProductDetails />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
        <Route path='/account/order' element={<Order />}></Route>
        <Route path='/account/order/:orderId' element={<OrderDetails />}></Route>
        {/* <Order/> */}
        {/* <OrderDetails/> */}
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default CustomersRouters
