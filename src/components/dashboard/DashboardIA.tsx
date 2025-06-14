
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
} from '@material-ui/core';
import {
  Dashboard as DashboardIcon,
  TrendingUp,
  TrendingDown,
  Refresh,
  GetApp,
  Share,
  Fullscreen,
  ExpandMore,
  FilterList,
  Timeline,
  PieChart,
  BarChart,
  ShowChart,
  DataUsage,
  Storage,
  Memory,
  Wifi,
  Battery90,
  Notifications,
  Settings,
  Star,
  Visibility,
  Speed,
  CloudDone,
  Warning,
  Error,
  CheckCircle,
  Schedule,
  AttachMoney,
  People,
  Assignment

  
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
  Scatter,
  ScatterChart,
  ReferenceLine,
} from 'recharts';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a40 50%, #2d2d5f 100%)',
    minHeight: '100vh',
    position: 'relative',
    color: '#ffffff',
  },
  neuralBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 40% 80%, rgba(119, 255, 198, 0.3) 0%, transparent 50%)
    `,
    animation: '$neural 20s ease-in-out infinite',
    zIndex: 0,
  },
  '@keyframes neural': {
    '0%, 100%': { opacity: 0.3 },
    '50%': { opacity: 0.6 },
  },
  dashboardContainer: {
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
    background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.1) 0%, rgba(30, 144, 255, 0.1) 100%)',
    borderRadius: theme.spacing(3),
    padding: theme.spacing(3),
    backdropFilter: 'blur(15px)',
    border: '1px solid rgba(138, 43, 226, 0.3)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      transform: 'translateY(-8px) scale(1.02)',
      boxShadow: '0 16px 64px rgba(138, 43, 226, 0.4)',
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
      background: 'linear-gradient(90deg, #8A2BE2, #1E90FF, #00FA9A)',
      opacity: 0,
      transition: 'opacity 0.3s ease',
    },
  },
  aiMetricsCard: {
    background: 'linear-gradient(135deg, rgba(0, 255, 127, 0.1) 0%, rgba(138, 43, 226, 0.1) 100%)',
    borderRadius: theme.spacing(3),
    padding: theme.spacing(3),
    backdropFilter: 'blur(15px)',
    border: '1px solid rgba(0, 255, 127, 0.3)',
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
  neuralProcessingCard: {
    background: 'linear-gradient(135deg, rgba(255, 20, 147, 0.1) 0%, rgba(138, 43, 226, 0.1) 100%)',
    borderRadius: theme.spacing(3),
    padding: theme.spacing(3),
    backdropFilter: 'blur(15px)',
    border: '1px solid rgba(255, 20, 147, 0.3)',
    height: '400px',
    position: 'relative',
  },
  quantumIndicator: {
    position: 'absolute',
    top: 16,
    right: 16,
    background: 'linear-gradient(45deg, #8A2BE2, #1E90FF)',
    borderRadius: '50%',
    width: 16,
    height: 16,
    animation: '$quantum 3s infinite',
  },
  '@keyframes quantum': {
    '0%, 100%': { 
      opacity: 1, 
      transform: 'scale(1)',
      boxShadow: '0 0 10px #8A2BE2',
    },
    '50%': { 
      opacity: 0.5, 
      transform: 'scale(1.5)',
      boxShadow: '0 0 20px #1E90FF',
    },
  },
  aiValue: {
    fontSize: '3rem',
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #00FA9A, #1E90FF)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0 2px 4px rgba(0,0,0,0.3)',
  },
  aiLabel: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: '1rem',
    marginTop: theme.spacing(1),
  },
  neuralNetwork: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.1,
    backgroundImage: `
      linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
      linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)
    `,
    backgroundSize: '20px 20px',
    animation: '$networkPulse 4s ease-in-out infinite',
  },
  '@keyframes networkPulse': {
    '0%, 100%': { opacity: 0.1 },
    '50%': { opacity: 0.3 },
  },
  quantumButton: {
    background: 'linear-gradient(45deg, #8A2BE2, #1E90FF)',
    color: '#fff',
    borderRadius: 25,
    padding: theme.spacing(1.5, 4),
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover': {
      background: 'linear-gradient(45deg, #9932CC, #4169E1)',
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 25px rgba(138, 43, 226, 0.4)',
    },
  },
  aiInsightCard: {
    background: 'linear-gradient(135deg, #FF1493 0%, #8A2BE2 100%)',
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
  modelPerformance: {
    textAlign: 'center',
    padding: theme.spacing(2),
    background: 'rgba(255,255,255,0.05)',
    borderRadius: theme.spacing(2),
    margin: theme.spacing(1),
  },
  quantumMetric: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    background: 'rgba(255,255,255,0.1)',
    borderRadius: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backdropFilter: 'blur(10px)',
  },
  neuralFlowVisualizer: {
    height: '300px',
    background: 'radial-gradient(circle, rgba(138, 43, 226, 0.1) 0%, transparent 70%)',
    borderRadius: theme.spacing(2),
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flowNode: {
    width: 60,
    height: 60,
    borderRadius: '50%',
    background: 'linear-gradient(45deg, #00FA9A, #1E90FF)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(1),
    animation: '$nodeGlow 2s ease-in-out infinite alternate',
    boxShadow: '0 0 20px rgba(0, 250, 154, 0.5)',
  },
  '@keyframes nodeGlow': {
    '0%': { 
      transform: 'scale(1)',
      boxShadow: '0 0 20px rgba(0, 250, 154, 0.5)',
    },
    '100%': { 
      transform: 'scale(1.1)',
      boxShadow: '0 0 30px rgba(30, 144, 255, 0.8)',
    },
  },
  realTimeIndicator: {
    position: 'absolute',
    top: 16,
    right: 16,
    background: '#00FA9A',
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
    background: 'linear-gradient(45deg, #8A2BE2, #FF1493)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    animation: '$qbitRotate 3s infinite linear',
    fontSize: '0.8rem',
    fontWeight: 'bold',
  },
  '@keyframes qbitRotate': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
}));

const DashboardIA: React.FC = () => {
  const classes = useStyles();
  const [aiMetrics, setAiMetrics] = useState({
    modelAccuracy: 98.7,
    processingSpeed: 1247,
    dataProcessed: 2.4,
    quantumEfficiency: 94.2,
    neuralConnections: 847392,
    learningRate: 0.0023,
  });

  const [geminiStatus, setGeminiStatus] = useState({
    isConnected: true,
    responseTime: 0.142,
    tokensProcessed: 15847,
    apiHealth: 99.9,
  });

  const [neuralFlows, setNeuralFlows] = useState([
    { id: 1, name: 'Análise Preditiva', status: 'ativo', confidence: 96.4 },
    { id: 2, name: 'Processamento NLP', status: 'ativo', confidence: 94.8 },
    { id: 3, name: 'Visão Computacional', status: 'treinando', confidence: 89.2 },
    { id: 4, name: 'Automação Inteligente', status: 'ativo', confidence: 97.1 },
  ]);

  const [quantumStates, setQuantumStates] = useState([
    { state: '|0⟩', probability: 0.6 },
    { state: '|1⟩', probability: 0.4 },
    { state: '|+⟩', probability: 0.7 },
    { state: '|-⟩', probability: 0.3 },
  ]);

  const [aiInsights, setAiInsights] = useState([
    {
      type: 'prediction',
      title: 'Padrão Emergente Detectado',
      message: 'IA identificou correlação de 94% entre horários de pico e tipos de solicitação.',
      confidence: 94.2,
      priority: 'high',
    },
    {
      type: 'optimization',
      title: 'Otimização Neural Sugerida',
      message: 'Algoritmo de ML pode reduzir tempo de processamento em 37% com nova arquitetura.',
      confidence: 89.7,
      priority: 'medium',
    },
    {
      type: 'anomaly',
      title: 'Anomalia Quântica Detectada',
      message: 'Flutuação não-linear nos dados às 14:23. Investigação automática iniciada.',
      confidence: 76.8,
      priority: 'high',
    },
  ]);

  const chartData = useMemo(() => [
    { time: '00:00', accuracy: 95.2, speed: 1200, quantum: 92.1 },
    { time: '04:00', accuracy: 96.8, speed: 1180, quantum: 93.4 },
    { time: '08:00', accuracy: 97.5, speed: 1350, quantum: 95.2 },
    { time: '12:00', accuracy: 98.7, speed: 1247, quantum: 94.2 },
    { time: '16:00', accuracy: 97.9, speed: 1420, quantum: 96.8 },
    { time: '20:00', accuracy: 96.3, speed: 1150, quantum: 93.9 },
  ], []);

  const performanceData = [
    { name: 'Gemini Pro', accuracy: 98.7, color: '#4285F4' },
    { name: 'GPT-4 Turbo', accuracy: 96.2, color: '#00A67E' },
    { name: 'Claude 3', accuracy: 94.8, color: '#FF6B35' },
    { name: 'Custom Neural', accuracy: 97.3, color: '#8A2BE2' },
  ];

  const neuralNetworkData = [
    { layer: 'Input', nodes: 512, activation: 'ReLU' },
    { layer: 'Hidden 1', nodes: 1024, activation: 'GELU' },
    { layer: 'Hidden 2', nodes: 2048, activation: 'Swish' },
    { layer: 'Attention', nodes: 768, activation: 'Softmax' },
    { layer: 'Output', nodes: 256, activation: 'Sigmoid' },
  ];

  // Simulação de dados em tempo real
  useEffect(() => {
    const interval = setInterval(() => {
      setAiMetrics(prev => ({
        ...prev,
        modelAccuracy: Math.min(99.9, prev.modelAccuracy + (Math.random() - 0.5) * 0.1),
        processingSpeed: Math.max(800, prev.processingSpeed + (Math.random() - 0.5) * 50),
        dataProcessed: prev.dataProcessed + Math.random() * 0.1,
        quantumEfficiency: Math.min(99, prev.quantumEfficiency + (Math.random() - 0.5) * 0.5),
        neuralConnections: prev.neuralConnections + Math.floor(Math.random() * 100),
      }));

      setGeminiStatus(prev => ({
        ...prev,
        responseTime: Math.max(0.050, prev.responseTime + (Math.random() - 0.5) * 0.01),
        tokensProcessed: prev.tokensProcessed + Math.floor(Math.random() * 10),
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const processGeminiRequest = useCallback(async (query: string) => {
    try {
      const response = await fetch('/api/ia', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          query,
          model: 'gemini-pro',
          temperature: 0.7,
          maxTokens: 1000
        }),
      });
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro na integração Gemini:', error);
      return null;
    }
  }, []);

  const runQuantumSimulation = () => {
    setQuantumStates(prev => prev.map(state => ({
      ...state,
      probability: Math.random()
    })));
  };

  return (
    <div className={classes.root}>
      <div className={classes.neuralBackground} />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={classes.dashboardContainer}
      >
        {/* Header Section */}
        <div className={classes.headerSection}>
          <div className={classes.realTimeIndicator} />
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h3" style={{ color: '#fff', fontWeight: 'bold', marginBottom: 8 }}>
                <TrendingUp style={{ marginRight: 16, fontSize: 'inherit', color: '#8A2BE2' }} />
                Dashboard IA Neural Avançado
              </Typography>
              <Typography variant="h6" style={{ color: 'rgba(255,255,255,0.8)' }}>
                Inteligência Artificial • Computação Quântica • Redes Neurais Profundas
              </Typography>
              <div style={{ marginTop: 16, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Chip 
                  icon={<TrendingUp />} 
                  label="Gemini Pro Integrado" 
                  style={{ backgroundColor: '#4285F4', color: '#fff' }}
                />
                <Chip 
                  icon={<TrendingUp />} 
                  label="Neural Network Ativo" 
                  style={{ backgroundColor: '#8A2BE2', color: '#fff' }}
                />
                <Chip 
                  icon={<Speed />} 
                  label="Quantum Processing" 
                  style={{ backgroundColor: '#FF1493', color: '#fff' }}
                />
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.geminiIntegration}>
                <Typography variant="h6" gutterBottom>
                  🤖 Gemini Pro Status
                </Typography>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <Typography variant="body2">Latência: {geminiStatus.responseTime.toFixed(3)}s</Typography>
                    <Typography variant="body2">Tokens: {geminiStatus.tokensProcessed.toLocaleString()}</Typography>
                  </div>
                  <div>
                    <CircularProgress 
                      variant="determinate" 
                      value={geminiStatus.apiHealth} 
                      size={50}
                      style={{ color: '#00FA9A' }}
                    />
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>

        {/* AI Metrics Cards */}
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
                    {aiMetrics.modelAccuracy.toFixed(1)}%
                  </Typography>
                  <Typography className={classes.aiLabel}>
                    Precisão do Modelo
                  </Typography>
                  <LinearProgress 
                    variant="determinate" 
                    value={aiMetrics.modelAccuracy} 
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
                    {aiMetrics.processingSpeed.toLocaleString()}
                  </Typography>
                  <Typography className={classes.aiLabel}>
                    Ops/Segundo
                  </Typography>
                  <div style={{ display: 'flex', alignItems: 'center', marginTop: 8 }}>
                    <TrendingUp style={{ color: '#00FA9A', marginRight: 4 }} />
                    <Typography variant="caption" style={{ color: '#00FA9A' }}>
                      +12.4% vs ontem
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
                    {aiMetrics.quantumEfficiency.toFixed(1)}%
                  </Typography>
                  <Typography className={classes.aiLabel}>
                    Eficiência Quântica
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
                    {(aiMetrics.neuralConnections / 1000).toFixed(0)}K
                  </Typography>
                  <Typography className={classes.aiLabel}>
                    Conexões Neurais
                  </Typography>
                  <div className={classes.neuralNetwork} />
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>

        {/* Main Content Grid */}
        <Grid container spacing={3}>
          {/* Real-time Performance Chart */}
          <Grid item xs={12} lg={8}>
            <Paper className={classes.chartCard}>
              <Typography variant="h6" gutterBottom style={{ color: '#fff' }}>
                <ShowChart style={{ marginRight: 8, verticalAlign: 'middle', color: '#8A2BE2' }} />
                Performance Neural em Tempo Real
              </Typography>
              <ResponsiveContainer width="100%" height="85%">
                <ComposedChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="time" stroke="#fff" />
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
                    dataKey="quantum"
                    fill="#8A2BE2"
                    stroke="#8A2BE2"
                    fillOpacity={0.3}
                    name="Quantum Efficiency"
                  />
                  <Bar dataKey="speed" fill="#00FA9A" name="Processing Speed" />
                  <Line 
                    type="monotone" 
                    dataKey="accuracy" 
                    stroke="#1E90FF" 
                    strokeWidth={3}
                    name="Model Accuracy"
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>

          {/* AI Insights */}
          <Grid item xs={12} lg={4}>
            <Paper className={classes.aiMetricsCard}>
              <Typography variant="h6" gutterBottom style={{ color: '#fff' }}>
                <TrendingUp style={{ marginRight: 8, verticalAlign: 'middle', color: '#FF1493' }} />
                Insights da IA Neural
              </Typography>
              <List style={{ maxHeight: '320px', overflow: 'auto' }}>
                {aiInsights.map((insight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <ListItem className={classes.aiInsightCard} style={{ marginBottom: 16 }}>
                      <ListItemIcon style={{ color: '#fff' }}>
                        {insight.type === 'prediction' && <TrendingUp />}
                        {insight.type === 'optimization' && <TrendingUp />}
                        {insight.type === 'anomaly' && <Warning />}
                      </ListItemIcon>
                      <div style={{ flex: 1 }}>
                        <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
                          {insight.title}
                        </Typography>
                        <Typography variant="body2" style={{ marginBottom: 8 }}>
                          {insight.message}
                        </Typography>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <Typography variant="caption">
                            Confiança: {insight.confidence}%
                          </Typography>
                          <LinearProgress
                            variant="determinate"
                            value={insight.confidence}
                            style={{ 
                              flex: 1, 
                              backgroundColor: 'rgba(255,255,255,0.3)',
                              borderRadius: 4,
                            }}
                          />
                          <Chip 
                            label={insight.priority} 
                            size="small"
                            style={{
                              backgroundColor: insight.priority === 'high' ? '#FF1493' : '#FFA500',
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

          {/* Neural Flow Visualizer */}
          <Grid item xs={12} md={6}>
            <Paper className={classes.neuralProcessingCard}>
              <Typography variant="h6" gutterBottom style={{ color: '#fff' }}>
                <TrendingUp style={{ marginRight: 8, verticalAlign: 'middle', color: '#00FA9A' }} />
                Fluxos Neurais Ativos
              </Typography>
              <div className={classes.neuralFlowVisualizer}>
                {neuralFlows.map((flow, index) => (
                  <motion.div
                    key={flow.id}
                    className={classes.flowNode}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <div style={{ textAlign: 'center' }}>
                      <Typography variant="caption" style={{ color: '#000', fontWeight: 'bold' }}>
                        {flow.id}
                      </Typography>
                    </div>
                  </motion.div>
                ))}
              </div>
              <List style={{ marginTop: 16 }}>
                {neuralFlows.map((flow) => (
                  <ListItem key={flow.id} style={{ padding: '8px 0' }}>
                    <ListItemText
                      primary={flow.name}
                      secondary={`Confiança: ${flow.confidence}%`}
                      style={{ color: '#fff' }}
                    />
                    <ListItemSecondaryAction>
                      <Chip
                        label={flow.status}
                        size="small"
                        style={{
                          backgroundColor: flow.status === 'ativo' ? '#00FA9A' : '#FFA500',
                          color: '#000'
                        }}
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>

          {/* Model Performance Comparison */}
          <Grid item xs={12} md={6}>
            <Paper className={classes.chartCard}>
              <Typography variant="h6" gutterBottom style={{ color: '#fff' }}>
                <BarChart style={{ marginRight: 8, verticalAlign: 'middle', color: '#1E90FF' }} />
                Comparação de Modelos IA
              </Typography>
              <ResponsiveContainer width="100%" height="85%">
                <RechartsBarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="name" stroke="#fff" />
                  <YAxis stroke="#fff" />
                  <RechartsTooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(0,0,0,0.8)', 
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '8px'
                    }} 
                  />
                  <Bar dataKey="accuracy" fill="#8884d8" />
                </RechartsBarChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>

          {/* Neural Network Architecture */}
          <Grid item xs={12}>
            <Paper className={classes.chartCard}>
              <Typography variant="h6" gutterBottom style={{ color: '#fff' }}>
                <TrendingUp style={{ marginRight: 8, verticalAlign: 'middle', color: '#FF1493' }} />
                Arquitetura da Rede Neural
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ color: '#fff', fontWeight: 'bold' }}>Camada</TableCell>
                      <TableCell style={{ color: '#fff', fontWeight: 'bold' }}>Neurônios</TableCell>
                      <TableCell style={{ color: '#fff', fontWeight: 'bold' }}>Ativação</TableCell>
                      <TableCell style={{ color: '#fff', fontWeight: 'bold' }}>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {neuralNetworkData.map((layer, index) => (
                      <TableRow key={index}>
                        <TableCell style={{ color: '#fff' }}>{layer.layer}</TableCell>
                        <TableCell style={{ color: '#fff' }}>{layer.nodes.toLocaleString()}</TableCell>
                        <TableCell style={{ color: '#fff' }}>{layer.activation}</TableCell>
                        <TableCell>
                          <Chip
                            icon={<CheckCircle />}
                            label="Ativo"
                            size="small"
                            style={{ backgroundColor: '#00FA9A', color: '#000' }}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        </Grid>

        {/* Floating Action Buttons */}
        <Fab
          style={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            background: 'linear-gradient(45deg, #8A2BE2, #1E90FF)',
          }}
          onClick={runQuantumSimulation}
        >
          <TrendingUp />
        </Fab>

        <Fab
          style={{
            position: 'fixed',
            bottom: 20,
            right: 90,
            background: 'linear-gradient(45deg, #FF1493, #00FA9A)',
          }}
          onClick={() => processGeminiRequest('Analyze current system performance')}
        >
          <TrendingUp />
        </Fab>
      </motion.div>
    </div>
  );
};

export default DashboardIA;
