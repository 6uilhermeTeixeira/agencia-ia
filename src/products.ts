import {
  Activity,
  BadgeCheck,
  Bot,
  Building2,
  ClipboardCheck,
  Cpu,
  Factory,
  FileSearch,
  Gauge,
  GitPullRequest,
  Landmark,
  LineChart,
  Plug,
  ShieldAlert,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type ProductCategory =
  | "Governança"
  | "Operações"
  | "Indústria"
  | "Energia"
  | "Finanças"
  | "Setor público";

export type AiProduct = {
  id: number;
  slug: string;
  title: string;
  category: ProductCategory;
  icon: LucideIcon;
  shortDescription: string;
  problem: string;
  solution: string;
  market: string;
  technologies: string[];
  deliverables: string[];
  whatsappMessage: string;
};

export const products: AiProduct[] = [
  {
    id: 1,
    slug: "auditor-ia-empresas",
    title: "Auditor de IA para empresas",
    category: "Governança",
    icon: ShieldAlert,
    shortDescription:
      "Proxy corporativo para controlar uso de LLMs, custos, dados enviados e risco operacional.",
    problem:
      "Funcionários passam a usar ChatGPT, Claude, Gemini e Copilot sem controle central. A empresa perde visibilidade sobre dados enviados, prompts, custos, conformidade e qualidade das respostas.",
    solution:
      "Um proxy entre funcionários e modelos de IA que registra uso, classifica risco, calcula custos e recomenda melhorias de prompt antes que o uso de IA vire uma zona cega.",
    market: "Empresas acima de 30 funcionários que já usam IA de forma informal.",
    technologies: ["FastAPI", "PostgreSQL", "OpenAI", "Anthropic", "Gemini"],
    deliverables: [
      "Registro de usuário, modelo, custo e documentos enviados",
      "Classificação de risco por interação",
      "Painel executivo de uso e conformidade",
      "Sugestões automáticas para melhorar prompts",
    ],
    whatsappMessage: "Quero falar sobre o Auditor de IA para empresas.",
  },
  {
    id: 2,
    slug: "documentacao-automatica",
    title: "Sistema de documentação automática",
    category: "Operações",
    icon: GitPullRequest,
    shortDescription:
      "Documentação, diagramas, changelog e wiki atualizados automaticamente a partir de Pull Requests.",
    problem:
      "A IA acelera a geração de código, mas a documentação continua manual, atrasada e desconectada do que realmente foi aprovado.",
    solution:
      "Conexão com GitHub para atualizar documentação, diagramas, changelog, wiki e FAQs sempre que um Pull Request é aprovado.",
    market: "Times de engenharia, software houses, startups e empresas com produto digital.",
    technologies: ["GitHub API", "LLMs", "Markdown", "Mermaid", "CI/CD"],
    deliverables: [
      "Monitoramento de Pull Requests aprovados",
      "Geração de changelog e documentação técnica",
      "Atualização de FAQs e wiki interna",
      "Diagramas versionados junto ao repositório",
    ],
    whatsappMessage: "Quero automatizar a documentação do meu time.",
  },
  {
    id: 3,
    slug: "copiloto-manutencao-industrial",
    title: "Copiloto para manutenção industrial",
    category: "Indústria",
    icon: Factory,
    shortDescription:
      "Assistente para técnicos identificarem causa provável, peças e histórico a partir de fotos e contexto interno.",
    problem:
      "A indústria perde conhecimento quando técnicos experientes se aposentam e defeitos específicos deixam de ter uma referência clara.",
    solution:
      "O operador fotografa o painel ou equipamento e recebe causa provável, histórico, peças necessárias, tempo médio e vídeos internos relacionados.",
    market: "Fábricas, manutenção industrial, utilities, logística e operações com ativos críticos.",
    technologies: ["Visão computacional", "RAG", "Banco vetorial", "LLMs", "Integrações ERP"],
    deliverables: [
      "Busca por histórico de defeitos e soluções",
      "Leitura de imagens de painéis e equipamentos",
      "Recomendação de peças e procedimentos",
      "Base de conhecimento técnica com fontes",
    ],
    whatsappMessage: "Quero conhecer o Copiloto para manutenção industrial.",
  },
  {
    id: 4,
    slug: "gestor-consumo-energetico",
    title: "Gestor de consumo energético",
    category: "Energia",
    icon: Zap,
    shortDescription:
      "Dashboard que sugere quando consumir, armazenar, vender energia ou carregar veículos.",
    problem:
      "Com energia solar, baterias e veículos elétricos, empresas não sabem o melhor horário para consumir, armazenar, vender ou carregar.",
    solution:
      "Um dashboard conectado a inversores, medidores e API meteorológica que recomenda automaticamente os melhores horários de uso.",
    market: "Empresas com energia solar, baterias, frota elétrica ou alto consumo energético.",
    technologies: ["APIs de inversores", "IoT", "Forecast meteorológico", "PostgreSQL", "Dashboards"],
    deliverables: [
      "Leitura de produção e consumo em tempo quase real",
      "Previsão por clima e padrão histórico",
      "Recomendações de carga, venda e armazenamento",
      "Indicadores de economia e eficiência",
    ],
    whatsappMessage: "Quero reduzir custos com o Gestor de consumo energético.",
  },
  {
    id: 5,
    slug: "inteligencia-pequenas-fabricas",
    title: "Inteligência para pequenas fábricas",
    category: "Indústria",
    icon: Gauge,
    shortDescription:
      "MES leve para fábricas que ainda dependem de Excel para produção, estoque e vendas.",
    problem:
      "Pequenas fábricas operam no Excel e não conseguem enxergar gargalos, desperdícios ou risco de ruptura com antecedência.",
    solution:
      "Conexão entre ERP, produção, estoque e vendas para mostrar gargalos, desperdícios e previsões simples de ruptura.",
    market: "Pequenas e médias fábricas que ainda não justificam um MES sofisticado.",
    technologies: ["Conectores ERP", "PostgreSQL", "ETL leve", "Dashboards", "Modelos preditivos"],
    deliverables: [
      "Painel de produção e estoque",
      "Alertas de gargalo e ruptura",
      "Indicadores de desperdício",
      "Visão cruzada de vendas e capacidade produtiva",
    ],
    whatsappMessage: "Quero inteligência operacional para uma pequena fábrica.",
  },
  {
    id: 6,
    slug: "leitura-contratos-ia",
    title: "IA para leitura de contratos",
    category: "Governança",
    icon: FileSearch,
    shortDescription:
      "Leitura de PDF, DOCX e emails para apontar riscos, multas, cláusulas incomuns e diferenças históricas.",
    problem:
      "Contratos chegam em formatos variados e a análise manual de riscos, multas e cláusulas incomuns consome tempo jurídico e operacional.",
    solution:
      "A IA recebe PDF, DOCX ou email, resume riscos, identifica cláusulas atípicas e compara com contratos anteriores da empresa.",
    market: "Jurídico interno, compras, vendas B2B, imobiliárias, franquias e consultorias.",
    technologies: ["OCR", "LLMs", "RAG", "Comparação semântica", "Armazenamento seguro"],
    deliverables: [
      "Extração e leitura de contratos",
      "Resumo executivo de riscos",
      "Comparação com modelos anteriores",
      "Checklist de pontos que exigem revisão humana",
    ],
    whatsappMessage: "Quero uma IA para leitura de contratos.",
  },
  {
    id: 7,
    slug: "observabilidade-agentes-ia",
    title: "Observabilidade de agentes de IA",
    category: "Governança",
    icon: Activity,
    shortDescription:
      "Dashboard para monitorar agentes ativos, erros, custos, tokens, ferramentas, tempo e ROI.",
    problem:
      "Empresas começam a operar centenas de agentes, mas não têm um painel único para entender falhas, custos, ferramentas usadas e retorno.",
    solution:
      "Uma camada de observabilidade para agentes de IA, exibindo agentes ativos, erros, custos, tokens, ferramentas acionadas, tempo e ROI.",
    market: "Empresas com automações, copilotos internos, agentes de atendimento ou squads de IA.",
    technologies: ["OpenTelemetry", "PostgreSQL", "Dashboards", "APIs LLM", "Webhooks"],
    deliverables: [
      "Monitoramento de execuções e falhas",
      "Custo por agente, cliente ou fluxo",
      "Trilhas de ferramentas usadas",
      "Indicadores de tempo economizado e ROI",
    ],
    whatsappMessage: "Quero monitorar agentes de IA na minha empresa.",
  },
  {
    id: 8,
    slug: "gestao-conhecimento-empresarial",
    title: "Gestão de conhecimento empresarial",
    category: "Operações",
    icon: Cpu,
    shortDescription:
      "Indexador único para Slack, WhatsApp, Drive, Notion, GitHub e emails, com respostas citando fontes.",
    problem:
      "O conhecimento da empresa fica espalhado em conversas, documentos, repositórios e emails, dificultando respostas confiáveis.",
    solution:
      "Um indexador único com busca semântica e respostas com fonte, conectando Slack, WhatsApp, Google Drive, Notion, GitHub e emails.",
    market: "Empresas com documentação fragmentada, times remotos ou alto volume de informação interna.",
    technologies: ["RAG", "Banco vetorial", "Conectores SaaS", "LLMs", "Controle de permissões"],
    deliverables: [
      "Conectores para fontes de conhecimento",
      "Busca semântica com citação de fonte",
      "Respostas filtradas por permissão",
      "Painel de lacunas de conhecimento",
    ],
    whatsappMessage: "Quero organizar o conhecimento da minha empresa com IA.",
  },
  {
    id: 9,
    slug: "simulador-financeiro-ia",
    title: "Simulador financeiro com IA",
    category: "Finanças",
    icon: LineChart,
    shortDescription:
      "CFO virtual para simular contratação, preço, câmbio e cenários financeiros a partir dos dados da empresa.",
    problem:
      "Empresas pequenas não têm CFO e tomam decisões sobre contratação, preço e câmbio sem simulações claras.",
    solution:
      "Conecta banco, ERP e emissão fiscal para responder perguntas como contratar vendedores, aumentar preço ou simular variação do dólar.",
    market: "Pequenas e médias empresas sem área financeira estratégica estruturada.",
    technologies: ["Open Finance", "ERP", "Notas fiscais", "Modelagem financeira", "LLMs"],
    deliverables: [
      "Cenários financeiros conversacionais",
      "Projeções de caixa e margem",
      "Simulação de contratação e preço",
      "Alertas de risco financeiro",
    ],
    whatsappMessage: "Quero simular cenários financeiros com IA.",
  },
  {
    id: 10,
    slug: "compliance-automatico",
    title: "Compliance automático",
    category: "Governança",
    icon: BadgeCheck,
    shortDescription:
      "Monitoramento de LGPD, AI Act, ISO e SOC2 para mostrar onde a empresa está exposta.",
    problem:
      "Leis e padrões de IA avançam rápido, e empresas não sabem onde estão em risco diante de LGPD, AI Act, ISO e SOC2.",
    solution:
      "Monitora requisitos regulatórios e práticas internas para apontar riscos, lacunas e ações recomendadas.",
    market: "Empresas que usam IA em atendimento, operação, dados sensíveis ou produtos digitais.",
    technologies: ["Base regulatória", "Checklists dinâmicos", "LLMs", "Workflows", "Dashboards"],
    deliverables: [
      "Mapa de risco por área e sistema",
      "Checklist de conformidade por norma",
      "Recomendações priorizadas",
      "Histórico de evolução e evidências",
    ],
    whatsappMessage: "Quero avaliar compliance de IA na minha empresa.",
  },
  {
    id: 11,
    slug: "marketplace-agentes",
    title: "Marketplace de agentes",
    category: "Operações",
    icon: Bot,
    shortDescription:
      "Infraestrutura para empresas comprarem e operarem agentes prontos de finanças, RH, vendas e compras.",
    problem:
      "Empresas vão querer agentes prontos, mas precisam de curadoria, instalação, permissões, cobrança e operação segura.",
    solution:
      "Uma infraestrutura estilo App Store para agentes de finanças, RH, vendas e compras, com instalação e gestão centralizada.",
    market: "Agências de IA, consultorias, empresas médias e fornecedores de agentes especializados.",
    technologies: ["Catálogo SaaS", "Billing", "Permissões", "APIs", "Observabilidade"],
    deliverables: [
      "Catálogo de agentes por área",
      "Instalação e configuração guiada",
      "Controle de permissões e uso",
      "Métricas de custo e performance",
    ],
    whatsappMessage: "Quero montar um marketplace de agentes de IA.",
  },
  {
    id: 12,
    slug: "ia-para-municipios",
    title: "IA para municípios",
    category: "Setor público",
    icon: Landmark,
    shortDescription:
      "Classificação automática de protocolos, encaminhamento para setor correto e resposta ao cidadão.",
    problem:
      "Prefeituras lidam com protocolos, filas e encaminhamentos manuais que atrasam respostas ao cidadão.",
    solution:
      "Recebe protocolos, classifica automaticamente, encaminha ao setor correto e gera respostas orientadas para o cidadão.",
    market: "Prefeituras, secretarias, autarquias e centrais de atendimento público.",
    technologies: ["Classificação NLP", "LLMs", "Integração protocolo", "Dashboards", "Filas"],
    deliverables: [
      "Triagem automática de solicitações",
      "Encaminhamento por setor",
      "Respostas assistidas ao cidadão",
      "Painel de filas, SLA e volume",
    ],
    whatsappMessage: "Quero conhecer a IA para municípios.",
  },
  {
    id: 13,
    slug: "assistente-energia-residencial",
    title: "Assistente de energia residencial",
    category: "Energia",
    icon: Plug,
    shortDescription:
      "Controle de ar condicionado, carregador, bateria, boiler e piscina para reduzir a conta de energia.",
    problem:
      "Casas com carro elétrico, bateria e energia solar precisam decidir automaticamente quando usar, carregar ou economizar.",
    solution:
      "A IA controla equipamentos de alto consumo para minimizar a conta, considerando clima, tarifa, bateria e rotina dos moradores.",
    market: "Residências premium com energia solar, automação, bateria ou veículo elétrico.",
    technologies: ["IoT residencial", "APIs de energia", "Automação", "Forecast", "LLMs"],
    deliverables: [
      "Controle inteligente de equipamentos",
      "Regras por tarifa, clima e rotina",
      "Sugestões de economia",
      "Painel residencial de consumo",
    ],
    whatsappMessage: "Quero um assistente de energia residencial.",
  },
  {
    id: 14,
    slug: "auditor-seguranca-ia",
    title: "Auditor de segurança para IA",
    category: "Governança",
    icon: ClipboardCheck,
    shortDescription:
      "Testes automáticos de prompt injection, jailbreak, vazamento e uso perigoso de ferramentas.",
    problem:
      "Empresas criam agentes e copilotos, mas não testam ataques como prompt injection, jailbreak, vazamento e ferramentas perigosas.",
    solution:
      "Executa baterias automáticas de segurança contra agentes de IA e entrega relatório com riscos, evidências e correções recomendadas.",
    market: "Empresas com agentes, chatbots, copilotos internos ou produtos com IA generativa.",
    technologies: ["Red teaming", "LLMs", "Test harness", "Relatórios", "CI/CD"],
    deliverables: [
      "Testes de jailbreak e prompt injection",
      "Verificação de vazamento de dados",
      "Análise de ferramentas perigosas",
      "Relatório técnico e executivo",
    ],
    whatsappMessage: "Quero auditar a segurança dos meus agentes de IA.",
  },
  {
    id: 15,
    slug: "erp-empresas-ia",
    title: "ERP para empresas de IA",
    category: "Operações",
    icon: Building2,
    shortDescription:
      "ERP específico para agências de IA: projetos, tokens, custo por cliente, margem, agentes, automações e APIs.",
    problem:
      "Agências de IA estão surgindo, mas ERPs tradicionais não acompanham consumo de tokens, agentes, automações e margem por cliente.",
    solution:
      "Um ERP vertical para agências de IA gerencia projetos, consumo de tokens, custos por cliente, margem, agentes, automações e APIs.",
    market: "Agências de IA, consultorias de automação, squads internos e empresas que vendem agentes.",
    technologies: ["PostgreSQL", "APIs LLM", "Billing", "Dashboards", "Gestão de projetos"],
    deliverables: [
      "Gestão de projetos e clientes",
      "Custo de tokens por cliente",
      "Margem por entrega e contrato",
      "Inventário de agentes, automações e APIs",
    ],
    whatsappMessage: "Quero um ERP para uma empresa de IA.",
  },
];

export const categories: Array<"Todos" | ProductCategory> = [
  "Todos",
  "Governança",
  "Operações",
  "Indústria",
  "Energia",
  "Finanças",
  "Setor público",
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function buildWhatsAppUrl(product: AiProduct) {
  const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER?.trim();

  if (!phoneNumber) {
    return undefined;
  }

  const normalizedPhone = phoneNumber.replace(/\D/g, "");
  const message = encodeURIComponent(
    `Olá, quero conversar sobre: ${product.title}. ${product.whatsappMessage}`,
  );

  return `https://wa.me/${normalizedPhone}?text=${message}`;
}
