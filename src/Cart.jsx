import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import './Cart.css';

const Cart = () => {
    const cartItems = useSelector(state => state.cart.items);
    
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalCost = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    if (cartItems.length === 0) {
        return (
            <div className="cart-empty">
                <h2>Your cart is empty.</h2>
                {/* Updated Link */}
                <Link to="/products" className="btn">Continue Shopping</Link>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <h2>Your Shopping Cart</h2>
            <div className="cart-container">
                <div className="cart-items">
                    {cartItems.map(item => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </div>
                <div className="cart-summary">
                    <h3>Summary</h3>
                    <p>Total Plants: <strong>{totalItems}</strong></p>
                    <p>Total Cost: <strong>${totalCost.toFixed(2)}</strong></p>
                    <div className="cart-buttons">
                        {/* Updated Link */}
                        <Link to="/products" className="btn btn-secondary">Continue Shopping</Link>
                        <button className="btn checkout-btn" onClick={() => alert('Checkout feature coming soon!')}>
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;