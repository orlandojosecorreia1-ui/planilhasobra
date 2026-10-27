export const CHECKOUT_FOUNDACAO =
  "https://standerpay.com/checkout/9e25851a-b814-45cb-a6d9-90c74bb2dd96";
export const CHECKOUT_PROFISSIONAL =
  "https://standerpay.com/checkout/7f54b999-8b44-41ca-80f0-c92d2a717c34";

export const HERO_CHECKS = [
  "🧱 Planilha completa de orçamento",
  "📊 Categorias automáticas e gráficos",
  "📱 Funciona offline no telemóvel e no PC",
];

export const STATS = [
  {
    value: "500+",
    label: "Obras já orçadas",
    sub: "Por engenheiros e mestres em Angola",
  },
  {
    value: "4.997 Kz",
    label: "A partir de",
    sub: "Pagamento único, vitalício",
  },
  {
    value: "100%",
    label: "Offline",
    sub: "Funciona sem internet, no telefone e PC",
  },
];

export const INCLUDES = [
  "Registro por categoria de materiais, mão de obra e outros gastos",
  "Gráficos automáticos de distribuição por categoria",
  "Alertas visuais quando uma categoria estoura o orçamento",
  "Células automatizadas · Sem fórmulas para você configurar",
  "Compatível com Excel, Google Sheets e LibreOffice",
  "Cálculo automático de lucro e margem por obra",
  "Controle de pagamentos, adiantamentos e saldos de fornecedores",
  "Aba separada para cada obra · Gestão de várias obras ao mesmo tempo",
  "Relatório profissional pronto para enviar ao cliente",
  "Modelo de orçamento inicial para fechar contratos mais rápido",
];

export const PROFESSIONALS = [
  "Arquitectos",
  "Mestres de obras",
  "Empreiteiros",
  "Engenheiros civis",
  "Gestores de obra",
];

export type Plan = {
  id: string;
  emoji: string;
  name: string;
  tagline: string;
  price: string;
  items: string[];
  url: string;
  highlight?: boolean;
};

export const PLANS: Plan[] = [
  {
    id: "fundacao",
    emoji: "🧱",
    name: "Plano Fundação",
    tagline: "Para quem quer começar a organizar seus orçamentos.",
    price: "4.997",
    items: [
      "1 Planilha de Orçamento de Obra",
      "1 Manual de Instrução de Orçamento de Obra",
    ],
    url: CHECKOUT_FOUNDACAO,
  },
  {
    id: "profissional",
    emoji: "🏗️",
    name: "Plano Profissional",
    tagline: "Para quem já trabalha com obras e quer mais controlo.",
    price: "10.997",
    items: [
      "1 Planilha de Orçamento de Obra",
      "1 Planilha de Orçamento de Obra PREMIUM",
      "1 Planilha de Medição de Obra",
      "1 Manual de Instrução de Orçamento de Obra",
      "1 Manual de Instrução de Medição de Obra",
    ],
    url: CHECKOUT_PROFISSIONAL,
    highlight: true,
  },
];

export const BUYERS = [
  {
    initials: "TR",
    name: "Tony Reis",
    city: "Luanda",
    when: "Há 1 dia",
    avatar: "bg-signal/15 text-signal",
  },
  {
    initials: "BC",
    name: "Benvindo Chissola",
    city: "Benguela",
    when: "Há 1 dia",
    avatar: "bg-coral/15 text-coral",
  },
  {
    initials: "BM",
    name: "Benjamim Maquemba",
    city: "Luanda",
    when: "Há 2 dias",
    avatar: "bg-marigold/25 text-saffron",
  },
  {
    initials: "EQ",
    name: "Edu Quissanga",
    city: "Huambo",
    when: "Há 2 dias",
    avatar: "bg-sky-wash/25 text-signal",
  },
  {
    initials: "WI",
    name: "Wilson Ilunga Tshimbalanga",
    city: "Lubango",
    when: "Há 2 dias",
    avatar: "bg-mocha/15 text-mocha",
  },
  {
    initials: "GJ",
    name: "Guilhermino Joaquim",
    city: "Cabinda",
    when: "Há 2 dias",
    avatar: "bg-vermillion/10 text-vermillion",
  },
  {
    initials: "TZ",
    name: "Teresa Zefa",
    city: "Luanda",
    when: "Há 2 dias",
    avatar: "bg-signal/15 text-signal",
  },
  {
    initials: "AM",
    name: "André Mendonça",
    city: "Malanje",
    when: "Há 2 dias",
    avatar: "bg-coral/15 text-coral",
  },
];

export type Bubble = { from: "them" | "me"; text: string; time: string };

export type Chat = {
  initials: string;
  name: string;
  city: string;
  role: string;
  avatar: string;
  bubbles: Bubble[];
};

