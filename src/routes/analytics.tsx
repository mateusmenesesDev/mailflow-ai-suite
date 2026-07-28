import { createFileRoute } from "@tanstack/react-router";
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid,
} from "recharts";
import { Mail, Eye, MousePointerClick, DollarSign, AlertTriangle, ShieldAlert, Globe, Monitor, Smartphone, Tablet, ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { analyticsSeries, deviceBreakdown, clientBreakdown, mockCampaigns, mockTemplates } from "@/lib/mock-data";

export const Route = createFileRoute("/analytics")({
  head: () => ({ meta: [{ title: "Analytics — MailFlow AI" }] }),
  component: AnalyticsPage,
});

const cards = [
  { label: "Emails enviados", value: "184.320", delta: "+12.4%", icon: Mail },
  { label: "Open Rate", value: "38.6%", delta: "+2.1%", icon: Eye },
  { label: "CTR", value: "12.8%", delta: "+0.6%", icon: MousePointerClick },
  { label: "Revenue", value: "R$ 48.240", delta: "+18.2%", icon: DollarSign },
  { label: "Bounce", value: "1.4%", delta: "-0.2%", icon: AlertTriangle },
  { label: "Spam", value: "0.08%", delta: "-0.01%", icon: ShieldAlert },
];

const colors = ["oklch(0.68 0.19 280)", "oklch(0.7 0.17 200)", "oklch(0.72 0.17 155)", "oklch(0.8 0.16 75)"];

function AnalyticsPage() {
  return (
    <div className="flex min-w-0 flex-1 flex-col">
      <PageHeader section="Marketing" title="Analytics" description="Últimos 30 dias" />
      <ScrollArea className="flex-1">
        <div className="mx-auto max-w-7xl space-y-6 p-4 md:p-6">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {cards.map((c) => (
              <Card key={c.label}>
                <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-xs font-medium text-muted-foreground">{c.label}</CardTitle>
                  <c.icon className="h-3.5 w-3.5 text-muted-foreground" />
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="text-xl font-semibold">{c.value}</div>
                  <p className="mt-1 flex items-center gap-1 text-[11px] text-emerald-400"><ArrowUpRight className="h-3 w-3" /> {c.delta}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <CardHeader><CardTitle className="text-sm">Envios & Aberturas</CardTitle></CardHeader>
              <CardContent className="h-72">
                <ResponsiveContainer>
                  <AreaChart data={analyticsSeries}>
                    <defs>
                      <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="oklch(0.68 0.19 280)" stopOpacity={0.5} />
                        <stop offset="100%" stopColor="oklch(0.68 0.19 280)" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="oklch(0.7 0.17 200)" stopOpacity={0.4} />
                        <stop offset="100%" stopColor="oklch(0.7 0.17 200)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke="oklch(1 0 0 / 0.05)" vertical={false} />
                    <XAxis dataKey="day" stroke="oklch(0.62 0.02 265)" fontSize={10} />
                    <YAxis stroke="oklch(0.62 0.02 265)" fontSize={10} />
                    <Tooltip contentStyle={{ background: "oklch(0.19 0.012 265)", border: "1px solid oklch(0.26 0.012 265)", borderRadius: 8, fontSize: 12 }} />
                    <Area dataKey="sent" stroke="oklch(0.68 0.19 280)" fill="url(#g1)" strokeWidth={2} />
                    <Area dataKey="opens" stroke="oklch(0.7 0.17 200)" fill="url(#g2)" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="text-sm">Cliques</CardTitle></CardHeader>
              <CardContent className="h-72">
                <ResponsiveContainer>
                  <LineChart data={analyticsSeries}>
                    <CartesianGrid stroke="oklch(1 0 0 / 0.05)" vertical={false} />
                    <XAxis dataKey="day" stroke="oklch(0.62 0.02 265)" fontSize={10} />
                    <YAxis stroke="oklch(0.62 0.02 265)" fontSize={10} />
                    <Tooltip contentStyle={{ background: "oklch(0.19 0.012 265)", border: "1px solid oklch(0.26 0.012 265)", borderRadius: 8, fontSize: 12 }} />
                    <Line dataKey="clicks" stroke="oklch(0.72 0.17 155)" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex-row items-center gap-2 space-y-0"><Monitor className="h-4 w-4 text-muted-foreground" /><CardTitle className="text-sm">Dispositivos</CardTitle></CardHeader>
              <CardContent className="h-56">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie data={deviceBreakdown} dataKey="value" innerRadius={50} outerRadius={80} paddingAngle={4}>
                      {deviceBreakdown.map((_, i) => <Cell key={i} fill={colors[i]} />)}
                    </Pie>
                    <Tooltip contentStyle={{ background: "oklch(0.19 0.012 265)", border: "1px solid oklch(0.26 0.012 265)", borderRadius: 8, fontSize: 12 }} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-1 flex flex-wrap justify-center gap-3 text-[10px] text-muted-foreground">
                  {deviceBreakdown.map((d, i) => (
                    <span key={d.name} className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full" style={{ background: colors[i] }} />
                      {d.name} · {d.value}%
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex-row items-center gap-2 space-y-0"><Mail className="h-4 w-4 text-muted-foreground" /><CardTitle className="text-sm">Clientes de email</CardTitle></CardHeader>
              <CardContent className="h-56">
                <ResponsiveContainer>
                  <BarChart data={clientBreakdown} layout="vertical">
                    <CartesianGrid stroke="oklch(1 0 0 / 0.05)" horizontal={false} />
                    <XAxis type="number" stroke="oklch(0.62 0.02 265)" fontSize={10} />
                    <YAxis type="category" dataKey="name" stroke="oklch(0.62 0.02 265)" fontSize={10} width={80} />
                    <Tooltip contentStyle={{ background: "oklch(0.19 0.012 265)", border: "1px solid oklch(0.26 0.012 265)", borderRadius: 8, fontSize: 12 }} />
                    <Bar dataKey="value" fill="oklch(0.68 0.19 280)" radius={[0, 6, 6, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex-row items-center gap-2 space-y-0"><Globe className="h-4 w-4 text-muted-foreground" /><CardTitle className="text-sm">Origem geográfica</CardTitle></CardHeader>
              <CardContent>
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md bg-gradient-to-br from-primary/10 to-transparent">
                  <svg viewBox="0 0 400 200" className="h-full w-full opacity-40">
                    {Array.from({ length: 200 }).map((_, i) => (
                      <circle key={i} cx={(i % 40) * 10 + 5} cy={Math.floor(i / 40) * 10 + 5} r={1.5} fill="currentColor" className="text-primary" />
                    ))}
                  </svg>
                  {[
                    { x: 22, y: 40, label: "BR" },
                    { x: 48, y: 32, label: "EU" },
                    { x: 78, y: 42, label: "JP" },
                    { x: 18, y: 30, label: "US" },
                  ].map((p) => (
                    <span key={p.label} style={{ left: `${p.x}%`, top: `${p.y}%` }} className="absolute -translate-x-1/2 -translate-y-1/2">
                      <span className="absolute -inset-2 animate-ping rounded-full bg-primary/40" />
                      <span className="relative grid h-3 w-3 place-items-center rounded-full bg-primary" />
                      <span className="absolute left-4 top-0 rounded-md bg-background/80 px-1.5 py-0.5 text-[9px] font-medium">{p.label}</span>
                    </span>
                  ))}
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2 text-[10px]">
                  {[["Desktop", Monitor], ["Mobile", Smartphone], ["Tablet", Tablet]].map(([l, I]: any) => (
                    <div key={l} className="flex items-center gap-1 text-muted-foreground"><I className="h-3 w-3" /> {l}</div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <CardHeader><CardTitle className="text-sm">Top campanhas</CardTitle></CardHeader>
              <CardContent className="p-0">
                <div className="divide-y">
                  {mockCampaigns.slice(0, 5).map((c) => (
                    <div key={c.id} className="flex items-center justify-between px-6 py-3 text-sm">
                      <span className="truncate">{c.name}</span>
                      <span className="text-xs text-muted-foreground">{c.opens}% open</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-sm">Top templates</CardTitle></CardHeader>
              <CardContent className="p-0">
                <div className="divide-y">
                  {mockTemplates.slice(0, 5).map((t, i) => (
                    <div key={t.id} className="flex items-center justify-between px-6 py-3 text-sm">
                      <span>{t.name}</span>
                      <span className="text-xs text-muted-foreground">{80 - i * 6}% engajamento</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
