import React, { useState } from 'react';
import { AuthProvider } from './context/AuthContext'; // Ruta corregida
import { CartProvider } from './context/CartContext'; // Ruta corregida
import Navbar from './components/Navbar';
import LandingHero from './components/LandingHero';
import ShopLayout from './components/ShopLayout';
import CartPage from './components/CartPage';
import AuthModal from './components/AuthModal';
import { products } from './mock/products';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const renderPage = () => {
    switch(currentPage) {
      case 'shop':
        return <ShopLayout products={products} />;
      case 'cart':
        return <CartPage setCurrentPage={setCurrentPage} />;
      default:
        return <LandingHero setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-900">
          <Navbar 
            setCurrentPage={setCurrentPage}
            setShowAuthModal={setShowAuthModal}
          />
          
          <AuthModal 
            show={showAuthModal}
            onClose={() => setShowAuthModal(false)}
            isLogin={isLogin}
            toggleMode={() => setIsLogin(!isLogin)}
          />
          
          {renderPage()}
        </div>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;