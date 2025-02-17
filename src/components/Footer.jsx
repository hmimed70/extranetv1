import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold mb-4">E.P.I.C EXTRANET</h2>
        <p className="text-lg">Siège social : Quartier d’affaires Lot ‘F’ Bab Ezzouar - Alger</p>
        <p className="text-lg">Allo propreté : 0782-26-38-38</p>
        <p className="text-lg">Email : <a href="mailto:extranetofficiel@gmail.com" className="text-blue-400 hover:underline">extranetofficiel@gmail.com</a></p>
        <div className="mt-4 text-sm">
          <p>&copy; {new Date().getFullYear()} E.P.I.C EXTRANET. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
