
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsScrolled(scrollPos > 50);
      
      // Manual check for "Inicio" section to ensure it highlights when at the very top
      if (scrollPos < 100) {
        setActiveSection('inicio');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // List of sections to observe
    const sections = ['nosotros', 'productos', 'redes', 'contacto'];
    
    // Increased detection range for better reliability
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        // If the section is intersecting and we are not at the top of the page
        if (entry.isIntersecting && window.scrollY >= 80) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { name: 'Inicio', href: '#inicio', id: 'inicio' },
    { name: 'Nosotros', href: '#nosotros', id: 'nosotros' },
    { name: 'Productos', href: '#productos', id: 'productos' },
    { name: 'Redes', href: '#redes', id: 'redes' },
    { name: 'Contacto', href: '#contacto', id: 'contacto' },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    // Explicitly set active section on click for immediate feedback
    setActiveSection(targetId);

    if (targetId === 'inicio') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80; // Navbar height offset
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    closeMenu();
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('inicio');
    closeMenu();
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <a href="#inicio" onClick={scrollToTop} className="flex items-center space-x-2 group cursor-pointer">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full border-2 border-red-600 flex items-center justify-center p-1 shadow-sm overflow-hidden transition-transform group-hover:rotate-12">
               <img src="https://picsum.photos/seed/kitchen/100/100" alt="Logo" className="rounded-full" />
            </div>
            <span className={`font-serif text-xl md:text-2xl font-bold transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-white shadow-sm'}`}>
              Mi Cocina <span className="text-red-600">Sin Tacc</span>
            </span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 items-center">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`font-semibold transition-all duration-300 relative py-1 ${
                  activeSection === item.id 
                    ? 'text-red-600' 
                    : isScrolled ? 'text-gray-700 hover:text-red-600' : 'text-white hover:text-red-400'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-red-600 transition-all duration-300 ${activeSection === item.id ? 'w-full' : 'w-0'}`}></span>
              </a>
            ))}
            <a 
              href="#contacto" 
              onClick={(e) => handleNavClick(e, 'contacto')}
              className="bg-red-600 text-white px-6 py-2 rounded-full font-bold hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg active:scale-95"
            >
              Hacer Pedido
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`lg:hidden text-2xl p-2 transition-colors rounded-lg ${isScrolled ? 'text-red-600 bg-red-50' : 'text-white bg-white/10'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu de navegación"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={closeMenu}
      />

      {/* Mobile Side Drawer */}
      <div className={`fixed top-0 right-0 h-full w-[280px] bg-white z-[70] lg:hidden transform transition-transform duration-300 ease-in-out shadow-2xl ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="p-6 border-b flex justify-between items-center">
            <span className="font-serif text-xl font-bold text-gray-900">Menú</span>
            <button onClick={closeMenu} className="text-gray-500 hover:text-red-600 w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-50 transition-colors">
              <i className="fas fa-times text-2xl"></i>
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto py-6 px-6">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href}
                  className={`text-lg font-bold p-3 rounded-xl transition-all flex items-center justify-between ${
                    activeSection === item.id 
                    ? 'bg-red-50 text-red-600 translate-x-2' 
                    : 'text-gray-800 hover:bg-gray-50'
                  }`}
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  {item.name}
                  <i className={`fas fa-chevron-right text-xs ${activeSection === item.id ? 'text-red-600' : 'text-gray-300'}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="p-6 border-t bg-gray-50">
            <a 
              href="#contacto" 
              className="block w-full bg-red-600 text-white text-center py-4 rounded-xl font-bold shadow-lg hover:bg-red-700 active:scale-95 transition-all"
              onClick={(e) => handleNavClick(e, 'contacto')}
            >
              Hacer Pedido
            </a>
            <div className="mt-6 flex justify-center space-x-6 text-gray-400">
              <a href="https://instagram.com/micocinasintacc" target="_blank" className="hover:text-red-600 transition-colors"><i className="fab fa-instagram text-2xl"></i></a>
              <a href="https://www.facebook.com/micocinasintaccglew" target="_blank" className="hover:text-red-600 transition-colors"><i className="fab fa-facebook text-2xl"></i></a>
              <a href="https://wa.me/5491112345678" target="_blank" className="hover:text-red-600 transition-colors"><i className="fab fa-whatsapp text-2xl"></i></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
