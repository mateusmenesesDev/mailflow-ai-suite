import { createFileRoute } from "@tanstack/react-router";
import { Wand2, Mail, PenTool, ScanText, Languages, Sparkles, MessageSquare, Zap } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/ai-templates")({
  head: () => ({ meta: [{ title: "AI Templates — MailFlow AI" }] }),
  component: AITemplatesPage,
});

const aiTemplates = [
  { icon: Mail, title: "Escrever email do zero", desc: "Descreva o objetivo e a IA cria o email.", tag: "Popular" },
  { icon: PenTool, title: "Gerar assunto", desc: "Assuntos otimizados para taxa de abertura.", tag: "Novo" },
  { icon: ScanText, title: "Melhorar copy", desc: "Torne seu texto mais claro e persuasivo.", tag: "" },
  { icon: Languages, title: "Traduzir campanha", desc: "Adapta tom e cultura para o idioma alvo.", tag: "" },
  { icon: Sparkles, title: "Gerar CTA", desc: "Chamadas para ação otimizadas por contexto.", tag: "" },
  { icon: MessageSquare, title: "Resumir conversa", desc: "Sintetize threads longas em bullet points.", tag: "" },
  { icon: Zap, title: "Segmentação inteligente", desc: "Sugere segmentos com base no comportamento.", tag: "Beta" },
  { icon: Wand2, title: "Gerar newsletter", desc: "Newsletter completa a partir de tópicos.", tag: "Popular" },
];

function AITemplatesPage() {
  return (
    <div className="flex min-w-0 flex-1 flex-col">
      <PageHeader section="AI" title="AI Templates" description="Comandos prontos para acelerar seu trabalho." />
      <ScrollArea className="flex-1">
        <div className="mx-auto grid max-w-7xl gap-3 p-4 sm:grid-cols-2 md:p-6 lg:grid-cols-3 xl:grid-cols-4">
          {aiTemplates.map((t) => (
            <Card key={t.title} className="group flex flex-col p-5 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
              <div className="mb-4 flex items-start justify-between">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary">
                  <t.icon className="h-4 w-4" />
                </div>
                {t.tag && <Badge variant="secondary" className="text-[9px]">{t.tag}</Badge>}
              </div>
              <h3 className="text-sm font-semibold">{t.title}</h3>
              <p className="mt-1 flex-1 text-xs text-muted-foreground">{t.desc}</p>
              <Button size="sm" variant="ghost" className="mt-4 justify-start gap-1.5 px-0 text-xs text-primary hover:bg-transparent hover:text-primary">
                <Sparkles className="h-3 w-3" /> Executar
              </Button>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
