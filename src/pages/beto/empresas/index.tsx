import React, { useState, useEffect, useRef, memo } from 'react';
import Link from 'next/link';
import { 
  FaStore, 
  FaChartPie, 
  FaBars, 
  FaTachometerAlt, 
  FaBuilding, 
  FaUsers,
  FaFileAlt,
  FaCog,
  FaHome,
  FaChartLine,
  FaPhone,
  FaTimes,
  FaUserTie,
  FaShoppingCart,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';
import { 
  makeStyles, 
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Container,
  Grid,
  Card,
  CardContent,
  Paper,
  Box,
  useTheme,
  useMediaQuery,
  Divider,
  Chip,
  Avatar,
  Collapse,
  Button,
  Tabs,
  Tab
} from '@material-ui/core';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f4f6f9 0%, #e9ecef 25%, #dee2e6 75%, #ced4da 100%)',
  },
  appBar: {
    background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
  },
  content: {
    padding: theme.spacing(3),
    marginTop: 64,
  },
  headerSection: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: theme.spacing(4),
    borderRadius: 20,
    marginBottom: theme.spacing(3),
    boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
  },
  mainTitle: {
    fontFamily: 'Montserrat, Poppins, sans-serif',
    fontWeight: 900,
    fontSize: 'clamp(1.8rem, 4vw, 3rem)',
    marginBottom: theme.spacing(1),
    textShadow: '0 2px 12px rgba(0,0,0,0.3)',
  },
  subtitle: {
    fontFamily: '"Playfair Display", "Georgia", serif',
    fontSize: '1.1rem',
    opacity: 0.9,
  },
  horizontalMenu: {
    background: 'rgba(255,255,255,0.95)',
    borderRadius: 15,
    marginBottom: theme.spacing(3),
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  },
  tabsContainer: {
    '& .MuiTabs-indicator': {
      backgroundColor: '#667eea',
      height: 3,
      borderRadius: 3,
    },
  },
  tab: {
    minWidth: 'auto',
    textTransform: 'none',
    fontWeight: 600,
    color: '#2c3e50',
    '&.Mui-selected': {
      color: '#667eea',
    },
    '& .MuiTab-wrapper': {
      flexDirection: 'row',
      '& > *:first-child': {
        marginRight: theme.spacing(1),
        marginBottom: 0,
      },
    },
  },
  contentCard: {
    borderRadius: 20,
    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
    background: 'rgba(255,255,255,0.95)',
    backdropFilter: 'blur(10px)',
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  serviceCard: {
    borderRadius: 15,
    padding: theme.spacing(3),
    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
    border: '1px solid rgba(0,0,0,0.05)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    marginBottom: theme.spacing(2),
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
    },
  },
  serviceCardExpanded: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
  },
  serviceIcon: {
    fontSize: '2.5rem',
    marginBottom: theme.spacing(1),
    color: '#667eea',
    transition: 'color 0.3s ease',
  },
  serviceIconExpanded: {
    color: 'white',
  },
  expandedContent: {
    padding: theme.spacing(3),
    background: 'rgba(255,255,255,0.95)',
    borderRadius: '0 0 15px 15px',
    marginTop: theme.spacing(2),
  },
  expandButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    textAlign: 'left',
  },
  
  breadcrumb: {
    background: 'rgba(255,255,255,0.9)',
    borderRadius: 10,
    padding: theme.spacing(1, 2),
    marginBottom: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
  },
}));

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  link: string;
  details: {
    features: string[];
    benefits: string[];
    actions: { label: string; link: string; primary?: boolean }[];
  };
}

