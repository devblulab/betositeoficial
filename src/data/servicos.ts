export interface Servico {
  id: number;
  nome: string;
  categoria: string;
  icone: string;
  descricao: string;
  documentos: string[];
  valor: string;
  tipo: 'TAXAS' | 'OUTRAS DESPESAS';
}

export const servicos: Servico[] = [
  {
    id: 1017,
    nome: "ADESIVO ANTT",
    categoria: "Serviços de ANTT e Transporte",
    icone: "TruckIcon",
    descricao: "Certificação obrigatória para veículos de transporte de cargas, incluindo aplicação de adesivos identificadores para regularização junto à ANTT.",
    documentos: ["CRLV atualizado", "Documento de identificação", "Comprovante de endereço"],
    valor: "20,00",
    tipo: "TAXAS"
  },
  {
    id: 1093,
    nome: "VISTORIA CARRO",
    categoria: "Vistorias e Inspeções",
    icone: "MagnifyingGlassIcon",
    descricao: "Inspeção técnica obrigatória para renovação do licenciamento anual, verificando condições de segurança e emissões do veículo.",
    documentos: ["CRLV original", "Comprovante de IPVA", "Comprovante de seguro obrigatório"],
    valor: "240,00",
    tipo: "TAXAS"
  },
  {
    id: 1001,
    nome: "TRANSFERÊNCIA DE PROPRIEDADE",
    categoria: "Transferências",
    icone: "ArrowRightIcon",
    descricao: "Processo completo de transferência de propriedade de veículo, incluindo toda documentação necessária.",
    documentos: ["CRLV", "CRV", "Comprovante de venda", "RG e CPF de ambas as partes"],
    valor: "350,00",
    tipo: "TAXAS"
  },
  {
    id: 1002,
    nome: "PRIMEIRA HABILITAÇÃO",
    categoria: "CNH e Habilitação",
    icone: "UserIcon",
    descricao: "Processo completo para obtenção da primeira carteira nacional de habilitação categoria B.",
    documentos: ["RG", "CPF", "Comprovante de residência", "Foto 3x4"],
    valor: "680,00",
    tipo: "TAXAS"
  },
  {
    id: 1003,
    nome: "RENOVAÇÃO CNH",
    categoria: "CNH e Habilitação",
    icone: "ArrowPathIcon",
    descricao: "Renovação da carteira nacional de habilitação com exames médicos e psicológicos.",
    documentos: ["CNH atual", "RG", "CPF", "Foto 3x4", "Exames médicos"],
    valor: "280,00",
    tipo: "TAXAS"
  },
  {
    id: 1004,
    nome: "LICENCIAMENTO ANUAL",
    categoria: "Licenciamento",
    icone: "DocumentTextIcon",
    descricao: "Licenciamento anual obrigatório para circulação do veículo, incluindo pagamento de taxas.",
    documentos: ["CRLV", "Comprovante de IPVA", "Seguro obrigatório"],
    valor: "150,00",
    tipo: "TAXAS"
  },
  {
    id: 1005,
    nome: "SEGUNDA VIA CRLV",
    categoria: "Documentos Veiculares",
    icone: "DocumentDuplicateIcon",
    descricao: "Emissão de segunda via do Certificado de Registro de Licenciamento de Veículo.",
    documentos: ["RG", "CPF", "Comprovante de residência", "Boletim de ocorrência (se aplicável)"],
    valor: "95,00",
    tipo: "TAXAS"
  },
  {
    id: 1006,
    nome: "MUDANÇA DE CATEGORIA CNH",
    categoria: "CNH e Habilitação",
    icone: "ArrowUpIcon",
    descricao: "Processo para mudança de categoria da CNH (ex: B para C, D ou E).",
    documentos: ["CNH atual", "RG", "CPF", "Exames médicos", "Curso teórico"],
    valor: "420,00",
    tipo: "TAXAS"
  },
  {
    id: 1007,
    nome: "ATPV - AUTORIZAÇÃO TRANSPORTE",
    categoria: "Serviços de ANTT e Transporte",
    icone: "ClipboardDocumentCheckIcon",
    descricao: "Autorização para Transporte Público de Veículos, necessária para empresas transportadoras.",
    documentos: ["Contrato social", "CNPJ", "Alvará de funcionamento", "CRLV dos veículos"],
    valor: "580,00",
    tipo: "TAXAS"
  },
  {
    id: 1008,
    nome: "ANUÊNCIA BOMBEIROS",
    categoria: "Anuências",
    icone: "ShieldCheckIcon",
    descricao: "Solicitação de anuência junto ao Corpo de Bombeiros para estabelecimentos comerciais.",
    documentos: ["Projeto arquitetônico", "ART do responsável técnico", "Alvará municipal"],
    valor: "320,00",
    tipo: "OUTRAS DESPESAS"
  },
  {
    id: 1009,
    nome: "COMUNICAÇÃO DE VENDA",
    categoria: "Transferências",
    icone: "SpeakerWaveIcon",
    descricao: "Comunicação oficial de venda de veículo para transferir responsabilidades.",
    documentos: ["CRLV", "Comprovante de venda", "RG e CPF do vendedor"],
    valor: "45,00",
    tipo: "TAXAS"
  },
  {
    id: 1010,
    nome: "VISTORIA MOTO",
    categoria: "Vistorias e Inspeções",
    icone: "CogIcon",
    descricao: "Vistoria específica para motocicletas, incluindo verificação de componentes de segurança.",
    documentos: ["CRLV da motocicleta", "RG", "CPF", "Comprovante de IPVA"],
    valor: "180,00",
    tipo: "TAXAS"
  },
  {
    id: 1011,
    nome: "REGULARIZAÇÃO MULTAS",
    categoria: "Multas e Infrações",
    icone: "ExclamationTriangleIcon",
    descricao: "Serviço de regularização e parcelamento de multas de trânsito em atraso.",
    documentos: ["CNH", "CRLV", "Comprovantes das multas"],
    valor: "120,00",
    tipo: "OUTRAS DESPESAS"
  },
  {
    id: 1012,
    nome: "INCLUSÃO DE CONDUTOR",
    categoria: "CNH e Habilitação",
    icone: "UserPlusIcon",
    descricao: "Inclusão de condutor autorizado para conduzir veículo de terceiros.",
    documentos: ["CNH do condutor", "RG", "CPF", "Autorização do proprietário"],
    valor: "75,00",
    tipo: "TAXAS"
  },
  {
    id: 201,
    nome: "ADESIVO ANTT",
    categoria: "ANTT",
    valor: "20,00",
    tipo: "TAXAS",
    descricao: "Adesivo obrigatório para veículos de transporte de cargas",
    icone: "TruckIcon"
  },
  {
    id: 202,
    nome: "ALTERAÇÃO DE REGISTRO (RS)",
    categoria: "Registro",
    valor: "0,00",
    tipo: "TAXAS",
    descricao: "Alteração de dados no registro do veículo",
    icone: "DocumentTextIcon"
  },
  {
    id: 203,
    nome: "ANTT (CADASTRO, INCLUSÃO, EXCLUSÃO, RENOVAÇÃO)",
    categoria: "ANTT",
    valor: "70,00",
    tipo: "OUTRAS DESPESAS",
    descricao: "Serviços relacionados ao cadastro na ANTT",
    icone: "DocumentDuplicateIcon"
  },
  {
    id: 204,
    nome: "ASSINATURA DIGITAL",
    categoria: "Digital",
    valor: "9,00",
    tipo: "OUTRAS DESPESAS",
    descricao: "Serviço de assinatura digital para documentos",
    icone: "DocumentTextIcon"
  },
  {
    id: 205,
    nome: "ASSINATURA DIGITAL + COM DE VENDA",
    categoria: "Digital",
    valor: "26,00",
    tipo: "OUTRAS DESPESAS",
    descricao: "Assinatura digital com comunicação de venda",
    icone: "DocumentTextIcon"
  },
  {
    id: 206,
    nome: "ATPVE",
    categoria: "Autorização",
    valor: "69,00",
    tipo: "OUTRAS DESPESAS",
    descricao: "Autorização para Transporte de Produtos Perigosos em Veículos Especiais",
    icone: "ExclamationTriangleIcon"
  },
  {
    id: 207,
    nome: "ATPVE + ASS + COMUNICAÇÃO DE VENDA",
    categoria: "Autorização",
    valor: "46,00",
    tipo: "TAXAS",
    descricao: "ATPVE com assinatura e comunicação de venda",
    icone: "ExclamationTriangleIcon"
  },
  {
    id: 208,
    nome: "ATPVE + ASSINATURA + COM DE VENDA",
    categoria: "Autorização",
    valor: "46,00",
    tipo: "OUTRAS DESPESAS",
    descricao: "ATPVE completo com assinatura e comunicação",
    icone: "ExclamationTriangleIcon"
  },
  {
    id: 209,
    nome: "ATPVE + ASSINATURA DIGITAL",
    categoria: "Autorização",
    valor: "29,00",
    tipo: "OUTRAS DESPESAS",
    descricao: "ATPVE com assinatura digital",
    icone: "ExclamationTriangleIcon"
  },
  {
    id: 210,
    nome: "ATUALIZAÇÃO DE ITR",
    categoria: "Imposto",
    valor: "0,00",
    tipo: "TAXAS",
    descricao: "Atualização do Imposto Territorial Rural",
    icone: "DocumentTextIcon"
  },
  {
    id: 211,
    nome: "AUTENTICAÇÃO",
    categoria: "Cartório",
    valor: "7,00",
    tipo: "OUTRAS DESPESAS",
    descricao: "Serviço de autenticação de documentos",
    icone: "ShieldCheckIcon"
  },
  {
    id: 212,
    nome: "AUTORIZAÇÕES",
    categoria: "Autorização",
    valor: "0,00",
    tipo: "TAXAS",
    descricao: "Diversas autorizações necessárias",
    icone: "ClipboardDocumentCheckIcon"
  },
  {
    id: 213,
    nome: "BAIXA DA RESTRIÇÃO ADMINISTRATIVA - TAXA",
    categoria: "Baixa",
    valor: "30,00",
    tipo: "TAXAS",
    descricao: "Taxa para baixa de restrição administrativa",
    icone: "DocumentTextIcon"
  },
  {
    id: 214,
    nome: "BAIXA DE SINISTRO",
    categoria: "Baixa",
    valor: "90,00",
    tipo: "OUTRAS DESPESAS",
    descricao: "Procedimento para baixa de sinistro no veículo",
    icone: "ExclamationTriangleIcon"
  },
  {
    id: 215,
    nome: "BOLETIM DE OCORRÊNCIA",
    categoria: "Polícia",
    valor: "10,00",
    tipo: "OUTRAS DESPESAS",
    descricao: "Registro de boletim de ocorrência",
    icone: "DocumentTextIcon"
  },
  {
    id: 216,
    nome: "BOLETIM DE OCORRÊNCIA",
    categoria: "Polícia",
    valor: "35,00",
    tipo: "OUTRAS DESPESAS",
    descricao: "Registro de boletim de ocorrência (valor diferenciado)",
    icone: "DocumentTextIcon"
  },
  {
    id: 217,
    nome: "CADASTRO ANTT",
    categoria: "ANTT",
    valor: "200,00",
    tipo: "TAXAS",
    descricao: "Cadastro completo na ANTT",
    icone: "UserPlusIcon"
  },
  {
    id: 218,
    nome: "CADASTRO DE TROCA DE CHEQUE",
    categoria: "Financeiro",
    valor: "39,00",
    tipo: "OUTRAS DESPESAS",
    descricao: "Cadastro para serviços de troca de cheque",
    icone: "CogIcon"
  },
  {
    id: 219,
    nome: "CARTÓRIO",
    categoria: "Cartório",
    valor: "0,00",
    tipo: "TAXAS",
    descricao: "Serviços de cartório em geral",
    icone: "SpeakerWaveIcon"
  },
  {
    id: 220,
    nome: "CERTIDÃO SIMPLIFICADA",
    categoria: "Certidão",
    valor: "17,00",
    tipo: "TAXAS",
    descricao: "Emissão de certidão simplificada",
    icone: "DocumentTextIcon"
  },
  {
    id: 221,
    nome: "CERTIDÃO INTEIRO TEOR",
    categoria: "Certidão",
    valor: "22,80",
    tipo: "TAXAS",
    descricao: "Emissão de certidão de inteiro teor",
    icone: "DocumentTextIcon"
  },
  {
    id: 222,
    nome: "CHEQUE DEVOLVIDO",
    categoria: "Financeiro",
    valor: "0,00",
    tipo: "OUTRAS DESPESAS",
    descricao: "Taxa para cheque devolvido",
    icone: "CogIcon"
  },
  {
    id: 223,
    nome: "COLAGEM ETIQUETAS",
    categoria: "Identificação",
    valor: "100,00",
    tipo: "TAXAS",
    descricao: "Colagem de etiquetas de identificação",
    icone: "DocumentTextIcon"
  },
  {
    id: 224,
    nome: "COMBO AUTOFÁCIL",
    categoria: "Combo",
    valor: "40,00",
    tipo: "OUTRAS DESPESAS",
    descricao: "Pacote de serviços automotivos",
    icone: "CogIcon"
  },
  {
    id: 225,
    nome: "COMBUSTÍVEL",
    categoria: "Despesas",
    valor: "0,00",
    tipo: "TAXAS",
    descricao: "Taxa relacionada a combustível",
    icone: "CogIcon"
  },
  {
    id: 226,
    nome: "COMUNICAÇÃO DE VENDA",
    categoria: "Transferência",
    valor: "25,00",
    tipo: "OUTRAS DESPESAS",
    descricao: "Comunicação de venda de veículo",
    icone: "ArrowRightIcon"
  },
  {
    id: 227,
    nome: "CONSULTA AO DETRAN",
    categoria: "Consulta",
    valor: "1,00",
    tipo: "OUTRAS DESPESAS",
    descricao: "Consulta de dados no DETRAN",
    icone: "MagnifyingGlassIcon"
  },
  {
    id: 228,
    nome: "CONTRATO",
    categoria: "Documentação",
    valor: "60,00",
    tipo: "OUTRAS DESPESAS",
    descricao: "Elaboração de contrato",
    icone: "DocumentTextIcon"
  },
  {
    id: 229,
    nome: "CONTRATO DE COMODATO",
    categoria: "Documentação",
    valor: "60,00",
    tipo: "OUTRAS DESPESAS",
    descricao: "Elaboração de contrato de comodato",
    icone: "DocumentTextIcon"
  },
  {
    id: 230,
    nome: "CONTRATO SIMPLES",
    categoria: "Documentação",
    valor: "45,00",
    tipo: "OUTRAS DESPESAS",
    descricao: "Elaboração de contrato simples",
    icone: "DocumentTextIcon"
  },
  {
    id: 231,
    nome: "CÓPIAS/XEROX",
    categoria: "Serviços",
    valor: "0,00",
    tipo: "TAXAS",
    descricao: "Serviços de cópias e xerox",
    icone: "DocumentDuplicateIcon"
  },
  {
    id: 232,
    nome: "CORREIO",
    categoria: "Despesas",
    valor: "15,00",
    tipo: "TAXAS",
    descricao: "Taxa de envio pelos correios",
    icone: "ArrowPathIcon"
  },
  {
    id: 233,
    nome: "DÉBITOS DE OUTRA UF",
    categoria: "Débitos",
    valor: "0,00",
    tipo: "TAXAS",
    descricao: "Débitos de outras unidades federativas",
    icone: "DocumentTextIcon"
  },
  {
    id: 234,
    nome: "DECLARAÇÃO",
    categoria: "Documentação",
    valor: "35,00",
    tipo: "OUTRAS DESPESAS",
    descricao: "Elaboração de declaração",
    icone: "DocumentTextIcon"
  },
  {
    id: 235,
    nome: "DESLOCAMENTO PARA ASSINATURA",
    categoria: "Deslocamento",
    valor: "9,00",
    tipo: "OUTRAS DESPESAS",
    descricao: "Taxa de deslocamento para assinatura",
    icone: "UserIcon"
  },
  {
    id: 236,
    nome: "DESPACHANTE DE FORA",
    categoria: "Despachante",
    valor: "0,00",
    tipo: "TAXAS",
    descricao: "Serviços de despachante de outra localidade",
    icone: "UserIcon"
  },
  {
    id: 237,
    nome: "DESPACHANTE DE FORA - CREDITRAN",
    categoria: "Despachante",
    valor: "0,00",
    tipo: "TAXAS",
    descricao: "Serviços de despachante Creditran",
    icone: "UserIcon"
  },
  {
    id: 238,
    nome: "DESPESAS BANCÁRIAS",
    categoria: "Financeiro",
    valor: "25,00",
    tipo: "OUTRAS DESPESAS",
    descricao: "Despesas bancárias diversas",
    icone: "CogIcon"
  },
  {
    id: 239,
    nome: "DESPESAS BANCÁRIAS DE FORA",
    categoria: "Financeiro",
    valor: "30,00",
    tipo: "OUTRAS DESPESAS",
    descricao: "Despesas bancárias de outras localidades",
    icone: "CogIcon"
  },
  {
    id: 240,
    nome: "ECV - CREDITRAN",
    categoria: "ECV",
    valor: "0,00",
    tipo: "TAXAS",
    descricao: "Serviços ECV Creditran",
    icone: "DocumentTextIcon"
  },
  {
    id: 241,
    nome: "EMISSÃO DE CRLV 2ª VIA",
    categoria: "Documento",
    valor: "188,63",
    tipo: "TAXAS",
    descricao: "Emissão de segunda via do CRLV",
    icone: "DocumentDuplicateIcon"
  },
  {
    id: 242,
    nome: "EMISSÃO DE BOLETO",
    categoria: "Financeiro",
    valor: "6,00",
    tipo: "OUTRAS DESPESAS",
    descricao: "Emissão de boleto bancário",
    icone: "DocumentTextIcon"
  },
  {
    id: 243,
    nome: "ENCERRAMENTO DE LEASING",
    categoria: "Financeiro",
    valor: "70,00",
    tipo: "OUTRAS DESPESAS",
    descricao: "Procedimento de encerramento de leasing",
    icone: "CogIcon"
  },
  {
    id: 244,
    nome: "ESCRITURA",
    categoria: "Cartório",
    valor: "0,00",
    tipo: "TAXAS",
    descricao: "Elaboração de escritura",
    icone: "DocumentTextIcon"
  },
  {
    id: 245,
    nome: "EXPEDIÇÃO DE CERTIDÃO DETRAN",
    categoria: "Certidão",
    valor: "27,93",
    tipo: "TAXAS",
    descricao: "Expedição de certidão do DETRAN",
    icone: "DocumentTextIcon"
  },
  {
    id: 246,
    nome: "FÁBRICA DE PLACAS - CREDITRAN",
    categoria: "Placa",
    valor: "0,00",
    tipo: "TAXAS",
    descricao: "Confecção de placas Creditran",
    icone: "TruckIcon"
  },
  {
    id: 247,
    nome: "FORMULÁRIOS",
    categoria: "Documentação",
    valor: "4,00",
    tipo: "OUTRAS DESPESAS",
    descricao: "Fornecimento de formulários",
    icone: "DocumentTextIcon"
  },
  {
    id: 248,
    nome: "FUNREJUS",
    categoria: "Taxa",
    valor: "0,00",
    tipo: "TAXAS",
    descricao: "Taxa FUNREJUS",
    icone: "CogIcon"
  },
  {
    id: 249,
    nome: "GARE",
    categoria: "Imposto",
    valor: "0,00",
    tipo: "TAXAS",
    descricao: "Guia de Arrecadação Estadual",
    icone: "DocumentTextIcon"
  },
  {
    id: 250,
    nome: "GARE DÍVIDA ATIVA",
    categoria: "Imposto",
    valor: "0,00",
    tipo: "TAXAS",
    descricao: "GARE para dívida ativa",
    icone: "DocumentTextIcon"
  }
];

export const categorias = [
  "Todos",
  "Serviços de ANTT e Transporte",
  "Vistorias e Inspeções", 
  "Transferências",
  "CNH e Habilitação",
  "Licenciamento",
  "Documentos Veiculares",
  "Anuências",
  "Multas e Infrações"
];