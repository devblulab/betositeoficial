import Link from 'next/link';
import { FaShoppingCart, FaStore, FaPhone, FaTachometerAlt, FaChartPie, FaBars, FaChevronDown, FaUserTie, FaCog, FaUsers, FaFileAlt, FaCrown, FaGem, FaStar } from 'react-icons/fa';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, memo, useState } from 'react';

interface MenuItem {
  href: string;
  icon: React.ReactNode;
  label: string;
  premium?: boolean;
}

interface MenuSection {
  section: string;
  items: MenuItem[];
  color: string;
  gradient: string;
}

const NavigationButtons: React.FC = memo(() => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const baseUrl = 'https://betositeoficial.vercel.app';
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'Área Principal': true,
    'Serviços Digitais': true,
    'Transferências': true,
    'Administração': true,
  });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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
      video.playbackRate = 0.2;
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    return () => video.removeEventListener('loadedmetadata', handleLoadedMetadata);
  }, []);

  const copyToClipboard = async (path: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(`${baseUrl}${path}`);
      // Add toast notification here if needed
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
    }
  };

  const menuSections: MenuSection[] = [
    {
      section: 'Área Principal',
      color: 'from-blue-900 to-blue-700',
      gradient: 'from-blue-50 to-blue-100',
      items: [
        { href: '/beto/dashboard', icon: <FaTachometerAlt />, label: 'Painel de Controle Executivo', premium: true },
        { href: '/beto/requerimento', icon: <FaFileAlt />, label: 'Gestão de Documentos Premium' },
        { href: '/beto/empresas', icon: <FaBars />, label: 'Centro Empresarial Avançado' },
      ],
    },
    {
      section: 'Serviços Digitais',
      color: 'from-emerald-900 to-emerald-700',
      gradient: 'from-emerald-50 to-emerald-100',
      items: [
        { href: '/beto/dashboard/digital', icon: <FaChartPie />, label: 'Analytics & Insights Digitais', premium: true },
        { href: '/beto/requerimento/digital', icon: <FaPhone />, label: 'Automação de Processos' },
        { href: '/beto/digital/empresas', icon: <FaUserTie />, label: 'Consultoria Digital Empresarial' },
      ],
    },
    {
      section: 'Transferências',
      color: 'from-purple-900 to-purple-700',
      gradient: 'from-purple-50 to-purple-100',
      items: [
        { href: '/beto/transferencia', icon: <FaStore />, label: 'Central de Transferências Premium' },
        { href: '/beto/transferencia/dashboard', icon: <FaChartPie />, label: 'Monitoramento Avançado', premium: true },
      ],
    },
    {
      section: 'Administração',
      color: 'from-amber-900 to-amber-700',
      gradient: 'from-amber-50 to-amber-100',
      items: [
        { href: '/beto/anuencia', icon: <FaCog />, label: 'Gestão de Licenças & Anuências' },
        { href: '/beto/anuencia/dashboard', icon: <FaChartPie />, label: 'Controle Administrativo Elite', premium: true },
        { href: '/', icon: <FaCrown />, label: 'Portal Principal Premium' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60, 
      scale: 0.9,
      rotateX: 15,
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
      },
    },
  };

  const shimmerVariants = {
    initial: { x: "-100%" },
    animate: { 
      x: "200%",
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 3,
      },
    },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,215,0,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0deg,rgba(255,255,255,0.02)_90deg,transparent_180deg)]" />

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400 rounded-full animate-pulse opacity-60" />
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-40" />
      <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce opacity-50" />

      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-[0.08] blur-[2px] contrast-150"
        autoPlay
        loop
        muted
        playsInline
        src="/background-video.mp4"
      />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8">
        {/* Header Premium */}
        <motion.div
          className="text-center mb-16 p-8 sm:p-12 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl shadow-2xl backdrop-blur-2xl border border-white/20 max-w-5xl w-full relative overflow-hidden"
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
            variants={shimmerVariants}
            initial="initial"
            animate="animate"
          />

          <div className="relative">
            <motion.div
              className="flex justify-center mb-6"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
            >
              <div className="bg-gradient-to-br from-amber-400 to-amber-600 p-4 rounded-2xl shadow-lg">
                <FaCrown className="text-3xl text-white" />
              </div>
            </motion.div>

            <motion.h1
              className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 mb-4 tracking-tight leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Despachante Beto Dehon
            </motion.h1>

            <motion.div
              className="flex items-center justify-center gap-2 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
                >
                  <FaStar className="text-amber-400 text-lg" />
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              className="font-sans text-lg sm:text-xl text-gray-300 font-light tracking-wide leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              Excelência Premium em Gestão Documental & Operações Empresariais
            </motion.p>

            <motion.div
              className="mt-6 flex items-center justify-center gap-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-600/20 to-emerald-400/20 rounded-full border border-emerald-400/30">
                <FaGem className="text-emerald-400 text-sm" />
                <span className="text-emerald-300 text-sm font-medium">Serviços Premium</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Navigation Grid */}
        <motion.div
          className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {menuSections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              className="group relative"
              variants={cardVariants}
              onHoverStart={() => setHoveredCard(sectionIndex)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500`} />

              <div className="relative bg-gradient-to-br from-white/15 to-white/5 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-2xl border border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-3xl overflow-hidden">
                {/* Card Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  variants={shimmerVariants}
                  initial="initial"
                  animate={hoveredCard === sectionIndex ? "animate" : "initial"}
                />

                {/* Section Header */}
                <motion.div
                  className={`flex justify-between items-center cursor-pointer p-4 rounded-2xl bg-gradient-to-r ${section.color} hover:scale-105 transition-all duration-300 relative overflow-hidden group/header`}
                  onClick={() => toggleSection(section.section)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <h2 className="text-white text-base sm:text-lg font-sans font-semibold uppercase tracking-wider flex items-center gap-2">
                    <FaGem className="text-sm opacity-80" />
                    {section.section}
                  </h2>

                  <motion.div
                    className="text-white text-lg"
                    animate={{ rotate: expandedSections[section.section] ? 180 : 0 }}
                    transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                  >
                    <FaChevronDown />
                  </motion.div>

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: hoveredCard === sectionIndex ? "200%" : "-100%" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                </motion.div>

                {/* Menu Items */}
                <AnimatePresence>
                  {expandedSections[section.section] && (
                    <motion.div
                      className="pt-6 space-y-3"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      {section.items.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          className="flex items-center gap-3"
                          variants={itemVariants}
                          initial="hidden"
                          animate="visible"
                          transition={{ delay: itemIndex * 0.1 }}
                        >
                          <Link
                            href={item.href}
                            className="flex items-center justify-between w-full p-4 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 text-gray-200 font-sans font-medium text-sm sm:text-base tracking-wide border border-white/10 hover:from-white/20 hover:to-white/10 hover:border-white/30 hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                          >
                            <div className="flex items-center gap-3">
                              <div className={`text-xl sm:text-2xl ${item.premium ? 'text-amber-400' : 'text-gray-300'} group-hover:scale-110 transition-transform duration-300`}>
                                {item.icon}
                              </div>
                              <div className="flex items-center gap-2">
                                <span>{item.label}</span>
                                {item.premium && (
                                  <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-2 py-1 rounded-full">
                                    <FaCrown className="text-white text-xs" />
                                  </div>
                                )}
                              </div>
                            </div>

                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                              initial={{ x: "-100%" }}
                              whileHover={{ x: "200%" }}
                              transition={{ duration: 0.8, ease: "easeInOut" }}
                            />

                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
                          </Link>

                          <motion.button
                            className="bg-gradient-to-r from-slate-700 to-slate-600 border border-slate-500 text-white rounded-xl px-4 py-3 text-xs sm:text-sm font-sans font-medium tracking-wide hover:from-amber-600 hover:to-amber-500 hover:border-amber-400 hover:scale-110 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                            onClick={(e) => {
                              e.stopPropagation();
                              copyToClipboard(item.href);
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label={`Copiar URL de ${item.label}`}
                          >
                            <span className="relative z-10">Copiar</span>
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600"
                              initial={{ scale: 0, opacity: 0 }}
                              whileHover={{ scale: 1, opacity: 1 }}
                              transition={{ duration: 0.3 }}
                            />
                          </motion.button>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Premium */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-white/5 to-white/10 rounded-2xl px-8 py-4 backdrop-blur-xl border border-white/10">
            <p className="text-gray-400 text-sm font-light tracking-wide">
              © 2024 Despachante Beto Dehon - Serviços Premium de Excelência
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
});

NavigationButtons.displayName = 'NavigationButtons';

export default NavigationButtons;
