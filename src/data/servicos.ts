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
    icone: "LocalShipping",
    descricao: "Certificação obrigatória para veículos de transporte de cargas, incluindo aplicação de adesivos identificadores para regularização junto à ANTT.",
    documentos: ["CRLV atualizado", "Documento de identificação", "Comprovante de endereço"],
    valor: "20,00",
    tipo: "TAXAS"
  },
  {
    id: 1093,
    nome: "VISTORIA CARRO",
    categoria: "Vistorias e Inspeções",
    icone: "Search",
    descricao: "Inspeção técnica obrigatória para renovação do licenciamento anual, verificando condições de segurança e emissões do veículo.",
    documentos: ["CRLV original", "Comprovante de IPVA", "Comprovante de seguro obrigatório"],
    valor: "240,00",
    tipo: "TAXAS"
  },
  {
    id: 1001,
    nome: "TRANSFERÊNCIA DE PROPRIEDADE",
    categoria: "Transferências",
    icone: "TrendingUp",
    descricao: "Processo completo de transferência de propriedade de veículo, incluindo toda documentação necessária.",
    documentos: ["CRLV", "CRV", "Comprovante de venda", "RG e CPF de ambas as partes"],
    valor: "350,00",
    tipo: "TAXAS"
  },
  {
    id: 1002,
    nome: "PRIMEIRA HABILITAÇÃO",
    categoria: "CNH e Habilitação",
    icone: "Person",
    descricao: "Processo completo para obtenção da primeira carteira nacional de habilitação categoria B.",
    documentos: ["RG", "CPF", "Comprovante de residência", "Foto 3x4"],
    valor: "680,00",
    tipo: "TAXAS"
  },
  {
    id: 1003,
    nome: "RENOVAÇÃO CNH",
    categoria: "CNH e Habilitação",
    icone: "Build",
    descricao: "Renovação da carteira nacional de habilitação com exames médicos e psicológicos.",
    documentos: ["CNH atual", "RG", "CPF", "Foto 3x4", "Exames médicos"],
    valor: "280,00",
    tipo: "TAXAS"
  },
  {
    id: 1004,
    nome: "LICENCIAMENTO ANUAL",
    categoria: "Licenciamento",
    icone: "Description",
    descricao: "Licenciamento anual obrigatório para circulação do veículo, incluindo pagamento de taxas.",
    documentos: ["CRLV", "Comprovante de IPVA", "Seguro obrigatório"],
    valor: "150,00",
    tipo: "TAXAS"
  },
  {
    id: 1005,
    nome: "SEGUNDA VIA CRLV",
    categoria: "Documentos Veiculares",
    icone: "Assignment",
    descricao: "Emissão de segunda via do Certificado de Registro de Licenciamento de Veículo.",
    documentos: ["RG", "CPF", "Comprovante de residência", "Boletim de ocorrência (se aplicável)"],
    valor: "95,00",
    tipo: "TAXAS"
  },
  {
    id: 1006,
    nome: "MUDANÇA DE CATEGORIA CNH",
    categoria: "CNH e Habilitação",
    icone: "TrendingUp",
    descricao: "Processo para mudança de categoria da CNH (ex: B para C, D ou E).",
    documentos: ["CNH atual", "RG", "CPF", "Exames médicos", "Curso teórico"],
    valor: "420,00",
    tipo: "TAXAS"
  },
  {
    id: 1007,
    nome: "ATPV - AUTORIZAÇÃO TRANSPORTE",
    categoria: "Serviços de ANTT e Transporte",
    icone: "CheckCircle",
    descricao: "Autorização para Transporte Público de Veículos, necessária para empresas transportadoras.",
    documentos: ["Contrato social", "CNPJ", "Alvará de funcionamento", "CRLV dos veículos"],
    valor: "580,00",
    tipo: "TAXAS"
  },
  {
    id: 1008,
    nome: "ANUÊNCIA BOMBEIROS",
    categoria: "Anuências",
    icone: "Security",
    descricao: "Solicitação de anuência junto ao Corpo de Bombeiros para estabelecimentos comerciais.",
    documentos: ["Projeto arquitetônico", "ART do responsável técnico", "Alvará municipal"],
    valor: "320,00",
    tipo: "OUTRAS DESPESAS"
  },
  {
    id: 1009,
    nome: "COMUNICAÇÃO DE VENDA",
    categoria: "Transferências",
    icone: "Business",
    descricao: "Comunicação oficial de venda de veículo para transferir responsabilidades.",
    documentos: ["CRLV", "Comprovante de venda", "RG e CPF do vendedor"],
    valor: "45,00",
    tipo: "TAXAS"
  },
  {
    id: 1010,
    nome: "VISTORIA MOTO",
    categoria: "Vistorias e Inspeções",
    icone: "Build",
    descricao: "Vistoria específica para motocicletas, incluindo verificação de componentes de segurança.",
    documentos: ["CRLV da motocicleta", "RG", "CPF", "Comprovante de IPVA"],
    valor: "180,00",
    tipo: "TAXAS"
  },
  {
    id: 1011,
    nome: "REGULARIZAÇÃO MULTAS",
    categoria: "Multas e Infrações",
    icone: "Warning",
    descricao: "Serviço de regularização e parcelamento de multas de trânsito em atraso.",
    documentos: ["CNH", "CRLV", "Comprovantes das multas"],
    valor: "120,00",
    tipo: "OUTRAS DESPESAS"
  },
  {
    id: 1012,
    nome: "INCLUSÃO DE CONDUTOR",
    categoria: "CNH e Habilitação",
    icone: "AccountBox",
    descricao: "Inclusão de condutor autorizado para conduzir veículo de terceiros.",
    documentos: ["CNH do condutor", "RG", "CPF", "Autorização do proprietário"],
    valor: "75,00",
    tipo: "TAXAS"
  },
  {
    id: 1013,
    nome: "EMISSÃO DE ATPV-E",
    categoria: "Serviços de ANTT e Transporte",
    icone: "Receipt",
    descricao: "Emissão de Autorização para Transporte de Produtos Perigosos eletrônica.",
    documentos: ["CRLV", "CNH categoria D/E", "Curso MOPP"],
    valor: "450,00",
    tipo: "TAXAS"
  },
  {
    id: 1014,
    nome: "CONSULTA DE DÉBITOS",
    categoria: "Consultas",
    icone: "FindInPage",
    descricao: "Consulta completa de débitos veiculares, incluindo IPVA, multas e taxas.",
    documentos: ["Placa do veículo", "Renavam"],
    valor: "25,00",
    tipo: "OUTRAS DESPESAS"
  },
  {
    id: 1015,
    nome: "PARCELAMENTO DE DÍVIDAS",
    categoria: "Financeiro",
    icone: "CreditCard",
    descricao: "Parcelamento de dívidas veiculares com condições especiais.",
    documentos: ["Débitos em aberto", "Comprovante de renda", "RG e CPF"],
    valor: "80,00",
    tipo: "OUTRAS DESPESAS"
  },
  {
    id: 1016,
    nome: "CADASTRO CONDUTOR EXTERIOR",
    categoria: "CNH e Habilitação",
    icone: "Flight",
    descricao: "Cadastro de condutor para brasileiros residentes no exterior.",
    documentos: ["Passaporte", "Visto de residência", "CNH do país de residência"],
    valor: "520,00",
    tipo: "TAXAS"
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