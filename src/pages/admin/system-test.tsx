
import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography, Button, Grid, Chip } from '@material-ui/core';
import { CheckCircle, Error, Warning } from '@material-ui/icons';
import { Alert } from '@material-ui/lab';
import { testAllAPIs } from '@/utils/firebaseTest';

interface TestResult {
  firebase: {
    success: boolean;
    message: string;
    documentsCount?: number;
    newDocId?: string;
    error?: string;
  };
  apis: {
    bludata: boolean;
    gemini: boolean;
    cnpja: boolean;
    apicpf: boolean;
    digisac: boolean;
  };
}

export default function SystemTest() {
  const [testResults, setTestResults] = useState<TestResult | null>(null);
  const [loading, setLoading] = useState(false);

  const runTests = async () => {
    setLoading(true);
    try {
      const results = await testAllAPIs();
      setTestResults(results);
    } catch (error) {
      console.error('Erro ao executar testes:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    runTests();
  }, []);

  const getStatusIcon = (status: boolean) => {
    return status ? <CheckCircle style={{ color: '#4caf50' }} /> : <Error style={{ color: '#f44336' }} />;
  };

  const getStatusColor = (status: boolean) => {
    return status ? 'primary' : 'secondary';
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Sistema - Teste de Produção
      </Typography>
      
      <Alert severity="info" style={{ marginBottom: 20 }}>
        Esta página verifica se todas as configurações estão prontas para produção.
      </Alert>

      <Grid container spacing={3}>
        {/* Firebase Tests */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                🔥 Firebase Connection
              </Typography>
              {testResults?.firebase ? (
                <Box>
                  <Box display="flex" alignItems="center" mb={1}>
                    {getStatusIcon(testResults.firebase.success)}
                    <Typography variant="body1" style={{ marginLeft: 8 }}>
                      {testResults.firebase.message}
                    </Typography>
                  </Box>
                  {testResults.firebase.success && (
                    <Box>
                      <Typography variant="body2">
                        Documentos encontrados: {testResults.firebase.documentsCount}
                      </Typography>
                      <Typography variant="body2">
                        Documento de teste criado: {testResults.firebase.newDocId}
                      </Typography>
                    </Box>
                  )}
                  {testResults.firebase.error && (
                    <Typography variant="body2" color="error">
                      Erro: {testResults.firebase.error}
                    </Typography>
                  )}
                </Box>
              ) : (
                <Typography>Testando...</Typography>
              )}
            </CardContent>
          </Card>
        </Grid>

        {/* API Keys Status */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                🔑 API Keys Status
              </Typography>
              {testResults?.apis && (
                <Box>
                  {Object.entries(testResults.apis).map(([api, status]) => (
                    <Box key={api} display="flex" alignItems="center" mb={1}>
                      {getStatusIcon(status)}
                      <Chip
                        label={api.toUpperCase()}
                        color={getStatusColor(status)}
                        size="small"
                        style={{ marginLeft: 8 }}
                      />
                    </Box>
                  ))}
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid>

        {/* Environment Info */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                🌍 Environment Info
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="body2">
                    <strong>Node Environment:</strong> {process.env.NODE_ENV || 'development'}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2">
                    <strong>Firebase Project:</strong> {process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box mt={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={runTests}
          disabled={loading}
        >
          {loading ? 'Testando...' : 'Executar Testes Novamente'}
        </Button>
      </Box>
    </Box>
  );
}