export const CHATS: Chat[] = [
  {
    initials: "TR",
    name: "Tony Reis",
    city: "Luanda",
    role: "Empreiteiro",
    avatar: "bg-signal/15 text-signal",
    bubbles: [
      { from: "them", text: "Kota, comprei a planilha ontem à noite", time: "08:12" },
      { from: "them", text: "Meu, em 1 dia já vi que estava a perder 180 mil Kz por semana em cimento 😳", time: "08:12" },
      { from: "me", text: "Boa Tony! Agora vais recuperar isso rápido 💪", time: "08:14" },
      { from: "them", text: "Bué obrigado mano, salvou-me a obra do Morro Bento", time: "08:15" },
    ],
  },
  {
    initials: "BC",
    name: "Benvindo Chissola",
    city: "Benguela",
    role: "Mestre de obras",
    avatar: "bg-coral/15 text-coral",
    bubbles: [
      { from: "them", text: "Epá, aquilo do relatório final é fixe demais", time: "14:02" },
      { from: "them", text: "Mandei ao dono da obra e o kota aprovou logo mais 2 empreitadas comigo", time: "14:02" },
      { from: "me", text: "Isso mesmo! Relatório profissional fecha contrato ✅", time: "14:05" },
      { from: "them", text: "Vou recomendar aos colegas todos", time: "14:06" },
    ],
  },
  {
    initials: "WI",
    name: "Wilson Ilunga Tshimbalanga",
    city: "Lubango",
    role: "Técnico de obra",
    avatar: "bg-mocha/15 text-mocha",
    bubbles: [
      { from: "them", text: "Olá, funciona mesmo sem net? Na minha obra não pega rede", time: "10:31" },
      { from: "me", text: "Sim, 100%. Abre no telefone offline sem problema 👌", time: "10:33" },
      { from: "them", text: "Comprei agora", time: "10:41" },
      { from: "them", text: "Abriu direitinho, estou a preencher aqui no canteiro sem net nenhuma 🙌", time: "11:20" },
    ],
  },
  {
    initials: "EQ",
    name: "Edu Quissanga",
    city: "Huambo",
    role: "Gestor de obra",
    avatar: "bg-sky-wash/25 text-signal",
    bubbles: [
      { from: "them", text: "Mano, aquela aba de fluxo de caixa 30/60/90...", time: "19:44" },
      { from: "them", text: "Descobri que ia ficar sem kumbu no mês 2 se não organizasse os pagamentos", time: "19:44" },
      { from: "me", text: "Por isso o bónus é ouro puro 🔥", time: "19:47" },
      { from: "them", text: "Vale bué mais do que custou, a sério", time: "19:48" },
    ],
  },
  {
    initials: "GJ",
    name: "Guilhermino Joaquim",
    city: "Cabinda",
    role: "Dono de obra",
    avatar: "bg-vermillion/10 text-vermillion",
    bubbles: [
      { from: "them", text: "Boa tarde, estou a construir minha casa e os pedreiros pediam material toda a semana", time: "16:10" },
      { from: "them", text: "Com as tabelas de rendimento agora sei exatamente quanto cimento e areia dar", time: "16:11" },
      { from: "me", text: "Boa Guilhermino! Chega de gastar a mais 👏", time: "16:14" },
      { from: "them", text: "Poupei quase 400 mil Kz só nas fundações", time: "16:15" },
    ],
  },
  {
    initials: "BM",
    name: "Benjamim Maquemba",
    city: "Luanda",
    role: "Engenheiro civil",
    avatar: "bg-marigold/25 text-saffron",
    bubbles: [
      { from: "them", text: "Estava na dúvida se comprava... 4.997 Kz é dinheiro", time: "21:03" },
      { from: "me", text: "Entendo kota. Mas em 1 obra tu já recuperas 10x", time: "21:05" },
      { from: "them", text: "Arrisquei", time: "21:20" },
      { from: "them", text: "3 obras em paralelo agora, tudo separado por aba. Nunca mais me perdi 🙏", time: "21:22" },
    ],
  },
  {
    initials: "TZ",
    name: "Teresa Zefa",
    city: "Luanda",
    role: "Arquitecta",
    avatar: "bg-signal/15 text-signal",
    bubbles: [
      { from: "them", text: "Bom dia, é mesmo entrega imediata? Não quero esperar dias", time: "07:22" },
      { from: "me", text: "Sim Teresa, logo após o pagamento cais na página de download ✅", time: "07:24" },
      { from: "them", text: "Paguei", time: "07:30" },
      { from: "them", text: "Já baixei tudo, planilha + os 2 bónus. Rapidíssimo, está fixe 👏", time: "07:33" },
    ],
  },
  {
    initials: "AM",
    name: "André Mendonça",
    city: "Malanje",
    role: "Empreiteiro",
    avatar: "bg-coral/15 text-coral",
    bubbles: [
      { from: "them", text: "Kota, abri no PC do escritório e no telemóvel na obra", time: "05:48" },
      { from: "them", text: "Os mesmos números nos dois, sem confusão de cadernos", time: "05:49" },
      { from: "me", text: "É essa a ideia mano, obra controlada na palma da mão 📱", time: "05:52" },
      { from: "them", text: "Bazar! Já mandei o link a dois colegas daqui", time: "05:53" },
    ],
  },
];

export const FAQS = [
  {
    q: "Preciso saber Excel?",
    a: "Não. A planilha vem pronta com fórmulas e categorias já configuradas. Só precisa preencher.",
  },
  {
    q: "Funciona no telemóvel?",
    a: "Sim, funciona no Google Sheets pelo telemóvel, e também em qualquer computador com Excel ou LibreOffice.",
  },
  {
    q: "Como recebo a planilha?",
    a: "Após o pagamento você é redirecionado para a página de download imediato.",
  },
  {
    q: "Posso editar e personalizar?",
    a: "Totalmente. Adicione categorias, mude cores, adapte à sua obra.",
  },
  {
    q: "Serve para pequenas reformas?",
    a: "Sim, funciona para obras de qualquer tamanho, de reforma de casa a construção completa.",
  },
];
