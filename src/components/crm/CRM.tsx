
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  CircularProgress,
  Chip,
  Avatar,
  Button,
  IconButton,
  Tooltip,
  Badge,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  Switch,
  FormControlLabel,
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Slider,
  ButtonGroup,
  Box,
} from '@material-ui/core';
import {
  Business,
  TrendingUp,
  TrendingDown,
  People,
  AttachMoney,
  Timeline,
  Star,
  Email,
  Phone,
  VideoCall,
  Assignment,
  Extension,
  Notifications,
  Settings,
  Refresh,
  GetApp,
  Share,
  Fullscreen,
  ExpandMore,
  FilterList,
  PieChart,
  BarChart,
  ShowChart,
  DataUsage,
  Storage,
  Memory,
  Wifi,
  Battery90,
  CloudDone,
  Warning,
  Error,
  CheckCircle,
  Schedule,
  Visibility,
  Speed,
  Security,
  VerifiedUser,
  Code,
  PlayArrow,
  Pause,
  Stop,
  Add,
  Edit,
  Delete,
  Search,
  Close,
} from '@material-ui/icons';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart as RechartsBarChart,
  Bar,
  PieChart as RechartsPieChart,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  Legend,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ComposedChart,
} from 'recharts';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    background: 'linear-gradient(135deg, #1a237e 0%, #3949ab 50%, #5c6bc0 100%)',
    minHeight: '100vh',
    position: 'relative',
    color: '#ffffff',
  },
  quantumBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 20% 50%, rgba(63, 81, 181, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(156, 39, 176, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 40% 80%, rgba(0, 150, 136, 0.3) 0%, transparent 50%)
    `,
    animation: '$quantumFlow 15s ease-in-out infinite',
    zIndex: 0,
  },
  '@keyframes quantumFlow': {
    '0%, 100%': { opacity: 0.3 },
    '50%': { opacity: 0.7 },
  },
  crmContainer: {
    maxWidth: '1600px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1,
  },
  headerSection: {
    marginBottom: theme.spacing(4),
    background: 'rgba(255,255,255,0.1)',
    borderRadius: theme.spacing(3),
    padding: theme.spacing(4),
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255,255,255,0.2)',
    boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
  },
  quantumCard: {
    background: 'linear-gradient(135deg, rgba(63, 81, 181, 0.1) 0%, rgba(156, 39, 176, 0.1) 100%)',
    borderRadius: theme.spacing(3),
    padding: theme.spacing(3),
    backdropFilter: 'blur(15px)',
    border: '1px solid rgba(63, 81, 181, 0.3)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      transform: 'translateY(-8px) scale(1.02)',
      boxShadow: '0 16px 64px rgba(63, 81, 181, 0.4)',
      '&::before': {
        opacity: 1,
      },
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 4,
      background: 'linear-gradient(90deg, #3f51b5, #9c27b0, #009688)',
      opacity: 0,
      transition: 'opacity 0.3s ease',
    },
  },
  aiMetricsCard: {
    background: 'linear-gradient(135deg, rgba(0, 150, 136, 0.1) 0%, rgba(63, 81, 181, 0.1) 100%)',
    borderRadius: theme.spacing(3),
    padding: theme.spacing(3),
    backdropFilter: 'blur(15px)',
    border: '1px solid rgba(0, 150, 136, 0.3)',
    height: '400px',
    position: 'relative',
    overflow: 'hidden',
  },
  chartCard: {
    background: 'rgba(255,255,255,0.05)',
    borderRadius: theme.spacing(3),
    padding: theme.spacing(3),
    height: '450px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
    marginBottom: theme.spacing(3),
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.1)',
  },
  clientCard: {
    background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(63, 81, 181, 0.1) 100%)',
    borderRadius: theme.spacing(3),
    padding: theme.spacing(3),
    backdropFilter: 'blur(15px)',
    border: '1px solid rgba(76, 175, 80, 0.3)',
    height: '400px',
    position: 'relative',
  },
  quantumIndicator: {
    position: 'absolute',
    top: 16,
    right: 16,
    background: 'linear-gradient(45deg, #3f51b5, #9c27b0)',
    borderRadius: '50%',
    width: 16,
    height: 16,
    animation: '$quantumPulse 2s infinite',
  },
  '@keyframes quantumPulse': {
    '0%, 100%': { 
      opacity: 1, 
      transform: 'scale(1)',
      boxShadow: '0 0 10px #3f51b5',
    },
    '50%': { 
      opacity: 0.5, 
      transform: 'scale(1.5)',
      boxShadow: '0 0 20px #9c27b0',
    },
  },
  aiValue: {
    fontSize: '3rem',
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #009688, #3f51b5)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0 2px 4px rgba(0,0,0,0.3)',
  },
  aiLabel: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: '1rem',
    marginTop: theme.spacing(1),
  },
  geminiIntegration: {
    background: 'linear-gradient(135deg, #4285F4 0%, #34A853 50%, #FBBC05 100%)',
    borderRadius: theme.spacing(2),
    padding: theme.spacing(3),
    color: '#fff',
    marginBottom: theme.spacing(3),
    position: 'relative',
    overflow: 'hidden',
  },
  quantumProcessor: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  qbit: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    background: 'linear-gradient(45deg, #3f51b5, #9c27b0)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    animation: '$qbitRotate 3s infinite linear',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    color: '#fff',
  },
  '@keyframes qbitRotate': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
  clientRow: {
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover': {
      background: 'rgba(255,255,255,0.1)',
      transform: 'scale(1.02)',
    },
  },
  realTimeIndicator: {
    position: 'absolute',
    top: 16,
    right: 16,
    background: '#4CAF50',
    borderRadius: '50%',
    width: 12,
    height: 12,
    animation: '$pulse 2s infinite',
  },
  '@keyframes pulse': {
    '0%': { opacity: 1, transform: 'scale(1)' },
    '50%': { opacity: 0.7, transform: 'scale(1.2)' },
    '100%': { opacity: 1, transform: 'scale(1)' },
  },
  interactionPanel: {
    background: 'rgba(255,255,255,0.05)',
    borderRadius: theme.spacing(2),
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  predictionCard: {
    background: 'linear-gradient(135deg, #FF9800 0%, #F57C00 100%)',
    color: '#fff',
    borderRadius: theme.spacing(2),
    padding: theme.spacing(2),
    margin: theme.spacing(1, 0),
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: '-100%',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
      animation: '$shimmer 2s infinite',
    },
  },
  '@keyframes shimmer': {
    '0%': { left: '-100%' },
    '100%': { left: '100%' },
  },
}));

interface Client {
  id: string;
  nome: string;
  empresa: string;
  avatar: string;
  status: 'ativo' | 'inativo' | 'prospecto';
  valor: number;
  ultimaInteracao: Date;
  score: number;
  potencial: 'alto' | 'medio' | 'baixo';
  segmento: string;
}

interface CRMMetrics {
  totalClientes: number;
  clientesAtivos: number;
  receitaTotal: number;
  conversaoIA: number;
  satisfacaoMedia: number;
  ticketMedio: number;
}

interface GeminiAnalysis {
  sentiment: number;
  nextBestAction: string;
  churnRisk: number;
  upsellProbability: number;
}

const CRM: React.FC = () => {
  const classes = useStyles();
  const [metrics, setMetrics] = useState<CRMMetrics>({
    totalClientes: 1247,
    clientesAtivos: 892,
    receitaTotal: 2847650,
    conversaoIA: 94.7,
    satisfacaoMedia: 4.8,
    ticketMedio: 3195,
  });

  const [clients, setClients] = useState<Client[]>([]);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [geminiAnalysis, setGeminiAnalysis] = useState<GeminiAnalysis | null>(null);
  const [quantumStates, setQuantumStates] = useState([
    { state: '|0⟩', probability: 0.7 },
    { state: '|1⟩', probability: 0.3 },
    { state: '|+⟩', probability: 0.8 },
    { state: '|-⟩', probability: 0.2 },
  ]);

  const [predictions, setPredictions] = useState([
    {
      type: 'revenue',
      title: 'Previsão de Receita Q4',
      message: 'IA projeta crescimento de 23% baseado em padrões de comportamento.',
      confidence: 91.3,
      priority: 'high',
    },
    {
      type: 'churn',
      title: 'Risco de Cancelamento',
      message: '3 clientes identificados com alta probabilidade de churn.',
      confidence: 87.6,
      priority: 'critical',
    },
    {
      type: 'opportunity',
      title: 'Oportunidade de Upsell',
      message: '12 clientes prontos para upgrade de plano premium.',
      confidence: 94.1,
      priority: 'medium',
    },
  ]);

  const chartData = useMemo(() => [
    { month: 'Jan', clientes: 420, receita: 180000, satisfacao: 4.2 },
    { month: 'Fev', clientes: 485, receita: 210000, satisfacao: 4.3 },
    { month: 'Mar', clientes: 567, receita: 245000, satisfacao: 4.5 },
    { month: 'Abr', clientes: 634, receita: 285000, satisfacao: 4.6 },
    { month: 'Mai', clientes: 721, receita: 320000, satisfacao: 4.7 },
    { month: 'Jun', clientes: 892, receita: 385000, satisfacao: 4.8 },
  ], []);

  const segmentData = [
    { name: 'Enterprise', value: 35, color: '#3f51b5' },
    { name: 'SMB', value: 45, color: '#009688' },
    { name: 'Startup', value: 20, color: '#9c27b0' },
  ];

  // Inicializar dados dos clientes
  useEffect(() => {
    const mockClients: Client[] = [
      {
        id: '1',
        nome: 'João Silva',
        empresa: 'TechCorp',
        avatar: '/gui.png',
        status: 'ativo',
        valor: 25000,
        ultimaInteracao: new Date(Date.now() - 86400000),
        score: 95,
        potencial: 'alto',
        segmento: 'Enterprise',
      },
      {
        id: '2',
        nome: 'Maria Santos',
        empresa: 'InnovateInc',
        avatar: '/gabi.png',
        status: 'ativo',
        valor: 18500,
        ultimaInteracao: new Date(Date.now() - 172800000),
        score: 87,
        potencial: 'alto',
        segmento: 'SMB',
      },
      {
        id: '3',
        nome: 'Pedro Costa',
        empresa: 'StartupX',
        avatar: '/gui.png',
        status: 'prospecto',
        valor: 0,
        ultimaInteracao: new Date(Date.now() - 259200000),
        score: 73,
        potencial: 'medio',
        segmento: 'Startup',
      },
    ];
    setClients(mockClients);
  }, []);

  // Simulação de análise IA em tempo real
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        conversaoIA: Math.min(99.9, prev.conversaoIA + (Math.random() - 0.5) * 0.1),
        satisfacaoMedia: Math.min(5, prev.satisfacaoMedia + (Math.random() - 0.5) * 0.01),
      }));

      setQuantumStates(prev => prev.map(state => ({
        ...state,
        probability: Math.max(0.1, Math.min(0.9, state.probability + (Math.random() - 0.5) * 0.1))
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const analyzeClientWithGemini = useCallback(async (client: Client) => {
    try {
      const response = await fetch('/api/ia', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `Analise o cliente ${client.nome} da empresa ${client.empresa} com score ${client.score}. 
                  Última interação: ${client.ultimaInteracao.toLocaleDateString()}.
                  Valor atual: R$ ${client.valor.toLocaleString()}.
                  Forneça análise de sentimento, próxima melhor ação, risco de churn e probabilidade de upsell.`,
          model: 'gemini-pro',
          temperature: 0.3,
          maxTokens: 500
        }),
      });

      const data = await response.json();
      
      // Simular análise estruturada
      const analysis: GeminiAnalysis = {
        sentiment: 0.7 + Math.random() * 0.3,
        nextBestAction: `Agendar reunião para discussão de upgrade baseado em ${data.response || 'análise de comportamento'}`,
        churnRisk: Math.random() * 0.3,
        upsellProbability: 0.6 + Math.random() * 0.4,
      };

      setGeminiAnalysis(analysis);
    } catch (error) {
      console.error('Erro na análise Gemini:', error);
    }
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ativo': return '#4CAF50';
      case 'inativo': return '#F44336';
      case 'prospecto': return '#FF9800';
      default: return '#757575';
    }
  };

  const getPotentialColor = (potencial: string) => {
    switch (potencial) {
      case 'alto': return '#4CAF50';
      case 'medio': return '#FF9800';
      case 'baixo': return '#F44336';
      default: return '#757575';
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.quantumBackground} />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={classes.crmContainer}
      >
        {/* Header Section */}
        <div className={classes.headerSection}>
          <div className={classes.realTimeIndicator} />
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h3" style={{ color: '#fff', fontWeight: 'bold', marginBottom: 8 }}>
                <Business style={{ marginRight: 16, fontSize: 'inherit', color: '#3f51b5' }} />
                CRM Neural Inteligente
              </Typography>
              <Typography variant="h6" style={{ color: 'rgba(255,255,255,0.8)' }}>
                Gestão Avançada de Clientes • Powered by Gemini AI • Computação Quântica
              </Typography>
              <div style={{ marginTop: 16, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Chip 
                  icon={<Extension />} 
                  label="Gemini Pro Ativo" 
                  style={{ backgroundColor: '#4285F4', color: '#fff' }}
                />
                <Chip 
                  icon={<TrendingUp />} 
                  label="Análise Preditiva" 
                  style={{ backgroundColor: '#3f51b5', color: '#fff' }}
                />
                <Chip 
                  icon={<Speed />} 
                  label="Quantum Processing" 
                  style={{ backgroundColor: '#9c27b0', color: '#fff' }}
                />
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.geminiIntegration}>
                <Typography variant="h6" gutterBottom>
                  🤖 Gemini AI Status
                </Typography>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <Typography variant="body2">Precisão: {metrics.conversaoIA.toFixed(1)}%</Typography>
                    <Typography variant="body2">Clientes Analisados: {metrics.totalClientes}</Typography>
                  </div>
                  <div>
                    <CircularProgress 
                      variant="determinate" 
                      value={metrics.conversaoIA} 
                      size={50}
                      style={{ color: '#00FA9A' }}
                    />
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>

        {/* Métricas Principais */}
        <Grid container spacing={3} style={{ marginBottom: 32 }}>
          <Grid item xs={12} sm={6} md={3}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className={classes.quantumCard}>
                <div className={classes.quantumIndicator} />
                <CardContent>
                  <Typography className={classes.aiValue}>
                    {metrics.totalClientes.toLocaleString()}
                  </Typography>
                  <Typography className={classes.aiLabel}>
                    Total de Clientes
                  </Typography>
                  <LinearProgress 
                    variant="determinate" 
                    value={(metrics.clientesAtivos / metrics.totalClientes) * 100} 
                    style={{ marginTop: 8, backgroundColor: 'rgba(255,255,255,0.2)' }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className={classes.quantumCard}>
                <div className={classes.quantumIndicator} />
                <CardContent>
                  <Typography className={classes.aiValue}>
                    R$ {(metrics.receitaTotal / 1000000).toFixed(1)}M
                  </Typography>
                  <Typography className={classes.aiLabel}>
                    Receita Total
                  </Typography>
                  <div style={{ display: 'flex', alignItems: 'center', marginTop: 8 }}>
                    <TrendingUp style={{ color: '#4CAF50', marginRight: 4 }} />
                    <Typography variant="caption" style={{ color: '#4CAF50' }}>
                      +18.4% vs mês anterior
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className={classes.quantumCard}>
                <div className={classes.quantumIndicator} />
                <CardContent>
                  <Typography className={classes.aiValue}>
                    {metrics.satisfacaoMedia.toFixed(1)}
                  </Typography>
                  <Typography className={classes.aiLabel}>
                    Satisfação (NPS)
                  </Typography>
                  <div className={classes.quantumProcessor}>
                    {quantumStates.map((state, index) => (
                      <div key={index} className={classes.qbit}>
                        {state.state}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className={classes.quantumCard}>
                <div className={classes.quantumIndicator} />
                <CardContent>
                  <Typography className={classes.aiValue}>
                    R$ {(metrics.ticketMedio / 1000).toFixed(1)}K
                  </Typography>
                  <Typography className={classes.aiLabel}>
                    Ticket Médio
                  </Typography>
                  <div style={{ display: 'flex', alignItems: 'center', marginTop: 8 }}>
                    <Star style={{ color: '#FFD700', marginRight: 4 }} />
                    <Typography variant="caption" style={{ color: '#FFD700' }}>
                      Análise IA ativa
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>

        {/* Conteúdo Principal */}
        <Grid container spacing={3}>
          {/* Gráfico de Performance */}
          <Grid item xs={12} lg={8}>
            <Paper className={classes.chartCard}>
              <Typography variant="h6" gutterBottom style={{ color: '#fff' }}>
                <ShowChart style={{ marginRight: 8, verticalAlign: 'middle', color: '#3f51b5' }} />
                Performance de Vendas e Satisfação
              </Typography>
              <ResponsiveContainer width="100%" height="85%">
                <ComposedChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="month" stroke="#fff" />
                  <YAxis stroke="#fff" />
                  <RechartsTooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(0,0,0,0.8)', 
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '8px'
                    }} 
                  />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="receita"
                    fill="#3f51b5"
                    stroke="#3f51b5"
                    fillOpacity={0.3}
                    name="Receita"
                  />
                  <Bar dataKey="clientes" fill="#009688" name="Novos Clientes" />
                  <Line 
                    type="monotone" 
                    dataKey="satisfacao" 
                    stroke="#9c27b0" 
                    strokeWidth={3}
                    name="Satisfação"
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>

          {/* Previsões IA */}
          <Grid item xs={12} lg={4}>
            <Paper className={classes.aiMetricsCard}>
              <Typography variant="h6" gutterBottom style={{ color: '#fff' }}>
                <TrendingUp style={{ marginRight: 8, verticalAlign: 'middle', color: '#FF9800' }} />
                Previsões IA Gemini
              </Typography>
              <List style={{ maxHeight: '320px', overflow: 'auto' }}>
                {predictions.map((prediction, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <ListItem className={classes.predictionCard} style={{ marginBottom: 16 }}>
                      <ListItemIcon style={{ color: '#fff' }}>
                        {prediction.type === 'revenue' && <AttachMoney />}
                        {prediction.type === 'churn' && <Warning />}
                        {prediction.type === 'opportunity' && <TrendingUp />}
                      </ListItemIcon>
                      <div style={{ flex: 1 }}>
                        <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
                          {prediction.title}
                        </Typography>
                        <Typography variant="body2" style={{ marginBottom: 8 }}>
                          {prediction.message}
                        </Typography>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <Typography variant="caption">
                            Confiança: {prediction.confidence}%
                          </Typography>
                          <LinearProgress
                            variant="determinate"
                            value={prediction.confidence}
                            style={{ 
                              flex: 1, 
                              backgroundColor: 'rgba(255,255,255,0.3)',
                              borderRadius: 4,
                            }}
                          />
                          <Chip 
                            label={prediction.priority} 
                            size="small"
                            style={{
                              backgroundColor: prediction.priority === 'critical' ? '#F44336' : 
                                             prediction.priority === 'high' ? '#FF9800' : '#4CAF50',
                              color: '#fff',
                              fontSize: '0.7rem'
                            }}
                          />
                        </div>
                      </div>
                    </ListItem>
                  </motion.div>
                ))}
              </List>
            </Paper>
          </Grid>

          {/* Lista de Clientes */}
          <Grid item xs={12} md={7}>
            <Paper className={classes.clientCard}>
              <Typography variant="h6" gutterBottom style={{ color: '#fff' }}>
                <People style={{ marginRight: 8, verticalAlign: 'middle', color: '#4CAF50' }} />
                Clientes Ativos
              </Typography>
              <TableContainer style={{ maxHeight: '300px' }}>
                <Table stickyHeader>
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ color: '#fff', backgroundColor: 'rgba(0,0,0,0.3)' }}>Cliente</TableCell>
                      <TableCell style={{ color: '#fff', backgroundColor: 'rgba(0,0,0,0.3)' }}>Empresa</TableCell>
                      <TableCell style={{ color: '#fff', backgroundColor: 'rgba(0,0,0,0.3)' }}>Score</TableCell>
                      <TableCell style={{ color: '#fff', backgroundColor: 'rgba(0,0,0,0.3)' }}>Valor</TableCell>
                      <TableCell style={{ color: '#fff', backgroundColor: 'rgba(0,0,0,0.3)' }}>Ações</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {clients.map((client) => (
                      <TableRow 
                        key={client.id} 
                        className={classes.clientRow}
                        onClick={() => {
                          setSelectedClient(client);
                          analyzeClientWithGemini(client);
                        }}
                      >
                        <TableCell>
                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar src={client.avatar} style={{ marginRight: 8 }}>
                              {client.nome[0]}
                            </Avatar>
                            <div>
                              <Typography variant="body2" style={{ color: '#fff' }}>
                                {client.nome}
                              </Typography>
                              <Chip
                                label={client.status}
                                size="small"
                                style={{
                                  backgroundColor: getStatusColor(client.status),
                                  color: '#fff',
                                  fontSize: '0.7rem'
                                }}
                              />
                            </div>
                          </div>
                        </TableCell>
                        <TableCell style={{ color: '#fff' }}>{client.empresa}</TableCell>
                        <TableCell>
                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant="body2" style={{ color: '#fff', marginRight: 8 }}>
                              {client.score}
                            </Typography>
                            <LinearProgress
                              variant="determinate"
                              value={client.score}
                              style={{ width: 50, height: 4 }}
                            />
                          </div>
                        </TableCell>
                        <TableCell style={{ color: '#fff' }}>
                          R$ {client.valor.toLocaleString()}
                        </TableCell>
                        <TableCell>
                          <div style={{ display: 'flex', gap: 4 }}>
                            <IconButton size="small" style={{ color: '#4CAF50' }}>
                              <Email />
                            </IconButton>
                            <IconButton size="small" style={{ color: '#2196F3' }}>
                              <Phone />
                            </IconButton>
                            <IconButton size="small" style={{ color: '#FF9800' }}>
                              <VideoCall />
                            </IconButton>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>

          {/* Análise do Cliente Selecionado */}
          <Grid item xs={12} md={5}>
            <Paper className={classes.chartCard}>
              <Typography variant="h6" gutterBottom style={{ color: '#fff' }}>
                <Extension style={{ marginRight: 8, verticalAlign: 'middle', color: '#9c27b0' }} />
                Análise Gemini IA
              </Typography>
              {selectedClient ? (
                <div>
                  <div style={{ textAlign: 'center', marginBottom: 16 }}>
                    <Avatar 
                      src={selectedClient.avatar} 
                      style={{ width: 80, height: 80, margin: '0 auto 16px' }}
                    >
                      {selectedClient.nome[0]}
                    </Avatar>
                    <Typography variant="h6" style={{ color: '#fff' }}>
                      {selectedClient.nome}
                    </Typography>
                    <Typography variant="body2" style={{ color: 'rgba(255,255,255,0.7)' }}>
                      {selectedClient.empresa}
                    </Typography>
                  </div>

                  {geminiAnalysis ? (
                    <div className={classes.interactionPanel}>
                      <Typography variant="subtitle2" gutterBottom style={{ color: '#fff' }}>
                        📊 Análise de Sentimento
                      </Typography>
                      <LinearProgress
                        variant="determinate"
                        value={geminiAnalysis.sentiment * 100}
                        style={{ marginBottom: 16 }}
                      />

                      <Typography variant="subtitle2" gutterBottom style={{ color: '#fff' }}>
                        🎯 Próxima Ação Recomendada
                      </Typography>
                      <Typography variant="body2" style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 16 }}>
                        {geminiAnalysis.nextBestAction}
                      </Typography>

                      <Typography variant="subtitle2" gutterBottom style={{ color: '#fff' }}>
                        ⚠️ Risco de Churn: {(geminiAnalysis.churnRisk * 100).toFixed(1)}%
                      </Typography>
                      <LinearProgress
                        variant="determinate"
                        value={geminiAnalysis.churnRisk * 100}
                        style={{ marginBottom: 16 }}
                      />

                      <Typography variant="subtitle2" gutterBottom style={{ color: '#fff' }}>
                        💰 Probabilidade Upsell: {(geminiAnalysis.upsellProbability * 100).toFixed(1)}%
                      </Typography>
                      <LinearProgress
                        variant="determinate"
                        value={geminiAnalysis.upsellProbability * 100}
                        style={{ marginBottom: 16 }}
                      />

                      <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
                        <Button 
                          variant="contained" 
                          color="primary" 
                          size="small"
                          startIcon={<Email />}
                        >
                          Enviar Email
                        </Button>
                        <Button 
                          variant="outlined" 
                          style={{ color: '#fff', borderColor: '#fff' }}
                          size="small"
                          startIcon={<Phone />}
                        >
                          Ligar
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div style={{ textAlign: 'center', padding: 32 }}>
                      <CircularProgress style={{ color: '#9c27b0' }} />
                      <Typography variant="body2" style={{ color: 'rgba(255,255,255,0.7)', marginTop: 16 }}>
                        Analisando cliente com Gemini IA...
                      </Typography>
                    </div>
                  )}
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: 32 }}>
                  <People style={{ fontSize: 64, color: 'rgba(255,255,255,0.3)', marginBottom: 16 }} />
                  <Typography variant="body2" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    Selecione um cliente para ver a análise IA
                  </Typography>
                </div>
              )}
            </Paper>
          </Grid>

          {/* Distribuição por Segmento */}
          <Grid item xs={12}>
            <Paper className={classes.chartCard}>
              <Typography variant="h6" gutterBottom style={{ color: '#fff' }}>
                <PieChart style={{ marginRight: 8, verticalAlign: 'middle', color: '#009688' }} />
                Distribuição de Clientes por Segmento
              </Typography>
              <ResponsiveContainer width="100%" height="85%">
                <RechartsPieChart>
                  <RechartsTooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(0,0,0,0.8)', 
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '8px'
                    }} 
                  />
                  <Legend />
                  <RechartsPieChart data={segmentData}>
                    {segmentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </RechartsPieChart>
                </RechartsPieChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
        </Grid>

        {/* Botões Flutuantes */}
        <Fab
          style={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            background: 'linear-gradient(45deg, #3f51b5, #9c27b0)',
          }}
        >
          <Add />
        </Fab>

        <Fab
          style={{
            position: 'fixed',
            bottom: 20,
            right: 90,
            background: 'linear-gradient(45deg, #009688, #4CAF50)',
          }}
        >
          <Refresh />
        </Fab>
      </motion.div>
    </div>
  );
};

export default CRM;
