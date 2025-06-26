// ✅ Arquivo 1: pages/servicos/index.tsx (Lista de Serviços com Filtro e Busca)

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box, Container, Typography, TextField, InputAdornment, Grid, Card, CardContent,
  Chip, Tabs, Tab, Paper
} from '@material-ui/core';
import {
  Search, TrendingUp, Assignment, Security, Person, DirectionsCar, Description,
  Warning, Business, Category, CheckCircle, Build, LocalShipping, AccountBox
} from '@material-ui/icons';
import { motion, AnimatePresence } from 'framer-motion';
import { servicos, categorias } from '../../data/servicos';

const useStyles = makeStyles((theme) => ({
  root: { minHeight: '100vh', backgroundColor: 'rgba(0, 0, 0, 0)' },
  searchContainer: { background: '#fff', borderRadius: theme.spacing(2), padding: theme.spacing(1), marginBottom: theme.spacing(1), boxShadow: '0 4px 20px rgba(0,0,0,0.1)' },
  searchInput: {
    '& .MuiOutlinedInput-root': {
      borderRadius: theme.spacing(2), backgroundColor: '#f9fafb',
      '&:hover': { backgroundColor: '#f3f4f6' },
      '&.Mui-focused': { backgroundColor: '#fff' },
    },
  },
  categoryTabs: {
    marginBottom: theme.spacing(3),
    '& .MuiTab-root': { textTransform: 'none', fontWeight: 'bold', minWidth: 'auto', padding: '6px 16px', color: '#6b7280', '&.Mui-selected': { color: '#2563eb' } },
    '& .MuiTabs-indicator': { backgroundColor: '#2563eb', height: 3, borderRadius: '3px 3px 0 0' },
  },
  serviceCard: {
    borderRadius: theme.spacing(1.5), transition: 'all 0.3s', cursor: 'pointer', border: '1px solid #e5e7eb',
    display: 'flex', flexDirection: 'column', height: '100%',
    '&:hover': { transform: 'translateY(-8px) scale(1.02)', boxShadow: '0 20px 40px rgba(37, 99, 235, 0.15)', borderColor: '#2563eb' },
  },
  serviceIcon: { fontSize: 48, color: '#2563eb', marginBottom: theme.spacing(2) },
  serviceName: { fontWeight: 'bold', fontSize: '1.1rem', color: '#111827', marginBottom: theme.spacing(1) },
  servicePrice: { fontSize: '1.2rem', fontWeight: 'bold', color: '#059669', marginTop: 'auto' },
  categoryChip: { fontSize: '0.75rem', height: 24, fontWeight: 'bold', backgroundColor: '#dbeafe', color: '#1e40af', marginBottom: theme.spacing(1) },
  noResults: { textAlign: 'center', padding: theme.spacing(8), color: '#6b7280' },
  loadingContainer: { display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px' },
}));

const iconMap: { [key: string]: React.ReactNode } = {
  LocalShipping: <LocalShipping />, Search: <Search />, TrendingUp: <TrendingUp />, Person: <Person />, Build: <Build />,
  Description: <Description />, Assignment: <Assignment />, CheckCircle: <CheckCircle />, Security: <Security />, Business: <Business />,
  Warning: <Warning />, AccountBox: <AccountBox />, Receipt: <Assignment />
};

const getIcon = (iconKey: string): React.ReactNode => {
  return iconMap[iconKey] ?? <Assignment />;
};

const Servicos: React.FC = () => {
  const classes = useStyles();
  const router = useRouter();
  const [termoBusca, setTermoBusca] = useState('');
  const [categoriaAtiva, setCategoriaAtiva] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const servicosFiltrados = useMemo(() => {
    let filtered = servicos;
    if (categoriaAtiva > 0) {
      const categoriaSelecionada = categorias[categoriaAtiva];
      filtered = filtered.filter(servico => servico.categoria === categoriaSelecionada);
    }
    if (termoBusca.trim()) {
      filtered = filtered.filter(servico =>
        servico.nome.toLowerCase().includes(termoBusca.toLowerCase()) ||
        servico.categoria.toLowerCase().includes(termoBusca.toLowerCase())
      );
    }
    return filtered;
  }, [termoBusca, categoriaAtiva]);

  const handleServiceClick = async (servicoId: number) => {
    setIsLoading(true);
    await router.push(`/servicos/${servicoId}`);
    setIsLoading(false);
  };

  return (
    <Box className={classes.root}>
      <Container maxWidth="xl" style={{ padding: '14px', backgroundColor: 'rgba(0, 0, 0, 0)' }}>


        

        <Paper style={{ marginBottom: 24 }}>
          <Tabs
            value={categoriaAtiva}
            onChange={(e, newValue) => setCategoriaAtiva(newValue)}
            variant="scrollable"
            scrollButtons="auto"
            className={classes.categoryTabs}
          >
            {categorias.map((categoria, index) => (
              <Tab
                key={categoria}
                label={categoria}
                icon={index === 0 ? <Category /> : undefined}
              />
            ))}
          </Tabs>
        </Paper>

        {isLoading ? (
          <Box className={classes.loadingContainer}>
            <Typography variant="h6" color="textSecondary">
              Carregando...
            </Typography>
          </Box>
        ) : servicosFiltrados.length > 0 ? (
          <Grid container spacing={3}>
            <AnimatePresence>
              {servicosFiltrados.map((servico, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={servico.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Card
                      className={classes.serviceCard}
                      onClick={() => handleServiceClick(servico.id)}
                    >
                      <CardContent>
                        <Box display="flex" justifyContent="center" mb={2}>
                          <Box className={classes.serviceIcon}>
                            {getIcon(servico.icone)}
                          </Box>
                        </Box>
                        <Chip
                          label={servico.categoria}
                          size="small"
                          className={classes.categoryChip}
                        />
                        <Typography className={classes.serviceName}>
                          {servico.nome}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          style={{ marginBottom: 16, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}
                        >
                          {servico.descricao}
                        </Typography>
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                          <Typography className={classes.servicePrice}>
                            R$ {servico.valor}
                          </Typography>
                          <Chip
                            label={servico.tipo}
                            size="small"
                            style={{ backgroundColor: servico.tipo === 'TAXAS' ? '#dcfce7' : '#fef3c7', color: servico.tipo === 'TAXAS' ? '#166534' : '#92400e', fontSize: '0.7rem' }}
                          />
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </AnimatePresence>
          </Grid>
        ) : (
          <Box className={classes.noResults}>
            <Search style={{ fontSize: 64, color: '#d1d5db', marginBottom: 16 }} />
            <Typography variant="h6">Nenhum serviço encontrado</Typography>
            <Typography variant="body2" color="textSecondary">
              Tente ajustar os filtros ou termo de busca
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Servicos;
