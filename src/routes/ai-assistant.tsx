import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Send, Plus, Search, MessageSquare, Wand2, PenTool, Languages, ScanText, Mail } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { aiHistory } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/ai-assistant")({
  head: () => ({ meta: [{ title: "AI Assistant — MailFlow AI" }] }),
  component: AIAssistantPage,
});

const suggestions = [
  { icon: Mail, title: "Escreva uma newsletter", desc: "Sobre lançamento do produto" },
  { icon: Wand2, title: "Gerar campanha", desc: "Black Friday para clientes VIP" },
  { icon: PenTool, title: "Criar assunto", desc: "Alta taxa de abertura" },
  { icon: ScanText, title: "Melhorar email", desc: "Torna o texto mais persuasivo" },
  { icon: MessageSquare, title: "Resumir conversa", desc: "Insights dos últimos 5 emails" },
  { icon: Languages, title: "Traduzir", desc: "Português → Inglês/Espanhol" },
];

function AIAssistantPage() {
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([]);
  const [input, setInput] = useState("");

  const send = (text?: string) => {
    const t = text ?? input;
    if (!t.trim()) return;
    setMessages((m) => [
      ...m,
      { role: "user", content: t },
      { role: "assistant", content: `Claro! Aqui está uma sugestão para "${t}":\n\nAssunto: ✨ Novidades exclusivas para você\n\nOlá {nome}, temos uma novidade especial que achamos que você vai adorar. Nossa nova versão traz melhorias significativas em performance, além de recursos de IA integrada para automatizar seu fluxo diário.\n\nQuer conhecer? Reserve 5 minutos e faça um tour rápido:\n\n[Botão: Ver novidades]` },
    ]);
    setInput("");
  };

  return (
    <div className="flex h-svh min-w-0 flex-col md:flex-row">
      <aside className="hidden w-64 shrink-0 flex-col border-r bg-muted/10 md:flex">
        <div className="border-b p-3">
          <Button className="w-full gap-1.5" size="sm"><Plus className="h-3.5 w-3.5" /> Nova conversa</Button>
        </div>
        <div className="border-b p-3">
          <div className="relative">
            <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
            <Input className="h-8 pl-8 text-xs" placeholder="Buscar histórico…" />
          </div>
        </div>
        <ScrollArea className="flex-1">
          <div className="p-2">
            <p className="mb-1 px-2 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Hoje</p>
            {aiHistory.slice(0, 2).map((h) => (
              <button key={h.id} className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-xs hover:bg-muted">
                <MessageSquare className="h-3 w-3 text-muted-foreground" /> <span className="truncate">{h.title}</span>
              </button>
            ))}
            <p className="mb-1 mt-3 px-2 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Anteriores</p>
            {aiHistory.slice(2).map((h) => (
              <button key={h.id} className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-xs hover:bg-muted">
                <MessageSquare className="h-3 w-3 text-muted-foreground" /> <span className="truncate">{h.title}</span>
              </button>
            ))}
          </div>
        </ScrollArea>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <PageHeader section="AI" title="AI Assistant" />
        <ScrollArea className="flex-1">
          <div className="mx-auto w-full max-w-3xl px-4 py-8 md:px-6">
            {messages.length === 0 ? (
              <div className="text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary to-primary/60 shadow-xl shadow-primary/20">
                  <Sparkles className="h-6 w-6 text-primary-foreground" />
                </div>
                <h2 className="mt-5 text-2xl font-semibold tracking-tight">Como posso ajudar hoje?</h2>
                <p className="mt-2 text-sm text-muted-foreground">Sugestões para começar</p>
                <div className="mx-auto mt-8 grid max-w-2xl gap-2 sm:grid-cols-2">
                  {suggestions.map((s) => (
                    <button
                      key={s.title}
                      onClick={() => send(s.title)}
                      className="group flex items-start gap-3 rounded-xl border p-3 text-left transition-all hover:border-primary/40 hover:bg-primary/5"
                    >
                      <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                        <s.icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium">{s.title}</p>
                        <p className="text-xs text-muted-foreground">{s.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {messages.map((m, i) => (
                  <div key={i} className={cn("flex gap-3", m.role === "user" && "flex-row-reverse")}>
                    <div className={cn("grid h-8 w-8 shrink-0 place-items-center rounded-full", m.role === "user" ? "bg-primary/20 text-primary" : "bg-gradient-to-br from-primary to-primary/60 text-primary-foreground")}>
                      {m.role === "user" ? "V" : <Sparkles className="h-4 w-4" />}
                    </div>
                    <div className={cn("max-w-[80%] rounded-2xl px-4 py-3 text-sm", m.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted/60")}>
                      <p className="whitespace-pre-line">{m.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </ScrollArea>

        <div className="border-t bg-background p-4">
          <div className="mx-auto flex max-w-3xl items-end gap-2 rounded-2xl border bg-muted/30 p-2 focus-within:border-primary/40">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } }}
              placeholder="Pergunte algo ao MailFlow AI…"
              className="min-h-[24px] resize-none border-0 bg-transparent p-2 text-sm shadow-none focus-visible:ring-0"
              rows={1}
            />
            <Button size="icon" className="h-8 w-8 shrink-0" onClick={() => send()}>
              <Send className="h-3.5 w-3.5" />
            </Button>
          </div>
          <p className="mt-2 text-center text-[10px] text-muted-foreground">MailFlow AI pode cometer erros. Verifique informações importantes.</p>
        </div>
      </div>
    </div>
  );
}
