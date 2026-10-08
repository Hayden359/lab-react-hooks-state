import React from 'react'

const Cart = ({ cartItems, onClearCart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>{item.name} is in your cart.</li>
            ))}
          </ul>

          <button onClick={onClearCart}>Clear Cart</button>
        </>
      )}
    </div>
  )
}

export default Cart
