
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  IconButton,
  Avatar,
  Badge,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
  Divider,
  Switch,
  FormControlLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Tabs,
  Tab,
  Tooltip,
  Menu,
  MenuItem,
  Fab,
  Slide,
  Fade,
  Zoom,
  Container,
  useMediaQuery,
  InputAdornment,
  LinearProgress,
  CircularProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControl,
  Select,
  InputLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination
} from '@material-ui/core';
import { Alert, Autocomplete } from '@material-ui/lab';
import {
  WhatsApp,
  Send,
  EmojiEmotions,
  AttachFile,
  Image,
  VideoCall,
  Phone,
  MoreVert,
  Search,
  Group,
  PersonAdd,
  Settings,
  Notifications,
  NotificationsOff,
  VolumeUp,
  VolumeOff,
  Mic,
  MicOff,
  Videocam,
  VideocamOff,
  ScreenShare,
  StopScreenShare,
  Call,
  CallEnd,
  ChatBubble,
  Forum,
  People,
  Public,
  Lock,
  Star,
  Reply,
  Forward,
  Delete,
  Edit,
  Info,
  Close,
  Add,
  Remove,
  ExpandMore,
  FiberManualRecord,
  Schedule,
  Done,
  DoneAll,
  Visibility,
  VisibilityOff,
  Extension,
  Business,
  MonetizationOn,
  ShoppingCart,
  Assessment
} from '@material-ui/icons';
 
