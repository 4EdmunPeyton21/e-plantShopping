import { Routes, Route, Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomePage from './HomePage'; // <-- Important: imports your new page
import ProductList from './ProductList';
import Cart from './Cart';
import AboutUs from './AboutUs';
import './App.css';

// This new component provides the layout for all pages WITH a header
const AppLayout = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <header className="app-header">
        <Link to="/products" className="logo">The Verdant Nook</Link>
        <nav>
          <Link to="/about">About Us</Link>
          <Link to="/cart" className="cart-link">
            <span className="cart-icon">🛒</span>
            {totalItemCount > 0 && <span className="cart-count">{totalItemCount}</span>}
          </Link>
        </nav>
      </header>
      <main className="container">
        <Outlet /> {/* Child routes will render here */}
      </main>
    </>
  );
};


function App() {
  return (
    <Routes>
      {/* Route for the landing page (no header) */}
      <Route path="/" element={<HomePage />} />
      
      {/* Routes for all other pages (with header) */}
      <Route element={<AppLayout />}>
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<AboutUs />} />
      </Route>
    </Routes>
  );
}

export default App;