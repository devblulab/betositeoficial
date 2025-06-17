import React, { useState, useEffect, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
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
  Box,
  TextField,
  Button,
  AppBar,
  Toolbar
} from '@material-ui/core';
import {
  WhatsApp,
  Phone,
  Message,
  Settings,
  People,
  PersonAdd,
  Search,
  FilterList,
  MoreVert,
  Close,
  Send,
  AttachFile,
  EmojiEmotions,
  Mic,
  Call,
  VideoCall,
  Info,
  Star,
  Archive,
  Delete,
  Reply,
  Forward,
  Edit,
  Share,
  

  Refresh,
  Sync,
  Cloud,
  CloudDownload,
  CloudUpload,
  Notifications,
  NotificationsOff,
  VolumeUp,
  VolumeOff,
  Brightness7,
  Brightness4,
  Fullscreen,
  FullscreenExit,
  ZoomIn,
  ZoomOut,
  Visibility,
  VisibilityOff,
  Lock,
  LockOpen,
  Security,
  VerifiedUser,
  CheckCircle,
  Cancel,
  Error,
  Warning,
  FlashOn,
  Memory,
  AccountBalance,
  TrendingFlat,
  PlayArrow,
  Stop,
  Pause
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    background: 'linear-gradient(135deg, #0a1428 0%, #1a365d 50%, #2d3748 100%)',
    overflow: 'hidden'
  },
  quantumField: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.1) 0%, transparent 50%)
    `,
    animation: '$quantumPulse 8s ease-in-out infinite'
  },
  '@keyframes quantumPulse': {
    '0%, 100%': { opacity: 0.7 },
    '50%': { opacity: 1 }
  },
  header: {
    backgroundColor: '#128c7e',
    padding: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    zIndex: 2
  },
  mainContent: {
    flex: 1,
    display: 'flex',
    position: 'relative',
    zIndex: 2
  },
  sidebar: {
    width: '300px',
    backgroundColor: '#075e54',
    borderRight: '1px solid #34495e'
  },
  chatArea: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff'
  },
  contactList: {
    flex: 1,
    overflow: 'auto',
    padding: theme.spacing(1)
  },
  contactItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginBottom: theme.spacing(1),
    borderRadius: theme.spacing(1),
    padding: theme.spacing(1),
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      transform: 'translateX(5px)'
    }
  },
  messageArea: {
    flex: 1,
    padding: theme.spacing(2),
    overflow: 'auto',
    backgroundColor: '#e5ddd5'
  },
  inputArea: {
    padding: theme.spacing(1),
    backgroundColor: '#f0f0f0',
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1)
  },
  neuralProcessor: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: theme.spacing(2),
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    position: 'relative',
    overflow: 'hidden'
  },
  quantumProcessor: {
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    borderRadius: theme.spacing(2),
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    position: 'relative',
    overflow: 'hidden'
  },
  aiPanel: {
    position: 'fixed',
    top: 0,
    right: 0,
    width: '400px',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    color: 'white',
    zIndex: 1000,
    transform: 'translateX(100%)',
    transition: 'transform 0.3s ease'
  },
  aiPanelOpen: {
    transform: 'translateX(0)'
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 999
  },
  metricCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    textAlign: 'center'
  },
  quantumAnimation: {
    animation: '$quantumFloat 3s ease-in-out infinite'
  },
  '@keyframes quantumFloat': {
    '0%, 100%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-10px)' }
  }
}));

interface Contact {
  id: string;
  name: string;
  phone: string;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
  avatar?: string;
  leadScore?: number;
  neuralProfile?: {
    conversionProbability: number;
    budgetRange: number;
    urgencyLevel: 'low' | 'medium' | 'high';
    interests: string[];
  };
}

export default function WhatsAppDigisac() {
  const classes = useStyles();
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [digisacLoading, setDigisacLoading] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [showAiPanel, setShowAiPanel] = useState(false);
  const [neuralAiActive, setNeuralAiActive] = useState(false);
  const [quantumAiActive, setQuantumAiActive] = useState(false);

  // Mock data
  const mockContacts: Contact[] = [
    {
      id: '1',
      name: 'João Silva',
      phone: '+5511999999999',
      lastMessage: 'Preciso de ajuda com transferência',
      timestamp: '10:30',
      unreadCount: 2,
      leadScore: 85,
      neuralProfile: {
        conversionProbability: 0.75,
        budgetRange: 5000,
        urgencyLevel: 'high',
        interests: ['transferencia', 'documentos']
      }
    },
    {
      id: '2',
      name: 'Maria Santos',
      phone: '+5511888888888',
      lastMessage: 'Quando fica pronto o documento?',
      timestamp: '09:15',
      unreadCount: 1,
      leadScore: 92,
      neuralProfile: {
        conversionProbability: 0.88,
        budgetRange: 3000,
        urgencyLevel: 'medium',
        interests: ['anuencia', 'despachante']
      }
    }
  ];

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = useCallback(async () => {
    setDigisacLoading(true);
    try {
      // Simula carregamento da API Digisac
      await new Promise(resolve => setTimeout(resolve, 2000));
      setContacts(mockContacts);
    } catch (error) {
      console.error('Erro ao carregar contatos:', error);
      setContacts(mockContacts);
    } finally {
      setDigisacLoading(false);
    }
  }, []);

  const sendMessage = useCallback(async () => {
    if (!message.trim() || !selectedContact) return;

    setIsLoading(true);
    try {
      // Aqui seria a integração real com Digisac
      console.log('Enviando mensagem via Digisac:', message);
      setMessage('');
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
    } finally {
      setIsLoading(false);
    }
  }, [message, selectedContact]);

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.quantumField} />

      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <WhatsApp style={{ color: 'white', marginRight: 8 }} />
          <Typography variant="h6" style={{ color: 'white', flexGrow: 1 }}>
            WhatsApp Business - Digisac Integration
          </Typography>
          <IconButton style={{ color: 'white' }}>
            <Settings />
          </IconButton>
        </Toolbar>
      </AppBar>

      <div className={classes.mainContent}>
        <Paper className={classes.sidebar}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            variant="fullWidth"
            style={{ backgroundColor: '#128c7e' }}
          >
            <Tab label="Contatos" icon={<People />} />
            <Tab label="IA Neural" icon={<Memory />} />
            <Tab label="Quantum" icon={<Memory />} />
          </Tabs>

          {tabValue === 0 && (
            <div className={classes.contactList}>
              {digisacLoading ? (
                <Box display="flex" justifyContent="center" p={2}>
                  <Memory />
                  <Typography variant="body2" style={{ marginLeft: 8, color: 'white' }}>
                    Carregando contatos...
                  </Typography>
                </Box>
              ) : (
                contacts.map((contact) => (
                  <div
                    key={contact.id}
                    className={classes.contactItem}
                    onClick={() => setSelectedContact(contact)}
                  >
                    <Box display="flex" alignItems="center">
                      <Avatar style={{ marginRight: 8 }}>
                        {contact.name.charAt(0)}
                      </Avatar>
                      <Box flexGrow={1}>
                        <Typography variant="subtitle2" style={{ color: 'white' }}>
                          {contact.name}
                        </Typography>
                        <Typography variant="caption" style={{ color: 'rgba(255,255,255,0.7)' }}>
                          {contact.lastMessage}
                        </Typography>
                      </Box>
                      {contact.unreadCount > 0 && (
                        <Badge badgeContent={contact.unreadCount} color="primary" />
                      )}
                    </Box>
                    {contact.leadScore && (
                      <Box mt={1}>
                        <Chip
                          size="small"
                          label={`Score: ${contact.leadScore}%`}
                          style={{ backgroundColor: '#4caf50', color: 'white' }}
                        />
                      </Box>
                    )}
                  </div>
                ))
              )}
            </div>
          )}

          {tabValue === 1 && (
            <div style={{ padding: 16, flex: 1, overflow: 'auto' }}>
              <div className={classes.neuralProcessor}>
                <Typography variant="h6" style={{ color: 'white', marginBottom: 16, display: 'flex', alignItems: 'center' }}>
                  <Memory style={{ marginRight: 8 }} />
                  IA Neural Ativa
                </Typography>

                <FormControlLabel
                  control={
                    <Switch
                      checked={neuralAiActive}
                      onChange={(e) => setNeuralAiActive(e.target.checked)}
                    />
                  }
                  label="Ativar IA Neural"
                  style={{ color: 'white' }}
                />

                <div className={classes.metricCard}>
                  <Typography variant="h4" style={{ color: 'white' }}>
                    {contacts.length}
                  </Typography>
                  <Typography variant="caption" style={{ color: 'rgba(255,255,255,0.8)' }}>
                    Contatos Analisados
                  </Typography>
                </div>

                <div className={classes.metricCard}>
                  <Typography variant="h4" style={{ color: 'white' }}>
                    87%
                  </Typography>
                  <Typography variant="caption" style={{ color: 'rgba(255,255,255,0.8)' }}>
                    Taxa de Conversão
                  </Typography>
                </div>
              </div>
            </div>
          )}

          {tabValue === 2 && (
            <div style={{ padding: 16, flex: 1, overflow: 'auto' }}>
              <div className={classes.quantumProcessor}>
                <Typography variant="h6" style={{ color: 'white', marginBottom: 16, display: 'flex', alignItems: 'center' }}>
                  <Memory style={{ marginRight: 8 }} />
                  Processamento Quântico
                </Typography>

                <FormControlLabel
                  control={
                    <Switch
                      checked={quantumAiActive}
                      onChange={(e) => setQuantumAiActive(e.target.checked)}
                    />
                  }
                  label="Ativar Quantum AI"
                  style={{ color: 'white' }}
                />

                <div className={`${classes.metricCard} ${classes.quantumAnimation}`}>
                  <Typography variant="h4" style={{ color: 'white' }}>
                    ∞
                  </Typography>
                  <Typography variant="caption" style={{ color: 'rgba(255,255,255,0.8)' }}>
                    Possibilidades
                  </Typography>
                </div>

                <div className={classes.metricCard}>
                  <Typography variant="h4" style={{ color: 'white' }}>
                    99.7%
                  </Typography>
                  <Typography variant="caption" style={{ color: 'rgba(255,255,255,0.8)' }}>
                    Precisão Quântica
                  </Typography>
                </div>
              </div>
            </div>
          )}
        </Paper>

        <div className={classes.chatArea}>
          {selectedContact ? (
            <>
              <Paper style={{ padding: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box display="flex" alignItems="center">
                  <Avatar style={{ marginRight: 8 }}>
                    {selectedContact.name.charAt(0)}
                  </Avatar>
                  <Box>
                    <Typography variant="h6">{selectedContact.name}</Typography>
                    <Typography variant="caption" color="textSecondary">
                      {selectedContact.phone}
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <IconButton>
                    <VideoCall />
                  </IconButton>
                  <IconButton>
                    <Phone />
                  </IconButton>
                  <IconButton>
                    <MoreVert />
                  </IconButton>
                </Box>
              </Paper>

              <div className={classes.messageArea}>
                <Typography variant="body2" color="textSecondary" align="center">
                  Conversa com {selectedContact.name}
                </Typography>
              </div>

              <div className={classes.inputArea}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Digite sua mensagem..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                />
                <IconButton
                  color="primary"
                  onClick={sendMessage}
                  disabled={isLoading || !message.trim()}
                >
                  {isLoading ? <CircularProgress size={24} /> : <Send />}
                </IconButton>
              </div>
            </>
          ) : (
            <Box display="flex" alignItems="center" justifyContent="center" height="100%">
              <Typography variant="h6" color="textSecondary">
                Selecione um contato para iniciar a conversa
              </Typography>
            </Box>
          )}
        </div>
      </div>

      <Fab
        className={classes.fab}
        color="primary"
        onClick={() => setShowAiPanel(!showAiPanel)}
      >
        {neuralAiActive ? <Star /> : <Memory />}
      </Fab>
    </div>
  );
}