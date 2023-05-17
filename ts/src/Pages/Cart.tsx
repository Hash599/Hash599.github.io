import React,{CSSProperties} from 'react'
import '../index.css';
import { useAppDispatch,useAppSelector } from '../Components/APP/Hooks';
import { remove } from '../Components/Store/CartSlice';
import { RootState } from '../Components/APP/Store';
import { spawn } from 'child_process';
function Cart() {
  const products=useAppSelector((state:RootState)=>state.cart)
  const dispatch=useAppDispatch();
  const handleremove=(id:number)=>{
    dispatch(remove(id))
  }
  return (
    <div ><h3 style={{textAlign:"center"}}>Cart</h3>
   {
    products.product.length>0?
   (<div className='cartWrapper'>
    {
        products.product.map((p)=>(
            <div className='cartCard'>
                  <img src={p.image}/>
  <h5>{p.title}</h5>
  <h5>{p.price}</h5>
 <button className='btn' onClick={()=>handleremove(p.id)}>Remove</button>
            </div>
        ))

    }
   </div>):(<p style={styles.emptyCartMessage}> Cart is Empty</p>)
    
   }
    </div>
  )
}
interface CartStyles {
    [key: string]: CSSProperties;
  }
const styles:CartStyles = {
    emptyCartMessage: {
      textAlign: 'center',
      fontSize: '18px',
      color: 'red',
      fontWeight: 'bold',
      marginTop: '20px',
      padding: '10px',
      border: '2px dashed red',
      borderRadius: '5px',
    },
  };

export default Cart