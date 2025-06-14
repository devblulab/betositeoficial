import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  Tab,
  Tabs,
  Chip,
  Avatar,
  Badge,
  IconButton,
  Tooltip,
  Zoom,
  Fade,
  Backdrop,
  CircularProgress,
  LinearProgress,
  Switch,
  FormControlLabel,
  Button,
  ButtonGroup,
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
  useMediaQuery,
  Container,
  CssBaseline,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import ToggleOnIcon from '@material-ui/icons/ToggleOn';
import ToggleOffIcon from '@material-ui/icons/ToggleOff';



import { Alert, SpeedDial, SpeedDialAction, SpeedDialIcon } from '@material-ui/lab';
import {
  People,
  Dashboard as DashboardIcon,
  Chat,
  EmojiObjects,
  Business,
  Timeline,
  NotificationsActive,
  Settings,
  Brightness4,
  Brightness7,
  Fullscreen,
  FullscreenExit,
  Refresh,
  Security,
  Extension,
  Visibility,
  VisibilityOff,
  Lock,
  LockOpen,
  Star,
  StarBorder,
  Bookmark,
  BookmarkBorder,
  Share,
  GetApp,
  Print,
  Email,
  Phone,
  VideoCall,
  ScreenShare,
  RecordVoiceOver,
  Mic,
  MicOff,
  VolumeUp,
  VolumeOff,
  Headset,
  Forum,
  QuestionAnswer,
  LiveHelp,
  Help,
  Info,
  Warning,
  Error,
  CheckCircle,
  Cancel,
  PlayArrow,
  Pause,
  Stop,
  SkipNext,
  SkipPrevious,
  Loop,
  Shuffle,
  MoreVert,
  MoreHoriz,
  Menu,
  Close,
  ArrowBack,
  ArrowForward,
  KeyboardArrowUp,
  KeyboardArrowDown,
  ExpandMore,
  ExpandLess,
  Add,
  Edit,
  Delete,
  Save,
  SaveAlt,
  Publish,
  Schedule,
  Today,
  DateRange,
  AccessTime,
  History,
  Update,
  Sync,
  SyncDisabled,
  CloudDone,
  CloudOff,
  WifiOff,
  Wifi,
  SignalWifi4Bar,
  Battery90,
  BatteryChargingFull,
  PowerSettingsNew,
  PowerOff,
  WhatsApp,
  Code,
  DataUsage,
  Storage,
  Memory,
  SpeedOutlined
} from '@material-ui/icons';

