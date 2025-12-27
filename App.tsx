
import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import Footer from './components/Footer';

type SocialType = 'Todos' | 'Instagram' | 'Facebook' | 'Eventos';

interface SocialPost {
  id: number;
  type: 'Instagram' | 'Facebook' | 'Eventos';
  image: string;
  link: string;
}

const SOCIAL_POSTS: SocialPost[] = [
  { id: 1, type: 'Instagram', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1200', link: 'https://instagram.com/micocinasintacc' },
  { id: 2, type: 'Facebook', image: 'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=1200', link: 'https://www.facebook.com/micocinasintaccglew' },
  { id: 3, type: 'Eventos', image: 'https://images.unsplash.com/photo-1530103043960-ef38714abb15?q=80&w=1200', link: '#' },
  { id: 4, type: 'Instagram', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200', link: 'https://instagram.com/micocinasintacc' },
  { id: 5, type: 'Facebook', image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1200', link: 'https://www.facebook.com/micocinasintaccglew' },
  { id: 6, type: 'Eventos', image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200', link: '#' },
  { id: 7, type: 'Instagram', image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200', link: 'https://instagram.com/micocinasintacc' },
  { id: 8, type: 'Facebook', image: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=1200', link: 'https://www.facebook.com/micocinasintaccglew' },
];

const App: React.FC = () => {
  const [activeSocialFilter, setActiveSocialFilter] = useState<SocialType>('Todos');
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const filteredSocialPosts = useMemo(() => {
    if (activeSocialFilter === 'Todos') return SOCIAL_POSTS;
    return SOCIAL_POSTS.filter(post => post.type === activeSocialFilter);
  }, [activeSocialFilter]);

  const socialFilters: SocialType[] = ['Todos', 'Instagram', 'Facebook', 'Eventos'];

  const getIcon = (type: string) => {
    switch (type) {
      case 'Instagram': return 'fab fa-instagram';
      case 'Facebook': return 'fab fa-facebook-f';
      case 'Eventos': return 'fas fa-calendar-check';
      default: return 'fas fa-hashtag';
    }
  };

  const handlePostClick = (post: SocialPost) => {
    if ((post.type === 'Instagram' || post.type === 'Facebook') && post.link !== '#') {
      window.open(post.link, '_blank');
    } else {
      setZoomedImage(post.image);
    }
  };

  return (
    <div className="min-h-screen relative">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Nosotros Section */}
        <section id="nosotros" className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 italic">
              "Nuestra misión es que el gluten no sea una barrera para el placer de comer rico y sano."
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
              En Mi Cocina Sin Tacc, entendemos la importancia de la seguridad alimentaria. 
              Por eso, cada producto es elaborado en un entorno controlado, libre de contaminación cruzada, 
              utilizando harinas y materias primas certificadas de la más alta calidad.
            </p>
          </div>
          <Features />
        </section>
        
        <Products />

        {/* Gallery/Social Section */}
        <section id="redes" className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                <div>
                    <h2 className="text-4xl font-serif font-bold">Comunidad Sin TACC</h2>
                    <p className="text-gray-500 mt-2">Seguinos y enterate de todas nuestras actividades</p>
                </div>
                <div className="hidden md:flex space-x-2">
                   <a href="https://instagram.com/micocinasintacc" target="_blank" className="bg-red-50 text-red-600 p-3 rounded-full hover:bg-red-600 hover:text-white transition-all shadow-sm">
                      <i className="fab fa-instagram text-xl"></i>
                   </a>
                   <a href="https://www.facebook.com/micocinasintaccglew" target="_blank" className="bg-blue-50 text-blue-600 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                      <i className="fab fa-facebook-f text-xl"></i>
                   </a>
                </div>
            </div>

            {/* Social Media & Events Filter */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-10">
              {socialFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveSocialFilter(filter)}
                  className={`flex items-center space-x-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border-2 ${
                    activeSocialFilter === filter
                      ? 'bg-gray-900 border-gray-900 text-white shadow-xl scale-105'
                      : 'bg-white border-gray-100 text-gray-500 hover:border-red-600 hover:text-red-600'
                  }`}
                >
                  <i className={getIcon(filter)}></i>
                  <span>{filter}</span>
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 min-h-[400px]">
              {filteredSocialPosts.map((post) => (
                <div 
                  key={post.id} 
                  onClick={() => handlePostClick(post)}
                  className="relative aspect-square overflow-hidden rounded-3xl cursor-pointer group shadow-lg animate-in fade-in slide-in-from-bottom-2 duration-500"
                >
                  <img 
                    src={post.image} 
                    alt={`${post.type} Post`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 backdrop-blur-sm bg-black/40`}>
                    <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center text-white text-2xl mb-2 ${
                            post.type === 'Instagram' ? 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500' : 
                            post.type === 'Facebook' ? 'bg-blue-600' : 'bg-green-600'
                        }`}>
                            <i className={getIcon(post.type)}></i>
                        </div>
                        <span className="text-white font-bold text-xs uppercase tracking-widest">
                          {post.type === 'Instagram' || post.type === 'Facebook' ? `Ver en ${post.type}` : 'Ver Detalle'}
                        </span>
                    </div>
                  </div>

                  {/* Tag */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-md">
                     <i className={`${getIcon(post.type)} text-xs ${
                        post.type === 'Instagram' ? 'text-pink-600' : 
                        post.type === 'Facebook' ? 'text-blue-600' : 'text-green-600'
                     }`}></i>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredSocialPosts.length === 0 && (
              <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                <i className="fas fa-search text-4xl text-gray-300 mb-4"></i>
                <p className="text-gray-500">Pronto tendremos más novedades aquí.</p>
              </div>
            )}
          </div>
        </section>

        {/* Image Zoom Modal */}
        {zoomedImage && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => setZoomedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white text-3xl hover:text-red-500 transition-colors z-[110]"
              onClick={() => setZoomedImage(null)}
            >
              <i className="fas fa-times"></i>
            </button>
            <div className="relative max-w-5xl w-full h-full flex items-center justify-center">
              <img 
                src={zoomedImage} 
                className="max-h-[90vh] max-w-full object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300" 
                alt="Zoomed View" 
              />
            </div>
          </div>
        )}

        {/* Call to Action Section */}
        <section id="contacto" className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-red-600 skew-y-3 origin-bottom-right scale-110"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white py-12">
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">¿Tenés un evento o duda en especial?</h2>
                <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto">
                    Hacemos catering personalizado para cumpleaños, reuniones y eventos corporativos. 
                    Todo el menú pensado para que todos puedan disfrutar sin excepción.
                </p>
                <a 
                  href="https://wa.me/5491112345678?text=Hola! Me gustaría hacer una consulta sobre un evento o sacarme una duda."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-red-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl"
                >
                    Contactanos
                </a>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
