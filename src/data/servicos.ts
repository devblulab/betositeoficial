export interface Servico {
  id: number;
  nome: string;
  categoria: string;
  icone: string;
  descricao: string;
  documentos?: string[]; // Tornado opcional pois nem todos os serviços têm
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

];

export const categorias: string[] = [
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
