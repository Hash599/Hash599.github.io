import React from 'react'
import "../index.css"
import { Link } from 'react-router-dom'
import { useAppSelector } from './APP/Hooks'
import { RootState } from './APP/Store'

function Navbar() {
    const item=useAppSelector((state:RootState)=>state.cart)
  return (
    <div className='head'>
<span className='logo'>TS</span>
<div className="nav">
    <Link to='/' className='navLink'>Home</Link>
    <Link to='/cart' className='navLink'>Cart</Link>
</div>
<span className='cartCounter'>Cart Items:{item.product.length}</span>
    </div>
  )
}

export default Navbar