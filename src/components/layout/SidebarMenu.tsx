import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  Avatar,
  Chip,
  Divider,
  Collapse,
  Badge,
  IconButton,
  Tooltip
} from '@material-ui/core';
import {
  Dashboard,
  Assignment,
  Chat,
  People,
  TrendingUp,
  Settings,
  Notifications,
  RssFeed,
  ExpandLess,
  ExpandMore,
  MonetizationOn,
  BarChart,
  Search,
  Home,
  Business,
  Assessment,
  CloudUpload,
  Security,
  VerifiedUser,
} from '@material-ui/icons';
import { motion, AnimatePresence } from 'framer-motion';
import AutenticacaoContext from '@/data/contexts/AutenticacaoContext';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 280,
    color: '#fff',
    flexShrink: 0,
  },
  drawerPaper: {
    width: 280,
    background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    color: '#fff',
    border: 'none',

    boxShadow: '4px 0 20px rgba(0,0,0,0.3)',
  },
  header: {
    padding: theme.spacing(3, 2),
    color: '#fff',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '0 0 20px 20px',
    margin: '0 8px 16px 8px',
  },
  logo: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'Montserrat, sans-serif',
    textAlign: 'center',
    marginBottom: theme.spacing(1),
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1.5),
    color: '#fff',
    padding: theme.spacing(2),
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    margin: '0 8px 16px 8px',
    backdropFilter: 'blur(10px)',
  },
  avatar: {
    width: 45,
    height: 45,
    color: '#fff',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  userName: {
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: '1rem',
  },
  userRole: {
    fontSize: '0.8rem',
    color: '#ffffff',
    opacity: 1,
  },
  menuSection: {
    margin: '0 8px 16px 8px',
    color: '#fff',
  },
  sectionTitle: {
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: '#fff',
    opacity: 0.9,
    padding: '0 16px 8px 16px',
  },
  menuItem: {
    borderRadius: '12px',
    margin: '2px 0',
    color: '#fff',
    transition: 'all 0.3s ease',
    '&:hover': {
      background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.3) 100%)',
      transform: 'translateX(4px)',
    },
  },
  activeMenuItem: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    '&:hover': {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: '#fff',
    },
  },
  menuIcon: {
    color: '#ffffff',
    minWidth: '40px',
  },
  menuText: {
    '& .MuiListItemText-primary': {
      fontSize: '0.9rem',
      fontWeight: 500,
      color: '#ffffff',
    },
  },
  badge: {
    '& .MuiBadge-badge': {
      background: 'linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%)',
      color: '#fff',
      fontWeight: 'bold',
    },
  },
  aiStatus: {
    position: 'fixed',
    bottom: 20,
    left: 20,
    color: '#fff',

    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '50px',
    padding: '12px 20px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    boxShadow: '0 8px 32px rgba(102, 126, 234, 0.4)',
    animation: '$pulse 2s infinite',
  },
  '@keyframes pulse': {
    '0%': {
      boxShadow: '0 8px 32px rgba(102, 126, 234, 0.4)',
    },
    '50%': {
      boxShadow: '0 8px 32px rgba(102, 126, 234, 0.8)',
    },
    '100%': {
      boxShadow: '0 8px 32px rgba(102, 126, 234, 0.4)',
    },
  },
  submenuItem: {
    paddingLeft: theme.spacing(6),
    color: '#fff',
    fontSize: '0.85rem',
  },
}));

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  badge?: number;
  submenu?: MenuItem[];
  component?: string;
}

