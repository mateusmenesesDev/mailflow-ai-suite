// Mock data for MailFlow AI

export type Email = {
  id: string;
  from: { name: string; email: string; avatar?: string };
  to: string;
  subject: string;
  preview: string;
  body: string;
  time: string;
  unread: boolean;
  starred: boolean;
  hasAttachment: boolean;
  labels: string[];
  folder: "inbox" | "sent" | "drafts" | "spam" | "trash";
};

const bodies = [
  "Olá! Espero que esteja tudo bem. Estou entrando em contato para compartilhar as últimas novidades sobre nossa parceria estratégica que discutimos na semana passada. Nossa equipe está muito animada com as possibilidades que se abrem a partir daqui.\n\nConseguimos alinhar os principais pontos com o time de produto e já temos um protótipo funcional para apresentar. Podemos agendar uma reunião esta semana para discutir os próximos passos?\n\nAbraço,",
  "Segue em anexo o relatório mensal com todas as métricas consolidadas. Os destaques deste mês incluem crescimento de 34% em MRR, aumento de 22% na retenção e queda significativa no churn. Vale a pena revisar a seção sobre coortes na página 12.\n\nQualquer dúvida, estou à disposição.",
  "Confirmando nossa call de amanhã às 15h. Vou enviar o link do Meet em breve. Preparei uma apresentação rápida sobre os resultados do último sprint e algumas ideias para o próximo ciclo.\n\nAté lá!",
  "Recebemos seu pedido com sucesso! Seu código de rastreamento é #MF-9821. A entrega está prevista para os próximos 3 dias úteis. Caso tenha qualquer dúvida, nossa equipe de suporte está disponível 24/7.",
  "Que ótima notícia! Adorei sua proposta e acho que faz total sentido darmos esse próximo passo juntos. Vou compartilhar com o restante do time hoje ainda e retorno com feedback consolidado até sexta-feira.",
];

const names = [
  ["Ana Silva", "ana@stripe.com"],
  ["Rafael Costa", "rafael@vercel.com"],
  ["Marina Rodrigues", "marina@linear.app"],
  ["Diego Almeida", "diego@notion.so"],
  ["Larissa Ferreira", "larissa@figma.com"],
  ["Bruno Martins", "bruno@github.com"],
  ["Camila Souza", "camila@raycast.com"],
  ["Thiago Lima", "thiago@posthog.com"],
  ["Juliana Pereira", "juliana@openai.com"],
  ["Pedro Henrique", "pedro@anthropic.com"],
  ["Beatriz Alves", "bia@supabase.io"],
  ["Lucas Oliveira", "lucas@resend.com"],
  ["Fernanda Ribeiro", "fer@planetscale.com"],
  ["Gustavo Nunes", "gustavo@railway.app"],
  ["Isabela Cardoso", "isabela@clerk.com"],
];

const subjects = [
  "Novidades sobre nossa parceria estratégica",
  "Relatório mensal — Novembro",
  "Confirmando call de amanhã às 15h",
  "Seu pedido foi confirmado #MF-9821",
  "Feedback sobre a proposta enviada",
  "Convite: Design Review Q4",
  "Ação necessária: aprovar orçamento",
  "Newsletter semanal — insights da indústria",
  "Nova feature disponível para seu workspace",
  "Reunião de kickoff — Projeto Aurora",
  "Follow-up: contrato de prestação",
  "Convite para o evento anual de parceiros",
  "Atualizações de segurança da plataforma",
  "Sua fatura está disponível",
  "Bem-vindo(a) ao MailFlow AI ✨",
];

const labels = [
  ["Trabalho", "Urgente"],
  ["Financeiro"],
  ["Marketing"],
  ["Produto", "Design"],
  ["Cliente"],
  ["Interno"],
  ["Newsletter"],
  [],
];

export const mockEmails: Email[] = Array.from({ length: 24 }).map((_, i) => {
  const person = names[i % names.length];
  return {
    id: `mail-${i + 1}`,
    from: { name: person[0], email: person[1] },
    to: "voce@mailflow.ai",
    subject: subjects[i % subjects.length],
    preview: bodies[i % bodies.length].slice(0, 110).replace(/\n/g, " "),
    body: bodies[i % bodies.length],
    time: [
      "09:42",
      "08:15",
      "Ontem",
      "Ontem",
      "Ter",
      "Seg",
      "Dom",
      "24 Nov",
      "22 Nov",
      "20 Nov",
    ][i % 10],
    unread: i < 6 || i % 5 === 0,
    starred: i % 4 === 0,
    hasAttachment: i % 3 === 0,
    labels: labels[i % labels.length],
    folder: "inbox",
  };
});

export const mockContacts = Array.from({ length: 18 }).map((_, i) => {
  const person = names[i % names.length];
  const companies = ["Stripe", "Vercel", "Linear", "Notion", "Figma", "GitHub", "Raycast", "PostHog"];
  const roles = ["CEO", "CTO", "Head of Product", "Designer", "Marketing Lead", "Founder", "Growth"];
  const statuses = ["Ativo", "Novo", "Engajado", "Frio"];
  const tagsList = [["cliente", "vip"], ["lead"], ["parceiro"], ["newsletter"]];
  return {
    id: `contact-${i + 1}`,
    name: person[0],
    email: person[1],
    company: companies[i % companies.length],
    role: roles[i % roles.length],
    tags: tagsList[i % tagsList.length],
    lastInteraction: ["há 2 dias", "há 1 semana", "hoje", "há 3 semanas", "ontem"][i % 5],
    status: statuses[i % statuses.length],
  };
});

export const mockLists = [
  { id: "1", name: "Newsletter semanal", contacts: 12480, updated: "há 2 horas", creator: "Ana Silva" },
  { id: "2", name: "Clientes VIP", contacts: 342, updated: "ontem", creator: "Rafael Costa" },
  { id: "3", name: "Leads Blackfriday", contacts: 5680, updated: "há 3 dias", creator: "Marina R." },
  { id: "4", name: "Onboarding React", contacts: 2145, updated: "hoje", creator: "Diego A." },
  { id: "5", name: "Reengajamento Q4", contacts: 890, updated: "há 1 semana", creator: "Larissa F." },
  { id: "6", name: "Beta users", contacts: 128, updated: "há 4 horas", creator: "Bruno M." },
];

export const mockCampaigns = [
  { id: "1", name: "Black Friday 2026 — Oferta principal", status: "Enviada", list: "Newsletter semanal", schedule: "24 Nov 09:00", performance: 84, opens: 62, ctr: 18.4 },
  { id: "2", name: "Lançamento MailFlow 2.0", status: "Agendada", list: "Clientes VIP", schedule: "12 Dez 10:00", performance: 0, opens: 0, ctr: 0 },
  { id: "3", name: "Newsletter — Insights da semana", status: "Rascunho", list: "Newsletter semanal", schedule: "—", performance: 0, opens: 0, ctr: 0 },
  { id: "4", name: "Reengajamento outubro", status: "Enviada", list: "Reengajamento Q4", schedule: "18 Out 08:00", performance: 41, opens: 32, ctr: 6.2 },
  { id: "5", name: "Convite webinar de IA", status: "Enviada", list: "Beta users", schedule: "02 Nov 15:00", performance: 92, opens: 78, ctr: 34.1 },
  { id: "6", name: "Case study — Vercel", status: "Enviada", list: "Leads Blackfriday", schedule: "10 Nov 11:00", performance: 68, opens: 54, ctr: 12.8 },
];

export const mockTemplates = [
  { id: "1", name: "Boas-vindas", category: "Welcome", updated: "há 2 dias" },
  { id: "2", name: "Newsletter minimalista", category: "Newsletter", updated: "ontem" },
  { id: "3", name: "Promoção Black Friday", category: "Promotion", updated: "há 3 horas" },
  { id: "4", name: "Anúncio de feature", category: "Announcement", updated: "há 1 semana" },
  { id: "5", name: "Módulo do curso", category: "Course", updated: "hoje" },
  { id: "6", name: "Lançamento de produto", category: "Product Launch", updated: "há 5 dias" },
  { id: "7", name: "Digest semanal", category: "Newsletter", updated: "há 2 semanas" },
  { id: "8", name: "Cupom exclusivo", category: "Promotion", updated: "ontem" },
];

export const analyticsSeries = Array.from({ length: 30 }).map((_, i) => ({
  day: `${i + 1}`,
  sent: Math.round(2000 + Math.random() * 3000 + i * 60),
  opens: Math.round(800 + Math.random() * 1400 + i * 30),
  clicks: Math.round(150 + Math.random() * 400 + i * 8),
}));

export const deviceBreakdown = [
  { name: "Desktop", value: 54 },
  { name: "Mobile", value: 38 },
  { name: "Tablet", value: 8 },
];

export const clientBreakdown = [
  { name: "Gmail", value: 62 },
  { name: "Outlook", value: 18 },
  { name: "Apple Mail", value: 14 },
  { name: "Yahoo", value: 6 },
];

export const mockInsights = [
  { title: "Sua taxa de abertura caiu 14%", desc: "Comparado com os últimos 30 dias. Sugerimos revisar seus assuntos e horários de envio.", severity: "warning" as const },
  { title: "O melhor horário é terça às 09:00", desc: "Campanhas enviadas nesse horário tiveram 42% a mais de abertura.", severity: "info" as const },
  { title: "Lista React possui CTR 28% maior", desc: "Considere replicar o conteúdo dessa lista em outras campanhas.", severity: "success" as const },
  { title: "Reengajamento pode recuperar ~320 contatos", desc: "Contatos inativos há mais de 60 dias respondem bem a campanhas com desconto.", severity: "info" as const },
  { title: "3 domínios com queda de reputação", desc: "Revise suas configurações de SPF/DKIM para gmail.com, outlook.com e yahoo.com.", severity: "warning" as const },
  { title: "Assuntos com emoji tem +18% de abertura", desc: "Nas suas últimas 12 campanhas, uso de emoji impactou positivamente.", severity: "success" as const },
];

export const aiHistory = [
  { id: "1", title: "Newsletter da semana sobre IA", time: "hoje" },
  { id: "2", title: "Melhorar CTA do lançamento", time: "hoje" },
  { id: "3", title: "Traduzir campanha para EN", time: "ontem" },
  { id: "4", title: "Resumir feedback dos clientes", time: "ontem" },
  { id: "5", title: "Gerar assunto para Black Friday", time: "há 3 dias" },
  { id: "6", title: "Copy para email de reengajamento", time: "há 1 semana" },
];

export function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function avatarColor(name: string) {
  const palette = [
    "bg-violet-500/20 text-violet-300",
    "bg-blue-500/20 text-blue-300",
    "bg-emerald-500/20 text-emerald-300",
    "bg-amber-500/20 text-amber-300",
    "bg-pink-500/20 text-pink-300",
    "bg-cyan-500/20 text-cyan-300",
    "bg-orange-500/20 text-orange-300",
    "bg-rose-500/20 text-rose-300",
  ];
  const idx = name.charCodeAt(0) % palette.length;
  return palette[idx];
}
