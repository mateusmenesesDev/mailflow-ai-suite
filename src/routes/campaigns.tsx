import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Plus,
  MoreHorizontal,
  Mail,
  Eye,
  MousePointerClick,
  AlertTriangle,
  UserMinus,
  ArrowUpRight,
  Search,
  Filter,
} from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { mockCampaigns, mockLists, mockTemplates } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/campaigns")({
  head: () => ({ meta: [{ title: "Campaigns — MailFlow AI" }] }),
  component: CampaignsPage,
});

const stats = [
  { label: "Emails enviados", value: "184.320", delta: "+12.4%", icon: Mail, positive: true },
  { label: "Open rate", value: "38.6%", delta: "+2.1%", icon: Eye, positive: true },
  { label: "Click-through", value: "12.8%", delta: "+0.6%", icon: MousePointerClick, positive: true },
  { label: "Bounce rate", value: "1.4%", delta: "-0.2%", icon: AlertTriangle, positive: true },
  { label: "Unsubscribes", value: "0.32%", delta: "+0.05%", icon: UserMinus, positive: false },
];

function statusStyle(status: string) {
  switch (status) {
    case "Enviada":
      return "bg-emerald-500/15 text-emerald-400 border-emerald-500/30";
    case "Agendada":
      return "bg-blue-500/15 text-blue-400 border-blue-500/30";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
}

function CampaignsPage() {
  const [wizardOpen, setWizardOpen] = useState(false);
  return (
    <div className="flex min-w-0 flex-1 flex-col">
      <PageHeader
        section="Marketing"
        title="Campaigns"
        actions={
          <Button size="sm" className="gap-1.5" onClick={() => setWizardOpen(true)}>
            <Plus className="h-3.5 w-3.5" /> Nova campanha
          </Button>
        }
      />
      <ScrollArea className="flex-1">
        <div className="mx-auto max-w-7xl space-y-6 p-4 md:p-6">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {stats.map((s) => (
              <Card key={s.label} className="relative overflow-hidden">
                <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-xs font-medium text-muted-foreground">{s.label}</CardTitle>
                  <s.icon className="h-3.5 w-3.5 text-muted-foreground" />
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="text-2xl font-semibold tracking-tight">{s.value}</div>
                  <p className={cn("mt-1 flex items-center gap-1 text-[11px]", s.positive ? "text-emerald-400" : "text-rose-400")}>
                    <ArrowUpRight className="h-3 w-3" /> {s.delta} vs. 30d
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader className="flex-row items-center gap-2 space-y-0 border-b py-3">
              <div className="relative flex-1 max-w-sm">
                <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Buscar campanhas…" className="h-8 pl-8 text-xs" />
              </div>
              <Button variant="outline" size="sm" className="h-8 gap-1.5 text-xs">
                <Filter className="h-3.5 w-3.5" /> Filtros
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Lista</TableHead>
                    <TableHead>Agendamento</TableHead>
                    <TableHead>Performance</TableHead>
                    <TableHead className="w-8" />
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockCampaigns.map((c) => (
                    <TableRow key={c.id} className="cursor-pointer">
                      <TableCell className="font-medium">{c.name}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={cn("border text-[10px]", statusStyle(c.status))}>
                          {c.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{c.list}</TableCell>
                      <TableCell className="text-muted-foreground">{c.schedule}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={c.performance} className="h-1.5 w-24" />
                          <span className="text-xs text-muted-foreground">{c.performance}%</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon" className="h-7 w-7">
                          <MoreHorizontal className="h-3.5 w-3.5" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </ScrollArea>

      <CampaignWizard open={wizardOpen} onOpenChange={setWizardOpen} />
    </div>
  );
}

function CampaignWizard({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const [step, setStep] = useState(1);
  const steps = ["Informações", "Selecionar lista", "Escolher template", "Revisar e agendar"];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Nova campanha</DialogTitle>
          <DialogDescription>Preencha os detalhes em 4 etapas.</DialogDescription>
        </DialogHeader>

        <div className="mb-4 flex items-center gap-2">
          {steps.map((label, i) => (
            <div key={label} className="flex flex-1 items-center gap-2">
              <div
                className={cn(
                  "grid h-6 w-6 shrink-0 place-items-center rounded-full border text-[11px] font-medium",
                  step > i + 1 && "border-primary bg-primary text-primary-foreground",
                  step === i + 1 && "border-primary text-primary",
                  step < i + 1 && "text-muted-foreground"
                )}
              >
                {i + 1}
              </div>
              <span className={cn("hidden text-xs sm:inline", step === i + 1 ? "font-medium" : "text-muted-foreground")}>
                {label}
              </span>
              {i < steps.length - 1 && <div className="h-px flex-1 bg-border" />}
            </div>
          ))}
        </div>

        <div className="min-h-[260px] rounded-lg border bg-muted/20 p-4">
          {step === 1 && (
            <div className="grid gap-4">
              <div className="grid gap-1.5"><Label>Nome</Label><Input placeholder="Ex: Newsletter dezembro" /></div>
              <div className="grid gap-1.5"><Label>Assunto</Label><Input placeholder="Ex: Novidades do mês ✨" /></div>
              <div className="grid gap-1.5">
                <Label>Remetente</Label>
                <Select defaultValue="1"><SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Ana Silva &lt;ana@mailflow.ai&gt;</SelectItem>
                    <SelectItem value="2">MailFlow &lt;team@mailflow.ai&gt;</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="grid gap-2 sm:grid-cols-2">
              {mockLists.map((l) => (
                <button key={l.id} className="rounded-lg border p-3 text-left hover:border-primary hover:bg-primary/5">
                  <p className="text-sm font-medium">{l.name}</p>
                  <p className="text-xs text-muted-foreground">{l.contacts.toLocaleString()} contatos</p>
                </button>
              ))}
            </div>
          )}
          {step === 3 && (
            <div className="grid gap-2 sm:grid-cols-3">
              {mockTemplates.slice(0, 6).map((t) => (
                <button key={t.id} className="group rounded-lg border p-2 text-left hover:border-primary">
                  <div className="mb-2 aspect-[4/3] rounded bg-gradient-to-br from-primary/20 to-transparent" />
                  <p className="truncate text-xs font-medium">{t.name}</p>
                  <p className="text-[10px] text-muted-foreground">{t.category}</p>
                </button>
              ))}
            </div>
          )}
          {step === 4 && (
            <div className="space-y-3 text-sm">
              <p className="text-muted-foreground">Revise sua campanha antes de enviar.</p>
              <div className="rounded-md border bg-background p-3 text-xs">
                <p><span className="text-muted-foreground">Nome:</span> Newsletter dezembro</p>
                <p><span className="text-muted-foreground">Assunto:</span> Novidades do mês ✨</p>
                <p><span className="text-muted-foreground">Lista:</span> Newsletter semanal (12.480 contatos)</p>
                <p><span className="text-muted-foreground">Template:</span> Newsletter minimalista</p>
              </div>
              <div className="grid gap-1.5"><Label>Agendar envio</Label><Input type="datetime-local" /></div>
            </div>
          )}
        </div>

        <DialogFooter className="mt-4">
          <Button variant="ghost" onClick={() => (step > 1 ? setStep(step - 1) : onOpenChange(false))}>
            {step > 1 ? "Voltar" : "Cancelar"}
          </Button>
          {step < 4 ? (
            <Button onClick={() => setStep(step + 1)}>Próximo</Button>
          ) : (
            <Button onClick={() => onOpenChange(false)}>Agendar campanha</Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
