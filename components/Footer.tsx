
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1">
            <h3 className="font-serif text-3xl font-bold mb-6">Mi Cocina <span className="text-red-600">Sin Tacc</span></h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              El rincón favorito de quienes buscan sabor y seguridad en cada bocado. Elaboración artesanal diaria.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/micocinasintaccglew" target="_blank" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com/micocinasintacc" target="_blank" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://wa.me/5491112345678" target="_blank" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Navegación</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#inicio" className="hover:text-red-600 transition-colors">Inicio</a></li>
              <li><a href="#productos" className="hover:text-red-600 transition-colors">Productos</a></li>
              <li><a href="#nosotros" className="hover:text-red-600 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#contacto" className="hover:text-red-600 transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Información</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center space-x-3">
                <i className="fas fa-map-marker-alt text-red-600"></i>
                <span>Buenos Aires, Argentina</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-phone text-red-600"></i>
                <span>+54 9 11 1234-5678</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-envelope text-red-600"></i>
                <span>hola@micocinasintacc.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 text-center text-gray-500 text-sm">
          <p>© 2025 Mi Cocina Sin Tacc. Todos los derechos reservados.</p>
          <p className="mt-2 flex items-center justify-center">
            Diseñado con <i className="fas fa-heart text-red-600 mx-1"></i> por Folkode
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
