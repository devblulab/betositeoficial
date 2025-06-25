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
    'Serviços Digitais': false,
    'Gestão & Relatórios': false,
    'Administração': false,
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
      video.playbackRate = 0.4;
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
        { href: '/beto/transferencia/dashboard', icon: <FaStore />, label: 'Transferências Dashboard' },
        { href: '/beto/anuencia', icon: <FaCog />, label: 'Anuência & Licenças' },
        
      ],
    },
    {
      section: 'Administração',
      items: [
        { href: '/beto/home', icon: <FaTachometerAlt />, label: 'Home Institucional' },
        { href: '/homebeto', icon: <FaShoppingCart />, label: 'Portal Principal' },
      ],
    },
  ];

  const motionVariants = {
    initial: { opacity: 0, y: 30, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    hover: shouldReduceMotion ? {} : { scale: 1.02, y: -6 },
    tap: { scale: 0.98 },
  };

  const itemVariants = {
    hidden: { opacity: 0, height: 0, y: -10 },
    visible: { opacity: 1, height: 'auto', y: 0 },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white to-green-100 overflow-hidden">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-[0.3] blur-[5px]"
        autoPlay
        loop
        muted
        playsInline
        src="/background-video.mp4"
      />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10 p-6 sm:p-8 bg-white/90 rounded-3xl shadow-2xl backdrop-blur-xl border border-white/30 max-w-3xl w-full"
          initial="initial"
          animate="animate"
          variants={motionVariants}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-900 to-green-600 mb-4 tracking-wide">
            Despachante Beto Dheon
          </h1>
          <p className="font-sans text-lg sm:text-xl text-gray-600 font-medium tracking-wide">
            Excelência em Gestão & Operações Profissionais
          </p>
        </motion.div>

        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8">
          {menuSections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              className="bg-white/95 rounded-3xl p-6 sm:p-8 shadow-xl backdrop-blur-xl border border-white/30 transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl"
              initial="initial"
              animate="animate"
              variants={motionVariants}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
            >
              <motion.div
                className="flex justify-between items-center cursor-pointer p-4 rounded-2xl bg-gradient-to-r from-green-900 to-green-600 hover:from-green-800 hover:to-green-500 transition-all duration-400"
                onClick={() => toggleSection(section.section)}
                whileHover="hover"
                whileTap="tap"
                variants={motionVariants}
              >
                <h2 className="text-white text-lg sm:text-xl font-sans font-semibold uppercase tracking-wider">
                  {section.section}
                </h2>
                <motion.div
                  className="text-white text-base sm:text-lg"
                  animate={{ rotate: expandedSections[section.section] ? 180 : 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <FaChevronDown />
                </motion.div>
                <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
              </motion.div>

              <motion.div
                className="overflow-hidden pl-4"
                initial="hidden"
                animate={expandedSections[section.section] ? 'visible' : 'hidden'}
                variants={itemVariants}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    className="flex items-center gap-4"
                    variants={motionVariants}
                    whileHover="hover"
                    whileTap="tap"
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center justify-between w-full p-4 rounded-2xl bg-gradient-to-r from-gray-50 to-white text-green-900 font-sans font-medium text-base sm:text-lg tracking-wide border border-green-900/10 hover:bg-gradient-to-r hover:from-green-900 hover:to-green-600 hover:text-white hover:translate-x-2 hover:shadow-lg transition-all duration-400 relative overflow-hidden"
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-xl sm:text-2xl">{item.icon}</div>
                        <div>{item.label}</div>
                      </div>
                      {!shouldReduceMotion && (
                        <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                      )}
                      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
                    </Link>
                    <button
                      className="bg-transparent border border-green-900 text-green-900 rounded-xl px-3 py-1.5 text-sm font-sans font-medium tracking-wide hover:bg-green-900 hover:text-white hover:scale-105 transition-all duration-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        copyToClipboard(item.href);
                      }}
                      aria-label={`Copy ${item.label} URL`}
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
