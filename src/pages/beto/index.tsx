
import Link from 'next/link';
import { FaShoppingCart, FaStore, FaPhone, FaTachometerAlt, FaChartPie, FaBars, FaChevronDown, FaChevronUp, FaUserTie, FaCog, FaUsers, FaFileAlt } from 'react-icons/fa';
import { makeStyles } from '@material-ui/core';
import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, memo, useState } from 'react';
import { Typography, Box, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f4f6f9 0%, #e9ecef 25%, #dee2e6 75%, #ced4da 100%)',
    position: 'relative',
    overflow: 'hidden',
  },
  videoBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 0,
    filter: 'brightness(0.15) blur(8px)',
    willChange: 'transform, filter',
  },
  container: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: theme.spacing(3),
  },
  headerSection: {
    textAlign: 'center',
    marginBottom: theme.spacing(4),
    padding: theme.spacing(3),
    background: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '20px',
    boxShadow: '0 12px 40px rgba(44, 62, 80, 0.15)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  },
  mainTitle: {
    fontFamily: 'Montserrat, Poppins, sans-serif',
    fontWeight: 900,
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    color: '#2d5a3d',
    marginBottom: theme.spacing(2),
    textShadow: '0 2px 12px rgba(45,90,61,0.4)',
    letterSpacing: 3,
    background: 'linear-gradient(135deg, #2d5a3d 0%, #34495e 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subtitle: {
    fontFamily: '"Playfair Display", "Georgia", serif',
    fontSize: '1.3rem',
    color: '#5d6d7e',
    fontWeight: 600,
    letterSpacing: 1.5,
  },
  menuGrid: {
    width: '100%',
    maxWidth: '1200px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: theme.spacing(3),
    marginTop: theme.spacing(4),
  },
  sectionCard: {
    background: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '20px',
    padding: theme.spacing(3),
    boxShadow: '0 12px 40px rgba(44, 62, 80, 0.15)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 20px 60px rgba(44, 62, 80, 0.25)',
    },
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    padding: theme.spacing(2),
    borderRadius: '15px',
    background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 25%, #5d6d7e 75%, #85929e 100%)',
    marginBottom: theme.spacing(2),
    transition: 'all 0.3s ease',
    '&:hover': {
      background: 'linear-gradient(135deg, #34495e 0%, #5d6d7e 25%, #85929e 75%, #aab7b8 100%)',
      transform: 'scale(1.02)',
    },
  },
  sectionTitle: {
    color: '#ffffff',
    fontSize: '1.4rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontFamily: '"Playfair Display", "Georgia", serif',
    textShadow: '0 2px 8px rgba(0,0,0,0.3)',
  },
  menuItemsContainer: {
    overflow: 'hidden',
    paddingLeft: theme.spacing(1),
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(2, 3),
    margin: theme.spacing(1, 0),
    borderRadius: '15px',
    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
    color: '#2c3e50',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '1.1rem',
    letterSpacing: '1px',
    fontFamily: '"Playfair Display", "Georgia", serif',
    border: '2px solid transparent',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 25%, #5d6d7e 75%, #85929e 100%)',
      color: '#ffffff',
      transform: 'translateX(8px) scale(1.02)',
      border: '2px solid rgba(44, 62, 80, 0.3)',
      boxShadow: '0 8px 25px rgba(44, 62, 80, 0.2)',
    },
  },
  menuItemIcon: {
    marginRight: theme.spacing(2),
    fontSize: '1.4rem',
    transition: 'all 0.3s ease',
  },
  menuItemLabel: {
    flex: 1,
    textAlign: 'left',
  },
  copyButton: {
    background: 'transparent',
    border: '2px solid #2c3e50',
    color: '#2c3e50',
    borderRadius: '10px',
    fontSize: '0.8rem',
    padding: theme.spacing(0.5, 1.5),
    cursor: 'pointer',
    fontWeight: 600,
    letterSpacing: '1px',
    transition: 'all 0.3s ease',
    marginLeft: theme.spacing(1),
    '&:hover': {
      background: '#2c3e50',
      color: '#ffffff',
      transform: 'scale(1.05)',
    },
  },
  chevronIcon: {
    color: '#ffffff',
    fontSize: '1.2rem',
    transition: 'transform 0.3s ease',
  },
  '@keyframes shimmer': {
    '0%': { transform: 'translateX(-100%)' },
    '100%': { transform: 'translateX(100%)' },
  },
  shimmerEffect: {
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
    animation: '$shimmer 3s infinite',
  },
}));

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
  const classes = useStyles();
  const videoRef = useRef<HTMLVideoElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const baseUrl = 'https://enygna-enterprises.com.br';
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'Área Principal': true,
    'Serviços Digitais': false,
    'Gestão & Relatórios': false,
    'Administração': false
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
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
        { href: '/beto/anuencia', icon: <FaCog />, label: 'Anuência & Licenças' },
        { href: '/beto/localizar', icon: <FaUsers />, label: 'Localizar Documentos' },
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
    hover: shouldReduceMotion ? {} : { scale: 1.02, y: -5 },
    tap: { scale: 0.98 },
  };

  const itemVariants = {
    hidden: { opacity: 0, height: 0, y: -10 },
    visible: { opacity: 1, height: 'auto', y: 0 },
  };

  return (
    <div className={classes.root}>
      <video ref={videoRef} autoPlay loop muted className={classes.videoBackground}>
        <source src="/betovideo.mp4" type="video/mp4" />
      </video>

      <Container className={classes.container}>
        <motion.div
          className={classes.headerSection}
          initial="initial"
          animate="animate"
          variants={motionVariants}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Typography className={classes.mainTitle}>
            Despachante Beto Dheon
          </Typography>
          <Typography className={classes.subtitle}>
            Central de Operações & Gestão Profissional
          </Typography>
        </motion.div>

        <div className={classes.menuGrid}>
          {menuSections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              className={classes.sectionCard}
              initial="initial"
              animate="animate"
              variants={motionVariants}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
            >
              <motion.div 
                className={classes.sectionHeader}
                onClick={() => toggleSection(section.section)}
                whileHover="hover"
                whileTap="tap"
                variants={motionVariants}
              >
                <Typography className={classes.sectionTitle}>
                  {section.section}
                </Typography>
                <motion.div
                  className={classes.chevronIcon}
                  animate={{ 
                    rotate: expandedSections[section.section] ? 180 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown />
                </motion.div>
                <div className={classes.shimmerEffect} />
              </motion.div>

              <motion.div
                className={classes.menuItemsContainer}
                initial="hidden"
                animate={expandedSections[section.section] ? "visible" : "hidden"}
                variants={itemVariants}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    variants={motionVariants}
                    whileHover="hover"
                    whileTap="tap"
                    transition={{ duration: 0.2 }}
                    style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
                  >
                    <Link href={item.href} className={classes.menuItem}>
                      <div className={classes.menuItemIcon}>
                        {item.icon}
                      </div>
                      <div className={classes.menuItemLabel}>
                        {item.label}
                      </div>
                      {!shouldReduceMotion && (
                        <div className={classes.shimmerEffect} />
                      )}
                    </Link>
                    <button
                      className={classes.copyButton}
                      onClick={(e) => {
                        e.stopPropagation();
                        copyToClipboard(item.href);
                      }}
                      aria-label={`Copy ${item.label} URL`}
                    >
                      Copy
                    </button>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
});

NavigationButtons.displayName = 'NavigationButtons';

export default NavigationButtons;