import { motion, AnimatePresence } from 'framer-motion';
import DigisacConfig from './DigisacConfig';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    color: 'black',
    display: 'flex',
    background: theme.palette.type === 'dark' 
      ? 'linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 50%, #2d2d2d 100%)'
      : 'linear-gradient(135deg, #25D366 0%, #128C7E 50%, #075E54 100%)',
    position: 'relative',
    overflow: 'hidden',
  },
  sidebar: {
    width: 380,
    background: theme.palette.background.paper,
    borderRight: `1px solid ${theme.palette.divider}`,
    display: 'flex',
    flexDirection: 'column',
    boxShadow: theme.shadows[4],
  },
  sidebarHeader: {
    padding: theme.spacing(2),
    background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  chatArea: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    background: theme.palette.background.default,
  },
  chatHeader: {
    padding: theme.spacing(2),
    background: theme.palette.background.paper,
    borderBottom: `1px solid ${theme.palette.divider}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: theme.shadows[2],
  },
  messagesContainer: {
    flex: 1,
    padding: theme.spacing(1),
    overflowY: 'auto',
    background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f0f0f0' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    position: 'relative',
  },
  messageArea: {
    padding: theme.spacing(2),
    background: theme.palette.background.paper,
    borderTop: `1px solid ${theme.palette.divider}`,
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
  },
  message: {
    maxWidth: '70%',
    margin: theme.spacing(0.5, 0),
    padding: theme.spacing(1, 2),
    borderRadius: 18,
    color: 'black',
    position: 'relative',
    wordBreak: 'break-word',
  },
  messageOwn: {
    marginLeft: 'auto',
    background: 'linear-gradient(135deg, #dcf8c6 0%, #c1f0a8 100%)',
    color: 'black',
    borderBottomRightRadius: 4,
  },
  messageOther: {
    marginRight: 'auto',
    background: '#ffffff',
    color: 'black',
    borderBottomLeftRadius: 4,
    boxShadow: theme.shadows[2],
  },
  contactItem: {
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    borderRadius: theme.spacing(1),
    color: 'black',
    margin: theme.spacing(0.5),
    '&:hover': {
      background: theme.palette.action.hover,
      transform: 'translateX(4px)',
    },
  },
  onlineIndicator: {
    width: 12,
    height: 12,
    borderRadius: '50%',
    backgroundColor: '#4CAF50',
    color: 'black',
    border: '2px solid white',
    position: 'absolute',
    bottom: 0,
    right: 0,
    animation: '$pulse 2s infinite',
  },
  '@keyframes pulse': {
    '0%': { opacity: 1, transform: 'scale(1)' },
    '50%': { opacity: 0.7, transform: 'scale(1.1)' },
    '100%': { opacity: 1, transform: 'scale(1)' },
  },
  salesPanel: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 350,
    background: theme.palette.background.paper,
    borderRadius: theme.spacing(2),
    padding: theme.spacing(2),
    boxShadow: theme.shadows[12],
    border: `2px solid ${theme.palette.primary.main}`,
    zIndex: 1000,
    maxHeight: '80vh',
    overflowY: 'auto',
  },
  crmPanel: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 320,
    background: theme.palette.background.paper,
    borderRadius: theme.spacing(2),
    padding: theme.spacing(2),
    boxShadow: theme.shadows[12],
    border: `2px solid ${theme.palette.secondary.main}`,
    zIndex: 1000,
    maxHeight: '80vh',
    overflowY: 'auto',
  },
  analyticsCard: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    marginBottom: theme.spacing(1),
    '& .MuiCardContent-root': {
      padding: theme.spacing(2),
    },
  },
  salesCard: {
    background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    color: 'white',
    marginBottom: theme.spacing(1),
  },
  whatsappIcon: {
    color: '#25D366',
    fontSize: 32,
  },
  messageTime: {
    fontSize: '0.7rem',
    opacity: 0.7,
    color: 'black',
    marginTop: theme.spacing(0.5),
  },
  messageStatus: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    color: 'black',
    gap: theme.spacing(0.5),
    marginTop: theme.spacing(0.5),
  },
  searchBar: {
    margin: theme.spacing(1),
    '& .MuiOutlinedInput-root': {
      borderRadius: 20,
    },
  },
  tabsContainer: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    color: 'black',
  },
  strategyCard: {
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    color: 'white',
    marginBottom: theme.spacing(1),
  },
  customerCard: {
    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    color: 'white',
    marginBottom: theme.spacing(1),
  },
  digisacBadge: {
    background: '#FF6B35',
    color: 'white',
    fontWeight: 'bold',
  },
  automationPanel: {
    background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2),
    margin: theme.spacing(1, 0),
  },
}));

interface Contact {
  id: string;
  name: string;
  phone: string;
  avatar: string;
  status: 'online' | 'offline' | 'away';
  lastSeen?: Date;
  isTyping?: boolean;
  tags: string[];
  customerValue: number;
  conversationStage: 'lead' | 'qualified' | 'proposal' | 'negotiation' | 'closed';
  lastInteraction: Date;
  source: 'whatsapp' | 'digisac' | 'organic';
}

interface Message {
  id: string;
  content: string;
  sender: Contact | 'self';
  timestamp: Date;
  type: 'text' | 'image' | 'audio' | 'document';
  status: 'sent' | 'delivered' | 'read';
  isFromDigisac?: boolean;
}

interface SalesStrategy {
  id: string;
  title: string;
  description: string;
  stage: string;
  probability: number;
  value: number;
  actions: string[];
}

const WhatsAppDigisac: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Estados principais
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [activeTab, setActiveTab] = useState(0);

  // Estados de controle
  const [searchTerm, setSearchTerm] = useState('');
  const [showSalesPanel, setShowSalesPanel] = useState(false);
  const [showCrmPanel, setShowCrmPanel] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [autoResponses, setAutoResponses] = useState(true);
  const [salesMode, setSalesMode] = useState(false);
  const [showConfig, setShowConfig] = useState(false);

  // Refs
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Dados simulados
  const mockContacts: Contact[] = useMemo(() => [
    {
      id: '1',
      name: 'João Silva',
      phone: '+55 11 99999-9999',
      avatar: '/gui.png',
      status: 'online',
      tags: ['cliente', 'vip', 'urgente'],
      customerValue: 15000,
      conversationStage: 'negotiation',
      lastInteraction: new Date(Date.now() - 300000),
      source: 'digisac',
    },
    {
      id: '2',
      name: 'Maria Santos',
      phone: '+55 11 88888-8888',
      avatar: '/gabi.png',
      status: 'online',
      tags: ['lead', 'interessado'],
      customerValue: 8000,
      conversationStage: 'qualified',
      lastInteraction: new Date(Date.now() - 600000),
      source: 'whatsapp',
    },
    {
      id: '3',
      name: 'Carlos Oliveira',
      phone: '+55 11 77777-7777',
      avatar: '/betologo.jpeg',
      status: 'away',
      tags: ['cliente', 'recorrente'],
      customerValue: 25000,
      conversationStage: 'proposal',
      lastInteraction: new Date(Date.now() - 1800000),
      source: 'organic',
    },
    {
      id: '4',
      name: 'Ana Costa',
      phone: '+55 11 66666-6666',
      avatar: '/gabi.png',
      status: 'offline',
      tags: ['prospect', 'qualificando'],
      customerValue: 5000,
      conversationStage: 'lead',
      lastInteraction: new Date(Date.now() - 3600000),
      source: 'digisac',
    },
  ], []);

  const salesStrategies: SalesStrategy[] = useMemo(() => [
    {
      id: '1',
      title: 'Urgência e Escassez',
      description: 'Criar senso de urgência com ofertas por tempo limitado',
      stage: 'qualified',
      probability: 75,
      value: 12000,
      actions: ['Mencionar prazo', 'Mostrar benefícios únicos', 'Apresentar garantias'],
    },
    {
      id: '2',
      title: 'Valor Agregado',
      description: 'Focar nos benefícios e ROI do produto/serviço',
      stage: 'proposal',
      probability: 85,
      value: 18000,
      actions: ['Demonstrar economia', 'Casos de sucesso', 'Comparar concorrência'],
    },
    {
      id: '3',
      title: 'Relacionamento',
      description: 'Construir confiança através de relacionamento pessoal',
      stage: 'lead',
      probability: 60,
      value: 8000,
      actions: ['Conhecer necessidades', 'Criar rapport', 'Entender dores'],
    },
  ], []);

  // Inicialização
  useEffect(() => {
    setContacts(mockContacts);
    
    // Simular mensagens iniciais
    if (mockContacts.length > 0) {
      const initialMessages: Message[] = [
        {
          id: '1',
          content: 'Olá! Vi que você tem interesse nos nossos serviços. Como posso ajudar você hoje? 😊',
          sender: 'self',
          timestamp: new Date(Date.now() - 1800000),
          type: 'text',
          status: 'read',
        },
        {
          id: '2',
          content: 'Oi! Sim, estou interessado em saber mais sobre os procedimentos de documentação veicular.',
          sender: mockContacts[0],
          timestamp: new Date(Date.now() - 1200000),
          type: 'text',
          status: 'read',
          isFromDigisac: true,
        },
        {
          id: '3',
          content: 'Perfeito! Temos várias opções que podem te ajudar. Que tipo de procedimento você precisa fazer?',
          sender: 'self',
          timestamp: new Date(Date.now() - 600000),
          type: 'text',
          status: 'read',
        },
      ];
      setMessages(initialMessages);
      setSelectedContact(mockContacts[0]);
    }
  }, [mockContacts]);

  // Auto-scroll para última mensagem
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Enviar mensagem
  const sendMessage = useCallback(() => {
    if (!message.trim() || !selectedContact) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content: message,
      sender: 'self',
      timestamp: new Date(),
      type: 'text',
      status: 'sent',
    };

    setMessages(prev => [...prev, newMessage]);
    setMessage('');

    // Simular resposta automática baseada em IA de vendas
    if (autoResponses) {
      setTimeout(() => {
        const aiResponse: Message = {
          id: (Date.now() + 1).toString(),
          content: generateAIResponse(message, selectedContact),
          sender: selectedContact,
          timestamp: new Date(),
          type: 'text',
          status: 'delivered',
          isFromDigisac: Math.random() > 0.5,
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 2000);
    }
  }, [message, selectedContact, autoResponses]);

  // Gerar resposta IA baseada em estratégias de venda
  const generateAIResponse = (userMessage: string, contact: Contact): string => {
    const responses = {
      lead: [
        'Entendo sua necessidade! Vou te explicar como podemos resolver isso de forma rápida e eficiente.',
        'Ótima pergunta! Deixe-me te mostrar as melhores opções para seu caso.',
        'Perfeito! Vou te passar todas as informações detalhadas sobre nossos serviços.',
      ],
      qualified: [
        'Excelente! Com base no que você me disse, tenho a solução perfeita para você.',
        'Fico feliz em saber do seu interesse! Vou preparar uma proposta personalizada.',
        'Maravilha! Vou te enviar um orçamento especial com desconto exclusivo.',
      ],
      proposal: [
        'Que bom que gostou da proposta! Posso esclarecer alguma dúvida específica?',
        'Estou aqui para ajudar em qualquer detalhe. Quando podemos finalizar?',
        'Perfeito! Vou incluir aquele benefício extra que conversamos.',
      ],
      negotiation: [
        'Entendo sua posição. Vamos encontrar uma solução que funcione para todos.',
        'Claro! Posso ajustar alguns pontos para facilitar para você.',
        'Sem problemas! Temos flexibilidade para adequar às suas necessidades.',
      ],
      closed: [
        'Obrigado pela confiança! Vou iniciar o processo imediatamente.',
        'Excelente decisão! Vou te manter informado sobre cada etapa.',
        'Perfeito! Você fez a escolha certa. Vamos começar hoje mesmo!',
      ],
    };

    const stageResponses = responses[contact.conversationStage] || responses.lead;
    return stageResponses[Math.floor(Math.random() * stageResponses.length)];
  };

  // Filtrar contatos
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.phone.includes(searchTerm) ||
    contact.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Status do contato
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return '#4CAF50';
      case 'away': return '#FF9800';
      default: return '#757575';
    }
  };

  // Renderizar mensagem
  const renderMessage = (msg: Message) => (
    <motion.div
      key={msg.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`${classes.message} ${
        msg.sender === 'self' ? classes.messageOwn : classes.messageOther
      }`}
    >
      <Typography variant="body2" style={{ color: 'black' }}>
        {msg.content}
      </Typography>
      
      {msg.isFromDigisac && (
        <Chip
          label="Digisac"
          size="small"
          className={classes.digisacBadge}
          style={{ marginTop: 4 }}
        />
      )}

      <div className={classes.messageTime}>
        {msg.timestamp.toLocaleTimeString()}
      </div>

      {msg.sender === 'self' && (
        <div className={classes.messageStatus}>
          {msg.status === 'sent' && <Done style={{ fontSize: 16 }} />}
          {msg.status === 'delivered' && <DoneAll style={{ fontSize: 16 }} />}
          {msg.status === 'read' && <DoneAll style={{ fontSize: 16, color: '#4CAF50' }} />}
        </div>
      )}
    </motion.div>
  );

  return (
    <div className={classes.root}>
      {/* Sidebar com Contatos */}
      <div className={classes.sidebar}>
        {/* Header da Sidebar */}
        <div className={classes.sidebarHeader}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <WhatsApp className={classes.whatsappIcon} style={{ marginRight: 8 }} />
            <Typography variant="h6">WhatsApp Business</Typography>
          </div>
          <div>
            <IconButton 
              color="inherit" 
              onClick={() => setShowCrmPanel(!showCrmPanel)}
            >
              <Business />
            </IconButton>
            <IconButton 
              color="inherit"
              onClick={() => setShowSalesPanel(!showSalesPanel)}
            >
              <Assessment />
            </IconButton>
            <IconButton 
              color="inherit"
              onClick={() => setShowConfig(true)}
            >
              <Settings />
            </IconButton>
          </div>
        </div>

        {/* Barra de Pesquisa */}
        <TextField
          className={classes.searchBar}
          placeholder="Buscar contatos..."
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />

        {/* Tabs */}
        <Tabs
          value={activeTab}
          onChange={(_, newValue) => setActiveTab(newValue)}
          className={classes.tabsContainer}
          variant="fullWidth"
        >
          <Tab label="Contatos" icon={<People />} />
          <Tab label="Grupos" icon={<Group />} />
          <Tab label="IA Vendas" icon={<Assessment />} />
        </Tabs>

        {/* Lista de Contatos */}
        {activeTab === 0 && (
          <List style={{ flex: 1, overflow: 'auto' }}>
            {filteredContacts.map((contact) => (
              <ListItem
                key={contact.id}
                className={classes.contactItem}
                onClick={() => setSelectedContact(contact)}
                selected={selectedContact?.id === contact.id}
              >
                <ListItemAvatar>
                  <Badge
                    overlap="circular"
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    badgeContent={
                      <FiberManualRecord
                        style={{
                          color: getStatusColor(contact.status),
                          fontSize: 12,
                        }}
                      />
                    }
                  >
                    <Avatar src={contact.avatar} alt={contact.name} />
                  </Badge>
                </ListItemAvatar>
                <ListItemText
                  primary={<span style={{ color: 'black', fontWeight: 600 }}>{contact.name}</span>}
                  secondary={
                    <div>
                      <span style={{ color: 'black' }}>{contact.phone}</span>
                      <div style={{ marginTop: 4 }}>
                        {contact.tags.map(tag => (
                          <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            style={{ 
                              marginRight: 4, 
                              marginBottom: 2,
                              backgroundColor: contact.source === 'digisac' ? '#FF6B35' : '#25D366',
                              color: 'white',
                              fontSize: 10
                            }}
                          />
                        ))}
                      </div>
                      <Typography variant="caption" style={{ color: 'black' }}>
                        Valor: R$ {contact.customerValue.toLocaleString()}
                      </Typography>
                    </div>
                  }
                />
                <ListItemIcon>
                  {contact.source === 'digisac' && (
                    <Tooltip title="Integração Digisac">
                      <Extension style={{ color: '#FF6B35' }} />
                    </Tooltip>
                  )}
                </ListItemIcon>
              </ListItem>
            ))}
          </List>
        )}

        {/* IA de Vendas */}
        {activeTab === 2 && (
          <div style={{ padding: 16, flex: 1 }}>
            <Card className={classes.analyticsCard}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  <Assessment style={{ marginRight: 8, verticalAlign: 'middle' }} />
                  IA de Vendas Ativa
                </Typography>
                <FormControlLabel
                  control={
                    <Switch
                      checked={autoResponses}
                      onChange={(e) => setAutoResponses(e.target.checked)}
                      color="secondary"
                    />
                  }
                  label="Respostas Automáticas"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={salesMode}
                      onChange={(e) => setSalesMode(e.target.checked)}
                      color="secondary"
                    />
                  }
                  label="Modo Vendas Agressivo"
                />
              </CardContent>
            </Card>

            <Typography variant="subtitle2" gutterBottom style={{ marginTop: 16 }}>
              Estratégias Disponíveis:
            </Typography>
            {salesStrategies.map(strategy => (
              <Card key={strategy.id} className={classes.strategyCard} style={{ marginBottom: 8 }}>
                <CardContent style={{ padding: 12 }}>
                  <Typography variant="subtitle2">{strategy.title}</Typography>
                  <Typography variant="caption">{strategy.description}</Typography>
                  <LinearProgress 
                    variant="determinate" 
                    value={strategy.probability} 
                    style={{ marginTop: 8 }}
                  />
                  <Typography variant="caption">
                    {strategy.probability}% | R$ {strategy.value.toLocaleString()}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Área Principal do Chat */}
      <div className={classes.chatArea}>
        {selectedContact ? (
          <>
            {/* Header do Chat */}
            <div className={classes.chatHeader}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Avatar 
                  src={selectedContact.avatar} 
                  alt={selectedContact.name}
                  style={{ marginRight: 12 }}
                />
                <div>
                  <Typography variant="h6" style={{ color: 'black' }}>
                    {selectedContact.name}
                  </Typography>
                  <Typography variant="caption" style={{ color: 'black' }}>
                    {selectedContact.status === 'online' ? 'Online' : 'Offline'} • 
                    {selectedContact.conversationStage.toUpperCase()}
                  </Typography>
                </div>
                <Chip
                  label={`R$ ${selectedContact.customerValue.toLocaleString()}`}
                  color="primary"
                  style={{ marginLeft: 16 }}
                />
              </div>

              <div>
                <IconButton onClick={() => setShowAnalytics(!showAnalytics)}>
                  <Assessment />
                </IconButton>
                <IconButton>
                  <VideoCall />
                </IconButton>
                <IconButton>
                  <Phone />
                </IconButton>
                <IconButton>
                  <Info />
                </IconButton>
              </div>
            </div>

            {/* Área de Mensagens */}
            <div className={classes.messagesContainer}>
              <AnimatePresence>
                {messages.map(renderMessage)}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            {/* Área de Input */}
            <div className={classes.messageArea}>
              <IconButton>
                <AttachFile />
              </IconButton>
              <IconButton>
                <Image />
              </IconButton>
              <TextField
                fullWidth
                placeholder="Digite uma mensagem..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                variant="outlined"
                size="small"
                multiline
                maxRows={3}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <EmojiEmotions />
                      </IconButton>
                      <IconButton>
                        <Mic />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <IconButton 
                color="primary" 
                onClick={sendMessage}
                disabled={!message.trim()}
                style={{ backgroundColor: '#25D366', color: 'white', marginLeft: 8 }}
              >
                <Send />
              </IconButton>
            </div>
          </>
        ) : (
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            height: '100%',
            flexDirection: 'column' 
          }}>
            <WhatsApp style={{ fontSize: 64, color: '#25D366', marginBottom: 16 }} />
            <Typography variant="h5" gutterBottom style={{ color: 'black' }}>
              WhatsApp Business + Digisac
            </Typography>
            <Typography variant="body2" style={{ color: 'black' }}>
              Selecione um contato para começar a conversar
            </Typography>
          </div>
        )}
      </div>

      {/* Painel CRM */}
      <AnimatePresence>
        {showCrmPanel && (
          <motion.div
            className={classes.crmPanel}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
              <Typography variant="h6" style={{ color: 'black' }}>CRM Integrado</Typography>
              <IconButton size="small" onClick={() => setShowCrmPanel(false)}>
                <Close />
              </IconButton>
            </div>

            <Card className={classes.customerCard}>
              <CardContent>
                <Typography variant="h6">
                  <Business style={{ marginRight: 8 }} />
                  Dados do Cliente
                </Typography>
                {selectedContact && (
                  <div>
                    <Typography variant="body2">
                      Nome: {selectedContact.name}
                    </Typography>
                    <Typography variant="body2">
                      Telefone: {selectedContact.phone}
                    </Typography>
                    <Typography variant="body2">
                      Valor: R$ {selectedContact.customerValue.toLocaleString()}
                    </Typography>
                    <Typography variant="body2">
                      Estágio: {selectedContact.conversationStage}
                    </Typography>
                    <Typography variant="body2">
                      Fonte: {selectedContact.source}
                    </Typography>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className={classes.salesCard} style={{ marginTop: 16 }}>
              <CardContent>
                <Typography variant="h6">
                  <MonetizationOn style={{ marginRight: 8 }} />
                  Métricas de Vendas
                </Typography>
                <div style={{ marginTop: 8 }}>
                  <Typography variant="body2">
                    Conversões Hoje: 8
                  </Typography>
                  <Typography variant="body2">
                    Ticket Médio: R$ 12.500
                  </Typography>
                  <Typography variant="body2">
                    Taxa Conversão: 15.7%
                  </Typography>
                  <Typography variant="body2">
                    Digisac Sync: Ativo
                  </Typography>
                </div>
              </CardContent>
            </Card>

            <div className={classes.automationPanel}>
              <Typography variant="subtitle2" gutterBottom>
                <Assessment style={{ marginRight: 8 }} />
                Automações Ativas
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon><Assessment style={{ color: '#4CAF50' }} /></ListItemIcon>
                  <ListItemText primary="Boas-vindas automáticas" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><Assessment style={{ color: '#4CAF50' }} /></ListItemIcon>
                  <ListItemText primary="Follow-up 24h" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><Assessment style={{ color: '#4CAF50' }} /></ListItemIcon>
                  <ListItemText primary="Qualificação de leads" />
                </ListItem>
              </List>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Painel de Vendas */}
      <AnimatePresence>
        {showSalesPanel && (
          <motion.div
            className={classes.salesPanel}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
              <Typography variant="h6" style={{ color: 'black' }}>Estratégias de Venda</Typography>
              <IconButton size="small" onClick={() => setShowSalesPanel(false)}>
                <Close />
              </IconButton>
            </div>

            <Card className={classes.analyticsCard}>
              <CardContent>
                <Typography variant="h6">
                  <Extension style={{ marginRight: 8 }} />
                  Performance Hoje
                </Typography>
                <Grid container spacing={2} style={{ marginTop: 8 }}>
                  <Grid item xs={6}>
                    <Typography variant="h4" style={{ color: '#4CAF50' }}>
                      R$ 45k
                    </Typography>
                    <Typography variant="caption">Vendas</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h4" style={{ color: '#2196F3' }}>
                      127
                    </Typography>
                    <Typography variant="caption">Contatos</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            <Typography variant="subtitle2" gutterBottom style={{ marginTop: 16, color: 'black' }}>
              Sugestões para {selectedContact?.name || 'este contato'}:
            </Typography>

            {salesStrategies.map(strategy => (
              <Card key={strategy.id} className={classes.strategyCard} style={{ marginBottom: 8 }}>
                <CardContent style={{ padding: 12 }}>
                  <Typography variant="subtitle2">{strategy.title}</Typography>
                  <Typography variant="body2" style={{ fontSize: 12, marginBottom: 8 }}>
                    {strategy.description}
                  </Typography>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Chip 
                      label={`${strategy.probability}%`} 
                      size="small" 
                      style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}
                    />
                    <Typography variant="caption">
                      R$ {strategy.value.toLocaleString()}
                    </Typography>
                  </div>
                  <div style={{ marginTop: 8 }}>
                    {strategy.actions.map((action, index) => (
                      <Chip
                        key={index}
                        label={action}
                        size="small"
                        variant="outlined"
                        style={{ 
                          margin: 2, 
                          borderColor: 'rgba(255,255,255,0.5)',
                          color: 'white',
                          fontSize: 10
                        }}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            <Button
              fullWidth
              variant="contained"
              style={{
                backgroundColor: '#25D366',
                color: 'white',
                marginTop: 16,
              }}
              startIcon={<Assessment />}
            >
              Aplicar Estratégia
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB para Digisac */}
      <Fab
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          backgroundColor: '#FF6B35',
          color: 'white',
        }}
        onClick={() => window.open('https://app.digisac.com', '_blank')}
      >
        <Extension />
      </Fab>

      {/* Configurações Digisac */}
      <DigisacConfig 
        open={showConfig} 
        onClose={() => setShowConfig(false)} 
      />
    </div>
  );
};

export default WhatsAppDigisac;
