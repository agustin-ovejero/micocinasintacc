
import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      icon: "fa-seedling",
      title: "100% Sin TACC",
      description: "Seguridad garantizada para celíacos. Ambiente libre de trazas."
    },
    {
      icon: "fa-heart",
      title: "Sabor Artesanal",
      description: "Recetas propias perfeccionadas para un sabor auténtico y familiar."
    },
    {
      icon: "fa-truck",
      title: "Envío a Domicilio",
      description: "Llegamos a toda la zona con la frescura que nos caracteriza."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {features.map((f, idx) => (
          <div key={idx} className="text-center group">
            <div className="w-20 h-20 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 transition-colors duration-300 shadow-sm border border-red-100/50">
              <i className={`fas ${f.icon} text-3xl text-red-600 group-hover:text-white`}></i>
            </div>
            <h4 className="text-2xl font-bold mb-3">{f.title}</h4>
            <p className="text-gray-600 leading-relaxed max-w-[280px] mx-auto">
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
