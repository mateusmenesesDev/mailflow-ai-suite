import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle, Info, TrendingUp, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { mockInsights } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/ai-insights")({
  head: () => ({ meta: [{ title: "AI Insights — MailFlow AI" }] }),
  component: AIInsightsPage,
});

const iconMap = {
  warning: { icon: AlertTriangle, color: "text-amber-400 bg-amber-500/10 border-amber-500/30" },
  info: { icon: Info, color: "text-blue-400 bg-blue-500/10 border-blue-500/30" },
  success: { icon: TrendingUp, color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30" },
};

function AIInsightsPage() {
  return (
    <div className="flex min-w-0 flex-1 flex-col">
      <PageHeader section="AI" title="AI Insights" description="Recomendações geradas com base nos seus dados." />
      <ScrollArea className="flex-1">
        <div className="mx-auto max-w-6xl space-y-6 p-4 md:p-6">
          <Card className="overflow-hidden border-primary/30 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-6">
            <div className="flex items-start gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary/60 shadow-lg shadow-primary/20">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold">6 recomendações prontas para você</h2>
                <p className="mt-1 text-sm text-muted-foreground">Aplicando essas ações você pode aumentar sua open rate em até 22% e recuperar cerca de 320 contatos inativos.</p>
              </div>
              <Button className="shrink-0 gap-1.5"><Sparkles className="h-3.5 w-3.5" /> Aplicar tudo</Button>
            </div>
          </Card>

          <div className="grid gap-3 md:grid-cols-2">
            {mockInsights.map((ins) => {
              const meta = iconMap[ins.severity];
              return (
                <Card key={ins.title} className={cn("p-5 transition-all hover:shadow-lg", meta.color.split(" ").slice(2).join(" "))}>
                  <div className="flex items-start gap-3">
                    <div className={cn("grid h-9 w-9 shrink-0 place-items-center rounded-lg", meta.color.split(" ").slice(0, 2).join(" "))}>
                      <meta.icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-semibold">{ins.title}</h3>
                      <p className="mt-1 text-xs text-muted-foreground">{ins.desc}</p>
                      <div className="mt-3 flex gap-2">
                        <Button size="sm" variant="outline" className="h-7 text-xs">Aplicar</Button>
                        <Button size="sm" variant="ghost" className="h-7 text-xs">Descartar</Button>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
