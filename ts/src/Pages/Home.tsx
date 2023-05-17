import React from 'react'
import '../index.css'
import Products from '../Components/Products'

function Home() {
  return (
    <div className='home'>
        <div className='Home'>
        <h2 className='heading'>Welcome To TypeScript Redux ToolKit Store</h2>
        <section>
 
            <h3>Products</h3>
<Products/>
        </section>
    </div>
    </div>
  )
}

export default Home