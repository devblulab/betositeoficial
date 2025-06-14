import React, { useState, useRef, useEffect } from 'react';
import {
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  Avatar,
  CircularProgress,
  Fade,
  Zoom,
} from '@material-ui/core';
import {
  Chat as ChatIcon,
  Send as SendIcon,
  Close as CloseIcon,
  Android as BotIcon,
  WhatsApp as WhatsAppIcon,
  ExitToApp as ExitIcon,
} from '@material-ui/icons';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  floatingButton: {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    zIndex: 1000,
    background: 'linear-gradient(135deg, #1a4a3a 0%, #2d6b55 100%)',
    color: '#ffffff',
    width: '64px',
    height: '64px',
    boxShadow: '0 8px 32px rgba(26, 74, 58, 0.3)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    border: '2px solid rgba(199, 174, 129, 0.2)',
    '&:hover': {
      background: 'linear-gradient(135deg, #2d6b55 0%, #1a4a3a 100%)',
      transform: 'scale(1.05)',
      boxShadow: '0 12px 40px rgba(26, 74, 58, 0.4)',
    },
  },
  dialog: {
    '& .MuiDialog-paper': {
      borderRadius: '16px',
      background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
      border: '1px solid rgba(199, 174, 129, 0.1)',
      boxShadow: '0 24px 48px rgba(0, 0, 0, 0.1)',
      maxWidth: '400px',
      width: '90vw',
      maxHeight: '600px',
      overflow: 'hidden',
    },
  },
  dialogTitle: {
    background: 'linear-gradient(135deg, #1a4a3a 0%, #2d6b55 100%)',
    color: '#ffffff',
    padding: '16px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid rgba(199, 174, 129, 0.2)',
  },
  dialogContent: {
    padding: '0',
    height: '500px',
    display: 'flex',
    flexDirection: 'column',
  },
  messagesContainer: {
    flex: 1,
    overflowY: 'auto',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    '&::-webkit-scrollbar': {
      width: '6px',
    },
    '&::-webkit-scrollbar-track': {
      background: 'rgba(199, 174, 129, 0.1)',
      borderRadius: '3px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'rgba(199, 174, 129, 0.3)',
      borderRadius: '3px',
      '&:hover': {
        background: 'rgba(199, 174, 129, 0.5)',
      },
    },
  },
  messageUser: {
    alignSelf: 'flex-end',
    maxWidth: '80%',
    background: 'linear-gradient(135deg, #1a4a3a 0%, #2d6b55 100%)',
    color: '#ffffff',
    padding: '12px 16px',
    borderRadius: '16px 16px 4px 16px',
    boxShadow: '0 2px 8px rgba(26, 74, 58, 0.2)',
    wordWrap: 'break-word',
  },
  messageBot: {
    alignSelf: 'flex-start',
    maxWidth: '80%',
    background: '#ffffff',
    color: '#000000', // Texto preto
    padding: '12px 16px',
    borderRadius: '16px 16px 16px 4px',
    border: '1px solid rgba(199, 174, 129, 0.2)',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
    wordWrap: 'break-word',
  },
  actionButtons: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    marginTop: '12px',
  },
  actionButton: {
    background: 'linear-gradient(135deg, #1a4a3a 0%, #2d6b55 100%)',
    color: '#ffffff',
    borderRadius: '8px',
    padding: '8px 16px',
    fontSize: '0.9rem',
    textTransform: 'none',
    boxShadow: '0 2px 8px rgba(26, 74, 58, 0.2)',
    '&:hover': {
      background: 'linear-gradient(135deg, #2d6b55 0%, #1a4a3a 100%)',
      transform: 'translateY(-1px)',
    },
  },
  whatsappButton: {
    background: '#25D366',
    '&:hover': {
      background: '#128C7E',
    },
  },
  inputContainer: {
    padding: '16px',
    borderTop: '1px solid rgba(199, 174, 129, 0.1)',
    background: '#ffffff',
  },
  inputField: {
    '& .MuiOutlinedInput-root': {
      borderRadius: '24px',
      background: '#f8f9fa',
      '& fieldset': {
        borderColor: 'rgba(199, 174, 129, 0.3)',
      },
      '&:hover fieldset': {
        borderColor: 'rgba(199, 174, 129, 0.5)',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#1a4a3a',
      },
    },
  },
  sendButton: {
    background: 'linear-gradient(135deg, #1a4a3a 0%, #2d6b55 100%)',
    color: '#ffffff',
    borderRadius: '50%',
    minWidth: 'auto',
    width: '48px',
    height: '48px',
    marginLeft: '8px',
    boxShadow: '0 4px 12px rgba(26, 74, 58, 0.3)',
    '&:hover': {
      background: 'linear-gradient(135deg, #2d6b55 0%, #1a4a3a 100%)',
      transform: 'scale(1.05)',
    },
    '&:disabled': {
      background: 'rgba(199, 174, 129, 0.3)',
      color: 'rgba(255, 255, 255, 0.5)',
    },
  },
  avatarBot: {
    background: 'linear-gradient(135deg, #c7ae81 0%, #b8a070 100%)',
    color: '#1a4a3a',
    width: '32px',
    height: '32px',
    marginRight: '8px',
    fontFamily: '"Playfair Display", "Georgia", serif',
    fontWeight: 600,
  },
  welcomeMessage: {
    textAlign: 'center',
    color: '#000000', // Texto preto
    fontStyle: 'italic',
    margin: '20px 0',
  },
}));

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
  hasActions?: boolean;
  actionType?: 'multa' | 'transferencia' | 'ipva' | 'geral';
}

