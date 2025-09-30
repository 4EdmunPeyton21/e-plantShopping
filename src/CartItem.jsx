import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from './CartSlice';
import './CartItem.css';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="item-details">
        <h3>{item.name}</h3>
        <p>Unit Price: ${item.price.toFixed(2)}</p>
      </div>
      <div className="item-actions">
        <div className="quantity-control">
          <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
        </div>
        <button className="remove-btn" onClick={() => dispatch(removeFromCart(item.id))}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartItem;