import React from 'react';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Section title */}
      <h1 className="text-4xl font-semibold text-gray-800 text-center mb-8">
        Activités
      </h1>

      {/* Main blog section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main article */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-lg">
          <img
            src={img1}
            alt="Blog main"
            className="w-full h-64 object-cover rounded-lg"
          />
          <h2 className="mt-4 text-3xl font-semibold text-gray-800">
            Opération de recensement - Mission de nettoyage
          </h2>
          <p className="mt-2 text-gray-600">
            L’opération de recensement et de collecte des déchets vise à garantir un environnement sain. Cette mission comprend la gestion des déchets, le nettoyage des routes et l’entretien des espaces publics à travers les communes d’Alger.
          </p>
          <a
            href="#"
            className="mt-4 inline-block text-blue-600 hover:text-blue-800"
          >
            Voir plus
          </a>
        </div>

        {/* Two small articles on the right */}
        <div className="space-y-8">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src={img2}
              alt="Small article 1"
              className="w-full h-32 object-cover rounded-lg"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              Petit article 1
            </h3>
            <p className="mt-2 text-gray-600">
              L’entretien des vides sanitaires dans les bâtiments est essentiel pour préserver l’hygiène des lieux publics.
            </p>
            <a
              href="#"
              className="mt-4 inline-block text-blue-600 hover:text-blue-800"
            >
              Voir plus
            </a>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src={img3}
              alt="Small article 2"
              className="w-full h-32 object-cover rounded-lg"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              Petit article 2
            </h3>
            <p className="mt-2 text-gray-600">
              La gestion des points de rupture des charges dans le transport des déchets permet de réduire les coûts et d’optimiser les trajets.
            </p>
            <a
              href="#"
              className="mt-4 inline-block text-blue-600 hover:text-blue-800"
            >
              Voir plus
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