const EmpresasPage: React.FC = memo(() => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [activeTab, setActiveTab] = useState(0);
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setActiveTab(newValue);
    setExpandedService(null);
  };

  const handleServiceToggle = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const menuItems: MenuItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: <FaTachometerAlt /> },
    { id: 'requerimentos', label: 'Requerimentos', icon: <FaFileAlt /> },
    { id: 'transferencias', label: 'Transferências', icon: <FaStore /> },
    { id: 'digital', label: 'Serviços Digitais', icon: <FaPhone /> },
    { id: 'anuencia', label: 'Anuências', icon: <FaCog /> },
    { id: 'relatorios', label: 'Relatórios', icon: <FaChartLine /> },
    { id: 'configuracoes', label: 'Configurações', icon: <FaCog /> },
  ];

  const serviceItems: ServiceItem[] = [
    {
      id: 'requerimentos',
      title: 'Portal de Requerimentos',
      description: 'Gerencie todos os requerimentos de forma centralizada',
      icon: <FaFileAlt />,
      color: '#667eea',
      link: '/beto/requerimento',
      details: {
        features: [
          'Criação de requerimentos digitais',
          'Acompanhamento em tempo real',
          'Histórico completo de processos',
          'Assinatura digital integrada'
        ],
        benefits: [
          'Redução de 80% no tempo de processamento',
          'Eliminação de papelada física',
          'Rastreabilidade completa',
          'Interface intuitiva e moderna'
        ],
        actions: [
          { label: 'Novo Requerimento', link: '/beto/requerimento', primary: true },
          { label: 'Versão Digital', link: '/beto/requerimento/digital' }
        ]
      }
    },
    {
      id: 'dashboard-empresas',
      title: 'Dashboard Empresarial',
      description: 'Visão completa dos indicadores corporativos',
      icon: <FaTachometerAlt />,
      color: '#764ba2',
      link: '/beto/dashboard/empresas',
      details: {
        features: [
          'Métricas em tempo real',
          'Relatórios automáticos',
          'Alertas personalizados',
          'Integração com sistemas externos'
        ],
        benefits: [
          'Tomada de decisão mais rápida',
          'Visibilidade total dos processos',
          'Identificação de gargalos',
          'Otimização de recursos'
        ],
        actions: [
          { label: 'Acessar Dashboard', link: '/beto/dashboard/empresas', primary: true },
          { label: 'Relatórios', link: '/beto/relatorios/mensal' }
        ]
      }
    },
    {
      id: 'transferencias',
      title: 'Transferências Veiculares',
      description: 'Processamento de transferências veiculares',
      icon: <FaStore />,
      color: '#11998e',
      link: '/beto/transferencia',
      details: {
        features: [
          'Processo 100% digital',
          'Validação automática de documentos',
          'Integração com DETRAN',
          'Notificações automáticas'
        ],
        benefits: [
          'Redução de até 70% no tempo',
          'Menor possibilidade de erros',
          'Acompanhamento transparente',
          'Economia de custos operacionais'
        ],
        actions: [
          { label: 'Iniciar Transferência', link: '/beto/transferencia', primary: true }
        ]
      }
    },
    {
      id: 'digital',
      title: 'Serviços Digitais',
      description: 'Plataforma digital para empresas',
      icon: <FaPhone />,
      color: '#38ef7d',
      link: '/beto/digital/empresas',
      details: {
        features: [
          'Interface moderna e responsiva',
          'Acesso via dispositivos móveis',
          'Sincronização em nuvem',
          'API para integrações'
        ],
        benefits: [
          'Acesso 24/7 aos serviços',
          'Maior produtividade',
          'Redução de custos',
          'Escalabilidade automática'
        ],
        actions: [
          { label: 'Dashboard Digital', link: '/beto/dashboard/digital' },
          { label: 'Processos Digitais', link: '/beto/requerimento/digital' },
          { label: 'Área Digital', link: '/beto/digital/empresas', primary: true }
        ]
      }
    },
  ];

  const renderContent = () => {
    const activeMenuItem = menuItems[activeTab];

    if (activeMenuItem.id === 'dashboard') {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Paper className={classes.contentCard}>
            <Typography variant="h4" gutterBottom style={{ color: '#2c3e50', fontWeight: 700 }}>
              🏢 Gestão Empresarial
            </Typography>
            <Typography variant="body1" paragraph style={{ color: '#5a6c7d' }}>
              Bem-vindo ao painel principal da área empresarial. Clique nos serviços abaixo para expandir e ver mais detalhes.
            </Typography>

            <Grid container spacing={2} style={{ marginTop: theme.spacing(3) }}>
              {serviceItems.map((service, index) => (
                <Grid item xs={12} key={service.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card 
                      className={`${classes.serviceCard} ${expandedService === service.id ? classes.serviceCardExpanded : ''}`}
                    >
                      <CardContent>
                        <Box 
                          className={classes.expandButton}
                          onClick={() => handleServiceToggle(service.id)}
                        >
                          <Box display="flex" alignItems="center">
                            <Box 
                              className={`${classes.serviceIcon} ${expandedService === service.id ? classes.serviceIconExpanded : ''}`}
                              style={{ color: expandedService === service.id ? 'white' : service.color, marginRight: theme.spacing(2) }}
                            >
                              {service.icon}
                            </Box>
                            <Box>
                              <Typography variant="h6" gutterBottom style={{ fontWeight: 600, margin: 0 }}>
                                {service.title}
                              </Typography>
                              <Typography variant="body2" style={{ opacity: 0.8, margin: 0 }}>
                                {service.description}
                              </Typography>
                            </Box>
                          </Box>
                          <IconButton style={{ color: expandedService === service.id ? 'white' : '#666' }}>
                            {expandedService === service.id ? <FaChevronUp /> : <FaChevronDown />}
                          </IconButton>
                        </Box>
                      </CardContent>

                      <AnimatePresence>
                        {expandedService === service.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Box className={classes.expandedContent}>
                              <Grid container spacing={3}>
                                <Grid item xs={12} md={4}>
                                  <Typography variant="h6" gutterBottom style={{ color: '#2c3e50', fontWeight: 600 }}>
                                    🚀 Funcionalidades
                                  </Typography>
                                  {service.details.features.map((feature, idx) => (
                                    <Typography key={idx} variant="body2" paragraph>
                                      • {feature}
                                    </Typography>
                                  ))}
                                </Grid>

                                <Grid item xs={12} md={4}>
                                  <Typography variant="h6" gutterBottom style={{ color: '#2c3e50', fontWeight: 600 }}>
                                    💡 Benefícios
                                  </Typography>
                                  {service.details.benefits.map((benefit, idx) => (
                                    <Typography key={idx} variant="body2" paragraph>
                                      • {benefit}
                                    </Typography>
                                  ))}
                                </Grid>

                                <Grid item xs={12} md={4}>
                                  <Typography variant="h6" gutterBottom style={{ color: '#2c3e50', fontWeight: 600 }}>
                                    🎯 Ações Rápidas
                                  </Typography>
                                  <Box display="flex" flexDirection="column" style={{gap: 1}}>
                                    {service.details.actions.map((action, idx) => (
                                      <Link key={idx} href={action.link} style={{ textDecoration: 'none' }}>
                                        <Button
                                          variant={action.primary ? "contained" : "outlined"}
                                          color="primary"
                                          fullWidth
                                          size="small"
                                          style={{ 
                                            textTransform: 'none',
                                            ...(action.primary && {
                                              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                              color: 'white'
                                            })
                                          }}
                                        >
                                          {action.label}
                                        </Button>
                                      </Link>
                                    ))}
                                  </Box>
                                </Grid>
                              </Grid>
                            </Box>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </motion.div>
      );
    }

    // Conteúdo específico para Serviços Digitais
    if (activeMenuItem.id === 'digital') {
      const servicosDigitais = [
        {
          id: 'portal-cliente',
          title: 'Portal do Cliente Digital',
          description: 'Acesse todos os serviços através da plataforma digital',
          icon: <FaPhone />,
          color: '#38ef7d',
          details: {
            features: [
              'Interface responsiva e moderna',
              'Acompanhamento em tempo real',
              'Notificações automáticas',
              'Histórico completo de serviços'
            ],
            benefits: [
              'Acesso 24/7 aos serviços',
              'Redução de 90% no tempo de atendimento',
              'Transparência total dos processos',
              'Economia de tempo e recursos'
            ],
            actions: [
              { label: 'Acessar Portal', link: '/beto/digital/empresas', primary: true },
              { label: 'Tutorial', link: '/beto/digital/tutorial' }
            ]
          }
        },
        {
          id: 'assinatura-digital',
          title: 'Assinatura Digital',
          description: 'Documentos assinados digitalmente com validade jurídica',
          icon: <FaFileAlt />,
          color: '#667eea',
          details: {
            features: [
              'Certificado digital ICP-Brasil',
              'Assinatura com validade jurídica',
              'Timestamping automático',
              'Verificação de integridade'
            ],
            benefits: [
              'Eliminação de papel físico',
              'Agilidade nos processos',
              'Segurança garantida',
              'Conformidade legal total'
            ],
            actions: [
              { label: 'Assinar Documentos', link: '/beto/digital/assinatura', primary: true }
            ]
          }
        },
        {
          id: 'chatbot-ia',
          title: 'Assistente Virtual IA',
          description: 'Atendimento inteligente com IA 24 horas por dia',
          icon: <FaUserTie />,
          color: '#764ba2',
          details: {
            features: [
              'Atendimento automatizado 24/7',
              'Respostas inteligentes',
              'Escalação para humanos',
              'Aprendizado contínuo'
            ],
            benefits: [
              'Atendimento instantâneo',
              'Resolução de 80% das dúvidas',
              'Disponibilidade total',
              'Satisfação do cliente elevada'
            ],
            actions: [
              { label: 'Conversar com IA', link: '/beto/chat-ia', primary: true }
            ]
          }
        },
        {
          id: 'app-mobile',
          title: 'Aplicativo Mobile',
          description: 'Todos os serviços na palma da sua mão',
          icon: <FaPhone />,
          color: '#11998e',
          details: {
            features: [
              'App nativo iOS e Android',
              'Sincronização em tempo real',
              'Notificações push',
              'Modo offline disponível'
            ],
            benefits: [
              'Mobilidade total',
              'Produtividade aumentada',
              'Facilidade de uso',
              'Acesso em qualquer lugar'
            ],
            actions: [
              { label: 'Download App', link: '/beto/mobile/download', primary: true },
              { label: 'Guia de Uso', link: '/beto/mobile/guia' }
            ]
          }
        }
      ];

      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Paper className={classes.contentCard}>
            <Typography variant="h4" gutterBottom style={{ color: '#2c3e50', fontWeight: 700 }}>
              📱 Serviços Digitais
            </Typography>
            <Typography variant="body1" paragraph style={{ color: '#5a6c7d' }}>
              Modernize sua experiência com nossos serviços 100% digitais. Tecnologia de ponta para facilitar sua vida.
            </Typography>

            <Grid container spacing={2} style={{ marginTop: theme.spacing(3) }}>
              {servicosDigitais.map((servico, index) => (
                <Grid item xs={12} key={servico.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card 
                      className={`${classes.serviceCard} ${expandedService === servico.id ? classes.serviceCardExpanded : ''}`}
                    >
                      <CardContent>
                        <Box 
                          className={classes.expandButton}
                          onClick={() => handleServiceToggle(servico.id)}
                        >
                          <Box display="flex" alignItems="center">
                            <Box 
                              className={`${classes.serviceIcon} ${expandedService === servico.id ? classes.serviceIconExpanded : ''}`}
                              style={{ color: expandedService === servico.id ? 'white' : servico.color, marginRight: theme.spacing(2) }}
                            >
                              {servico.icon}
                            </Box>
                            <Box>
                              <Typography variant="h6" gutterBottom style={{ fontWeight: 600, margin: 0 }}>
                                {servico.title}
                              </Typography>
                              <Typography variant="body2" style={{ opacity: 0.8, margin: 0 }}>
                                {servico.description}
                              </Typography>
                            </Box>
                          </Box>
                          <IconButton style={{ color: expandedService === servico.id ? 'white' : '#666' }}>
                            {expandedService === servico.id ? <FaChevronUp /> : <FaChevronDown />}
                          </IconButton>
                        </Box>
                      </CardContent>

                      <AnimatePresence>
                        {expandedService === servico.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Box className={classes.expandedContent}>
                              <Grid container spacing={3}>
                                <Grid item xs={12} md={4}>
                                  <Typography variant="h6" gutterBottom style={{ color: '#2c3e50', fontWeight: 600 }}>
                                    ⚡ Funcionalidades
                                  </Typography>
                                  {servico.details.features.map((feature, idx) => (
                                    <Typography key={idx} variant="body2" paragraph>
                                      • {feature}
                                    </Typography>
                                  ))}
                                </Grid>

                                <Grid item xs={12} md={4}>
                                  <Typography variant="h6" gutterBottom style={{ color: '#2c3e50', fontWeight: 600 }}>
                                    🚀 Benefícios
                                  </Typography>
                                  {servico.details.benefits.map((benefit, idx) => (
                                    <Typography key={idx} variant="body2" paragraph>
                                      • {benefit}
                                    </Typography>
                                  ))}
                                </Grid>

                                <Grid item xs={12} md={4}>
                                  <Typography variant="h6" gutterBottom style={{ color: '#2c3e50', fontWeight: 600 }}>
                                    🎯 Ações Rápidas
                                  </Typography>
                                  <Box display="flex" flexDirection="column" style={{gap: 1}}>
                                    {servico.details.actions.map((action, idx) => (
                                      <Link key={idx} href={action.link} style={{ textDecoration: 'none' }}>
                                        <Button
                                          variant={action.primary ? "contained" : "outlined"}
                                          color="primary"
                                          fullWidth
                                          size="small"
                                          style={{ 
                                            textTransform: 'none',
                                            ...(action.primary && {
                                              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                              color: 'white'
                                            })
                                          }}
                                        >
                                          {action.label}
                                        </Button>
                                      </Link>
                                    ))}
                                  </Box>
                                </Grid>
                              </Grid>
                            </Box>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </motion.div>
      );
    }

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Paper className={classes.contentCard}>
          <Typography variant="h5" gutterBottom>
            {activeMenuItem.label}
          </Typography>
          <Typography variant="body1">
            Conteúdo da seção "{activeMenuItem.label}" está sendo desenvolvido. Em breve teremos novidades!
          </Typography>
        </Paper>
      </motion.div>
    );
  };

  return (
    <div className={classes.root}>

      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Avatar 
            style={{ 
              width: 40, 
              height: 40, 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              fontSize: '1rem',
              fontWeight: 'bold',
              marginRight: theme.spacing(2)
            }}
          >
            BD
          </Avatar>

          <Typography variant="h6" style={{ flexGrow: 1, fontWeight: 600 }}>
            Área Empresarial - Beto Dehon
          </Typography>

          <Box className={classes.breadcrumb}>
            <FaBuilding />
            <Typography variant="body2">
              Empresas / {menuItems[activeTab]?.label || 'Dashboard'}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      <main className={classes.content}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Paper className={classes.headerSection}>
            <Typography className={classes.mainTitle}>
              🏢 Gestão Empresarial
            </Typography>
            <Typography className={classes.subtitle}>
              Central de Controle & Serviços Especializados
            </Typography>
          </Paper>

          {/* Menu Horizontal */}
          <Paper className={classes.horizontalMenu}>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              className={classes.tabsContainer}
              variant={isMobile ? "scrollable" : "fullWidth"}
              scrollButtons="auto"
              indicatorColor="primary"
              textColor="primary"
            >
              {menuItems.map((item, index) => (
                <Tab
                  key={item.id}
                  label={
                    <Box display="flex" alignItems="center">
                      {item.icon}
                      <Typography variant="body2" style={{ marginLeft: 8 }}>
                        {item.label}
                      </Typography>
                    </Box>
                  }
                  className={classes.tab}
                />
              ))}
            </Tabs>
          </Paper>

          {/* Conteúdo Dinâmico */}
          <Container maxWidth="xl">
            {renderContent()}
          </Container>

          {/* Link para Menu Principal */}
          <Box textAlign="center" mt={4}>
            <Link href="/beto" style={{ textDecoration: 'none' }}>
              <Button
                variant="outlined"
                startIcon={<FaHome />}
                style={{
                  borderColor: '#667eea',
                  color: '#667eea',
                  textTransform: 'none',
                  fontWeight: 600
                }}
              >
                Voltar ao Menu Principal
              </Button>
            </Link>
          </Box>
        </motion.div>
      </main>
    </div>
  );
});

EmpresasPage.displayName = 'EmpresasPage';

export default EmpresasPage;
