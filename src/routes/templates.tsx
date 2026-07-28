import { createFileRoute, Link } from "@tanstack/react-router";
import { Plus, MoreHorizontal } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockTemplates } from "@/lib/mock-data";

export const Route = createFileRoute("/templates")({
  head: () => ({ meta: [{ title: "Templates — MailFlow AI" }] }),
  component: TemplatesPage,
});

const categories = ["Todos", "Newsletter", "Welcome", "Promotion", "Announcement", "Course", "Product Launch"];

function TemplatesPage() {
  return (
    <div className="flex min-w-0 flex-1 flex-col">
      <PageHeader
        section="Marketing"
        title="Templates"
        actions={
          <Button asChild size="sm" className="gap-1.5">
            <Link to="/templates/editor"><Plus className="h-3.5 w-3.5" /> Criar template</Link>
          </Button>
        }
      />
      <ScrollArea className="flex-1">
        <div className="mx-auto max-w-7xl p-4 md:p-6">
          <Tabs defaultValue="Todos" className="mb-6">
            <TabsList className="flex-wrap">
              {categories.map((c) => <TabsTrigger key={c} value={c}>{c}</TabsTrigger>)}
            </TabsList>
          </Tabs>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {mockTemplates.map((t) => (
              <Card key={t.id} className="group cursor-pointer overflow-hidden p-0 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-primary/15 via-primary/5 to-transparent">
                  <div className="absolute inset-4 rounded-md border border-border/50 bg-background/40 p-3 backdrop-blur">
                    <div className="mb-2 h-6 w-1/2 rounded bg-foreground/20" />
                    <div className="space-y-1">
                      <div className="h-2 w-full rounded bg-foreground/10" />
                      <div className="h-2 w-4/5 rounded bg-foreground/10" />
                      <div className="h-2 w-3/5 rounded bg-foreground/10" />
                    </div>
                    <div className="mt-4 h-16 rounded bg-foreground/5" />
                    <div className="mt-3 h-6 w-24 rounded bg-primary/60" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-gradient-to-t from-background via-background/80 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
                    <Button size="sm" className="h-7 text-xs">Usar</Button>
                    <Button size="sm" variant="outline" className="h-7 text-xs">Prévia</Button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">{t.name}</p>
                    <p className="text-[10px] text-muted-foreground">{t.updated}</p>
                  </div>
                  <Badge variant="secondary" className="text-[9px]">{t.category}</Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
