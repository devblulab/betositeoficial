import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';
import {
  EmojiObjects,
  Send,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    padding: theme.spacing(2),
    color: 'black',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  chatContainer: {
    height: 'calc(100vh - 200px)',
    display: 'flex',
    flexDirection: 'column',
    background: '#fff',
    color: 'black',
    borderRadius: theme.spacing(2),
    overflow: 'hidden',
  },
  header: {
    padding: theme.spacing(2),
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'black',
    textAlign: 'center',
  },
  messageList: {
    flex: 1,
    color: 'black',
    overflowY: 'auto',
    padding: theme.spacing(1),
  },
  inputArea: {
    padding: theme.spacing(2),
    borderTop: '1px solid #eee',
    display: 'flex',
    color: 'black',
    gap: theme.spacing(1),
  },
  userMessage: {
    marginLeft: 'auto',
    maxWidth: '70%',
    background: '#667eea',
    color: 'black',
    borderRadius: '18px 18px 4px 18px',
    padding: theme.spacing(1, 2),
    margin: theme.spacing(0.5),
  },
  aiMessage: {
    marginRight: 'auto',
    color: 'black',
    maxWidth: '70%',
    background: '#f5f5f5',
    borderRadius: '18px 18px 18px 4px',
    padding: theme.spacing(1, 2),
    margin: theme.spacing(0.5),
  },
}));

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const ChatIA: React.FC = () => {
  const classes = useStyles();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Olá! Sou a Lívia, sua assistente de IA. Como posso ajudar você hoje?',
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: message,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setMessage('');

    // Simula resposta da IA
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text:
          'Entendi sua solicitação. Estou processando as informações para te dar a melhor resposta possível.',
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.chatContainer}>
        <div className={classes.header}>
          <EmojiObjects style={{ fontSize: 48, marginBottom: 8 }} />
          <Typography variant="h5" gutterBottom>
            Chat com IA Lívia
          </Typography>
          <Typography variant="body2">
            Assistente Inteligente para Despachante
          </Typography>
        </div>

        <div className={classes.messageList}>
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={msg.sender === 'user' ? classes.userMessage : classes.aiMessage}
            >
              <Typography variant="body1">{msg.text}</Typography>
              <Typography variant="caption" style={{ opacity: 0.7, fontSize: '0.7rem' }}>
                {msg.timestamp.toLocaleTimeString()}
              </Typography>
            </div>
          ))}
        </div>

        <div className={classes.inputArea}>
          <TextField
            fullWidth
            placeholder="Digite sua mensagem..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            variant="outlined"
            size="small"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSendMessage}
            disabled={!message.trim()}
          >
            <Send />
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default ChatIA;