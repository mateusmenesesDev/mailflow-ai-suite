import { createFileRoute } from "@tanstack/react-router";
import { Type, Image as ImageIcon, MousePointer2, Rows3, Minus, Columns2, Rocket, Flag, Video, Save, Send } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Slider } from "@/components/ui/slider";

export const Route = createFileRoute("/templates/editor")({
  head: () => ({ meta: [{ title: "Editor de Template — MailFlow AI" }] }),
  component: EditorPage,
});

const blocks = [
  { icon: Type, label: "Texto" },
  { icon: ImageIcon, label: "Imagem" },
  { icon: MousePointer2, label: "Botão" },
  { icon: Rows3, label: "Spacer" },
  { icon: Minus, label: "Divider" },
  { icon: Columns2, label: "Columns" },
  { icon: Rocket, label: "Hero" },
  { icon: Flag, label: "Banner" },
  { icon: Video, label: "Vídeo" },
];

function EditorPage() {
  return (
    <div className="flex min-w-0 flex-1 flex-col">
      <PageHeader
        section="Templates"
        title="Novo template"
        actions={
          <>
            <Button variant="outline" size="sm" className="gap-1.5"><Save className="h-3.5 w-3.5" /> Salvar</Button>
            <Button size="sm" className="gap-1.5"><Send className="h-3.5 w-3.5" /> Publicar</Button>
          </>
        }
      />
      <div className="grid min-w-0 flex-1 grid-cols-[220px_minmax(0,1fr)_260px] overflow-hidden">
        {/* left: blocks */}
        <aside className="border-r bg-muted/20 p-3">
          <p className="mb-2 px-2 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Blocos</p>
          <div className="grid grid-cols-2 gap-2">
            {blocks.map((b) => (
              <button key={b.label} className="flex aspect-square flex-col items-center justify-center gap-1.5 rounded-md border bg-background text-xs text-muted-foreground transition-all hover:border-primary/40 hover:bg-primary/5 hover:text-foreground">
                <b.icon className="h-4 w-4" />
                {b.label}
              </button>
            ))}
          </div>
        </aside>

        {/* center: canvas */}
        <ScrollArea className="bg-muted/10">
          <div className="mx-auto my-8 max-w-xl rounded-xl border bg-background p-6 shadow-2xl shadow-black/10">
            <div className="mb-6 rounded-lg bg-gradient-to-br from-primary/20 to-transparent p-8 text-center">
              <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-primary/40" />
              <h2 className="text-2xl font-bold">Bem-vindo à MailFlow ✨</h2>
              <p className="mt-2 text-sm text-muted-foreground">A caixa de entrada do futuro chegou.</p>
            </div>
            <p className="text-sm leading-relaxed text-foreground/80">
              Olá {"{nome}"}, ficamos animados em ter você conosco. Nas próximas semanas você vai receber dicas de como tirar o máximo da nossa plataforma.
            </p>
            <div className="my-6 text-center">
              <span className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">Começar agora</span>
            </div>
            <div className="border-t pt-4 text-center text-xs text-muted-foreground">
              MailFlow AI · Você recebeu este email porque assinou nossa newsletter.
            </div>
          </div>
        </ScrollArea>

        {/* right: properties */}
        <aside className="border-l bg-muted/20 p-3">
          <Tabs defaultValue="props">
            <TabsList className="w-full">
              <TabsTrigger value="props" className="flex-1">Propriedades</TabsTrigger>
              <TabsTrigger value="style" className="flex-1">Estilo</TabsTrigger>
            </TabsList>
            <TabsContent value="props" className="mt-4 space-y-4">
              <div className="grid gap-1.5"><Label>Título</Label><Input defaultValue="Bem-vindo à MailFlow" /></div>
              <div className="grid gap-1.5"><Label>Texto do botão</Label><Input defaultValue="Começar agora" /></div>
              <div className="grid gap-1.5"><Label>Link</Label><Input defaultValue="https://mailflow.ai" /></div>
              <div className="grid gap-1.5"><Label>Alinhamento</Label>
                <div className="grid grid-cols-3 gap-1">
                  {["Esq", "Centro", "Dir"].map((a) => (
                    <Button key={a} variant="outline" size="sm" className="h-7 text-xs">{a}</Button>
                  ))}
                </div>
              </div>
              <div className="grid gap-1.5"><Label>Padding</Label><Slider defaultValue={[24]} max={80} /></div>
            </TabsContent>
            <TabsContent value="style" className="mt-4 text-xs text-muted-foreground">
              Ajuste cores, fontes e espaçamentos.
            </TabsContent>
          </Tabs>
        </aside>
      </div>
    </div>
  );
}