const ChatBot: React.FC = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        text: "Olá! Eu sou a Lívia, atendente do Despachante Beto Dheon aqui em Tubarão-SC. Trabalho aqui há mais de 30 anos e vou te ajudar com todo carinho! Em que posso te auxiliar hoje? 😊",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length]);

  const handleWhatsAppContact = (service: string) => {
    const phoneNumber = "554832550606"; // Número do WhatsApp do Beto Dheon
    let message = "";

    switch (service) {
      case 'multa':
        message = "Olá! Vim do chat da Lívia e preciso de ajuda para pagar uma multa. Gostaria de falar com a área responsável.";
        break;
      case 'transferencia':
        message = "Olá! Vim do chat da Lívia e preciso de ajuda com transferência de veículo.";
        break;
      case 'ipva':
        message = "Olá! Vim do chat da Lívia e preciso de ajuda com IPVA e licenciamento.";
        break;
      default:
        message = "Olá! Vim do chat da Lívia e preciso de atendimento especializado.";
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleFinishChat = () => {
    setMessages([]);
    setIsOpen(false);
  };

  const detectServiceIntent = (userMessage: string): 'multa' | 'transferencia' | 'ipva' | 'geral' => {
    const message = userMessage.toLowerCase();

    if (message.includes('multa') || message.includes('infração') || message.includes('pagar multa')) {
      return 'multa';
    }
    if (message.includes('transferência') || message.includes('transferir') || message.includes('mudança de proprietário')) {
      return 'transferencia';
    }
    if (message.includes('ipva') || message.includes('licenciamento') || message.includes('taxa')) {
      return 'ipva';
    }

    return 'geral';
  };

  const getServiceResponse = (intent: 'multa' | 'transferencia' | 'ipva' | 'geral', userMessage: string): string => {
    switch (intent) {
      case 'multa':
        return "Perfeito, querido! Para pagar multa é muito simples mesmo! Vou te encaminhar para um atendente da nossa área especializada. Se você já quiser fornecer os dados do veículo e do condutor, agilizamos o atendimento e já encaminhamos direto para a área responsável! 😊";
      case 'transferencia':
        return "Ótimo! Transferência de veículo é uma das nossas especialidades! Vou te conectar com nossa equipe especializada que vai te orientar sobre todos os documentos necessários e agilizar todo o processo para você!";
      case 'ipva':
        return "Perfeito! IPVA e licenciamento a gente resolve rapidinho! Nossa equipe vai te ajudar com parcelamento, consulta de débitos e emissão do CRLV-e. Vou te encaminhar para o atendimento especializado!";
      default:
        return "Claro, querido! Vou te encaminhar para um de nossos atendentes especialistas que vai te ajudar com todo carinho e resolver sua situação da melhor forma possível!";
    }
  };

  const handleSendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage: Message = {
      text: inputText,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputText;
    setInputText('');
    setIsLoading(true);

    // Detectar intenção do usuário
    const serviceIntent = detectServiceIntent(currentInput);

    // Simular resposta da Lívia com base na intenção
    setTimeout(() => {
      const responseText = getServiceResponse(serviceIntent, currentInput);

      const botMessage: Message = {
        text: responseText,
        isUser: false,
        timestamp: new Date(),
        hasActions: true,
        actionType: serviceIntent,
      };

      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  const renderActionButtons = (actionType: 'multa' | 'transferencia' | 'ipva' | 'geral') => (
    <Box className={classes.actionButtons}>
      <Button
        className={`${classes.actionButton} ${classes.whatsappButton}`}
        startIcon={<WhatsAppIcon />}
        onClick={() => handleWhatsAppContact(actionType)}
        fullWidth
      >
        Falar com Área Responsável no WhatsApp
      </Button>
      <Button
        className={classes.actionButton}
        startIcon={<ExitIcon />}
        onClick={handleFinishChat}
        fullWidth
      >
        Finalizar Chat
      </Button>
    </Box>
  );

  return (
    <>
      <Zoom in={true} timeout={1000}>
        <IconButton
          className={classes.floatingButton}
          onClick={() => setIsOpen(true)}
          aria-label="Abrir chat da Lívia"
        >
          <ChatIcon fontSize="large" />
        </IconButton>
      </Zoom>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className={classes.dialog}
        TransitionComponent={Fade}
        transitionDuration={300}
      >
        <DialogTitle className={classes.dialogTitle}>
          <Box display="flex" alignItems="center">
            <Avatar className={classes.avatarBot}>
              <BotIcon />
            </Avatar>
            <Box>
              <Typography variant="h6" component="div" style={{ 
                fontWeight: 700, 
                fontFamily: '"Playfair Display", "Georgia", serif',
                letterSpacing: '0.5px'
              }}>
                Lívia - Atendente
              </Typography>
              <Typography variant="caption" style={{ 
                opacity: 0.9,
                fontFamily: '"Playfair Display", "Georgia", serif',
                fontWeight: 500,
                fontSize: '0.75rem'
              }}>
                Despachante Beto Dheon
              </Typography>
            </Box>
          </Box>
          <IconButton
            onClick={() => setIsOpen(false)}
            style={{ color: '#ffffff' }}
            size="small"
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent className={classes.dialogContent}>
          <Box className={classes.messagesContainer}>
            {messages.length === 1 && (
              <Typography className={classes.welcomeMessage} variant="caption">
                Chat seguro e confidencial
              </Typography>
            )}

            {messages.map((message, index) => (
              <Paper
                key={index}
                className={message.isUser ? classes.messageUser : classes.messageBot}
                elevation={0}
              >
                {!message.isUser && (
                  <Box display="flex" alignItems="flex-start" marginBottom={1}>
                    <Avatar className={classes.avatarBot} style={{ width: 24, height: 24, marginRight: 8 }}>
                      <BotIcon style={{ fontSize: 16 }} />
                    </Avatar>
                    <Typography variant="caption" style={{ color: '#000000' }}> {/* Texto preto */}
                      Lívia
                    </Typography>
                  </Box>
                )}
                <Typography variant="body2" style={{ lineHeight: 1.5, color: '#000000' }}> {/* Texto preto */}
                  {message.text}
                </Typography>

                {message.hasActions && message.actionType && renderActionButtons(message.actionType)}
              </Paper>
            ))}

            {isLoading && (
              <Paper className={classes.messageBot} elevation={0}>
                <Box display="flex" alignItems="center" >
                  <CircularProgress size={16} style={{ color: '#000000' }} /> {/* Texto preto */}
                  <Typography variant="body2" style={{ color: '#000000' }}> {/* Texto preto */}
                    Lívia está digitando...
                  </Typography>
                </Box>
              </Paper>
            )}

            <div ref={messagesEndRef} />
          </Box>

          <Box className={classes.inputContainer}>
            <Box display="flex" alignItems="flex-end" >
              <TextField
                fullWidth
                multiline
                maxRows={3}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Digite sua mensagem..."
                variant="outlined"
                className={classes.inputField}
                disabled={isLoading}
                size="small"
              />
              <IconButton
                className={classes.sendButton}
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isLoading}
              >
                <SendIcon />
              </IconButton>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ChatBot;