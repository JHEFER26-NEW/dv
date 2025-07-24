import React from 'react';

const LandingHero = ({ setCurrentPage }) => {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-110"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-circuit-board-technology-animated-background-229-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/30"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <div className="mb-8 transform transition-all duration-700 hover:scale-105">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Jheferson Tech
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-xl md:text-2xl text-gray-100 font-light tracking-wider">
            Soluciones Tecnológicas Premium
          </p>
        </div>

        <div className="flex space-x-6 mb-12">
          {/* Facebook SVG */}
          <a href="#" className="text-2xl text-white hover:text-blue-400 transition-all duration-300 hover:-translate-y-1">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
            </svg>
          </a>
          
          {/* Instagram SVG */}
          <a href="#" className="text-2xl text-white hover:text-pink-500 transition-all duration-300 hover:-translate-y-1">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
          
          {/* Twitter SVG */}
          <a href="#" className="text-2xl text-white hover:text-blue-400 transition-all duration-300 hover:-translate-y-1">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
          
          {/* YouTube SVG */}
          <a href="#" className="text-2xl text-white hover:text-red-500 transition-all duration-300 hover:-translate-y-1">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>

        <button
          onClick={() => setCurrentPage('shop')}
          className="relative px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-lg font-semibold text-white shadow-lg hover:shadow-xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 group"
        >
          <span className="relative z-10 flex items-center">
            Explorar Catálogo
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default LandingHero;