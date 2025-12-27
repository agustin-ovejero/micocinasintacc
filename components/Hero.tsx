
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2000" 
          className="w-full h-full object-cover"
          alt="Kitchen Background" 
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center md:text-left">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Sabor Real, <br />
            <span className="text-red-500">100% Libre</span> de Gluten.
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Descubrí la magia de la cocina artesanal sin TACC. Elaboramos cada plato con amor, cuidado y los mejores ingredientes para que disfrutes sin preocupaciones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="https://www.facebook.com/micocinasintaccglew" target="_blank" className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-red-700 transition-all shadow-xl text-center flex items-center justify-center">
              Seguinos en Facebook <i className="fab fa-facebook-f ml-2"></i>
            </a>
            <a href="https://instagram.com/micocinasintacc" target="_blank" className="bg-white/10 backdrop-blur-md border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-red-600 transition-all text-center flex items-center justify-center">
              Seguinos en IG <i className="fab fa-instagram ml-2"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Badge */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center flex-col md:hidden">
        <p className="text-white/70 mb-2 text-sm uppercase tracking-widest">Deslizá para conocer más</p>
        <div className="w-1 h-12 border border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-red-500 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
