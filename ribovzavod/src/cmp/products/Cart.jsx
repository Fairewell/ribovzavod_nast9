import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, onRemoveFromCart, isOpen }) => {
  const itemCounts = cartItems.reduce((acc, item) => {
    acc[item.id] = (acc[item.id] || 0) + 1;
    return acc;
  }, {});

  let allCount = 0;

  useEffect(() =>{
    allCount = 0;
  });

  return (
    <aside className={`flex top-4 right-4 bg-white shadow-lg rounded-lg transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      {isOpen && (
        <div className='p-4'>
          {Object.keys(itemCounts).length === 0 ? (
            ''
          ) : (
            <ul>
              {Object.entries(itemCounts).map(([id, count]) => {
                const item = cartItems.find(item => item.id === parseInt(id));
                return item === undefined ? (
                  console.log(`ITEM IS ${item}`)
                ) : (
                  <li key={id} className="flex justify-between items-center py-1 border-b">
                    <div className='flex flex-wrap flex-col'>
                        <span className='font-raleway text-black'>{item.name}</span>
                        <span className='font-raleway text-black'>{item.price} ({item.unit})</span>
                        {allCount = allCount + (parseFloat(item.price.replace(" руб.", "").replace(",", ".")))}
                    </div>
                    <button 
                      onClick={() => onRemoveFromCart(item.id)} 
                      className="text-red-500 hover:text-red-700"
                    >
                      🗑️
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        <p className='text-black font-raleway'>{(Object.keys(itemCounts).length === 0 ? 'Корзина пуста, милорд' : allCount)}</p>
        </div>
      )}
    <button 
        className='overflow-hidden px-12 py-3 mt-5 text-lg font-semibold leading-loose text-white whitespace-nowrap bg-violet-600 rounded rotate-[2.4492937051703357e-16rad] shadow-[0px_0px_2px_rgba(109,49,237,0.12)] max-md:px-5'
    >
        <Link to="/cart" state={{ myProp: cartItems }}>Оформить заказ</Link>
    </button>
    </aside>
  );
};

export default Cart;
