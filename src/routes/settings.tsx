import { createFileRoute } from "@tanstack/react-router";
import { User, Building2, Users, Server, Globe, KeyRound, Puzzle, Webhook, CreditCard, Palette, Bell } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const Route = createFileRoute("/settings")({
  head: () => ({ meta: [{ title: "Settings — MailFlow AI" }] }),
  component: SettingsPage,
});

const tabs = [
  { value: "profile", label: "Perfil", icon: User },
  { value: "workspace", label: "Workspace", icon: Building2 },
  { value: "team", label: "Equipe", icon: Users },
  { value: "smtp", label: "SMTP", icon: Server },
  { value: "domains", label: "Domínios", icon: Globe },
  { value: "api", label: "API Keys", icon: KeyRound },
  { value: "integrations", label: "Integrações", icon: Puzzle },
  { value: "webhooks", label: "Webhooks", icon: Webhook },
  { value: "billing", label: "Billing", icon: CreditCard },
  { value: "theme", label: "Tema", icon: Palette },
  { value: "notifications", label: "Notificações", icon: Bell },
];

function SettingsPage() {
  return (
    <div className="flex min-w-0 flex-1 flex-col">
      <PageHeader title="Settings" />
      <ScrollArea className="flex-1">
        <div className="mx-auto max-w-6xl p-4 md:p-6">
          <Tabs defaultValue="profile" orientation="vertical" className="grid gap-6 md:grid-cols-[200px_minmax(0,1fr)]">
            <TabsList className="flex h-auto flex-col items-stretch gap-0.5 bg-transparent p-0">
              {tabs.map((t) => (
                <TabsTrigger
                  key={t.value}
                  value={t.value}
                  className="justify-start gap-2 px-3 py-2 text-xs data-[state=active]:bg-muted"
                >
                  <t.icon className="h-3.5 w-3.5" /> {t.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="min-w-0">
              <TabsContent value="profile">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Perfil</CardTitle>
                    <CardDescription className="text-xs">Como você aparece no MailFlow.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-16 w-16"><AvatarFallback className="bg-violet-500/20 text-violet-300">JD</AvatarFallback></Avatar>
                      <div>
                        <Button variant="outline" size="sm">Alterar foto</Button>
                        <p className="mt-1 text-[10px] text-muted-foreground">PNG ou JPG, até 2MB.</p>
                      </div>
                    </div>
                    <Separator />
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="grid gap-1.5"><Label>Nome</Label><Input defaultValue="João Dev" /></div>
                      <div className="grid gap-1.5"><Label>Email</Label><Input defaultValue="joao@mailflow.ai" /></div>
                      <div className="grid gap-1.5"><Label>Cargo</Label><Input defaultValue="Head of Marketing" /></div>
                      <div className="grid gap-1.5"><Label>Fuso horário</Label><Input defaultValue="America/São_Paulo" /></div>
                    </div>
                    <div className="flex justify-end"><Button>Salvar alterações</Button></div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notifications">
                <Card>
                  <CardHeader><CardTitle className="text-base">Notificações</CardTitle></CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      "Novo email na caixa de entrada",
                      "Campanha enviada com sucesso",
                      "Alertas de bounce elevado",
                      "Resumo semanal de métricas",
                      "Insights da IA disponíveis",
                    ].map((label, i) => (
                      <div key={label} className="flex items-center justify-between rounded-lg border p-3">
                        <div>
                          <p className="text-sm font-medium">{label}</p>
                          <p className="text-xs text-muted-foreground">Email · Push</p>
                        </div>
                        <Switch defaultChecked={i % 2 === 0} />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="api">
                <Card>
                  <CardHeader className="flex-row items-center justify-between"><div><CardTitle className="text-base">API Keys</CardTitle><CardDescription className="text-xs">Chaves para integrações programáticas.</CardDescription></div><Button size="sm">Gerar nova chave</Button></CardHeader>
                  <CardContent className="space-y-2">
                    {[
                      { name: "Production", key: "mf_prod_••••••••••••3f21", created: "há 3 meses" },
                      { name: "Staging", key: "mf_stg_••••••••••••8b1c", created: "há 1 mês" },
                    ].map((k) => (
                      <div key={k.name} className="flex items-center justify-between rounded-lg border p-3">
                        <div>
                          <div className="flex items-center gap-2"><p className="text-sm font-medium">{k.name}</p><Badge variant="secondary" className="text-[9px]">Ativa</Badge></div>
                          <p className="mt-0.5 font-mono text-xs text-muted-foreground">{k.key}</p>
                          <p className="text-[10px] text-muted-foreground">Criada {k.created}</p>
                        </div>
                        <Button variant="ghost" size="sm">Revogar</Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              {tabs.filter((t) => !["profile", "notifications", "api"].includes(t.value)).map((t) => (
                <TabsContent key={t.value} value={t.value}>
                  <Card>
                    <CardHeader><CardTitle className="text-base flex items-center gap-2"><t.icon className="h-4 w-4" />{t.label}</CardTitle><CardDescription className="text-xs">Configurações de {t.label.toLowerCase()}.</CardDescription></CardHeader>
                    <CardContent><p className="text-sm text-muted-foreground">Ajuste as opções de {t.label.toLowerCase()} do seu workspace aqui.</p></CardContent>
                  </Card>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </ScrollArea>
    </div>
  );
}
