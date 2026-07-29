import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Sparkles,
  Mail,
  Zap,
  BarChart3,
  Users,
  Shield,
  ArrowRight,
  Check,
  Star,
  Play,
  ChevronRight,
  Globe,
  Lock,
  Cpu,
  MessageSquare,
  Workflow,
  Megaphone,
  PieChart,
  Layers,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MailFlow AI — Email, Marketing e IA em um só lugar" },
      {
        name: "description",
        content:
          "A plataforma completa que unifica caixa de entrada, campanhas de marketing, automações e inteligência artificial. Criada para equipes que querem escalar sem perder a personalidade.",
      },
      { property: "og:title", content: "MailFlow AI — Email, Marketing e IA em um só lugar" },
      {
        property: "og:description",
        content:
          "Caixa de entrada, campanhas, automações e IA integradas em uma única experiência moderna.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: LandingPage,
});

const navLinks = [
  { label: "Recursos", href: "#features" },
  { label: "Como funciona", href: "#how-it-works" },
  { label: "Planos", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const primaryFeatures = [
  {
    icon: Mail,
    title: "Caixa de entrada unificada",
    description:
      "Reuna todos os seus emails em um só lugar. Filtros inteligentes, respostas rápidas e rótulos automáticos mantêm você no controle.",
  },
  {
    icon: MegaphoneIcon,
    title: "Campanhas que convertem",
    description:
      "Crie, personalize e envie campanhas em minutos. Segmentação avançada, templates profissionais e métricas em tempo real.",
  },
  {
    icon: WorkflowIcon,
    title: "Automações visuais",
    description:
      "Construa jornadas de clientes com um canvas intuitivo. Gatilhos, condições e ações conectadas sem escrever código.",
  },
  {
    icon: Sparkles,
    title: "Assistente de IA integrado",
    description:
      "Redija emails, resuma conversas, gere ideias de campanhas e receba recomendações baseadas nos dados da sua conta.",
  },
  {
    icon: BarChart3,
    title: "Analytics em tempo real",
    description:
      "Acompanhe aberturas, cliques, conversões e receita. Dashboards limpos e exportáveis para apresentar resultados.",
  },
  {
    icon: Shield,
    title: "Segurança e compliance",
    description:
      "Autenticação, permissões granulares e criptografia. Mantenha seus dados protegidos e em conformidade com LGPD/GDPR.",
  },
];

const steps = [
  {
    number: "01",
    title: "Conecte suas contas",
    description: "Integre emails, SMTP e listas de contatos em poucos cliques.",
  },
  {
    number: "02",
    title: "Crie com IA",
    description: "Use templates inteligentes e o assistente para produzir conteúdo em segundos.",
  },
  {
    number: "03",
    title: "Automate e escale",
    description: "Dispare jornadas personalizadas e acompanhe o crescimento em dashboards ao vivo.",
  },
];

const testimonials = [
  {
    name: "Ana Luiza",
    role: "Head de Marketing",
    company: "Aurora Studios",
    content:
      "MailFlow AI reduziu em 60% o tempo que gastávamos entre email e ferramentas de marketing. Tudo finalmente conversa.",
    initials: "AL",
  },
  {
    name: "Ricardo Souza",
    role: "CEO",
    company: "Breeze SaaS",
    content:
      "A experiência lembra o Linear: rápida, bonita e confiável. A automação visual mudou como pensamos sobre nutrição de leads.",
    initials: "RS",
  },
  {
    name: "Mariana Costa",
    role: "Growth Lead",
    company: "Vera Edu",
    content:
      "O assistente de IA escreve campanhas que parecem humanas. Nossa taxa de abertura subiu 34% no primeiro mês.",
    initials: "MC",
  },
];

const plans = [
  {
    name: "Starter",
    price: "R$ 97",
    period: "/mês",
    description: "Ideal para freelancers e pequenas equipes.",
    features: ["Até 5.000 contatos", "3 usuários", "Automações básicas", "Templates com IA", "Suporte por email"],
    cta: "Começar grátis",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "R$ 247",
    period: "/mês",
    description: "Para equipes que precisam escalar com dados.",
    features: [
      "Até 50.000 contatos",
      "10 usuários",
      "Automações avançadas",
      "Analytics completo",
      "Suporte prioritário",
      "API access",
    ],
    cta: "Começar grátis",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Personalizado",
    period: "",
    description: "Segurança, SLA e controle total para grandes empresas.",
    features: [
      "Contatos ilimitados",
      "Usuários ilimitados",
      "SSO e permissões avançadas",
      "Infra dedicada",
      "Success manager",
      "Custom contracts",
    ],
    cta: "Falar com vendas",
    highlighted: false,
  },
];

const faqs = [
  {
    question: "Preciso trocar meu provedor de email atual?",
    answer:
      "Não. Você conecta suas contas Gmail, Outlook ou SMTP existentes e gerencia tudo dentro do MailFlow AI.",
  },
  {
    question: "A IA tem custo adicional?",
    answer:
      "O assistente de IA está incluído nos planos Pro e Enterprise. No Starter, você tem um limite generoso de uso mensal.",
  },
  {
    question: "Posso importar minhas listas de contatos?",
    answer:
      "Sim. Importe via CSV, API ou integrações diretas. O MailFlow AI detecta automaticamente campos e duplicatas.",
  },
  {
    question: "Há contrato de fidelidade?",
    answer: "Não. Você pode cancelar ou mudar de plano a qualquer momento, sem taxas de rescisão.",
  },
];

const stats = [
  { value: "40%", label: "aumento médio na produtividade" },
  { value: "3x", label: "mais rápido criar campanhas" },
  { value: "99.9%", label: "uptime garantido" },
  { value: "2.500+", label: "empresas confiam" },
];

function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <BackgroundGlow />

      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-indigo-600 shadow-lg shadow-primary/20">
              <Sparkles className="h-4 w-4 text-primary-foreground" strokeWidth={2.5} />
            </div>
            <span className="text-lg font-semibold tracking-tight">MailFlow AI</span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/inbox">
              <Button variant="ghost" size="sm">
                Entrar
              </Button>
            </Link>
            <Link to="/inbox">
              <Button size="sm" className="gap-1.5">
                Começar grátis <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="relative px-4 pt-20 md:px-6 md:pt-28">
          <div className="mx-auto max-w-7xl text-center">
            <Badge
              variant="secondary"
              className="mb-6 h-7 gap-1.5 rounded-full px-3 text-xs font-medium"
            >
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Agora com assistente de IA integrado
            </Badge>

            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Email, marketing e IA em uma única experiência
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
              MailFlow AI une o melhor do Gmail, Mailchimp, Brevo e ChatGPT em uma plataforma rápida,
              bonita e pronta para escalar. Criada para equipes que não aceitam ferramentas
              desconectadas.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/inbox">
                <Button size="lg" className="gap-2 px-6">
                  Começar grátis <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="gap-2 px-6">
                <Play className="h-4 w-4" /> Ver demonstração
              </Button>
            </div>

            <p className="mt-3 text-xs text-muted-foreground">
              Teste por 14 dias. Não é necessário cartão de crédito.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-6xl">
            <HeroMockup />
          </div>
        </section>

        <section className="border-y border-border/50 bg-muted/30 px-4 py-12 md:px-6">
          <div className="mx-auto max-w-7xl">
            <p className="text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Confiam em nós empresas de todos os tamanhos
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 opacity-60">
              {["Aurora", "Breeze", "Vera", "Nordic", "Pulse", "Orbit"].map((name) => (
                <span key={name} className="text-lg font-semibold tracking-tight">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="px-4 py-24 md:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Tudo que você precisa para crescer
              </h2>
              <p className="mt-4 text-muted-foreground">
                Uma plataforma completa que elimina a necessidade de saltar entre dez ferramentas
                diferentes.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {primaryFeatures.map((feature) => (
                <Card
                  key={feature.title}
                  className="group border-border/60 bg-card/60 transition-colors hover:border-primary/30 hover:bg-card"
                >
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-24 md:px-6">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl border border-border/60 bg-card/50 p-6 shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/15" />
                    <div className="flex-1 space-y-1.5">
                      <div className="h-3 w-1/3 rounded bg-muted" />
                      <div className="h-2.5 w-1/2 rounded bg-muted/70" />
                    </div>
                  </div>
                  <div className="rounded-xl border border-border/60 bg-background p-4">
                    <div className="h-2 w-3/4 rounded bg-muted" />
                    <div className="mt-2 h-2 w-1/2 rounded bg-muted/60" />
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="secondary" className="text-xs">
                      +12% aberturas
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      sugerido pela IA
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Badge variant="secondary" className="mb-4 rounded-full px-3 text-xs">
                Inteligência Artificial
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Deixe a IA trabalhar enquanto você foca na estratégia
              </h2>
              <p className="mt-4 text-muted-foreground">
                O assistente MailFlow aprende com os dados da sua conta para sugerir melhorias de
                assunto, segmentar audiências, responder emails rotineiros e gerar relatórios
                executivos.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Resumo automático de threads longos",
                  "Sugestão de respostas contextuais",
                  "Geração de campanhas com base em dados",
                  "Insights preditivos de churn e engajamento",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/15">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="bg-muted/30 px-4 py-24 md:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Como funciona</h2>
              <p className="mt-4 text-muted-foreground">
                Três passos para transformar sua comunicação em um motor de crescimento.
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {steps.map((step) => (
                <div key={step.number} className="relative">
                  <span className="text-5xl font-bold text-primary/20">{step.number}</span>
                  <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-24 md:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Resultados que você pode medir desde o primeiro dia
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Dashboards limpos, métricas claras e alertas inteligentes para que você tome
                  decisões baseadas em dados, não em suposições.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <Card
                    key={stat.label}
                    className="border-border/60 bg-card/60 transition-colors hover:bg-card"
                  >
                    <CardContent className="flex flex-col justify-center p-5">
                      <span className="text-3xl font-bold text-primary">{stat.value}</span>
                      <span className="mt-1 text-xs text-muted-foreground">{stat.label}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted/30 px-4 py-24 md:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                O que nossos clientes dizem
              </h2>
              <p className="mt-4 text-muted-foreground">
                Equipes de marketing, vendas e sucesso do cliente já mudaram sua forma de trabalhar.
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {testimonials.map((t) => (
                <Card key={t.name} className="border-border/60 bg-card/60">
                  <CardContent className="p-6">
                    <div className="flex gap-1 text-warning">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-foreground">“{t.content}”</p>
                    <div className="mt-6 flex items-center gap-3">
                      <Avatar className="h-9 w-9">
                        <AvatarFallback className="bg-primary/15 text-xs text-primary">
                          {t.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-semibold">{t.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {t.role}, {t.company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="px-4 py-24 md:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Planos simples</h2>
              <p className="mt-4 text-muted-foreground">
                Escolha o plano ideal e comece a testar hoje mesmo.
              </p>
            </div>

            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {plans.map((plan) => (
                <Card
                  key={plan.name}
                  className={`relative flex flex-col border-border/60 ${
                    plan.highlighted
                      ? "bg-card shadow-xl shadow-primary/10 ring-1 ring-primary/30"
                      : "bg-card/60"
                  }`}
                >
                  {plan.highlighted && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3">
                      Mais popular
                    </Badge>
                  )}
                  <CardContent className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-semibold">{plan.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
                    <div className="mt-5 flex items-baseline gap-1">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-sm text-muted-foreground">{plan.period}</span>
                    </div>
                    <ul className="mt-6 flex-1 space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link to="/inbox" className="mt-6">
                      <Button
                        className="w-full"
                        variant={plan.highlighted ? "default" : "outline"}
                      >
                        {plan.cta}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-muted/30 px-4 py-24 md:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Perguntas frequentes
              </h2>
              <p className="mt-4 text-muted-foreground">
                Ainda tem dúvidas? Nosso time está pronto para ajudar.
              </p>
            </div>

            <div className="mt-14 space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-xl border border-border/60 bg-card/60 px-5 py-4 transition-colors open:bg-card"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold">
                    {faq.question}
                    <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-24 md:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-indigo-700 px-6 py-16 text-center text-primary-foreground md:px-12 md:py-20">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Pronto para transformar seu email e marketing?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
                  Junte-se a milhares de empresas que já usam o MailFlow AI para escalar suas
                  comunicações.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link to="/inbox">
                    <Button size="lg" variant="secondary" className="gap-2 px-6">
                      Começar grátis <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary-foreground/30 bg-transparent px-6 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  >
                    Falar com vendas
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/50 px-4 py-12 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-1">
              <Link to="/" className="flex items-center gap-2">
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-indigo-600">
                  <Sparkles className="h-4 w-4 text-primary-foreground" strokeWidth={2.5} />
                </div>
                <span className="text-lg font-semibold">MailFlow AI</span>
              </Link>
              <p className="mt-3 text-sm text-muted-foreground">
                A plataforma moderna de email e marketing potencializada por IA.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Produto</h4>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#features" className="hover:text-foreground">
                    Recursos
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-foreground">
                    Preços
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Integrações
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Empresa</h4>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Carreiras
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Legal</h4>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    Termos de uso
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    LGPD
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-6 text-xs text-muted-foreground sm:flex-row">
            <p>© 2026 MailFlow AI. Todos os direitos reservados.</p>
            <div className="flex items-center gap-4">
              <Globe className="h-4 w-4" />
              <span>Português (Brasil)</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HeroMockup() {
  return (
    <div className="relative rounded-2xl border border-border/60 bg-card/70 p-2 shadow-2xl shadow-primary/10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="rounded-xl border border-border/60 bg-background p-4">
        <div className="flex items-center gap-3 border-b border-border/60 pb-3">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-destructive/80" />
            <div className="h-3 w-3 rounded-full bg-warning/80" />
            <div className="h-3 w-3 rounded-full bg-success/80" />
          </div>
          <div className="ml-4 h-5 flex-1 rounded-md bg-muted/60 text-center text-[10px] leading-5 text-muted-foreground">
            app.mailflow.ai/inbox
          </div>
        </div>
        <div className="mt-3 grid gap-3 md:grid-cols-12">
          <div className="hidden md:col-span-3 md:block">
            <div className="space-y-2">
              <div className="h-8 rounded-md bg-primary/10" />
              <div className="h-2 rounded bg-muted" />
              <div className="h-2 w-2/3 rounded bg-muted" />
              <div className="h-2 w-3/4 rounded bg-muted" />
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="h-8 flex-1 rounded-md bg-muted" />
                <div className="h-8 w-8 rounded-md bg-primary/15" />
              </div>
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-lg border border-border/60 p-2.5"
                >
                  <div className="h-8 w-8 rounded-full bg-muted" />
                  <div className="flex-1 space-y-1.5">
                    <div className="h-2 w-1/2 rounded bg-muted" />
                    <div className="h-2 w-3/4 rounded bg-muted/60" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-4">
            <div className="rounded-lg border border-border/60 bg-muted/30 p-4">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-xs font-semibold">Assistente MailFlow</span>
              </div>
              <div className="mt-3 space-y-2">
                <div className="h-2 rounded bg-muted" />
                <div className="h-2 w-5/6 rounded bg-muted" />
                <div className="h-2 w-4/5 rounded bg-muted" />
              </div>
              <div className="mt-4 h-7 rounded-md bg-primary/15 text-center text-xs leading-7 text-primary">
                Gerar resposta
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackgroundGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute top-1/3 -left-1/4 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="absolute top-1/3 -right-1/4 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-3xl" />
    </div>
  );
}

function MegaphoneIcon(props: React.ComponentProps<"svg">) {
  return <Megaphone {...props} />;
}

function WorkflowIcon(props: React.ComponentProps<"svg">) {
  return <Workflow {...props} />;
}
