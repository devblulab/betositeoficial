import Link from 'next/link';
import { FaShoppingCart, FaStore, FaPhone, FaTachometerAlt, FaChartPie, FaBars, FaChevronDown, FaUserTie, FaCog, FaUsers, FaFileAlt } from 'react-icons/fa';
import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, memo, useState } from 'react';

interface MenuItem {
  href: string;
  icon: React.ReactNode;
  label: string;
}

interface MenuSection {
  section: string;
  items: MenuItem[];
}

const NavigationButtons: React.FC = memo(() => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const baseUrl = 'https://betositeoficial.vercel.app';
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'Área Principal': true,
    'Serviços Digitais': true,
    'Gestão & Relatórios': true,
    'Administração': true,
  });

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      video.playbackRate = 0.3;
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    return () => video.removeEventListener('loadedmetadata', handleLoadedMetadata);
  }, []);

  const copyToClipboard = (path: string): void => {
    navigator.clipboard.writeText(`${baseUrl}${path}`).catch((err) => {
      console.error('Failed to copy to clipboard:', err);
    });
  };

  const menuSections: MenuSection[] = [
    {
      section: 'Área Principal',
      items: [
        { href: '/beto/dashboard', icon: <FaTachometerAlt />, label: 'Painel de Controle Geral' },
        { href: '/beto/requerimento', icon: <FaFileAlt />, label: 'Requerimentos & Documentos' },
        { href: '/beto/empresas', icon: <FaBars />, label: 'Menu Empresarial' },
      ],
    },
    {
      section: 'Serviços Digitais',
      items: [
        { href: '/beto/dashboard/digital', icon: <FaChartPie />, label: 'Dashboard Digital' },
        { href: '/beto/requerimento/digital', icon: <FaPhone />, label: 'Processos Digitais' },
        { href: '/beto/digital/empresas', icon: <FaUserTie />, label: 'Área Digital Empresas' },
      ],
    },
    {
      section: 'Gestão & Relatórios',
      items: [
        { href: '/beto/transferencia', icon: <FaStore />, label: 'Transferências' },
         { href: '/beto/transferencia/dashboard', icon: <FaChartPie />, label: 'Painel Controle Transferências' },
        { href: '/beto/anuencia', icon: <FaCog />, label: 'Anuência & Licenças' },
        { href: '/beto/localizar', icon: <FaUsers />, label: 'Localizar Documentos' },
      ],
    },
    {
      section: 'Administração',
      items: [
        { href: '/', icon: <FaTachometerAlt />, label: 'Home Institucional' },
        { href: '/', icon: <FaShoppingCart />, label: 'Portal Principal' },
      ],
    },
  ];

  const motionVariants = {
    initial: { opacity: 0, y: 20, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
    
  };

  const itemVariants = {
    hidden: { opacity: 0, height: 0, y: -5 },
    visible: { opacity: 1, height: 'auto', y: 0 },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white to-green-50 overflow-hidden">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-[0.2] blur-[4px]"
        autoPlay
        loop
        muted
        playsInline
        src="/background-video.mp4"
      />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 p-6 sm:p-8 bg-white/95 rounded-2xl shadow-lg backdrop-blur-lg border border-green-100/50 max-w-4xl w-full"
          initial="initial"
          animate="animate"
          variants={motionVariants}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-green-500 mb-3 tracking-tight">
            Despachante Beto Dehon
          </h1>
          <p className="font-sans text-base sm:text-lg text-gray-700 font-normal tracking-wide">
            Soluções Profissionais para Gestão e Operações
          </p>
        </motion.div>

        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {menuSections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              className="bg-white/95 rounded-2xl p-4 sm:p-6 shadow-md backdrop-blur-lg border border-green-100/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              initial="initial"
              animate="animate"
              variants={motionVariants}
              transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
            >
              <motion.div
                className="flex justify-between items-center cursor-pointer p-3 rounded-xl bg-gradient-to-r from-green-800 to-green-600 hover:from-green-700 hover:to-green-500 transition-all duration-300"
                onClick={() => toggleSection(section.section)}
                whileHover="hover"
                whileTap="tap"
                variants={motionVariants}
              >
                <h2 className="text-white text-base sm:text-lg font-sans font-medium uppercase tracking-wide">
                  {section.section}
                </h2>
                <motion.div
                  className="text-white text-sm sm:text-base"
                  animate={{ rotate: expandedSections[section.section] ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown />
                </motion.div>
                <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]" />
              </motion.div>

              <motion.div
                className="overflow-hidden pt-3"
                initial="visible"
                animate="visible"
                variants={itemVariants}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    className="flex items-center gap-3 mb-2"
                    variants={motionVariants}
                    whileHover="hover"
                    whileTap="tap"
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center justify-between w-full p-3 rounded-xl bg-white text-green-800 font-sans font-medium text-sm sm:text-base tracking-wide border border-green-200/50 hover:bg-gradient-to-r hover:from-green-700 hover:to-green-500 hover:text-white hover:shadow-md transition-all duration-300 relative overflow-hidden"
                    >
                      <div className="flex items-center gap-2">
                        <div className="text-lg sm:text-xl">{item.icon}</div>
                        <div>{item.label}</div>
                      </div>
                      {!shouldReduceMotion && (
                        <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]" />
                      )}
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
                    </Link>
                    <button
                      className="bg-white border border-green-800 text-green-800 rounded-lg px-2 py-1 text-xs sm:text-sm font-sans font-medium tracking-wide hover:bg-green-800 hover:text-white hover:scale-105 transition-all duration-200"
                      onClick={(e) => {
                        e.stopPropagation();
                        copyToClipboard(item.href);
                      }}
                      aria-label={`Copiar URL de ${item.label}`}
                    >
                      Copiar
                    </button>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
});

NavigationButtons.displayName = 'NavigationButtons';

export default NavigationButtons;
