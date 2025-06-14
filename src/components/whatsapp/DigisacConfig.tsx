
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
  Switch,
  FormControlLabel,
  Card,
  CardContent,
  Grid,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@material-ui/core';
import {
  Settings,
  
  Security,
  Speed,
  CheckCircle,
  Warning,
  Extension,

  Notifications,
 
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  configCard: {
    marginBottom: theme.spacing(2),
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
  },
  statusCard: {
    marginBottom: theme.spacing(2),
    background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    color: 'white',
  },
  warningCard: {
    marginBottom: theme.spacing(2),
    background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    color: 'black',
  },
}));

interface DigisacConfigProps {
  open: boolean;
  onClose: () => void;
}

const DigisacConfig: React.FC<DigisacConfigProps> = ({ open, onClose }) => {
  const classes = useStyles();
  const [apiKey, setApiKey] = useState('dk_live_abc123...');
  const [webhookUrl, setWebhookUrl] = useState('https://api.example.com/webhook');
  const [autoSync, setAutoSync] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [analytics, setAnalytics] = useState(true);

  const integrationStatus = {
    api: true,
    webhook: true,
    sync: true,
    contacts: 1247,
    messages: 8932,
    lastSync: new Date(),
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Extension style={{ marginRight: 8, color: '#FF6B35' }} />
          Configurações Digisac
        </div>
      </DialogTitle>
      
      <DialogContent>
        <Grid container spacing={3}>
          {/* Status da Integração */}
          <Grid item xs={12}>
            <Card className={classes.statusCard}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  <CheckCircle style={{ marginRight: 8 }} />
                  Status da Integração
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography variant="body2">
                      API: {integrationStatus.api ? 'Conectada' : 'Desconectada'}
                    </Typography>
                    <Typography variant="body2">
                      Webhook: {integrationStatus.webhook ? 'Ativo' : 'Inativo'}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">
                      Contatos: {integrationStatus.contacts.toLocaleString()}
                    </Typography>
                    <Typography variant="body2">
                      Mensagens: {integrationStatus.messages.toLocaleString()}
                    </Typography>
                  </Grid>
                </Grid>
                <Typography variant="caption">
                  Última sincronização: {integrationStatus.lastSync.toLocaleString()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Configurações da API */}
          <Grid item xs={12}>
            <Card className={classes.configCard}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  <Extension style={{ marginRight: 8 }} />
                  Configurações da API
                </Typography>
                <TextField
                  fullWidth
                  label="Chave da API Digisac"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  margin="normal"
                  type="password"
                  InputProps={{
                    style: { color: 'white' },
                  }}
                  InputLabelProps={{
                    style: { color: 'rgba(255,255,255,0.7)' },
                  }}
                />
                <TextField
                  fullWidth
                  label="URL do Webhook"
                  value={webhookUrl}
                  onChange={(e) => setWebhookUrl(e.target.value)}
                  margin="normal"
                  InputProps={{
                    style: { color: 'white' },
                  }}
                  InputLabelProps={{
                    style: { color: 'rgba(255,255,255,0.7)' },
                  }}
                />
              </CardContent>
            </Card>
          </Grid>

          {/* Configurações de Sincronização */}
          <Grid item xs={12} md={6}>
            <Card className={classes.configCard}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  <Extension style={{ marginRight: 8 }} />
                  Sincronização
                </Typography>
                <FormControlLabel
                  control={
                    <Switch
                      checked={autoSync}
                      onChange={(e) => setAutoSync(e.target.checked)}
                      color="secondary"
                    />
                  }
                  label="Sincronização Automática"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={notifications}
                      onChange={(e) => setNotifications(e.target.checked)}
                      color="secondary"
                    />
                  }
                  label="Notificações Push"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={analytics}
                      onChange={(e) => setAnalytics(e.target.checked)}
                      color="secondary"
                    />
                  }
                  label="Analytics Avançado"
                />
              </CardContent>
            </Card>
          </Grid>

          {/* Recursos Disponíveis */}
          <Grid item xs={12} md={6}>
            <Card className={classes.configCard}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  <Settings style={{ marginRight: 8 }} />
                  Recursos Ativos
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemIcon><CheckCircle style={{ color: '#4CAF50' }} /></ListItemIcon>
                    <ListItemText primary="Chatbot Inteligente" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><CheckCircle style={{ color: '#4CAF50' }} /></ListItemIcon>
                    <ListItemText primary="CRM Integrado" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><CheckCircle style={{ color: '#4CAF50' }} /></ListItemIcon>
                    <ListItemText primary="Análise de Sentimento" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><CheckCircle style={{ color: '#4CAF50' }} /></ListItemIcon>
                    <ListItemText primary="Automação de Vendas" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><CheckCircle style={{ color: '#4CAF50' }} /></ListItemIcon>
                    <ListItemText primary="Relatórios Avançados" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>

          {/* Alertas e Avisos */}
          <Grid item xs={12}>
            <Card className={classes.warningCard}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  <Warning style={{ marginRight: 8 }} />
                  Alertas do Sistema
                </Typography>
                <Typography variant="body2" gutterBottom>
                  • Limite de mensagens: 8.932 / 10.000 (89.3%)
                </Typography>
                <Typography variant="body2" gutterBottom>
                  • Próxima renovação: 15 dias
                </Typography>
                <Typography variant="body2" gutterBottom>
                  • Backup automático: Ativado
                </Typography>
                <div style={{ marginTop: 16 }}>
                  <Chip label="Premium" style={{ backgroundColor: '#FFD700', color: 'black', marginRight: 8 }} />
                  <Chip label="WhatsApp Business API" style={{ backgroundColor: '#25D366', color: 'white' }} />
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancelar
        </Button>
        <Button 
          variant="contained" 
          color="primary"
          style={{ backgroundColor: '#FF6B35', color: 'white' }}
        >
          Salvar Configurações
        </Button>
        <Button 
          variant="contained" 
          color="secondary"
          onClick={() => window.open('https://app.digisac.com', '_blank')}
        >
          Abrir Digisac
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DigisacConfig;
