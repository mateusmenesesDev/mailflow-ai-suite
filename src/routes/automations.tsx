import { createFileRoute } from "@tanstack/react-router";
import { Zap, Clock, Mail, GitBranch, Gift, ArrowDown, Plus, Play, Save } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/automations")({
  head: () => ({ meta: [{ title: "Automations — MailFlow AI" }] }),
  component: AutomationsPage,
});

const nodes = [
  { icon: Zap, label: "Trigger", desc: "Novo contato adicionado", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30" },
  { icon: Clock, label: "Delay", desc: "Aguardar 1 hora", color: "text-blue-400 bg-blue-500/10 border-blue-500/30" },
  { icon: Mail, label: "Send Email", desc: "Boas-vindas + tour", color: "text-violet-400 bg-violet-500/10 border-violet-500/30" },
  { icon: GitBranch, label: "Condition", desc: "Abriu o email?", color: "text-amber-400 bg-amber-500/10 border-amber-500/30" },
  { icon: Gift, label: "Send Coupon", desc: "Cupom de 20% off", color: "text-pink-400 bg-pink-500/10 border-pink-500/30" },
];

function AutomationsPage() {
  return (
    <div className="flex min-w-0 flex-1 flex-col">
      <PageHeader
        section="Marketing"
        title="Automations"
        actions={
          <>
            <Button variant="outline" size="sm" className="gap-1.5"><Save className="h-3.5 w-3.5" /> Salvar</Button>
            <Button size="sm" className="gap-1.5"><Play className="h-3.5 w-3.5" /> Ativar</Button>
          </>
        }
      />
      <div
        className="relative flex-1 overflow-auto bg-muted/10"
        style={{
          backgroundImage:
            "radial-gradient(circle, oklch(0.35 0.02 265 / 0.4) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      >
        <div className="flex min-h-full flex-col items-center justify-start gap-3 py-12">
          {nodes.map((n, i) => (
            <div key={n.label} className="flex flex-col items-center">
              <div className={cn("flex w-72 items-center gap-3 rounded-xl border bg-background p-3 shadow-lg", n.color.split(" ").slice(2).join(" "))}>
                <div className={cn("grid h-9 w-9 shrink-0 place-items-center rounded-lg", n.color.split(" ").slice(0, 2).join(" "))}>
                  <n.icon className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium">{n.label}</p>
                  <p className="truncate text-xs text-muted-foreground">{n.desc}</p>
                </div>
              </div>
              {i < nodes.length - 1 && (
                <div className="flex flex-col items-center py-1 text-muted-foreground">
                  <div className="h-4 w-px bg-border" />
                  <ArrowDown className="h-3 w-3" />
                  <div className="h-4 w-px bg-border" />
                </div>
              )}
            </div>
          ))}

          <button className="mt-3 flex items-center gap-2 rounded-full border border-dashed px-4 py-2 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary">
            <Plus className="h-3.5 w-3.5" /> Adicionar passo
          </button>
        </div>
      </div>
    </div>
  );
}
