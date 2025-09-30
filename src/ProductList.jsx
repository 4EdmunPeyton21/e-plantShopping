import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from './CartSlice';
import './ProductList.css';

const products = [
    { id: 1, name: 'Snake Plant', price: 25.00, image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSsfaDxNSS5rTz-llD4Nz1CmDV0a2g8RJjV11FZdE7AMgUK7qr8BFvpFUqyqfkRZm7QcNMm4Ek9DUvkR-BIyt3971-Yjje2-ulBGTa0diA', category: 'Low Light Lovers' },
    { id: 2, name: 'ZZ Plant', price: 30.00, image: 'https://kyari.co/cdn/shop/files/1_c2592c28-67c7-4eeb-ae96-8d693911e234.jpg?v=1737183229&width=480', category: 'Low Light Lovers' },
    { id: 3, name: 'Fiddle Leaf Fig', price: 55.00, image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQtvZi9ApK1wIl-FlRCHFBOgswwy55iDO3WmDoQIuC_VaHvZAn-8XT2VA2jkbRwqYjNBBwcdzhroTkCaPV8j6DQ1bnHne97O-CQyS2Hog', category: 'Bright Light Fans' },
    { id: 4, name: 'Monstera Deliciosa', price: 45.00, image: 'https://www.ugaoo.com/cdn/shop/files/Monstera_Deliciosa_Plant_-_XL_7_copy_7_2.jpg?v=1742548943&width=1000', category: 'Bright Light Fans' },
    { id: 5, name: 'Pothos', price: 20.00, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQYCtAK_VJb3V6-hXvUJbdPqcTLhwFw8lCWQ&s', category: 'Hanging Beauties' },
    { id: 6, name: 'String of Pearls', price: 28.00, image: 'https://www.bhg.com/thmb/RRMq6dfVZLciLOVHCpXj_lAF6So=/4000x0/filters:no_upscale():strip_icc()/BHG-How-to-Grow-and-Care-for-String-of-Pearls-Plant-101013958-ec44a47102af4e52ab067f21cc26efc2.jpg', category: 'Hanging Beauties' }
];

const productsByCategory = products.reduce((acc, product) => {
    (acc[product.category] = acc[product.category] || []).push(product);
    return acc;
}, {});

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const cartItemIds = cartItems.map(item => item.id);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h2>Our Collection</h2>
      {Object.entries(productsByCategory).map(([category, items]) => (
        <React.Fragment key={category}>
          <h3 className="category-title">{category}</h3>
          <div className="product-grid">
            {items.map((product) => {
              const isInCart = cartItemIds.includes(product.id);
              return (
                <div key={product.id} className="product-card">
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p className="price">${product.price.toFixed(2)}</p>
                  <button 
                    onClick={() => handleAddToCart(product)}
                    disabled={isInCart}
                  >
                    {isInCart ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              );
            })}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProductList;