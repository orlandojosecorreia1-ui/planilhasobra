export const CHECKOUT_FOUNDACAO =
  "https://pay.vanqir.com/checkout/a40e5d73-6bef-4d8c-ac73-c341d2a2d603";
export const CHECKOUT_PROFISSIONAL =
  "https://pay.vanqir.com/checkout/22d9c3ac-a338-4cf4-acbd-8476b756935d";

export const HERO_CHECKS = [
  "🧱 planilha completa de orçamento",
  "📊 categorias automáticas e gráficos",
  "📱 funciona offline no telemóvel e no PC",
];

export const STATS = [
  {
    value: "500+",
    label: "obras já orçadas",
    sub: "por engenheiros e mestres em Angola",
  },
  {
    value: "4.997 Kz",
    label: "a partir de",
    sub: "pagamento único, vitalício",
  },
  {
    value: "100%",
    label: "offline",
    sub: "funciona sem internet, no telefone e PC",
  },
];

export const INCLUDES = [
  "registro por categoria de materiais, mão de obra e outros gastos",
  "gráficos automáticos de distribuição por categoria",
  "alertas visuais quando uma categoria estoura o orçamento",
  "células automatizadas · sem fórmulas para você configurar",
  "compatível com excel, google sheets e libreoffice",
  "cálculo automático de lucro e margem por obra",
  "controle de pagamentos, adiantamentos e saldos de fornecedores",
  "aba separada para cada obra · gestão de várias obras ao mesmo tempo",
  "relatório profissional pronto para enviar ao cliente",
  "modelo de orçamento inicial para fechar contratos mais rápido",
];

