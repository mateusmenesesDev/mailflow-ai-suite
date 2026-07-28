import { createFileRoute } from "@tanstack/react-router";
import { Plus, Search, Filter, Upload, MoreHorizontal } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { mockContacts, initials, avatarColor } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contacts")({
  head: () => ({ meta: [{ title: "Contacts — MailFlow AI" }] }),
  component: ContactsPage,
});

function statusStyle(s: string) {
  const map: Record<string, string> = {
    Ativo: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    Novo: "bg-blue-500/15 text-blue-400 border-blue-500/30",
    Engajado: "bg-violet-500/15 text-violet-400 border-violet-500/30",
    Frio: "bg-muted text-muted-foreground border-border",
  };
  return map[s] ?? "";
}

function ContactsPage() {
  return (
    <div className="flex min-w-0 flex-1 flex-col">
      <PageHeader
        section="Marketing"
        title="Contacts"
        actions={
          <>
            <Button variant="outline" size="sm" className="gap-1.5">
              <Upload className="h-3.5 w-3.5" /> Importar CSV
            </Button>
            <Button size="sm" className="gap-1.5">
              <Plus className="h-3.5 w-3.5" /> Adicionar
            </Button>
          </>
        }
      />
      <ScrollArea className="flex-1">
        <div className="mx-auto max-w-7xl p-4 md:p-6">
          <Card>
            <CardHeader className="flex-row items-center gap-2 space-y-0 border-b py-3">
              <div className="relative flex-1 max-w-sm">
                <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Buscar contatos…" className="h-8 pl-8 text-xs" />
              </div>
              <Button variant="outline" size="sm" className="h-8 gap-1.5 text-xs">
                <Filter className="h-3.5 w-3.5" /> Filtros
              </Button>
              <span className="ml-auto text-xs text-muted-foreground">{mockContacts.length} contatos</span>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-8"><Checkbox /></TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Empresa</TableHead>
                    <TableHead>Cargo</TableHead>
                    <TableHead>Tags</TableHead>
                    <TableHead>Última interação</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="w-8" />
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockContacts.map((c) => (
                    <TableRow key={c.id}>
                      <TableCell><Checkbox /></TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Avatar className="h-7 w-7">
                            <AvatarFallback className={cn("text-[10px]", avatarColor(c.name))}>
                              {initials(c.name)}
                            </AvatarFallback>
                          </Avatar>
                          <span className="font-medium">{c.name}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{c.email}</TableCell>
                      <TableCell>{c.company}</TableCell>
                      <TableCell className="text-muted-foreground">{c.role}</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {c.tags.map((t) => (
                            <Badge key={t} variant="secondary" className="text-[10px]">{t}</Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell className="text-xs text-muted-foreground">{c.lastInteraction}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={cn("border text-[10px]", statusStyle(c.status))}>
                          {c.status}
                        </Badge>
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
    </div>
  );
}
