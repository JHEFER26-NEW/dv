import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const AuthModal = ({ show, onClose, isLogin, toggleMode }) => {
  const { login, register } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      login(email, password);
    } else {
      register(email, password, name);
    }
    onClose();
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md relative border border-gray-200">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl font-bold leading-none transition-colors"
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
          {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
        </h2>
        
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Contraseña</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
          >
            {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
          </button>
          
          <button
            type="button"
            className="w-full mt-4 text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors"
            onClick={toggleMode}
          >
            {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;