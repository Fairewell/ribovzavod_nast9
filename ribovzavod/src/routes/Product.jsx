import React from 'react';
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../index.css'
import { MyComponent, ProductCatalog } from '../cmp/products';
import { Header } from '../cmp';

function Products() {

  return (
    <>
      <div className='bg-white w-full overflow-hidden transition-all'>
        <div className='flex justify-center items-center'>
          <Header/>
        </div>
        <MyComponent/>
        <ProductCatalog/>
      </div>
    </>
  )
}

export default Products
