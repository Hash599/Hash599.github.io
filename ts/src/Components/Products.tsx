import React,{useEffect} from 'react'
import { fetchProducts } from './Store/ProductSlice'
import { useAppDispatch,useAppSelector } from './APP/Hooks'
import { add } from './Store/CartSlice'
import "../index.css"
import { Product } from './Store/ProductSlice'

function Products() {
  const dispatch=useAppDispatch()
  const products=useAppSelector((state)=>state.product)
  const {loading,error}=useAppSelector((state)=>state.product)
 useEffect(()=>{
    dispatch(fetchProducts())
 },[])
 const handleAddToCart=(p:Product)=>{
dispatch(add(p))
 }
    return (

  
     


    <div className='productWrapper'>
  {
    loading && <img src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921'/>

  }
  {error && <img src='https://media.tenor.com/hwe3vkln0_UAAAAM/error-x-error.gif'/>}
  {!loading && !error && (
        products.product.map((p) => (
          <div className='card' key={p.id}>
            <img src={p.image} alt='' />
            <h4>{p.title}</h4>
            <h5>{p.price}</h5>
            <button className='card-button' onClick={() => handleAddToCart(p)}>
              Add To Cart
            </button>
          </div>
        ))
      )}
    </div>
  )
}

export default Products