import ChatInterno from '@/components/chat/ChatInterno';
import ChatIA from '@/components/chat/ChatIA';
import CRM from '@/components/crm/CRM';
import DashboardIA from '@/components/dashboard/DashboardIA';
import Feed from '@/components/feed/Feed';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import WhatsAppDigisac from '@/components/whatsapp/WhatsAppDigisac';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    background: theme.palette.type === 'dark' 
      ? 'linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 50%, #2d2d2d 100%)'
      : 'linear-gradient(135deg,rgb(150, 150, 150) 0%, #c3cfe2 100%)',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
  },
  header: {
    padding: theme.spacing(4),
    background: theme.palette.type === 'dark'
      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'black',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '0 0 30px 30px',
    boxShadow: theme.shadows[10],
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 50%)',
      animation: '$shimmer 3s infinite',
    },
  },
  '@keyframes shimmer': {
    '0%': { transform: 'translateX(-100%)' },
    '100%': { transform: 'translateX(100%)' },
  },
  tabsContainer: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.spacing(2),
    margin: theme.spacing(2),
    boxShadow: theme.shadows[8],
    overflow: 'hidden',
    color: 'black',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 4,
      background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
    },
  },
  tabPanel: {
    padding: 0,
    minHeight: 'calc(100vh - 400px)',
  },
  welcomeCard: {
    margin: theme.spacing(2),
    background: theme.palette.type === 'dark'
      ? 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)'
      : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    borderRadius: theme.spacing(3),
    position: 'relative',
    overflow: 'hidden',
    boxShadow: theme.shadows[12],
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      width: '200px',
      height: '200px',
      background: 'rgba(255,255,255,0.1)',
      borderRadius: '50%',
      transform: 'translate(50px, -50px)',
    },
  },
  moduleCard: {
    textAlign: 'center',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    borderRadius: theme.spacing(2),
    position: 'relative',
    overflow: 'hidden',
      color: '#222',
    background: theme.palette.background.paper,
    boxShadow: theme.shadows[4],
    '&:hover': {
      transform: 'translateY(-8px) scale(1.02)',
      boxShadow: theme.shadows[16],
      '& $moduleIcon': {
        transform: 'scale(1.2) rotate(5deg)',
        filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
      },
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 6,
      background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
      transform: 'scaleX(0)',
      transition: 'transform 0.3s ease',
    },
    '&:hover::before': {
      transform: 'scaleX(1)',
    },
  },
  moduleIcon: {
    fontSize: 64,
    marginBottom: theme.spacing(2),
    transition: 'all 0.3s ease',
    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
  },
  aiAssistant: {
    position: 'fixed',
    bottom: 20,
    right: 20,
    zIndex: 1000,
  },
  speedDial: {
    '& .MuiFab-primary': {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      boxShadow: theme.shadows[8],
    },
  },
  notification: {
    position: 'fixed',
    top: 20,
    right: 20,
    zIndex: 1000,
  },
  statusBar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: 4,

    background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
    zIndex: 1000,
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  smartWidget: {
    position: 'absolute',
    top: 20,
    left: 20,
    background: theme.palette.background.paper,
    borderRadius: theme.spacing(2),
    padding: theme.spacing(2),
    minWidth: 200,
    color: 'rgba(0,0,0,0.7)',
    boxShadow: theme.shadows[8],
    border: `2px solid ${theme.palette.primary.main}`,
  },
  analyticsPanel: {
    background: theme.palette.background.paper,
    borderRadius: theme.spacing(2),
    padding: theme.spacing(3),
    margin: theme.spacing(2),
     color: 'rgba(0,0,0,0.7)',
    boxShadow: theme.shadows[6],
    border: `1px solid ${theme.palette.divider}`,
  },
  performanceMetrics: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',

    marginTop: theme.spacing(2),
  },
  metricItem: {
    textAlign: 'center',

    padding: theme.spacing(1),
  },
  pulsingIcon: {
    animation: '$pulse 2s infinite',
  },
  '@keyframes pulse': {
    '0%': { opacity: 1, transform: 'scale(1)' },
    '50%': { opacity: 0.7, transform: 'scale(1.1)' },
    '100%': { opacity: 1, transform: 'scale(1)' },
  },
  glowEffect: {
    animation: '$glow 2s ease-in-out infinite alternate',
  },
  '@keyframes glow': {
    from: { boxShadow: `0 0 10px ${theme.palette.primary.main}` },
    to: { boxShadow: `0 0 20px ${theme.palette.primary.main}` },
  },
  floatingWidget: {
    position: 'fixed',
    bottom: 100,
    left: 20,
    background: theme.palette.background.paper,
    borderRadius: '50%',
    width: 80,
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: theme.shadows[12],
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'scale(1.1)',
      boxShadow: theme.shadows[20],
    },
  },
  smartNotification: {
    position: 'fixed',
    top: 80,
    right: 20,
    maxWidth: 300,
    background: theme.palette.background.paper,
    borderRadius: theme.spacing(2),
    padding: theme.spacing(2),
    boxShadow: theme.shadows[10],
    border: `2px solid ${theme.palette.success.main}`,
    zIndex: 1000,
  },
  contextualMenu: {
    position: 'absolute',
      color: 'rgba(0,0,0,0.7)',
    background: theme.palette.background.paper,
    borderRadius: theme.spacing(1),

    boxShadow: theme.shadows[8],
    padding: theme.spacing(1),
    minWidth: 150,
    zIndex: 1000,
  },
  immersiveMode: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: '#000',
    zIndex: 9999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  voiceIndicator: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'rgba(102, 96, 96, 0.8)',
    color: 'black',
    padding: theme.spacing(3),
    borderRadius: '50%',
    width: 120,
    height: 120,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    zIndex: 10000,
  },
  collaborativePointer: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: '50%',
    background: theme.palette.secondary.main,
    border: '2px solid white',
    pointerEvents: 'none',
    zIndex: 1000,
    transition: 'all 0.1s ease',
  },
  realtimeStatus: {
    position: 'fixed',
    bottom: 180,
    right: 20,
    background: theme.palette.background.paper,
    borderRadius: theme.spacing(3),
    padding: theme.spacing(1, 2),
    boxShadow: theme.shadows[6],
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
  },
  card: {
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[4],
    background: theme.palette.background.paper,
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: theme.shadows[8],
    },
  },
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  const classes = useStyles();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      className={classes.tabPanel}
      {...other}
    >
      {value === index && (
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.95 }}
            transition={{ 
              duration: 0.4,
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}

const Colaboradores: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [tabValue, setTabValue] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [speedDialOpen, setSpeedDialOpen] = useState(false);
  const [aiAssistantActive, setAiAssistantActive] = useState(true);
  const [voiceMode, setVoiceMode] = useState(false);
  const [collaboratorsCursor, setCollaboratorsCursor] = useState<any[]>([]);
  const [realtimeUsers, setRealtimeUsers] = useState(3);
  const [systemStatus, setSystemStatus] = useState('optimal');
  const [smartSuggestions, setSmartSuggestions] = useState<any[]>([]);
  const [contextualMenu, setContextualMenu] = useState<any>(null);
  const [immersiveMode, setImmersiveMode] = useState(false);
  const [newUserDialogOpen, setNewUserDialogOpen] = useState(false);
  const [newUserData, setNewUserData] = useState({
    nome: '',
    email: '',
    senha: '',
    permissao: 'Visualizador'
  });
  const [newProfileDialogOpen, setNewProfileDialogOpen] = useState(false);
  const [newProfileData, setNewProfileData] = useState({
    nome: '',
    descricao: '',
    permissoes: {
      dashboard: false,
      chat: false,
      crm: false,
      relatorios: false,
      usuarios: false,
      configuracoes: false
    }
  });
  const [performanceMetrics, setPerformanceMetrics] = useState({
    cpu: 85,
    memory: 67,
    network: 92,
    storage: 45
  });

  const controls = useAnimation();

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setIsLoading(true);
    setTimeout(() => {
      setTabValue(newValue);
      setIsLoading(false);
    }, 300);
  };

  const modules = useMemo(() => [
    {
      title: 'Dashboard Inteligente',
      description: 'Analytics avançado com IA',
      icon: <DashboardIcon className={classes.moduleIcon} style={{ color: '#4CAF50' }} />,
      color: '#4CAF50',
      features: ['ML Analytics', 'Previsões', 'Alertas Inteligentes'],
      status: 'active',
      lastUsed: '2 min atrás',
      performance: 98,
    },
    {
      title: 'Chat Colaborativo',
      description: 'Comunicação em tempo real',
      icon: <Chat className={classes.moduleIcon} style={{ color: '#2196F3' }} />,
      color: '#2196F3',
      features: ['Video Chat', 'Screen Share', 'Threads'],
      status: 'active',
      lastUsed: '5 min atrás',
      performance: 94,
    },
    {
      title: 'IA Lívia Avançada',
      description: 'Assistente com GPT-4 Turbo',
      icon: <EmojiObjects className={`${classes.moduleIcon} ${classes.pulsingIcon}`} style={{ color: '#9C27B0' }} />,
      color: '#9C27B0',
      features: ['NLP Avançado', 'Automação', 'Insights'],
      status: 'learning',
      lastUsed: 'Agora',
      performance: 99,
    },
    {
      title: 'CRM Neural',
      description: 'Gestão inteligente de clientes',
      icon: <Business className={classes.moduleIcon} style={{ color: '#FF9800' }} />,
      color: '#FF9800',
      features: ['Lead Scoring', 'Segmentação IA', 'Automação'],
      status: 'active',
      lastUsed: '10 min atrás',
      performance: 91,
    },
    {
      title: 'Feed Inteligente',
      description: 'Notificações contextuais',
      icon: <Timeline className={classes.moduleIcon} style={{ color: '#607D8B' }} />,
      color: '#607D8B',
      features: ['Filtros IA', 'Priorização', 'Trending'],
      status: 'active',
      lastUsed: '1 min atrás',
      performance: 96,
    },
    {
      title: 'Cadastro de Usuário',
      description: 'Gestão completa de usuários',
      icon: <People className={classes.moduleIcon} style={{ color: '#795548' }} />,
      color: '#795548',
      features: ['Perfis', 'Permissões', 'Auditoria'],
      status: 'active',
      lastUsed: '3 min atrás',
      performance: 95,
    },
    {
      title: 'WhatsApp Business',
      description: 'Integração Digisac avançada',
      icon: <WhatsApp className={classes.moduleIcon} style={{ color: '#25D366' }} />,
      color: '#25D366',
      features: ['CRM Integrado', 'IA Vendas', 'Automação'],
      status: 'active',
      lastUsed: 'Agora',
      performance: 98,
    },
  ], [classes]);

  const speedDialActions = [
    { icon: <Extension />, name: 'IA Assistant', color: '#9C27B0' },
    { icon: <Extension />, name: 'Brain Mode', color: '#FF5722' },
    { icon: <Extension />, name: 'Magic Tools', color: '#4CAF50' },
    { icon: <Extension />, name: 'Quick Actions', color: '#2196F3' },
    { icon: <Extension />, name: 'Extensions', color: '#FF9800' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPerformanceMetrics(prev => ({
        cpu: Math.max(20, Math.min(100, prev.cpu + (Math.random() - 0.5) * 10)),
        memory: Math.max(20, Math.min(100, prev.memory + (Math.random() - 0.5) * 8)),
        network: Math.max(50, Math.min(100, prev.network + (Math.random() - 0.5) * 5)),
        storage: Math.max(10, Math.min(100, prev.storage + (Math.random() - 0.5) * 3)),
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRealtimeUsers(prev => Math.max(1, prev + Math.floor((Math.random() - 0.5) * 3)));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setContextualMenu({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const toggleVoiceMode = () => {
    setVoiceMode(!voiceMode);
    if (!voiceMode) {
      setTimeout(() => setVoiceMode(false), 3000);
    }
  };

  const handleSmartAction = (action: string) => {
    setIsLoading(true);
    console.log(`Executando ação inteligente: ${action}`);
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleNewUserSubmit = () => {
    console.log('Criando novo usuário:', newUserData);
    // Aqui você pode adicionar a lógica para salvar o usuário
    setNewUserDialogOpen(false);
    setNewUserData({
      nome: '',
      email: '',
      senha: '',
      permissao: 'Visualizador'
    });
  };

  const handleNewUserInputChange = (field: string, value: string) => {
    setNewUserData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNewProfileSubmit = () => {
    console.log('Criando novo perfil:', newProfileData);
    // Aqui você pode adicionar a lógica para salvar o perfil
    setNewProfileDialogOpen(false);
    setNewProfileData({
      nome: '',
      descricao: '',
      permissoes: {
        dashboard: false,
        chat: false,
        crm: false,
        relatorios: false,
        usuarios: false,
        configuracoes: false
      }
    });
  };

  const handleNewProfileInputChange = (field: string, value: string | boolean) => {
    if (field.startsWith('permissoes.')) {
      const permissionKey = field.split('.')[1];
      setNewProfileData(prev => ({
        ...prev,
        permissoes: {
          ...prev.permissoes,
          [permissionKey]: value
        }
      }));
    } else {
      setNewProfileData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const generateUserReport = () => {
    // Simular dados do relatório
    const reportData = {
      totalUsuarios: 24,
      usuariosAtivos: 18,
      usuariosInativos: 6,
      perfisCriados: 5,
      ultimosAcessos: [
        { usuario: 'João Silva', email: 'joao.silva@empresa.com', ultimoAcesso: 'Há 2 horas', perfil: 'Administrador' },
        { usuario: 'Maria Santos', email: 'maria.santos@empresa.com', ultimoAcesso: 'Há 1 dia', perfil: 'Operador' },
        { usuario: 'Carlos Oliveira', email: 'carlos.oliveira@empresa.com', ultimoAcesso: 'Há 1 semana', perfil: 'Visualizador' },
        { usuario: 'Ana Costa', email: 'ana.costa@empresa.com', ultimoAcesso: 'Há 3 dias', perfil: 'Operador' },
        { usuario: 'Pedro Lima', email: 'pedro.lima@empresa.com', ultimoAcesso: 'Há 5 dias', perfil: 'Visualizador' }
      ],
      atividadesRecentes: [
        { acao: 'Login realizado', usuario: 'João Silva', data: new Date().toLocaleString() },
        { acao: 'Usuário criado', usuario: 'Maria Santos', data: new Date(Date.now() - 86400000).toLocaleString() },
        { acao: 'Permissão alterada', usuario: 'Carlos Oliveira', data: new Date(Date.now() - 172800000).toLocaleString() },
        { acao: 'Perfil criado', usuario: 'Admin', data: new Date(Date.now() - 259200000).toLocaleString() },
        { acao: 'Login realizado', usuario: 'Ana Costa', data: new Date(Date.now() - 345600000).toLocaleString() }
      ]
    };

    // Criar conteúdo HTML do relatório
    const reportHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Relatório Completo de Usuários - ${new Date().toLocaleDateString()}</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; color: #333; }
            .header { text-align: center; border-bottom: 2px solid #795548; padding-bottom: 20px; margin-bottom: 30px; }
            .section { margin-bottom: 30px; }
            .section h2 { color: #795548; border-bottom: 1px solid #ddd; padding-bottom: 10px; }
            .stats { display: flex; justify-content: space-around; margin: 20px 0; }
            .stat-item { text-align: center; padding: 15px; background: #f5f5f5; border-radius: 8px; }
            .stat-number { font-size: 24px; font-weight: bold; color: #795548; }
            table { width: 100%; border-collapse: collapse; margin: 15px 0; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background-color: #795548; color: white; }
            .footer { text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>📊 Relatório Completo de Usuários</h1>
            <p>Sistema de Gestão Colaborativa - Gerado em ${new Date().toLocaleString()}</p>
          </div>

          <div class="section">
            <h2>📈 Resumo Estatístico</h2>
            <div class="stats">
              <div class="stat-item">
                <div class="stat-number">${reportData.totalUsuarios}</div>
                <div>Total de Usuários</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">${reportData.usuariosAtivos}</div>
                <div>Usuários Ativos</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">${reportData.usuariosInativos}</div>
                <div>Usuários Inativos</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">${reportData.perfisCriados}</div>
                <div>Perfis Configurados</div>
              </div>
            </div>
          </div>

          <div class="section">
            <h2>👥 Últimos Acessos</h2>
            <table>
              <thead>
                <tr>
                  <th>Usuário</th>
                  <th>E-mail</th>
                  <th>Perfil</th>
                  <th>Último Acesso</th>
                </tr>
              </thead>
              <tbody>
                ${reportData.ultimosAcessos.map(acesso => `
                  <tr>
                    <td>${acesso.usuario}</td>
                    <td>${acesso.email}</td>
                    <td>${acesso.perfil}</td>
                    <td>${acesso.ultimoAcesso}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>

          <div class="section">
            <h2>📋 Atividades Recentes</h2>
            <table>
              <thead>
                <tr>
                  <th>Ação</th>
                  <th>Usuário</th>
                  <th>Data/Hora</th>
                </tr>
              </thead>
              <tbody>
                ${reportData.atividadesRecentes.map(atividade => `
                  <tr>
                    <td>${atividade.acao}</td>
                    <td>${atividade.usuario}</td>
                    <td>${atividade.data}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>

          <div class="section">
            <h2>🛡️ Distribuição de Perfis</h2>
            <table>
              <thead>
                <tr>
                  <th>Perfil</th>
                  <th>Quantidade</th>
                  <th>Percentual</th>
                  <th>Descrição</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Administrador</td>
                  <td>3</td>
                  <td>12.5%</td>
                  <td>Acesso total ao sistema</td>
                </tr>
                <tr>
                  <td>Operador</td>
                  <td>15</td>
                  <td>62.5%</td>
                  <td>Operações básicas</td>
                </tr>
                <tr>
                  <td>Visualizador</td>
                  <td>6</td>
                  <td>25%</td>
                  <td>Apenas visualização</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="footer">
            <p>Relatório gerado automaticamente pelo Sistema de Gestão Colaborativa</p>
            <p>© 2024 - Todos os direitos reservados</p>
          </div>
        </body>
      </html>
    `;

    // Abrir o relatório em uma nova janela
    const newWindow = window.open('', '_blank');
    if (newWindow) {
      newWindow.document.write(reportHTML);
      newWindow.document.close();
      
      // Adicionar funcionalidade de impressão
      setTimeout(() => {
        newWindow.print();
      }, 1000);
    } else {
      // Fallback: criar e baixar como arquivo HTML
      const blob = new Blob([reportHTML], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `relatorio-usuarios-${new Date().toISOString().split('T')[0]}.html`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }

    // Mostrar notificação de sucesso
    setNotifications([{
      id: Date.now(),
      message: 'Relatório gerado com sucesso!',
      type: 'success'
    }]);
  };

  return (
    <div className={classes.root} onContextMenu={handleContextMenu}>
      <CssBaseline />

      <div className={classes.statusBar}>
        <LinearProgress 
          variant="determinate" 
          value={performanceMetrics.cpu} 
          style={{ height: 4 }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className={classes.header}>
          <motion.div
            animate={controls}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
          >
            <Typography variant="h2" gutterBottom style={{ fontWeight: 'bold' }}>
              <People style={{ marginRight: 16, fontSize: 'inherit' }} />
              Área dos Colaboradores
            </Typography>
            <Typography variant="h5" style={{ opacity: 0.9 }}>
              Sistema Inteligente de Gestão Colaborativa v2.0
            </Typography>
            <Typography variant="body1" style={{ marginTop: 16, opacity: 0.8 }}>
              Powered by AI • Real-time Collaboration • Advanced Analytics
            </Typography>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className={classes.smartWidget}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Typography variant="h6" gutterBottom>
          <Extension style={{ marginRight: 8, verticalAlign: 'middle' }} />
          IA Insights
        </Typography>
        <Typography variant="body2" style={{ marginBottom: 8 }}>
          Sistema funcionando {performanceMetrics.cpu.toFixed(0)}%
        </Typography>
        <LinearProgress 
          variant="determinate" 
          value={performanceMetrics.cpu} 
          style={{ marginBottom: 8 }}
        />
        <Chip 
          icon={<Extension />} 
          label="Performance Otimizada" 
          color="primary" 
          size="small"
        />
      </motion.div>

      <AnimatePresence>
        {smartSuggestions.length > 0 && (
          <motion.div
            className={classes.smartNotification}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
          >
            <Typography variant="subtitle2" gutterBottom>
              <Extension style={{ marginRight: 8, verticalAlign: 'middle', color: '#FFC107' }} />
              Sugestão Inteligente
            </Typography>
            <Typography variant="body2">
              Detectamos que você pode otimizar seu workflow usando automação IA.
            </Typography>
            <Button size="small" color="primary" style={{ marginTop: 8 }}>
              Aplicar Sugestão
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Card className={`${classes.welcomeCard} ${classes.glowEffect}`}>
          <CardContent>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={8}>
                <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold' }}>
                  Bem-vindo ao Futuro da Colaboração! 🚀
                </Typography>
                <Typography variant="body1" style={{ marginBottom: 16 }}>
                  Sistema de próxima geração com IA nativa, colaboração em tempo real e analytics avançados.
                </Typography>
                <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
                  <Chip icon={<Extension />} label="IA Ativa" color="secondary" />
                  <Chip icon={<Extension />} label="Sync Real-time" />
                  <Chip icon={<Security />} label="Segurança Máxima" />
                  <Chip icon={<Extension />} label="Performance 99%" />
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={classes.performanceMetrics}>
                  <div className={classes.metricItem}>
                    <Typography variant="h6">{realtimeUsers}</Typography>
                    <Typography variant="caption">Usuários Online</Typography>
                  </div>
                  <div className={classes.metricItem}>
                    <Typography variant="h6">99.9%</Typography>
                    <Typography variant="caption">Uptime</Typography>
                  </div>
                  <div className={classes.metricItem}>
                    <Typography variant="h6">&lt; 50ms</Typography>
                    <Typography variant="caption">Latência</Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Paper className={classes.tabsContainer}>
         <Tabs
  value={tabValue}
  onChange={handleTabChange}
  indicatorColor="primary"
  textColor="primary"
  variant={isMobile ? "scrollable" : "fullWidth"}
  scrollButtons="auto"
  style={{ position: 'relative' }}
>
  <Tab label="Visão Geral" icon={<Extension />} style={{ color: '#222', fontWeight: 'bold' }} />
  <Tab label="Dashboard IA" icon={<DashboardIcon />} style={{ color: '#222', fontWeight: 'bold' }} />
  <Tab label="Chat Colaborativo" icon={<Badge badgeContent={5} color="secondary" overlap="rectangular"><Chat /></Badge>} style={{ color: '#222', fontWeight: 'bold' }} />
  <Tab label="IA Lívia Pro" icon={<EmojiObjects className={classes.pulsingIcon} />} style={{ color: '#222', fontWeight: 'bold' }} />
  <Tab label="CRM Neural" icon={<Business />} style={{ color: '#222', fontWeight: 'bold' }} />
  <Tab label="Feed Inteligente" icon={<Timeline />} style={{ color: '#222', fontWeight: 'bold' }} />
  <Tab label="Cadastro de Usuário" icon={<People />} style={{ color: '#222', fontWeight: 'bold' }} />
  <Tab label="WhatsApp Business" icon={<WhatsApp />} style={{ color: '#222', fontWeight: 'bold' }} />
</Tabs>

        </Paper>
      </motion.div>

      <AnimatePresence>
        {isLoading && (
          <motion.div
            className={classes.loadingOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div >
              <CircularProgress size={60} style={{ color: '#667eea', marginBottom: 16 }} />
              <Typography variant="h6" style={{ color: 'white' }}>
                Carregando Experiência Inteligente...
              </Typography>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

     <TabPanel value={tabValue} index={0}>
  <Container maxWidth="xl">
    <div>
      <Typography 
        variant="h4" 
        gutterBottom 
        align="center" 
        style={{ marginBottom: 32, color: '#222' }} // <-- aqui
      >
        Módulos Inteligentes Disponíveis
      </Typography>

      <Paper className={classes.analyticsPanel}>
        <Typography 
          variant="h6" 
          gutterBottom 
          style={{ color: '#222' }} // <-- aqui
        >
          <Extension style={{ marginRight: 8, verticalAlign: 'middle' }} />
          Analytics em Tempo Real
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <div>
              <Typography 
                variant="h4" 
                style={{ color: '#222' }} // <-- aqui
              >
                {performanceMetrics.cpu.toFixed(0)}%
              </Typography>
              <Typography 
                variant="caption" 
                style={{ color: '#222' }} // <-- aqui
              >
                CPU Usage
              </Typography>
              <LinearProgress variant="determinate" value={performanceMetrics.cpu} style={{ marginTop: 4 }} />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div>
              <Typography 
                variant="h4" 
                style={{ color: '#222' }} // <-- aqui
              >
                {performanceMetrics.memory.toFixed(0)}%
              </Typography>
              <Typography 
                variant="caption" 
                style={{ color: '#222' }} // <-- aqui
              >
                Memory
              </Typography>
              <LinearProgress variant="determinate" value={performanceMetrics.memory} color="secondary" style={{ marginTop: 4 }} />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div>
              <Typography 
                variant="h4" 
                style={{ color: '#222' }} // <-- aqui
              >
                {performanceMetrics.network.toFixed(0)}%
              </Typography>
              <Typography 
                variant="caption" 
                style={{ color: '#222' }} // <-- aqui
              >
                Network
              </Typography>
              <LinearProgress variant="determinate" value={performanceMetrics.network} style={{ marginTop: 4, backgroundColor: '#E8F5E8' }} />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div>
              <Typography 
                variant="h4" 
                style={{ color: '#222' }} // <-- aqui
              >
                {performanceMetrics.storage.toFixed(0)}%
              </Typography>
              <Typography 
                variant="caption" 
                style={{ color: '#222' }} // <-- aqui
              >
                Storage
              </Typography>
              <LinearProgress variant="determinate" value={performanceMetrics.storage} style={{ marginTop: 4, backgroundColor: '#FFF3E0' }} />
            </div>
          </Grid>
        </Grid>
      </Paper>


            <Grid container spacing={3} style={{ marginTop: 24 }}>
              {modules.map((module, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card
                      className={classes.moduleCard}
                      onClick={() => {
                        if (index === 6) { // WhatsApp Business
                          setTabValue(7);
                        } else {
                          setTabValue(index + 1);
                        }
                      }}
                    >
                      <CardContent>
                        <div >
                          {module.icon}
                          <div >
                            <Chip 
                              label={module.status} 
                              size="small" 
                              color={module.status === 'active' ? 'primary' : 'secondary'}
                            />
                          </div>
                        </div>
                      <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', color: '#222' }}>
  {module.title}
</Typography>
<Typography variant="body2" style={{ marginBottom: 16, color: '#222', opacity: 0.85 }}>
  {module.description}
</Typography>


                        <div style={{marginBottom: '8px'}}>
                          {module.features.map((feature, idx) => (
                            <Chip 
                              key={idx}
                              label={feature} 
                              size="small" 
                              variant="outlined"
                              style={{ margin: 2 }}
                            />
                          ))}
                        </div>

                        <div    style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                          <Typography variant="caption" color="textSecondary">
                            {module.lastUsed}
                          </Typography>
                          <div  style={{display: 'flex', alignItems: 'center'}}>
                            <Typography variant="caption" style={{ marginRight: 8 }}>
                              {module.performance}%
                                                        </Typography>
                            <CircularProgress 
                              variant="determinate" 
                              value={module.performance} 
                              size={20}
                              style={{ color: module.color }}
                            />
                          </div>
                        </div>

                        <Button
                          fullWidth
                          variant="contained"
                          style={{
                            marginTop: 16,
                            backgroundColor: module.color,
                            color: 'black',
                            borderRadius: 25,
                          }}
                          startIcon={<PlayArrow />}
                        >
                          Acessar Módulo
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </div>
        </Container>
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        <Container maxWidth="xl">
          <div >
           <DashboardIA />
          </div>
        </Container>
      </TabPanel>

      <TabPanel value={tabValue} index={2}>
        <ChatInterno />
      </TabPanel>

      <TabPanel value={tabValue} index={3}>
        <ChatIA />
      </TabPanel>

      <TabPanel value={tabValue} index={4}>
        <CRM />
      </TabPanel>

      <TabPanel value={tabValue} index={5}>
        <Feed />
      </TabPanel>
      {/* Feed Colaborativo */}
      <TabPanel value={tabValue} index={5}>
        <Container maxWidth="xl">
          <AnimatePresence mode="wait">
            <Feed />
          </AnimatePresence>
        </Container>
      </TabPanel>

      {/* Cadastro de Usuário */}
      <TabPanel value={tabValue} index={6}>
        <Container maxWidth="xl">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="h4" gutterBottom align="center" style={{ marginBottom: 32, color: '#222' }}>
                Sistema de Gestão de Usuários
              </Typography>

              {/* Menu de Opções */}
              <Grid container spacing={3} style={{ marginBottom: 24 }}>
                <Grid item xs={12} sm={6} md={3}>
                  <Card className={classes.card} style={{ cursor: 'pointer', height: '100%' }}>
                    <CardContent style={{ textAlign: 'center' }}>
                      <People style={{ fontSize: 48, color: '#795548', marginBottom: 16 }} />
                      <Typography variant="h6" gutterBottom style={{ color: '#222' }}>
                        Criação de Perfis
                      </Typography>
                      <Typography variant="body2" style={{ color: '#666' }}>
                        Defina perfis de acesso personalizados
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <Card className={classes.card} style={{ cursor: 'pointer', height: '100%' }}>
                    <CardContent style={{ textAlign: 'center' }}>
                      <Security style={{ fontSize: 48, color: '#795548', marginBottom: 16 }} />
                      <Typography variant="h6" gutterBottom style={{ color: '#222' }}>
                        Gestão de Permissões
                      </Typography>
                      <Typography variant="body2" style={{ color: '#666' }}>
                        Configure permissões específicas
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <Card className={classes.card} style={{ cursor: 'pointer', height: '100%' }}>
                    <CardContent style={{ textAlign: 'center' }}>
                      <History style={{ fontSize: 48, color: '#795548', marginBottom: 16 }} />
                      <Typography variant="h6" gutterBottom style={{ color: '#222' }}>
                        Auditoria de Ações
                      </Typography>
                      <Typography variant="body2" style={{ color: '#666' }}>
                        Monitore atividades do sistema
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <Card className={classes.card} style={{ cursor: 'pointer', height: '100%' }}>
                    <CardContent style={{ textAlign: 'center' }}>
                      <Settings style={{ fontSize: 48, color: '#795548', marginBottom: 16 }} />
                      <Typography variant="h6" gutterBottom style={{ color: '#222' }}>
                        Configurações Avançadas
                      </Typography>
                      <Typography variant="body2" style={{ color: '#666' }}>
                        Ajustes do sistema
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>

              {/* Área Principal de Gestão */}
              <Grid container spacing={3}>
                {/* Lista de Usuários */}
                <Grid item xs={12} md={8}>
                  <Card className={classes.card}>
                    <CardContent>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                        <Typography variant="h6" style={{ color: '#222' }}>
                          <People style={{ marginRight: 8, verticalAlign: 'middle' }} />
                          Usuários do Sistema
                        </Typography>
                        <Button
                          variant="contained"
                          style={{
                            backgroundColor: '#795548',
                            color: 'white',
                            borderRadius: 25
                          }}
                          startIcon={<Add />}
                          onClick={() => setNewUserDialogOpen(true)}
                        >
                          Novo Usuário
                        </Button>
                      </div>

                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>Usuário</TableCell>
                            <TableCell>Perfil</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Último Acesso</TableCell>
                            <TableCell>Ações</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow>
                            <TableCell>
                              <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Avatar style={{ marginRight: 12, backgroundColor: '#795548' }}>
                                  <People />
                                </Avatar>
                                <div>
                                  <Typography variant="body2" style={{ fontWeight: 'bold', color: '#222' }}>
                                    João Silva
                                  </Typography>
                                  <Typography variant="caption" style={{ color: '#666' }}>
                                    joao.silva@empresa.com
                                  </Typography>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Chip 
                                label="Administrador" 
                                size="small" 
                                style={{ backgroundColor: '#795548', color: 'white' }}
                              />
                            </TableCell>
                            <TableCell>
                              <Chip 
                                label="Ativo" 
                                size="small" 
                                color="primary"
                                icon={<CheckCircle />}
                              />
                            </TableCell>
                            <TableCell>
                              <Typography variant="body2" style={{ color: '#666' }}>
                                Há 2 horas
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <IconButton size="small">
                                <Edit />
                              </IconButton>
                              <IconButton size="small">
                                <Security />
                              </IconButton>
                              <IconButton size="small">
                                <MoreVert />
                              </IconButton>
                            </TableCell>
                          </TableRow>

                          <TableRow>
                            <TableCell>
                              <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Avatar style={{ marginRight: 12, backgroundColor: '#795548' }}>
                                  <People />
                                </Avatar>
                                <div>
                                  <Typography variant="body2" style={{ fontWeight: 'bold', color: '#222' }}>
                                    Maria Santos
                                  </Typography>
                                  <Typography variant="caption" style={{ color: '#666' }}>
                                    maria.santos@empresa.com
                                  </Typography>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Chip 
                                label="Operador" 
                                size="small" 
                                variant="outlined"
                              />
                            </TableCell>
                            <TableCell>
                              <Chip 
                                label="Ativo" 
                                size="small" 
                                color="primary"
                                icon={<CheckCircle />}
                              />
                            </TableCell>
                            <TableCell>
                              <Typography variant="body2" style={{ color: '#666' }}>
                                Há 1 dia
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <IconButton size="small">
                                <Edit />
                              </IconButton>
                              <IconButton size="small">
                                <Security />
                              </IconButton>
                              <IconButton size="small">
                                <MoreVert />
                              </IconButton>
                            </TableCell>
                          </TableRow>

                          <TableRow>
                            <TableCell>
                              <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Avatar style={{ marginRight: 12, backgroundColor: '#795548' }}>
                                  <People />
                                </Avatar>
                                <div>
                                  <Typography variant="body2" style={{ fontWeight: 'bold', color: '#222' }}>
                                    Carlos Oliveira
                                  </Typography>
                                  <Typography variant="caption" style={{ color: '#666' }}>
                                    carlos.oliveira@empresa.com
                                  </Typography>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Chip 
                                label="Visualizador" 
                                size="small" 
                                variant="outlined"
                              />
                            </TableCell>
                            <TableCell>
                              <Chip 
                                label="Inativo" 
                                size="small" 
                                style={{ backgroundColor: '#f44336', color: 'white' }}
                                icon={<Cancel />}
                              />
                            </TableCell>
                            <TableCell>
                              <Typography variant="body2" style={{ color: '#666' }}>
                                Há 1 semana
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <IconButton size="small">
                                <Edit />
                              </IconButton>
                              <IconButton size="small">
                                <Security />
                              </IconButton>
                              <IconButton size="small">
                                <MoreVert />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </Grid>

                {/* Painel Lateral */}
                <Grid item xs={12} md={4}>
                  {/* Estatísticas */}
                  <Card className={classes.card} style={{ marginBottom: 16 }}>
                    <CardContent>
                      <Typography variant="h6" gutterBottom style={{ color: '#222' }}>
                        <Timeline style={{ marginRight: 8, verticalAlign: 'middle' }} />
                        Estatísticas
                      </Typography>

                      <div style={{ marginBottom: 16 }}>
                        <Typography variant="body2" style={{ color: '#666' }}>Total de Usuários</Typography>
                        <Typography variant="h4" style={{ color: '#795548' }}>24</Typography>
                      </div>

                      <div style={{ marginBottom: 16 }}>
                        <Typography variant="body2" style={{ color: '#666' }}>Usuários Ativos</Typography>
                        <Typography variant="h4" style={{ color: '#4caf50' }}>18</Typography>
                      </div>

                      <div>
                        <Typography variant="body2" style={{ color: '#666' }}>Perfis Configurados</Typography>
                        <Typography variant="h4" style={{ color: '#2196f3' }}>5</Typography>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Perfis de Acesso */}
                  <Card className={classes.card} style={{ marginBottom: 16 }}>
                    <CardContent>
                      <Typography variant="h6" gutterBottom style={{ color: '#222' }}>
                        <Security style={{ marginRight: 8, verticalAlign: 'middle' }} />
                        Perfis de Acesso
                      </Typography>

                      <List dense>
                        <ListItem>
                          <ListItemIcon>
                            <Star style={{ color: '#f44336' }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary="Administrador" 
                            secondary="Acesso total ao sistema"
                            primaryTypographyProps={{ style: { color: '#222' } }}
                          />
                          <ListItemSecondaryAction>
                            <Chip label="3" size="small" />
                          </ListItemSecondaryAction>
                        </ListItem>

                        <ListItem>
                          <ListItemIcon>
                            <Extension style={{ color: '#ff9800' }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary="Operador" 
                            secondary="Operações básicas"
                            primaryTypographyProps={{ style: { color: '#222' } }}
                          />
                          <ListItemSecondaryAction>
                            <Chip label="15" size="small" />
                          </ListItemSecondaryAction>
                        </ListItem>

                        <ListItem>
                          <ListItemIcon>
                            <Visibility style={{ color: '#2196f3' }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary="Visualizador" 
                            secondary="Apenas visualização"
                            primaryTypographyProps={{ style: { color: '#222' } }}
                          />
                          <ListItemSecondaryAction>
                            <Chip label="6" size="small" />
                          </ListItemSecondaryAction>
                        </ListItem>
                      </List>

                      <Button
                        fullWidth
                        variant="outlined"
                        style={{
                          marginTop: 16,
                          borderColor: '#795548',
                          color: '#795548'
                        }}
                        startIcon={<Add />}
                        onClick={() => setNewProfileDialogOpen(true)}
                      >
                        Novo Perfil
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Log de Auditoria */}
                  <Card className={classes.card}>
                    <CardContent>
                      <Typography variant="h6" gutterBottom style={{ color: '#222' }}>
                        <History style={{ marginRight: 8, verticalAlign: 'middle' }} />
                        Atividades Recentes
                      </Typography>

                      <List dense>
                        <ListItem>
                          <ListItemIcon>
                            <CheckCircle style={{ color: '#4caf50' }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary="Login realizado" 
                            secondary="João Silva - há 2h"
                            primaryTypographyProps={{ style: { color: '#222' } }}
                          />
                        </ListItem>

                        <ListItem>
                          <ListItemIcon>
                            <Add style={{ color: '#2196f3' }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary="Usuário criado" 
                            secondary="Maria Santos - há 1 dia"
                            primaryTypographyProps={{ style: { color: '#222' } }}
                          />
                        </ListItem>

                        <ListItem>
                          <ListItemIcon>
                            <Security style={{ color: '#ff9800' }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary="Permissão alterada" 
                            secondary="Carlos Oliveira - há 2 dias"
                            primaryTypographyProps={{ style: { color: '#222' } }}
                          />
                        </ListItem>

                        <ListItem>
                          <ListItemIcon>
                            <Warning style={{ color: '#f44336' }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary="Tentativa de acesso negada" 
                            secondary="IP: 192.168.1.100 - há 3 dias"
                            primaryTypographyProps={{ style: { color: '#222' } }}
                          />
                        </ListItem>
                      </List>

                      <Button
                        fullWidth
                        variant="text"
                        style={{
                          marginTop: 16,
                          color: '#795548'
                        }}
                        onClick={generateUserReport}
                        startIcon={<GetApp />}
                      >
                        Ver Relatório Completo
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>

              {/* Ações Rápidas */}
              <Card className={classes.card} style={{ marginTop: 24 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom style={{ color: '#222' }}>
                    <Extension style={{ marginRight: 8, verticalAlign: 'middle' }} />
                    Ações Rápidas
                  </Typography>

                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={3}>
                      <Button
                        fullWidth
                        variant="outlined"
                        style={{
                          borderColor: '#795548',
                          color: '#795548',
                          padding: '12px 16px'
                        }}
                        startIcon={<People />}
                      >
                        Importar Usuários
                      </Button>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                      <Button
                        fullWidth
                        variant="outlined"
                        style={{
                          borderColor: '#795548',
                          color: '#795548',
                          padding: '12px 16px'
                        }}
                        startIcon={<GetApp />}
                      >
                        Exportar Relatório
                      </Button>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                      <Button
                        fullWidth
                        variant="outlined"
                        style={{
                          borderColor: '#795548',
                          color: '#795548',
                          padding: '12px 16px'
                        }}
                        startIcon={<Security />}
                      >
                        Configurar Políticas
                      </Button>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                      <Button
                        fullWidth
                        variant="outlined"
                        style={{
                          borderColor: '#795548',
                          color: '#795548',
                          padding: '12px 16px'
                        }}
                        startIcon={<Sync />}
                      >
                        Sincronizar AD
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </Container>
      </TabPanel>

      {/* WhatsApp Business + Digisac */}
      <TabPanel value={tabValue} index={7}>
        <Container maxWidth="xl" style={{ padding: 0, height: '100vh' }}>
          <AnimatePresence mode="wait">
            <WhatsAppDigisac />
          </AnimatePresence>
        </Container>
      </TabPanel>

      <div className={classes.aiAssistant}>
        <SpeedDial
          ariaLabel="IA Assistant"
          className={classes.speedDial}
          icon={<SpeedDialIcon icon={<Extension />} openIcon={<Close />} />}
          onClose={() => setSpeedDialOpen(false)}
          onOpen={() => setSpeedDialOpen(true)}
          open={speedDialOpen}
          direction="up"
        >
          {speedDialActions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={() => handleSmartAction(action.name)}
              style={{ backgroundColor: action.color }}
            />
          ))}
        </SpeedDial>
      </div>

      <motion.div
        className={classes.floatingWidget}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleVoiceMode}
      >
        <Badge badgeContent={realtimeUsers} color="secondary">
          {voiceMode ? <MicOff /> : <Mic />}
        </Badge>
      </motion.div>

      <motion.div
        className={classes.realtimeStatus}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <Badge color="secondary" variant="dot">
          <Wifi />
        </Badge>
        <Typography variant="caption">
          {realtimeUsers} colaboradores online
        </Typography>
      </motion.div>

      <AnimatePresence>
        {voiceMode && (
          <motion.div
            className={classes.voiceIndicator}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
          >
            <RecordVoiceOver className={classes.pulsingIcon} style={{ fontSize: 48 }} />
            <Typography variant="caption">Escutando...</Typography>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {contextualMenu && (
          <motion.div
            className={classes.contextualMenu}
            style={{ left: contextualMenu.x, top: contextualMenu.y }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onMouseLeave={() => setContextualMenu(null)}
          >
            <List dense>
              <ListItem button onClick={() => handleSmartAction('inspect')}>
                <ListItemIcon><Visibility /></ListItemIcon>
                <ListItemText primary="Inspecionar" />
              </ListItem>
              <ListItem button onClick={() => handleSmartAction('analyze')}>
                <ListItemIcon><Extension /></ListItemIcon>
                <ListItemText primary="Analisar com IA" />
              </ListItem>
              <ListItem button onClick={() => handleSmartAction('optimize')}>
                <ListItemIcon><Extension /></ListItemIcon>
                <ListItemText primary="Otimizar" />
              </ListItem>
            </List>
          </motion.div>
        )}
      </AnimatePresence>

      <Snackbar
        open={notifications.length > 0}
        autoHideDuration={6000}
        onClose={() => setNotifications([])}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" onClose={() => setNotifications([])}>
          Sistema funcionando com performance otimizada!
        </Alert>
      </Snackbar>

      {/* Dialog para Novo Perfil */}
      <Dialog 
        open={newProfileDialogOpen} 
        onClose={() => setNewProfileDialogOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle style={{ color: '#222' }}>
          <Security style={{ marginRight: 8, verticalAlign: 'middle' }} />
          Criar Novo Perfil de Permissão
        </DialogTitle>
        <DialogContent>
          <div style={{ paddingTop: 16 }}>
            <TextField
              fullWidth
              label="Nome do Perfil"
              value={newProfileData.nome}
              onChange={(e) => handleNewProfileInputChange('nome', e.target.value)}
              margin="normal"
              variant="outlined"
              required
            />

            <TextField
              fullWidth
              label="Descrição"
              value={newProfileData.descricao}
              onChange={(e) => handleNewProfileInputChange('descricao', e.target.value)}
              margin="normal"
              variant="outlined"
              multiline
              rows={3}
              required
            />

            <Typography variant="h6" style={{ marginTop: 24, marginBottom: 16, color: '#222' }}>
              <Extension style={{ marginRight: 8, verticalAlign: 'middle' }} />
              Permissões do Sistema
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={newProfileData.permissoes.dashboard}
                      onChange={(e) => handleNewProfileInputChange('permissoes.dashboard', e.target.checked)}
                      color="primary"
                    />
                  }
                  label={
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <DashboardIcon style={{ marginRight: 8, color: '#4CAF50' }} />
                      Dashboard Inteligente
                    </div>
                  }
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={newProfileData.permissoes.chat}
                      onChange={(e) => handleNewProfileInputChange('permissoes.chat', e.target.checked)}
                      color="primary"
                    />
                  }
                  label={
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Chat style={{ marginRight: 8, color: '#2196F3' }} />
                      Chat Colaborativo
                    </div>
                  }
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={newProfileData.permissoes.crm}
                      onChange={(e) => handleNewProfileInputChange('permissoes.crm', e.target.checked)}
                      color="primary"
                    />
                  }
                  label={
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Business style={{ marginRight: 8, color: '#FF9800' }} />
                      CRM Neural
                    </div>
                  }
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={newProfileData.permissoes.relatorios}
                      onChange={(e) => handleNewProfileInputChange('permissoes.relatorios', e.target.checked)}
                      color="primary"
                    />
                  }
                  label={
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Timeline style={{ marginRight: 8, color: '#607D8B' }} />
                      Relatórios
                    </div>
                  }
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={newProfileData.permissoes.usuarios}
                      onChange={(e) => handleNewProfileInputChange('permissoes.usuarios', e.target.checked)}
                      color="primary"
                    />
                  }
                  label={
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <People style={{ marginRight: 8, color: '#795548' }} />
                      Gestão de Usuários
                    </div>
                  }
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={newProfileData.permissoes.configuracoes}
                      onChange={(e) => handleNewProfileInputChange('permissoes.configuracoes', e.target.checked)}
                      color="primary"
                    />
                  }
                  label={
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Settings style={{ marginRight: 8, color: '#9E9E9E' }} />
                      Configurações
                    </div>
                  }
                />
              </Grid>
            </Grid>
          </div>
        </DialogContent>
        <DialogActions style={{ padding: 16 }}>
          <Button 
            onClick={() => setNewProfileDialogOpen(false)}
            style={{ color: '#666' }}
          >
            Cancelar
          </Button>
          <Button 
            onClick={handleNewProfileSubmit}
            variant="contained"
            style={{
              backgroundColor: '#795548',
              color: 'white'
            }}
            startIcon={<Save />}
            disabled={!newProfileData.nome || !newProfileData.descricao}
          >
            Criar Perfil
          </Button>
        </DialogActions>
      </Dialog>

      {/* Dialog para Novo Usuário */}
      <Dialog 
        open={newUserDialogOpen} 
        onClose={() => setNewUserDialogOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle style={{ color: '#222' }}>
          <People style={{ marginRight: 8, verticalAlign: 'middle' }} />
          Cadastrar Novo Usuário
        </DialogTitle>
        <DialogContent>
          <div style={{ paddingTop: 16 }}>
            <TextField
              fullWidth
              label="Nome Completo"
              value={newUserData.nome}
              onChange={(e) => handleNewUserInputChange('nome', e.target.value)}
              margin="normal"
              variant="outlined"
              required
            />

            <TextField
              fullWidth
              label="E-mail"
              type="email"
              value={newUserData.email}
              onChange={(e) => handleNewUserInputChange('email', e.target.value)}
              margin="normal"
              variant="outlined"
              required
            />

            <TextField
              fullWidth
              label="Senha"
              type="password"
              value={newUserData.senha}
              onChange={(e) => handleNewUserInputChange('senha', e.target.value)}
              margin="normal"
              variant="outlined"
              required
            />

            <FormControl fullWidth margin="normal" variant="outlined">
              <InputLabel>Permissão</InputLabel>
              <Select
                value={newUserData.permissao}
                onChange={(e) => handleNewUserInputChange('permissao', e.target.value as string)}
                label="Permissão"
              >
                <MenuItem value="Administrador">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Star style={{ marginRight: 8, color: '#f44336' }} />
                    Administrador
                  </div>
                </MenuItem>
                <MenuItem value="Operador">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Extension style={{ marginRight: 8, color: '#ff9800' }} />
                    Operador
                  </div>
                </MenuItem>
                <MenuItem value="Visualizador">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Visibility style={{ marginRight: 8, color: '#2196f3' }} />
                    Visualizador
                  </div>
                </MenuItem>
              </Select>
            </FormControl>
          </div>
        </DialogContent>
        <DialogActions style={{ padding: 16 }}>
          <Button 
            onClick={() => setNewUserDialogOpen(false)}
            style={{ color: '#666' }}
          >
            Cancelar
          </Button>
          <Button 
            onClick={handleNewUserSubmit}
            variant="contained"
            style={{
              backgroundColor: '#795548',
              color: 'white'
            }}
            startIcon={<Save />}
            disabled={!newUserData.nome || !newUserData.email || !newUserData.senha}
          >
            Criar Usuário
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Colaboradores;