import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  LinearProgress,
  CircularProgress,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Badge,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Fab,
  Tooltip,
  AppBar,
  Toolbar,
  Tab,
  Tabs,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  FormControl,
  InputLabel,
  Select,
  Divider,
} from '@material-ui/core';
import {
  Dashboard,
  Person,
  Assignment,
  CheckCircle,
  Warning,
  Error,
  Schedule,
  AttachFile,
  CloudUpload,
  Chat,
  Notifications,
  Visibility,
  GetApp,
  Print,
  Share,
  VerifiedUser,
  EmojiEvents,
  MonetizationOn,
  AccessTime,
  Today,
  Event,
  PhotoCamera,
  Description,
  Phone,
  Email,
  WhatsApp,
  ThumbUp,
  CardGiftcard,
  Loyalty,
  TrendingDown,
  ExpandMore,
  ExpandLess,
  Refresh,
  PhotoLibrary,
  Send,
  Done,
  DoneAll,
  InsertDriveFile,
  Settings,
  ExitToApp,
  Business,
  TrendingUp,
  Assessment,
  Security,
  Star,
} from '@material-ui/icons';
import { Alert, AlertTitle } from '@material-ui/lab';
import { motion, AnimatePresence } from 'framer-motion';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #1a4d3a 0%, #2d5a3d 100%)',
  },
  appBar: {
    background: 'linear-gradient(135deg, #1a4d3a 0%, #2d5a3d 100%)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(0, 3),
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#fff',
  },
  tabsContainer: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  tabs: {
    '& .MuiTab-root': {
      color: 'rgba(255,255,255,0.7)',
      fontWeight: 'bold',
      minWidth: 120,
    },
    '& .Mui-selected': {
      color: '#fff',
    },
    '& .MuiTabs-indicator': {
      backgroundColor: '#fff',
      height: 3,
    },
  },
  userMenu: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
  },
  avatar: {
    width: 40,
    height: 40,
    background: 'linear-gradient(135deg, #2d5a3d 0%, #4a7c59 100%)',
    cursor: 'pointer',
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: theme.spacing(3),
  },
  dashboardCard: {
    background: theme.palette.background.paper,
    borderRadius: theme.spacing(2),
    padding: theme.spacing(3),
    boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
    marginBottom: theme.spacing(3),
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 4,
      background: 'linear-gradient(90deg, #1a4d3a, #2d5a3d)',
    },
  },
  statCard: {
    background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)',
    borderRadius: theme.spacing(2),
    padding: theme.spacing(3),
    textAlign: 'center',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'translateY(-4px)',
    },
  },
  statIcon: {
    fontSize: 40,
    color: '#2d5a3d',
    marginBottom: theme.spacing(1),
  },
  processCard: {
    background: '#fff',
    borderRadius: theme.spacing(2),
    padding: theme.spacing(3),
    marginBottom: theme.spacing(2),
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    border: '1px solid #eee',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
    },
  },
  processStep: {
    background: '#f8f9fa',
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2),
    marginBottom: theme.spacing(1),
    border: '2px solid transparent',
    transition: 'all 0.3s ease',
  },
  activeStep: {
    borderColor: '#4CAF50',
    background: '#e8f5e8',
  },
  completedStep: {
    borderColor: '#2196F3',
    background: '#e3f2fd',
  },
  urgentStep: {
    borderColor: '#FF5722',
    background: '#ffebee',
    animation: '$blink 1.5s infinite',
  },
  '@keyframes blink': {
    '0%, 50%': { opacity: 1 },
    '51%, 100%': { opacity: 0.7 },
  },
  statusChip: {
    fontWeight: 'bold',
    fontSize: '0.9rem',
    padding: theme.spacing(1, 2),
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
    background: 'linear-gradient(90deg, #1a4d3a, #2d5a3d)',
  },
  documentUpload: {
    border: '2px dashed #ccc',
    borderRadius: theme.spacing(2),
    padding: theme.spacing(4),
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover': {
      borderColor: '#667eea',
      background: 'rgba(102, 126, 234, 0.05)',
    },
  },
  chatFab: {
    position: 'fixed',
    bottom: 20,
    right: 20,
    background: 'linear-gradient(135deg, #1a4d3a 0%, #2d5a3d 100%)',
    color: '#fff',
    animation: '$bounce 2s infinite',
  },
  '@keyframes bounce': {
    '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
    '40%': { transform: 'translateY(-10px)' },
    '60%': { transform: 'translateY(-5px)' },
  },
  vipBadge: {
    background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
    color: '#000',
    fontWeight: 'bold',
    fontSize: '0.8rem',
    animation: '$pulse 2s infinite',
  },
  '@keyframes pulse': {
    '0%': { boxShadow: '0 0 0 0 rgba(255, 215, 0, 0.7)' },
    '70%': { boxShadow: '0 0 0 10px rgba(255, 215, 0, 0)' },
    '100%': { boxShadow: '0 0 0 0 rgba(255, 215, 0, 0)' },
  },
  formContainer: {
    background: '#fff',
    borderRadius: theme.spacing(2),
    padding: theme.spacing(4),
    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
  },
  profileContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(3),
  },
  profileAvatar: {
    width: 120,
    height: 120,
    background: 'linear-gradient(135deg, #1a4d3a 0%, #2d5a3d 100%)',
    fontSize: '3rem',
    fontWeight: 'bold',
  },
  summaryCards: {
    display: 'flex',
    gap: theme.spacing(2),
    marginBottom: theme.spacing(3),
    flexWrap: 'wrap',
  },
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

