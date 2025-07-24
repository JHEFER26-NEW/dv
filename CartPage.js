import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const CartPage = ({ setCurrentPage }) => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [orderComplete, setOrderComplete] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = (e) => {
    e.preventDefault();
    // Aquí iría la lógica real de procesamiento de pago con una pasarela (Stripe, PayPal, etc.)
    // Por ahora, simulamos el éxito del pago.
    console.log(`Procesando pago de $${total.toFixed(2)} con ${paymentMethod}...`);
    
    // Simulación de un pequeño retraso para el procesamiento
    setTimeout(() => {
      setOrderComplete(true);
      clearCart(); // Vacía el carrito después de un pedido exitoso
    }, 1500);
  };

  if (orderComplete) {
    return (
      <div className="container mx-auto p-4 text-center min-h-screen flex flex-col justify-center items-center">
        <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg mb-6 shadow-md">
          <h2 className="text-2xl font-bold mb-2">¡Pedido completado con éxito!</h2>
          <p className="text-lg">Gracias por tu compra en Jheferson Tech.</p>
        </div>
        <button 
          onClick={() => setCurrentPage('shop')} 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition-colors shadow-md"
        >
          Volver a la tienda
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Tu Carrito de Compras</h1>
      
      {cart.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-lg shadow-md">
          <p className="text-xl text-gray-600 mb-6">Tu carrito está vacío. ¡Es hora de llenarlo con tecnología!</p>
          <button 
            onClick={() => setCurrentPage('shop')} 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition-colors shadow-md"
          >
            Explorar Productos
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Lista de Productos en el Carrito */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center border-b border-gray-200 py-4 last:border-b-0">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-24 h-24 object-contain rounded-md mr-4"
                />
                <div className="flex-grow">
                  <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 transition-colors p-2 rounded-full hover:bg-red-100"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Resumen de Compra y Formulario de Pago */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Resumen de Compra</h2>
            <div className="mb-6 border-b border-gray-200 pb-4">
              <div className="flex justify-between mb-2 text-gray-700">
                <span>Subtotal:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2 text-gray-700">
                <span>Envío:</span>
                <span>$0.00</span> {/* Envío gratuito por ahora */}
              </div>
              <div className="flex justify-between font-bold text-xl mt-4 text-gray-900">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <form onSubmit={handlePayment} className="mt-6">
              <div className="mb-6">
                <label className="block mb-3 font-semibold text-gray-700">Selecciona Método de Pago</label>
                <div className="space-y-3">
                  <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="credit"
                      checked={paymentMethod === 'credit'}
                      onChange={() => setPaymentMethod('credit')}
                      className="mr-3 h-5 w-5 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="font-medium text-gray-800">Tarjeta de Crédito / Débito</span>
                  </label>
                  <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="paypal"
                      checked={paymentMethod === 'paypal'}
                      onChange={() => setPaymentMethod('paypal')}
                      className="mr-3 h-5 w-5 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="font-medium text-gray-800">PayPal</span>
                  </label>
                </div>
              </div>

              {paymentMethod === 'credit' && (
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">Número de Tarjeta</label>
                    <input
                      type="text"
                      placeholder="XXXX XXXX XXXX XXXX"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">Fecha de Expiración (MM/AA)</label>
                      <input
                        type="text"
                        placeholder="MM/AA"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">CVV</label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">Nombre en la Tarjeta</label>
                    <input
                      type="text"
                      placeholder="Nombre Completo"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                      required
                    />
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
              >
                Completar Pedido
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;