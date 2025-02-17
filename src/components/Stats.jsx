import React from 'react';
import { FaCity, FaBuilding, FaUsers, FaTruck, FaMap, FaLocationArrow } from 'react-icons/fa'; // FontAwesome icons

const Stats = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Stat for Communes */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <FaCity className="text-5xl text-blue-600 mx-auto transition duration-300 transform hover:scale-110" />
            <h3 className="mt-4 text-2xl font-semibold text-gray-800">31 Communes</h3>
            <p className="mt-2 text-gray-600">Couvrant 31 communes de wilaya Alger</p>
          </div>

          {/* Stat for Dayras */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <FaLocationArrow className="text-5xl text-green-600 mx-auto transition duration-300 transform hover:scale-110" />
            <h3 className="mt-4 text-2xl font-semibold text-gray-800">8 Daïras</h3>
            <p className="mt-2 text-gray-600"></p>
          </div>

          {/* Stat for Employees */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <FaUsers className="text-5xl text-yellow-600 mx-auto transition duration-300 transform hover:scale-110" />
            <h3 className="mt-4 text-2xl font-semibold text-gray-800">7000 Employés</h3>
            <p className="mt-2 text-gray-600">Personnel dédié à l'entretien et la propreté</p>
          </div>

          {/* Stat for Trucks */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <FaTruck className="text-5xl text-red-600 mx-auto transition duration-300 transform hover:scale-110" />
            <h3 className="mt-4 text-2xl font-semibold text-gray-800">500 Camions</h3>
            <p className="mt-2 text-gray-600">Utilisés pour le transport des déchets</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
