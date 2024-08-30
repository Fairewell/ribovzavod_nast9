import React from 'react';
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../index.css'
import { Header } from '../cmp';
import { useLocation } from 'react-router-dom'

const CartPage = () => {
    const location = useLocation()
    const { myProp } = location.state

    return (
        <div>
          <h1>New Page</h1>
          <p>Received prop: {myProp}</p>
        </div>
      );
}

export default CartPage
