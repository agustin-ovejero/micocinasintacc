
import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../constants';

const Categories = ['Todos', 'Panificados', 'Dulce', 'Salado'] as const;
type CategoryFilter = typeof Categories[number];

const Products: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('Todos');

  const filteredProducts = useMemo(() => {
    if (activeFilter === 'Todos') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="productos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-2">Nuestro Menú</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">Tentaciones Artesanales</h3>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 border-2 ${
                activeFilter === cat
                  ? 'bg-red-600 border-red-600 text-white shadow-lg transform scale-105'
                  : 'bg-white border-gray-200 text-gray-600 hover:border-red-600 hover:text-red-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 min-h-[400px]">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group animate-in fade-in zoom-in duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-red-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                  {product.category}
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">{product.name}</h4>
                <p className="text-gray-600 text-sm mb-4 h-12 overflow-hidden line-clamp-2">
                  {product.description}
                </p>
                <div className="flex justify-between items-center mt-4 border-t pt-4">
                  <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                  <a 
                    href={`https://wa.me/5491112345678?text=Hola! Me gustaría pedir: ${product.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-green-50 rounded-full text-green-600 hover:bg-green-600 hover:text-white transition-all transform hover:rotate-12 flex items-center justify-center"
                    title="Pedir por WhatsApp"
                  >
                    <i className="fab fa-whatsapp text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <i className="fas fa-cookie-bite text-5xl text-gray-300 mb-4"></i>
            <p className="text-gray-500 text-lg">No encontramos productos en esta categoría por ahora.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