interface ProcessData {
  id: string;
  tipo: string;
  status: 'Pendente' | 'Em Análise' | 'Aguardando Documentos' | 'Aguardando Detran' | 'Pronto' | 'Concluído';
  progresso: number;
  etapas: EtapaData[];
  documentosFaltando: string[];
  prazoEstimado: string;
  valor: number;
  urgencia: 'baixa' | 'media' | 'alta';
  ultimaAtualizacao: Date;
  dataInicio: Date;
}

interface EtapaData {
  id: string;
  nome: string;
  concluida: boolean;
  ativa: boolean;
  descricao: string;
  dataPrevisao?: Date;
  dataConclusao?: Date;
}

interface ClientData {
  id: string;
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  foto: string;
  processos: ProcessData[];
}

const AreaCliente: React.FC = () => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(0);
  const [userMenuAnchor, setUserMenuAnchor] = useState<null | HTMLElement>(null);
  const [profileDialogOpen, setProfileDialogOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const [selectedProcess, setSelectedProcess] = useState<string | null>(null);

  const [clientData, setClientData] = useState<ClientData>({
    id: '1',
    nome: 'João Silva',
    cpf: '123.456.789-00',
    email: 'joao.silva@email.com',
    telefone: '(11) 99999-9999',
    foto: '',
    processos: [
      {
        id: 'proc1',
        tipo: 'Transferência de Veículo',
        status: 'Em Análise',
        progresso: 65,
        urgencia: 'alta',
        valor: 450.00,
        prazoEstimado: '5 dias úteis',
        ultimaAtualizacao: new Date(),
        dataInicio: new Date(Date.now() - 604800000),
        documentosFaltando: ['RG atualizado', 'Comprovante de residência'],
        etapas: [
          { id: '1', nome: 'Recebimento', concluida: true, ativa: false, descricao: 'Documentos recebidos' },
          { id: '2', nome: 'Análise', concluida: false, ativa: true, descricao: 'Verificação de documentos' },
          { id: '3', nome: 'Detran', concluida: false, ativa: false, descricao: 'Processamento no Detran' },
          { id: '4', nome: 'Finalização', concluida: false, ativa: false, descricao: 'Entrega final' },
        ],
      },
      {
        id: 'proc2',
        tipo: 'Renovação CNH',
        status: 'Aguardando Documentos',
        progresso: 25,
        urgencia: 'media',
        valor: 280.00,
        prazoEstimado: '10 dias úteis',
        ultimaAtualizacao: new Date(Date.now() - 86400000),
        dataInicio: new Date(Date.now() - 259200000),
        documentosFaltando: ['Foto 3x4 recente', 'Exame médico'],
        etapas: [
          { id: '1', nome: 'Solicitação', concluida: true, ativa: false, descricao: 'Pedido registrado' },
          { id: '2', nome: 'Documentação', concluida: false, ativa: true, descricao: 'Aguardando documentos' },
          { id: '3', nome: 'Exames', concluida: false, ativa: false, descricao: 'Exames médicos' },
          { id: '4', nome: 'Emissão', concluida: false, ativa: false, descricao: 'Nova CNH' },
        ],
      },
      {
        id: 'proc3',
        tipo: 'Licenciamento',
        status: 'Concluído',
        progresso: 100,
        urgencia: 'baixa',
        valor: 150.00,
        prazoEstimado: '0 dias',
        ultimaAtualizacao: new Date(Date.now() - 172800000),
        dataInicio: new Date(Date.now() - 1209600000),
        documentosFaltando: [],
        etapas: [
          { id: '1', nome: 'Solicitação', concluida: true, ativa: false, descricao: 'Pedido registrado' },
          { id: '2', nome: 'Análise', concluida: true, ativa: false, descricao: 'Documentos aprovados' },
          { id: '3', nome: 'Pagamento', concluida: true, ativa: false, descricao: 'Taxa paga' },
          { id: '4', nome: 'Emissão', concluida: true, ativa: false, descricao: 'Licenciamento emitido' },
        ],
      },
    ],
  });

  const [newProfile, setNewProfile] = useState({
    nome: clientData.nome,
    foto: clientData.foto,
  });

  const [newRequest, setNewRequest] = useState({
    tipo: '',
    descricao: '',
    urgencia: 'media',
  });

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleUserMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setUserMenuAnchor(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setUserMenuAnchor(null);
  };

  const handleProfileSave = () => {
    setClientData({
      ...clientData,
      nome: newProfile.nome,
      foto: newProfile.foto,
    });
    setProfileDialogOpen(false);
  };

  const handleNewRequest = () => {
    // Redirecionar para formulário interno da área do cliente
    setActiveTab(1); // Vai para a aba "Novo Requerimento"
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Concluído': return '#4CAF50';
      case 'Pronto': return '#2196F3';
      case 'Em Análise': return '#FF9800';
      case 'Aguardando Documentos': return '#F44336';
      case 'Aguardando Detran': return '#9C27B0';
      default: return '#757575';
    }
  };

  const getUrgencyIcon = (urgencia: string) => {
    switch (urgencia) {
      case 'alta': return <Warning style={{ color: '#F44336' }} />;
      case 'media': return <Schedule style={{ color: '#FF9800' }} />;
      default: return <CheckCircle style={{ color: '#4CAF50' }} />;
    }
  };

  const getStatusStats = () => {
    const stats = {
      total: clientData.processos.length,
      pendentes: clientData.processos.filter(p => p.status === 'Pendente' || p.status === 'Aguardando Documentos').length,
      emAndamento: clientData.processos.filter(p => p.status === 'Em Análise' || p.status === 'Aguardando Detran').length,
      concluidos: clientData.processos.filter(p => p.status === 'Concluído' || p.status === 'Pronto').length,
    };
    return stats;
  };

  const stats = getStatusStats();

  return (
    <Box className={classes.root}>
      {/* Header */}
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.logo}>
            Beto Dheon - Área do Cliente
          </Typography>

          <Box className={classes.tabsContainer}>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              className={classes.tabs}
              centered
            >
              <Tab
                label="Dashboard"
                icon={<Dashboard />}
                iconPosition="start"
              />
              <Tab
                label="Novo Requerimento"
                icon={<Assignment />}
                iconPosition="start"
              />
              <Tab
                label="Acompanhamento"
                icon={<Assessment />}
                iconPosition="start"
              />
            </Tabs>
          </Box>

          <Box className={classes.userMenu}>
            <Badge badgeContent={stats.pendentes} color="error">
              <Notifications style={{ color: '#fff', cursor: 'pointer' }} />
            </Badge>

            <Avatar
              className={classes.avatar}
              src={clientData.foto}
              onClick={handleUserMenuOpen}
            >
              {clientData.nome.charAt(0)}
            </Avatar>

            <Menu
              anchorEl={userMenuAnchor}
              open={Boolean(userMenuAnchor)}
              onClose={handleUserMenuClose}
            >
              <MenuItem onClick={() => { setProfileDialogOpen(true); handleUserMenuClose(); }}>
                <Person style={{ marginRight: 8 }} />
                Perfil
              </MenuItem>
              <MenuItem onClick={() => { setChatOpen(true); handleUserMenuClose(); }}>
                <Chat style={{ marginRight: 8 }} />
                Chat
              </MenuItem>
              <MenuItem onClick={handleUserMenuClose}>
                <Settings style={{ marginRight: 8 }} />
                Configurações
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleUserMenuClose}>
                <ExitToApp style={{ marginRight: 8 }} />
                Sair
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      <Container className={classes.container}>
        {/* Dashboard Tab */}
        <TabPanel value={activeTab} index={0}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Welcome Card */}
            <Paper className={classes.dashboardCard}>
              <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={2}>
                <Box display="flex" alignItems="center" style={{ gap: 16 }}>
                  <Avatar className={classes.profileAvatar} src={clientData.foto}>
                    {clientData.nome.charAt(0)}
                  </Avatar>
                  <Box>
                    <Typography variant="h4" style={{ fontWeight: 'bold' }}>
                      Bem-vindo, {clientData.nome}!
                    </Typography>
                    <Box display="flex" alignItems="center" style={{ gap: 8, marginTop: 8 }}>
                      <Chip
                        label="Cliente VIP"
                        className={classes.vipBadge}
                        icon={<Star />}
                      />
                      <Chip
                        label={`${stats.total} Processos`}
                        color="primary"
                        variant="outlined"
                      />
                    </Box>
                  </Box>
                </Box>

                <Box textAlign="center">
                  <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                    Status da Conta
                  </Typography>
                  <Chip
                    label="Ativa"
                    style={{ backgroundColor: '#4CAF50', color: '#fff' }}
                  />
                </Box>
              </Box>
            </Paper>

            {/* Stats Cards */}
            <Grid container spacing={3} style={{ marginBottom: 24 }}>
              <Grid item xs={12} sm={6} md={3}>
                <Card className={classes.statCard}>
                  <Dashboard className={classes.statIcon} />
                  <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                    Total de Processos
                  </Typography>
                  <Typography variant="h6" style={{ color: '#1a365d', fontWeight: 'bold' }}>
                    {stats.total}
                  </Typography>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Card className={classes.statCard}>
                  <Warning className={classes.statIcon} style={{ color: '#F44336' }} />
                  <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                    Pendentes
                  </Typography>
                  <Typography variant="h6" style={{ color: '#1a365d', fontWeight: 'bold' }}>
                    {stats.pendentes}
                  </Typography>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Card className={classes.statCard}>
                  <Schedule className={classes.statIcon} style={{ color: '#FF9800' }} />
                  <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                    Em Andamento
                  </Typography>
                  <Typography variant="h6" style={{ color: '#1a365d', fontWeight: 'bold' }}>
                    {stats.emAndamento}
                  </Typography>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Card className={classes.statCard}>
                  <CheckCircle className={classes.statIcon} style={{ color: '#4CAF50' }} />
                  <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                    Concluídos
                  </Typography>
                  <Typography variant="h6" style={{ color: '#1a365d', fontWeight: 'bold' }}>
                    {stats.concluidos}
                  </Typography>
                </Card>
              </Grid>
            </Grid>

            {/* Recent Processes */}
            <Paper className={classes.dashboardCard}>
              <Typography variant="h6" gutterBottom style={{ fontWeight: 'bold' }}>
                <Assessment style={{ marginRight: 8, verticalAlign: 'middle' }} />
                Processos Recentes
              </Typography>

              <Grid container spacing={2}>
                {clientData.processos.slice(0, 2).map((processo) => (
                  <Grid item xs={12} md={6} key={processo.id}>
                    <Card className={classes.processCard}>
                      <CardContent>
                        <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={1}>
                          <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                            {processo.tipo}
                          </Typography>
                          {getUrgencyIcon(processo.urgencia)}
                        </Box>

                        <Chip
                          label={processo.status}
                          style={{
                            backgroundColor: getStatusColor(processo.status),
                            color: '#fff',
                            fontWeight: 'bold',
                            marginBottom: 16,
                          }}
                        />

                        <Box marginBottom={2}>
                          <Box display="flex" justifyContent="space-between" marginBottom={1}>
                            <Typography variant="body2">Progresso</Typography>
                            <Typography variant="body2" style={{ fontWeight: 'bold' }}>
                              {processo.progresso}%
                            </Typography>
                          </Box>
                          <LinearProgress
                            variant="determinate"
                            value={processo.progresso}
                            className={classes.progressBar}
                          />
                        </Box>

                        <Grid container spacing={2}>
                          <Grid item xs={6}>
                            <Typography variant="caption" color="textSecondary">
                              Valor
                            </Typography>
                            <Typography variant="h6" style={{ fontWeight: 'bold', color: '#4CAF50' }}>
                              R$ {processo.valor.toFixed(2)}
                            </Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography variant="caption" color="textSecondary">
                              Prazo
                            </Typography>
                            <Typography variant="body2" style={{ fontWeight: 'bold' }}>
                              {processo.prazoEstimado}
                            </Typography>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </motion.div>
        </TabPanel>

        {/* New Request Tab */}
        <TabPanel value={activeTab} index={1}>
          <Paper className={classes.formContainer}>
            <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold' }}>
              <Assignment style={{ marginRight: 8, verticalAlign: 'middle' }} />
              Novo Requerimento
            </Typography>

            <Typography variant="body1" color="textSecondary" style={{ marginBottom: 32 }}>
              Selecione o tipo de serviço que você precisa
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
                <Card 
                  className={classes.processCard} 
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    setNewRequest({ ...newRequest, tipo: 'Transferência de Veículo' });
                    // Aqui poderia abrir um modal ou navegar para formulário específico
                    alert('Solicitação de Transferência de Veículo iniciada! Nossa equipe entrará em contato.');
                  }}
                >
                  <CardContent style={{ textAlign: 'center' }}>
                    <TrendingUp style={{ fontSize: 48, color: '#2d5a3d', marginBottom: 16 }} />
                    <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                      Transferência de Veículo
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Transferir propriedade de veículo
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card 
                  className={classes.processCard} 
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    setNewRequest({ ...newRequest, tipo: 'Renovação CNH' });
                    alert('Solicitação de Renovação CNH iniciada! Nossa equipe entrará em contato.');
                  }}
                >
                  <CardContent style={{ textAlign: 'center' }}>
                    <VerifiedUser style={{ fontSize: 48, color: '#2d5a3d', marginBottom: 16 }} />
                    <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                      Renovação CNH
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Renovar carteira de habilitação
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card 
                  className={classes.processCard} 
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    setNewRequest({ ...newRequest, tipo: 'Licenciamento' });
                    alert('Solicitação de Licenciamento iniciada! Nossa equipe entrará em contato.');
                  }}
                >
                  <CardContent style={{ textAlign: 'center' }}>
                    <Description style={{ fontSize: 48, color: '#2d5a3d', marginBottom: 16 }} />
                    <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                      Licenciamento
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Licenciar veículo anualmente
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card 
                  className={classes.processCard} 
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    setNewRequest({ ...newRequest, tipo: 'Anuência' });
                    alert('Solicitação de Anuência iniciada! Nossa equipe entrará em contato.');
                  }}
                >
                  <CardContent style={{ textAlign: 'center' }}>
                    <Security style={{ fontSize: 48, color: '#2d5a3d', marginBottom: 16 }} />
                    <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                      Anuência
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Solicitar anuência de órgãos
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card 
                  className={classes.processCard} 
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    setNewRequest({ ...newRequest, tipo: 'ATPV' });
                    alert('Solicitação de ATPV iniciada! Nossa equipe entrará em contato.');
                  }}
                >
                  <CardContent style={{ textAlign: 'center' }}>
                    <Business style={{ fontSize: 48, color: '#2d5a3d', marginBottom: 16 }} />
                    <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                      ATPV
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Autorização de Transporte
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card 
                  className={classes.processCard} 
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    setChatOpen(true); // Abre o chat para consultar outros serviços
                  }}
                >
                  <CardContent style={{ textAlign: 'center' }}>
                    <Assignment style={{ fontSize: 48, color: '#2d5a3d', marginBottom: 16 }} />
                    <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                      Outros Serviços
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Consulte outros serviços disponíveis
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </TabPanel>

        {/* Process Tracking Tab */}
        <TabPanel value={activeTab} index={2}>
          <Paper className={classes.dashboardCard}>
            <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold' }}>
              <Assessment style={{ marginRight: 8, verticalAlign: 'middle' }} />
              Acompanhamento de Processos
            </Typography>

            {clientData.processos.map((processo) => (
              <Card key={processo.id} className={classes.processCard}>
                <CardContent>
                  <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={2}>
                    <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                      {processo.tipo}
                    </Typography>
                    <Box display="flex" alignItems="center" style={{ gap: 8 }}>
                      {getUrgencyIcon(processo.urgencia)}
                      <Chip
                        label={processo.status}
                        style={{
                          backgroundColor: getStatusColor(processo.status),
                          color: '#fff',
                          fontWeight: 'bold',
                        }}
                      />
                    </Box>
                  </Box>

                  <Grid container spacing={3}>
                    <Grid item xs={12} md={8}>
                      <Typography variant="subtitle2" style={{ fontWeight: 'bold', marginBottom: 16 }}>
                        Etapas do Processo
                      </Typography>

                      <Stepper orientation="vertical">
                        {processo.etapas.map((etapa, index) => (
                          <Step key={etapa.id} active={etapa.ativa} completed={etapa.concluida}>
                            <StepLabel>
                              <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                                {etapa.nome}
                              </Typography>
                            </StepLabel>
                            <StepContent>
                              <Typography variant="body2" color="textSecondary">
                                {etapa.descricao}
                              </Typography>
                            </StepContent>
                          </Step>
                        ))}
                      </Stepper>
                    </Grid>

                    <Grid item xs={12} md={4}>
                      <Box marginBottom={2}>
                        <Typography variant="caption" color="textSecondary">
                          Progresso Geral
                        </Typography>
                        <Box display="flex" justifyContent="space-between" marginBottom={1}>
                          <Typography variant="body2" style={{ fontWeight: 'bold' }}>
                            {processo.progresso}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={processo.progresso}
                          className={classes.progressBar}
                        />
                      </Box>

                      <Box marginBottom={2}>
                        <Typography variant="caption" color="textSecondary">
                          Valor do Serviço
                        </Typography>
                        <Typography variant="h6" style={{ fontWeight: 'bold', color: '#4CAF50' }}>
                          R$ {processo.valor.toFixed(2)}
                        </Typography>
                      </Box>

                      <Box marginBottom={2}>
                        <Typography variant="caption" color="textSecondary">
                          Prazo Estimado
                        </Typography>
                        <Typography variant="body2" style={{ fontWeight: 'bold' }}>
                          {processo.prazoEstimado}
                        </Typography>
                      </Box>

                      <Box marginBottom={2}>
                        <Typography variant="caption" color="textSecondary">
                          Última Atualização
                        </Typography>
                        <Typography variant="body2">
                          {processo.ultimaAtualizacao.toLocaleDateString()}
                        </Typography>
                      </Box>

                      {processo.documentosFaltando.length > 0 && (
                        <Box marginTop={2}>
                          <Alert severity="warning">
                            <AlertTitle>Documentos Pendentes</AlertTitle>
                            <List dense>
                              {processo.documentosFaltando.map((doc, idx) => (
                                <ListItem key={idx} style={{ padding: '2px 0' }}>
                                  <ListItemIcon style={{ minWidth: 24 }}>
                                    <AttachFile style={{ fontSize: 16 }} />
                                  </ListItemIcon>
                                  <ListItemText primary={doc} />
                                </ListItem>
                              ))}
                            </List>
                          </Alert>

                          <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            startIcon={<CloudUpload />}
                            onClick={() => {
                              setSelectedProcess(processo.id);
                              setUploadDialogOpen(true);
                            }}
                            style={{
                              marginTop: 8,
                              background: 'linear-gradient(135deg, #2d5a3d 0%, #4a7c59 100%)',
                              fontWeight: 'bold',
                            }}
                          >
                            Enviar Documentos
                          </Button>
                        </Box>
                      )}
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            ))}
          </Paper>
        </TabPanel>
      </Container>

      {/* Profile Dialog */}
      <Dialog
        open={profileDialogOpen}
        onClose={() => setProfileDialogOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          <Person style={{ marginRight: 8, verticalAlign: 'middle' }} />
          Editar Perfil
        </DialogTitle>
        <DialogContent>
          <Box className={classes.profileContainer}>
            <Avatar className={classes.profileAvatar} src={newProfile.foto}>
              {newProfile.nome.charAt(0)}
            </Avatar>

            <Button
              variant="outlined"
              startIcon={<PhotoCamera />}
              onClick={() => {
                // Aqui seria implementado o upload de foto
              }}
            >
              Alterar Foto
            </Button>

            <TextField
              fullWidth
              label="Nome Completo"
              value={newProfile.nome}
              onChange={(e) => setNewProfile({ ...newProfile, nome: e.target.value })}
              variant="outlined"
              style={{ marginTop: 16 }}
            />

            <Box display="flex" style={{ gap: 16, marginTop: 16, width: '100%' }}>
              <TextField
                fullWidth
                label="CPF"
                value={clientData.cpf}
                disabled
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Email"
                value={clientData.email}
                disabled
                variant="outlined"
              />
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setProfileDialogOpen(false)}>
            Cancelar
          </Button>
          <Button variant="contained" color="primary" onClick={handleProfileSave}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>

      {/* Upload Dialog */}
      <Dialog
        open={uploadDialogOpen}
        onClose={() => setUploadDialogOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          <CloudUpload style={{ marginRight: 8, verticalAlign: 'middle' }} />
          Enviar Documentos
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" gutterBottom>
            Envie os documentos necessários para acelerar seu processo
          </Typography>

          <Box className={classes.documentUpload}>
            <CloudUpload style={{ fontSize: 48, color: '#ccc', marginBottom: 16 }} />
            <Typography variant="h6" gutterBottom>
              Arraste os arquivos aqui ou clique para selecionar
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Formatos aceitos: PDF, JPG, PNG (máx. 10MB cada)
            </Typography>

            <Box marginTop={2}>
              <Button variant="outlined" startIcon={<PhotoCamera />} style={{ margin: 8 }}>
                Tirar Foto
              </Button>
              <Button variant="outlined" startIcon={<PhotoLibrary />} style={{ margin: 8 }}>
                Galeria
              </Button>
              <Button variant="outlined" startIcon={<InsertDriveFile />} style={{ margin: 8 }}>
                Arquivos
              </Button>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setUploadDialogOpen(false)}>
            Cancelar
          </Button>
          <Button variant="contained" color="primary">
            Enviar Documentos
          </Button>
        </DialogActions>
      </Dialog>

      {/* Chat FAB */}
      <Tooltip title="Chat com Atendente">
        <Fab
          className={classes.chatFab}
          onClick={() => setChatOpen(true)}
        >
          <Chat />
        </Fab>
      </Tooltip>

      {/* Chat Dialog */}
      <Dialog
        open={chatOpen}
        onClose={() => setChatOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          <Box display="flex" alignItems="center" style={{ gap: 16 }}>
            <Avatar src="/gabi.png" />
            <Box>
              <Typography variant="h6">
                Chat com Ana Silva
              </Typography>
              <Typography variant="caption" style={{ color: '#4CAF50' }}>
                🟢 Online - Responde em menos de 2 minutos
              </Typography>
            </Box>
          </Box>
        </DialogTitle>
        <DialogContent style={{ height: 400 }}>
          <Alert severity="info">
            <AlertTitle>💬 Chat ao Vivo</AlertTitle>
            Sua atendente está pronta para ajudar! Digite sua mensagem abaixo.
          </Alert>
        </DialogContent>
        <DialogActions>
          <TextField
            fullWidth
            placeholder="Digite sua mensagem..."
            variant="outlined"
            size="small"
          />
          <IconButton color="primary">
            <Send />
          </IconButton>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AreaCliente;