interface SidebarMenuProps {
  activeComponent: string;
  onComponentChange: (component: string) => void;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ activeComponent, onComponentChange }) => {
  const classes = useStyles();
  const [expandedItems, setExpandedItems] = useState<string[]>(['gestao']);
  const { usuario } = useContext(AutenticacaoContext);

  // Debug: log user data to console
  React.useEffect(() => {
    console.log('SidebarMenu - Usuario:', usuario);
    console.log('SidebarMenu - Permissao:', usuario?.permissao);
  }, [usuario]);

  const toggleExpanded = (itemId: string) => {
    setExpandedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const menuItems: MenuItem[] = [
    {
      id: 'home',
      label: 'Home',
      icon: <Home />,
      component: 'home'
    },
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <Dashboard />,
      component: 'dashboard'
    },
    {
      id: 'gestao',
      label: 'Gestão & Operações',
      icon: <Business />,
      submenu: [
        { id: 'requerimentos', label: 'Requerimentos', icon: <Assignment />, badge: 12, component: 'area-cliente' },
        { id: 'transferencias', label: 'Transferências', icon: <TrendingUp />, badge: 8, component: 'transferencias' },
        { id: 'anuencias', label: 'Anuências', icon: <Security />, badge: 3, component: 'anuencias' },
        { id: 'cnhs', label: 'CNHs', icon: <People />, component: 'cnhs' },
        { id: 'atpvs', label: 'ATPVs', icon: <BarChart />, component: 'atpvs' },
      ]
    },
    {
      id: 'crm',
      label: 'CRM Inteligente',
      icon: <People />,
      badge: 25,
      component: 'crm'
    },
    {
      id: 'chat-interno',
      label: 'Chat Interno',
      icon: <Chat />,
      badge: 5,
      component: 'chat-interno'
    },
    {
      id: 'chat-ia',
      label: 'Chat IA Lívia',
      icon: <Chat />,
      component: 'chat-ia'
    },
    {
      id: 'feed',
      label: 'Feed & Avisos',
      icon: <RssFeed />,
      badge: 3,
      component: 'feed'
    },
    {
      id: 'financeiro',
      label: 'Financeiro',
      icon: <MonetizationOn />,
      submenu: [
        { id: 'receitas', label: 'Receitas', icon: <TrendingUp />, component: 'receitas' },
        { id: 'despesas', label: 'Despesas', icon: <Assessment />, component: 'despesas' },
        { id: 'relatorios', label: 'Relatórios', icon: <BarChart />, component: 'relatorios' },
      ]
    },
    {
      id: 'busca',
      label: 'Busca Global',
      icon: <Search />,
      component: 'busca'
    },
    {
      id: 'documentos',
      label: 'Documentos',
      icon: <CloudUpload />,
      component: 'documentos'
    },
    {
      id: 'relatorios-ia',
      label: 'Relatórios IA',
      icon: <Assessment />,
      component: 'relatorios-ia'
    },
    {
      id: 'servicos-juridicos',
      label: 'Serviços Jurídicos',
      icon: <Business />,
      submenu: [
        { id: 'servicos-contrate', label: 'Serviços Contrate', icon: <Business />, component: 'servicos-contrate' }
      ]
    },
    {
      id: 'planos',
      label: 'Planos',
      icon: <MonetizationOn />,
      component: 'planos'
    },
    {
      id: 'configuracoes',
      label: 'Configurações',
      icon: <Settings />,
      component: 'configuracoes'
    },
    {
      id: 'suporte',
      label: 'Suporte',
      icon: <People />,
      component: 'suporte'
    }
  ];

  const renderMenuItem = (item: MenuItem, level: number = 0) => {
    const hasSubmenu = item.submenu && item.submenu.length > 0;
    const isExpanded = expandedItems.includes(item.id);
    const isActive = activeComponent === item.component;

    return (
      <div key={item.id}>
        <ListItem
          button
          className={`${classes.menuItem} ${isActive ? classes.activeMenuItem : ''}`}
          onClick={() => {
            if (hasSubmenu) {
              toggleExpanded(item.id);
            } else if (item.component) {
              if (item.component === 'servicos-contrate') {
                window.location.href = '/servicos';
              } else if (item.component === 'planos') {
                window.location.href = '/planos';
              } else if (item.component === 'home') {
                window.location.href = '/';
              } else {
                onComponentChange(item.component);
              }
            }
          }}
          style={{ paddingLeft: 16 + (level * 24) }}
        >
          <ListItemIcon className={classes.menuIcon}>
            {item.badge ? (
              <Badge badgeContent={item.badge} className={classes.badge}>
                {item.icon}
              </Badge>
            ) : (
              item.icon
            )}
          </ListItemIcon>
          <ListItemText 
            primary={item.label} 
            className={classes.menuText}
          />
          {hasSubmenu && (
            <IconButton size="small" style={{ color: '#fff' }}>
              {isExpanded ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          )}
        </ListItem>

        {hasSubmenu && (
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.submenu!.map((subItem) => renderMenuItem(subItem, level + 1))}
                  </List>
                </Collapse>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    );
  };

  return (
    <>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.header}>
          <Typography className={classes.logo}>
            Beto Dehon
          </Typography>
          <Typography variant="caption" style={{ textAlign: 'center', opacity: 0.8 }}>
            Central de Operações
          </Typography>
        </div>

        <div className={classes.userInfo}>
          <Avatar className={classes.avatar}>
            {usuario ? usuario.nome.substring(0, 2).toUpperCase() : 'BD'}
          </Avatar>
          <div>
            <Typography className={classes.userName}>
              {usuario ? usuario.nome : 'Colaborador'}
            </Typography>
            <Typography className={classes.userRole}>
              {usuario ? (
                usuario.permissao ? `Autenticado - ${usuario.permissao}` : 'Autenticado'
              ) : 'Não Autenticado'}
            </Typography>
            {usuario && (
              <Typography 
                variant="caption" 
                style={{ 
                  fontSize: '0.6rem', 
                  color: '#ffffff', 
                  opacity: 0.8,
                  display: 'block'
                }}
              >
                {usuario.email}
              </Typography>
            )}
          </div>
          {usuario && usuario.permissao && (
            <Chip 
              label={usuario.permissao} 
              size="small" 
              style={{ 
                backgroundColor: '#667eea', 
                color: '#fff',
                fontSize: '0.6rem',
                fontWeight: 'bold'
              }}
            />
          )}
        </div>

        <div className={classes.menuSection}>
          <Typography className={classes.sectionTitle}>
            Principal
          </Typography>
          <List>
            {menuItems.slice(0, 2).map((item) => renderMenuItem(item))}
          </List>
        </div>

        <Divider style={{ backgroundColor: 'rgba(255,255,255,0.1)', margin: '0 16px' }} />

        <div className={classes.menuSection}>
          <Typography className={classes.sectionTitle}>
            Comunicação & IA
          </Typography>
          <List>
            {menuItems.slice(2, 6).map((item) => renderMenuItem(item))}
          </List>
        </div>

        <Divider style={{ backgroundColor: 'rgba(255,255,255,0.1)', margin: '0 16px' }} />

        <div className={classes.menuSection}>
          <Typography className={classes.sectionTitle}>
            Ferramentas
          </Typography>
          <List>
            {menuItems.slice(6).map((item) => renderMenuItem(item))}
          </List>
        </div>
      </Drawer>

      <motion.div 
        className={classes.aiStatus}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <People style={{ fontSize: '1.2rem' }} />
        <Typography variant="caption" style={{ fontWeight: 'bold' }}>
          IA Lívia Ativa
        </Typography>
      </motion.div>
    </>
  );
};

export default SidebarMenu;