export const PROFESSIONALS = [
  "arquitectos",
  "mestres de obras",
  "empreiteiros",
  "engenheiros civis",
  "gestores de obra",
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
    when: "há 1 dia",
    avatar: "bg-signal/15 text-signal",
  },
  {
    initials: "BC",
    name: "Benvindo Chissola",
    city: "Benguela",
    when: "há 1 dia",
    avatar: "bg-coral/15 text-coral",
  },
  {
    initials: "BM",
    name: "Benjamim Maquemba",
    city: "Luanda",
    when: "há 2 dias",
    avatar: "bg-marigold/25 text-saffron",
  },
  {
    initials: "EQ",
    name: "Edu Quissanga",
    city: "Huambo",
    when: "há 2 dias",
    avatar: "bg-sky-wash/25 text-signal",
  },
  {
    initials: "WI",
    name: "Wilson Ilunga Tshimbalanga",
    city: "Lubango",
    when: "há 2 dias",
    avatar: "bg-mocha/15 text-mocha",
  },
  {
    initials: "GJ",
    name: "Guilhermino Joaquim",
    city: "Cabinda",
    when: "há 2 dias",
    avatar: "bg-vermillion/10 text-vermillion",
  },
  {
    initials: "TZ",
    name: "Teresa Zefa",
    city: "Luanda",
    when: "há 2 dias",
    avatar: "bg-signal/15 text-signal",
  },
  {
    initials: "AM",
    name: "André Mendonça",
    city: "Malanje",
    when: "há 2 dias",
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
      { from: "them", text: "kota, comprei a planilha ontem à noite", time: "08:12" },
      { from: "them", text: "meu, em 1 dia já vi que estava a perder 180 mil kz por semana em cimento 😳", time: "08:12" },
      { from: "me", text: "boa Tony! agora vais recuperar isso rápido 💪", time: "08:14" },
      { from: "them", text: "bué obrigado mano, salvou-me a obra do Morro Bento", time: "08:15" },
    ],
  },
  {
    initials: "BC",
    name: "Benvindo Chissola",
    city: "Benguela",
    role: "Mestre de obras",
    avatar: "bg-coral/15 text-coral",
    bubbles: [
      { from: "them", text: "epá, aquilo do relatório final é fixe demais", time: "14:02" },
      { from: "them", text: "mandei ao dono da obra e o kota aprovou logo mais 2 empreitadas comigo", time: "14:02" },
      { from: "me", text: "isso mesmo! relatório profissional fecha contrato ✅", time: "14:05" },
      { from: "them", text: "vou recomendar aos colegas todos", time: "14:06" },
    ],
  },
  {
    initials: "WI",
    name: "Wilson Ilunga Tshimbalanga",
    city: "Lubango",
    role: "Técnico de obra",
    avatar: "bg-mocha/15 text-mocha",
    bubbles: [
      { from: "them", text: "olá, funciona mesmo sem net? na minha obra não pega rede", time: "10:31" },
      { from: "me", text: "sim, 100%. abre no telefone offline sem problema 👌", time: "10:33" },
      { from: "them", text: "comprei agora", time: "10:41" },
      { from: "them", text: "abriu direitinho, estou a preencher aqui no canteiro sem net nenhuma 🙌", time: "11:20" },
    ],
  },
  {
    initials: "EQ",
    name: "Edu Quissanga",
    city: "Huambo",
    role: "Gestor de obra",
    avatar: "bg-sky-wash/25 text-signal",
    bubbles: [
      { from: "them", text: "mano, aquela aba de fluxo de caixa 30/60/90...", time: "19:44" },
      { from: "them", text: "descobri que ia ficar sem kumbu no mês 2 se não organizasse os pagamentos", time: "19:44" },
      { from: "me", text: "por isso o bónus é ouro puro 🔥", time: "19:47" },
      { from: "them", text: "vale bué mais do que custou, sério", time: "19:48" },
    ],
  },
  {
    initials: "GJ",
    name: "Guilhermino Joaquim",
    city: "Cabinda",
    role: "Dono de obra",
    avatar: "bg-vermillion/10 text-vermillion",
    bubbles: [
      { from: "them", text: "boa tarde, estou a construir minha casa e os pedreiros pediam material toda a semana", time: "16:10" },
      { from: "them", text: "com as tabelas de rendimento agora sei exatamente quanto cimento e areia dar", time: "16:11" },
      { from: "me", text: "boa Guilhermino! chega de gastar a mais 👏", time: "16:14" },
      { from: "them", text: "poupei quase 400 mil kz nas fundações só", time: "16:15" },
    ],
  },
  {
    initials: "BM",
    name: "Benjamim Maquemba",
    city: "Luanda",
    role: "Engenheiro civil",
    avatar: "bg-marigold/25 text-saffron",
    bubbles: [
      { from: "them", text: "estava na dúvida se comprava... 4.997 Kz é dinheiro", time: "21:03" },
      { from: "me", text: "entendo kota. mas em 1 obra tu já recuperas 10x", time: "21:05" },
      { from: "them", text: "arrisquei", time: "21:20" },
      { from: "them", text: "3 obras em paralelo agora, tudo separado por aba. nunca mais me perdi 🙏", time: "21:22" },
    ],
  },
  {
    initials: "TZ",
    name: "Teresa Zefa",
    city: "Luanda",
    role: "Arquitecta",
    avatar: "bg-signal/15 text-signal",
    bubbles: [
      { from: "them", text: "bom dia, é mesmo entrega imediata? não quero esperar dias", time: "07:22" },
      { from: "me", text: "sim Teresa, logo após o pagamento cais na página de download ✅", time: "07:24" },
      { from: "them", text: "paguei", time: "07:30" },
      { from: "them", text: "já baixei tudo, planilha + os 2 bónus. rapidíssimo, está fixe 👏", time: "07:33" },
    ],
  },
  {
    initials: "AM",
    name: "André Mendonça",
    city: "Malanje",
    role: "Empreiteiro",
    avatar: "bg-coral/15 text-coral",
    bubbles: [
      { from: "them", text: "kota, abri no PC do escritório e no telemóvel na obra", time: "05:48" },
      { from: "them", text: "os mesmos números nos dois, sem confusão de cadernos", time: "05:49" },
      { from: "me", text: "é essa a ideia mano, obra controlada na palma da mão 📱", time: "05:52" },
      { from: "them", text: "bazar! já mandei o link a dois colegas daqui", time: "05:53" },
    ],
  },
];

export const FAQS = [
  {
    q: "preciso saber excel?",
    a: "não. a planilha vem pronta com fórmulas e categorias já configuradas. só precisa preencher.",
  },
  {
    q: "funciona no telemóvel?",
    a: "sim, funciona no google sheets pelo telemóvel, e também em qualquer computador com excel ou libreoffice.",
  },
  {
    q: "como recebo a planilha?",
    a: "após o pagamento você é redirecionado para a página de download imediato.",
  },
  {
    q: "posso editar e personalizar?",
    a: "totalmente. adicione categorias, mude cores, adapte à sua obra.",
  },
  {
    q: "serve para pequenas reformas?",
    a: "sim, funciona para obras de qualquer tamanho, de reforma de casa a construção completa.",
  },
];
