import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';

const Navbar = ({ setCurrentPage, setShowAuthModal }) => {
  const { user, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);

  return (
    <nav className="bg-white border-b border-gray-200 p-4 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <button 
          onClick={() => setCurrentPage('home')} 
          className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
        >
          Jheferson Tech
        </button>
        
        <div className="flex items-center space-x-6">
          <button 
            onClick={() => setCurrentPage('shop')} 
            className="text-gray-600 hover:text-blue-600 transition-colors text-lg font-medium"
          >
            Tienda
          </button>
          
          {user ? (
            <div className="flex items-center space-x-3">
              <span className="text-gray-700 text-lg">Hola, {user.name || user.email}</span>
              <button 
                onClick={logout} 
                className="px-4 py-2 bg-red-500 text-white rounded-md text-sm font-medium hover:bg-red-600 transition-colors shadow-sm"
              >
                Cerrar sesión
              </button>
            </div>
          ) : (
            <button 
              onClick={() => setShowAuthModal(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm"
            >
              Iniciar sesión
            </button>
          )}
          
          <button 
            onClick={() => setCurrentPage('cart')} 
            className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;