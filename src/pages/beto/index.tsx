
import { FaShoppingCart, FaStore, FaPhone, FaTachometerAlt, FaChartPie, FaBars, FaChevronDown, FaUserTie, FaCog, FaUsers, FaFileAlt, FaCrown, FaGem, FaStar, FaTrophy, FaRocket, FaMagic, FaCopy } from 'react-icons/fa';
import { useState, useCallback, useEffect, useRef, memo } from 'react';

interface MenuItem {
  href: string;
  icon: React.ReactNode;
  label: string;
  premium?: boolean;
  exclusive?: boolean;
}

interface MenuSection {
  section: string;
  items: MenuItem[];
  color: string;
  gradient: string;
  accent: string;
  icon: React.ReactNode;
}

const NavigationButtons: React.FC = memo(() => {
  const baseUrl = 'https://betositeoficial.vercel.app';
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'Tubarão': true,
    'Serviços Digitais': true,
    'Transferências': true,
    'Anuencia': true,
  });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const copyToClipboard = async (path: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(`${baseUrl}${path}`);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
    }
  };

  const menuSections: MenuSection[] = [
    {
      section: 'Tubarão',
      color: 'from-emerald-500 to-green-600',
      gradient: 'from-emerald-50 to-green-50',
      accent: 'emerald-500',
      icon: <FaRocket />,
      items: [
        { href: '/beto/requerimento', icon: <FaFileAlt />, label: 'Requerimento loja', premium: true },
        { href: '/beto/dashboard', icon: <FaTachometerAlt />, label: 'Painel de Controle Executivo', premium: true, exclusive: true },
        { href: '/beto/empresas', icon: <FaBars />, label: 'Centro Empresarial Avançado' },
      ],
    },
    {
      section: 'Serviços Digitais',
      color: 'from-green-500 to-emerald-600',
      gradient: 'from-green-50 to-emerald-50',
      accent: 'green-500',
      icon: <FaMagic />,
      items: [
        { href: '/beto/requerimento/digital', icon: <FaPhone />, label: 'Requerimento Digital', premium: true },
        { href: '/beto/dashboard/digital', icon: <FaChartPie />, label: 'Painel Digitais', premium: true, exclusive: true },
        { href: '/beto/digital/empresas', icon: <FaUserTie />, label: 'Digital Empresarial' },
      ],
    },
    {
      section: 'Transferências',
      color: 'from-teal-500 to-emerald-600',
      gradient: 'from-teal-50 to-emerald-50',
      accent: 'teal-500',
      icon: <FaTrophy />,
      items: [
        { href: '/beto/transferencia', icon: <FaStore />, label: 'Transferências', premium: true },
        { href: '/beto/transferencia/dashboard', icon: <FaChartPie />, label: 'Painel Avançado', premium: true, exclusive: true },
      ],
    },
    {
      section: 'Anuencia',
      color: 'from-emerald-600 to-green-700',
      gradient: 'from-emerald-50 to-green-50',
      accent: 'emerald-600',
      icon: <FaCog />,
      items: [
        { href: '/beto/anuencia', icon: <FaCog />, label: 'Gestão de Licenças & Anuências', premium: true },
        { href: '/beto/anuencia/dashboard', icon: <FaChartPie />, label: 'Controle Administrativo Elite', premium: true, exclusive: true },
        { href: '/', icon: <FaCrown />, label: 'Portal Principal Premium', premium: true },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-8 right-8 z-50 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-4 rounded-lg shadow-2xl border border-emerald-400 transition-all duration-300">
          <div className="flex items-center gap-3">
            <FaTrophy className="text-lg" />
            <span className="font-medium">URL copiada com sucesso!</span>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-12">
        {/* Professional Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full mb-6 shadow-lg">
            <FaCrown className="text-3xl text-white" />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Despachante Beto Dehon
          </h1>

          <div className="flex items-center justify-center gap-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-emerald-500 text-xl" />
            ))}
          </div>

          <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
            Excelência Profissional em Gestão Documental & Operações Empresariais
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full border border-emerald-200">
              <FaGem className="text-emerald-600" />
              <span className="text-emerald-700 font-medium">Serviços Premium</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full border border-green-200">
              <FaTrophy className="text-green-600" />
              <span className="text-green-700 font-medium">Exclusivo</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-teal-100 rounded-full border border-teal-200">
              <FaStar className="text-teal-600" />
              <span className="text-teal-700 font-medium">Elite</span>
            </div>
          </div>
        </div>

        {/* Professional Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {menuSections.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
              onMouseEnter={() => setHoveredCard(sectionIndex)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Section Header */}
              <div
                className={`bg-gradient-to-r ${section.color} p-6 cursor-pointer hover:shadow-md transition-all duration-300`}
                onClick={() => toggleSection(section.section)}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl text-white">
                      {section.icon}
                    </div>
                    <h2 className="text-white text-lg font-bold">
                      {section.section}
                    </h2>
                  </div>
                  <div
                    className={`text-white text-xl transition-transform duration-300 ${
                      expandedSections[section.section] ? 'rotate-180' : 'rotate-0'
                    }`}
                  >
                    <FaChevronDown />
                  </div>
                </div>
              </div>

              {/* Menu Items */}
              {expandedSections[section.section] && (
                <div className="p-6 space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-3">
                      <a
                        href={item.href}
                        className="flex-1 flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-emerald-300 transition-all duration-300 group"
                        onMouseEnter={() => setHoveredItem(`${sectionIndex}-${itemIndex}`)}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`text-xl transition-colors duration-300 ${
                            item.premium ? 'text-emerald-600' : 'text-gray-600'
                          } group-hover:text-emerald-600`}>
                            {item.icon}
                          </div>
                          <div>
                            <span className="text-gray-900 font-medium group-hover:text-emerald-700 transition-colors duration-300">
                              {item.label}
                            </span>
                            <div className="flex items-center gap-2 mt-1">
                              {item.premium && (
                                <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                                  <FaCrown className="text-xs" />
                                  PREMIUM
                                </span>
                              )}
                              {item.exclusive && (
                                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                                  <FaTrophy className="text-xs" />
                                  EXCLUSIVE
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </a>

                      <button
                        className="bg-gray-200 hover:bg-emerald-500 text-gray-700 hover:text-white p-3 rounded-lg transition-all duration-300 hover:shadow-md"
                        onClick={(e) => {
                          e.stopPropagation();
                          copyToClipboard(item.href);
                        }}
                        title={`Copiar URL de ${item.label}`}
                      >
                        <FaCopy className="text-sm" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Professional Footer */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-gray-50 rounded-2xl px-8 py-4 border border-gray-200 shadow-sm">
            <p className="text-gray-600 text-sm font-medium flex items-center justify-center gap-2">
              <FaTrophy className="text-emerald-500" />
              © 2024 Despachante Beto Dehon - Excelência Profissional em Serviços Empresariais
              <FaTrophy className="text-emerald-500" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

NavigationButtons.displayName = 'NavigationButtons';

export default NavigationButtons;
