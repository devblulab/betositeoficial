Skip to content
devblulab's projects
devblulab's projects

Hobby

betositeoficial

DL4VuXEDm


Find…
F

Source
Output
src/pages/beto/dashboard/index.tsx

                <Grid container spacing={2} alignItems="center" justifyContent="space-between">
                  <Grid item>
                    <Typography variant="body2" color="textSecondary">
                      Mostrando {indexOfFirstDocument + 1} - {Math.min(indexOfLastDocument, filteredDocuments.length)} de {filteredDocuments.length} documentos
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" color="textSecondary">
                      Página {currentPage} de {totalPages}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>

              {/* Lista de documentos da página atual */}
              {currentDocuments.map((doc) => (
              <Card key={doc.id} className={classes.documentCard}>
                <CardContent className={classes.documentHeader}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} sm={8}>
                      <Typography className={classes.documentTitle}>
                        {doc.nomeempresa || doc.nomevendedor}
                      </Typography>
                      <div className={classes.documentSubtitle}>
                        <DirectionsCar fontSize="small" />
                        <span>{doc.id}</span>
                        <span>•</span>
                        <Person fontSize="small" />
                        <span>{doc.nomevendedor}</span>
                        <span>•</span>
                        <DateRange fontSize="small" />
                        <span>{formatDate(doc.dataCriacao)}</span>
                      </div>
                      <Box mt={1}>
                        <Typography variant="body2" color="textSecondary">
                          <strong>Valor:</strong> R$ {doc.valordevenda}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Box display="flex" flexDirection="column" style={{ gap:1 }}>
                        <Chip
                          icon={getStatusIcon(doc.status)}
                          label={doc.status || 'Pendente'}
                          style={{
                            backgroundColor: getStatusColor(doc.status || 'Pendente').background,
                            color: getStatusColor(doc.status || 'Pendente').color,
                            fontWeight: 'bold',
                          }}
                          className={classes.statusChip}
                        />
                        <FormControl size="small" className={classes.statusSelect}>
                          <Select
                            value={doc.status || 'Pendente'}
                            onChange={(e) => handleStatusUpdate(doc.id, e.target.value as string)}
                            variant="outlined"
                          >
                            <MenuItem value="Pendente">⏳ Pendente</MenuItem>
                            <MenuItem value="Analisando">🔍 Analisando</MenuItem>
                            <MenuItem value="Faltando Documentação">⚠️ Faltando Doc</MenuItem>
                            <MenuItem value="Aguardando Detran">⏰ Aguardando Detran</MenuItem>
                            <MenuItem value="Pronto">✅ Pronto</MenuItem>
                            <MenuItem value="Concluído">🎯 Concluído</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>

                <CardActions>
                  <Button
                    onClick={() => setExpanded(expanded === doc.id ? null : doc.id)}
                    className={classes.expandButton}
                    startIcon={expanded === doc.id ? <ExpandLess /> : <ExpandMore />}
                    size="small"
                  >
                    {expanded === doc.id ? 'Fechar Documento' : 'Ver Documento'}
                  </Button>
                </CardActions>

                <Collapse in={expanded === doc.id} timeout="auto" unmountOnExit>
                  <div className={classes.expandedContent}>
                    <DocumentPreview doc={doc} />
                  </div>
                </Collapse>
              </Card>
