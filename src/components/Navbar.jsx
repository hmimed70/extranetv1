import React, { useState } from "react";
import { FaBars, FaTimes, FaAngleLeft, FaSearch } from "react-icons/fa";

const NavBar = () => {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const menuData = [
    {
      title: "Nos Missions",
      children: [
        {
          title: "Nettoyage, collecte et transport des déchets",
          link: "#/fr/nettoyage-collecte-transport/",
        },
        {
          title: "Entretien des vides sanitaires des bâtiments",
          link: "#/fr/entretien-vides-sanitaires/",
        },
        {
          title: "Garantir l’hygiène des lieux accueillant le public",
          link: "#/fr/hygiene-lieux-publics/",
        },
        {
          title: "Eradication des moustiques et lutte contre les vecteurs des maladies transmissibles",
          link: "#/fr/eradication-moustiques/",
        },
        {
          title: "Balayage des voies publiques",
          link: "#/fr/balayage-voies-publiques/",
        },
     
        {
          title: "Gestion des points de rupture des charges",
          link: "#/fr/points-rupture-charges/",
        },
        {
          title: "Système de surveillance et contrôle des déchets",
          link: "#/fr/systeme-surveillance-dechets/",
        },
        {
          title: "Base de données électronique pour la gestion des déchets",
          link: "#/fr/base-donnees-dechets/",
        },
        {
          title: "Contrôle des étapes de traitement des déchets",
          link: "#/fr/controle-traitement-dechets/",
        },
        {
          title: "Sensibilisation à la nécessité du tri des déchets",
          link: "#/fr/sensibilisation-tri-dechets/",
        },
        {
          title: "Programmes de sensibilisation pour la préservation de l'environnement",
          link: "#/fr/programmes-sensibilisation-environnement/",
        },
        {
          title: "Système intégré de gestion des déchets ménagers",
          link: "#/fr/systeme-gestion-dechets/",
        },
        {
          title: "Installation sophistiquées pour la conservation des ressources",
          link: "#/fr/installations-conservation-ressources/",
        },
        {
          title: "Acquisition des biens meubles et immeubles",
          link: "#/fr/acquisition-biens/",
        },
        {
          title: "Opérations contribuant à la propreté de l’environnement",
          link: "#/fr/operations-proprete-environnement/",
        },
      ],
    },
    {
      title: "Établissement",
      children: [
        { title: "À propos de l'établissement", link: "#/fr/cv-dg/" },
        { title: "Biographie du directeur général", link: "#/fr/cv-dg/" },
        { title: "Discours du directeur général", link: "#/fr/a-propos-etablissement/" },
      ],
    },
    {
      title: "Domaine Nettoyage",
      children: [
        { title: "Collecte et transport des déchets", link: "#/fr/collecte-transport-dechets/" },
        { title: "Entretien des espaces publics", link: "#/fr/entretien-espaces-publics/" },
        { title: "Sensibilisation à l'hygiène et propreté", link: "#/fr/sensibilisation-hygiene/" },
      ],
    },
    
    {
      title: "Contact",
      children: [
        { title: "Suggestions", link: "#/fr/suggestions/" },
        { title: "Rapports", link: "#/fr/rapports/" },
      ],
    },
  ];

  const MenuItem = ({ item, level = 0 }) => {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    return (
      <li
        className={`relative  group ${level === 0 ? "mx-4" : ""}`}
        onMouseEnter={() => {
          setOpenSubmenu(item.title);
          setIsSubmenuOpen(true);
        }}
        onMouseLeave={() => {
          setOpenSubmenu(null);
          setIsSubmenuOpen(false);
        }}
      >
        <button className="flex items-center py-4 px-2 text-gray-700 hover:text-blue-600">
          <span>{item.title}</span>
          {item.children && (
            <FaAngleLeft className="ml-2 text-sm transform -rotate-90" />
          )}
        </button>

        {item.children && (openSubmenu === item.title || isSubmenuOpen) && (
          <ul
            className={`absolute top-full left-0 w-80 bg-white shadow-lg rounded-lg p-2 ${
              level > 0 ? "left-full top-0" : ""
            } max-h-60 overflow-y-auto`}
          >
            {item.children.map((child, idx) => (
              <li key={idx} className="relative group">
                {child.children ? (
                  <MenuItem item={child} level={level + 1} />
                ) : (
                  <a
                    href={child.link}
                    className="flex items-center px-4 py-2 hover:bg-gray-100 rounded-lg"
                    target={child.target}
                  >
                    {child.title}
                  </a>
                )}
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <nav className="shadow-lg bg-gray-100bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Desktop menu */}
          <ul className="flex space-x-6 ">
            {menuData.map((item, index) => (
              <MenuItem key={index} item={item} />
            ))}
          </ul>

          {/* Search */}
          <div className="relative group">
            <button className="p-2 text-gray-600 hover:text-blue-600">
              <FaSearch className="w-6 h-6" />
            </button>
            <div className="absolute hidden group-hover:block right-0 top-full bg-white shadow-lg p-4 w-64">
              <form className="flex items-center">
                <input
                  type="text"
                  placeholder="Recherche"
                  className="w-full px-3 py-2 border rounded-lg text-right"
                />
                <button type="submit" className="absolute left-3 top-3">
                  <FaSearch className="text-gray-400" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
