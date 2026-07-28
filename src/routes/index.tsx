import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Search,
  SlidersHorizontal,
  PenSquare,
  Star,
  Paperclip,
  Reply,
  ReplyAll,
  Forward,
  Archive,
  Trash2,
  Sparkles,
  MoreHorizontal,
  Printer,
  Tag,
} from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ComposerDialog } from "@/components/composer-dialog";
import { mockEmails, initials, avatarColor } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Inbox — MailFlow AI" },
      { name: "description", content: "Sua caixa de entrada unificada com IA integrada." },
    ],
  }),
  component: InboxPage,
});

function InboxPage() {
  const [selectedId, setSelectedId] = useState(mockEmails[0].id);
  const [composerOpen, setComposerOpen] = useState(false);
  const selected = mockEmails.find((e) => e.id === selectedId) ?? mockEmails[0];

  return (
    <div className="flex h-svh min-w-0 flex-col md:flex-row">
      {/* Mail list */}
      <section className="flex min-w-0 flex-col border-b md:w-[380px] md:border-b-0 md:border-r xl:w-[420px]">
        <header className="flex items-center gap-2 border-b px-3 py-2.5">
          <SidebarTrigger className="md:hidden" />
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Buscar emails…" className="h-8 pl-8 text-xs" />
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
            <SlidersHorizontal className="h-3.5 w-3.5" />
          </Button>
          <Button size="sm" className="h-8 gap-1.5 px-3 shrink-0" onClick={() => setComposerOpen(true)}>
            <PenSquare className="h-3.5 w-3.5" /> Compose
          </Button>
        </header>

        <Tabs defaultValue="all" className="border-b px-3 py-2">
          <TabsList className="h-8 bg-transparent p-0">
            <TabsTrigger value="all" className="h-7 px-3 text-xs">Todos</TabsTrigger>
            <TabsTrigger value="unread" className="h-7 px-3 text-xs">Não lidos</TabsTrigger>
            <TabsTrigger value="starred" className="h-7 px-3 text-xs">Favoritos</TabsTrigger>
          </TabsList>
        </Tabs>

        <ScrollArea className="flex-1">
          <ul className="divide-y">
            {mockEmails.map((email) => {
              const active = email.id === selectedId;
              return (
                <li
                  key={email.id}
                  onClick={() => setSelectedId(email.id)}
                  className={cn(
                    "group cursor-pointer px-3 py-3 transition-colors hover:bg-muted/40",
                    active && "bg-primary/5 border-l-2 border-l-primary pl-[10px]"
                  )}
                >
                  <div className="flex items-start gap-3">
                    <div className="relative shrink-0">
                      <Avatar className="h-9 w-9">
                        <AvatarFallback className={cn("text-[11px] font-medium", avatarColor(email.from.name))}>
                          {initials(email.from.name)}
                        </AvatarFallback>
                      </Avatar>
                      {email.unread && (
                        <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-primary" />
                      )}
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col gap-1">
                      <div className="flex min-w-0 items-center gap-2">
                        <span className={cn("truncate text-xs", email.unread ? "font-semibold" : "text-muted-foreground")}>
                          {email.from.name}
                        </span>
                        <span className="ml-auto shrink-0 text-[10px] text-muted-foreground">{email.time}</span>
                      </div>
                      <p className={cn("truncate text-xs", email.unread ? "font-medium" : "text-muted-foreground")}>
                        {email.subject}
                      </p>
                      <p className="truncate text-[11px] text-muted-foreground">{email.preview}</p>
                      <div className="flex items-center gap-1.5">
                        {email.labels.map((l) => (
                          <Badge key={l} variant="secondary" className="h-4 px-1.5 text-[9px] font-normal">
                            {l}
                          </Badge>
                        ))}
                        <div className="ml-auto flex items-center gap-1.5 text-muted-foreground">
                          {email.hasAttachment && <Paperclip className="h-3 w-3" />}
                          {email.starred && <Star className="h-3 w-3 fill-amber-400 text-amber-400" />}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </ScrollArea>
      </section>

      {/* Reader */}
      <section className="flex min-w-0 flex-1 flex-col">
        <header className="flex flex-wrap items-center gap-1 border-b px-4 py-2">
          <Button variant="ghost" size="sm" className="h-8 gap-1.5 text-xs">
            <Reply className="h-3.5 w-3.5" /> Reply
          </Button>
          <Button variant="ghost" size="sm" className="h-8 gap-1.5 text-xs">
            <ReplyAll className="h-3.5 w-3.5" /> Reply all
          </Button>
          <Button variant="ghost" size="sm" className="h-8 gap-1.5 text-xs">
            <Forward className="h-3.5 w-3.5" /> Forward
          </Button>
          <Separator orientation="vertical" className="mx-1 h-5" />
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Archive className="h-3.5 w-3.5" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Tag className="h-3.5 w-3.5" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Trash2 className="h-3.5 w-3.5" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Printer className="h-3.5 w-3.5" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreHorizontal className="h-3.5 w-3.5" />
          </Button>
          <div className="ml-auto">
            <Button size="sm" variant="outline" className="h-8 gap-1.5 border-primary/30 bg-primary/5 text-xs text-primary hover:bg-primary/10 hover:text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Ask AI
            </Button>
          </div>
        </header>

        <ScrollArea className="flex-1">
          <article className="mx-auto max-w-3xl px-6 py-8">
            <h1 className="text-2xl font-semibold tracking-tight">{selected.subject}</h1>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              {selected.labels.map((l) => (
                <Badge key={l} variant="secondary" className="text-[10px]">{l}</Badge>
              ))}
            </div>

            <div className="mt-6 flex items-start gap-3">
              <Avatar className="h-10 w-10 shrink-0">
                <AvatarFallback className={cn("text-xs", avatarColor(selected.from.name))}>
                  {initials(selected.from.name)}
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-sm font-medium">{selected.from.name}</span>
                  <span className="text-xs text-muted-foreground">&lt;{selected.from.email}&gt;</span>
                  <span className="ml-auto text-xs text-muted-foreground">{selected.time} · 09:42</span>
                </div>
                <p className="text-xs text-muted-foreground">para {selected.to}</p>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="whitespace-pre-line text-sm leading-relaxed text-foreground/90">{selected.body}</div>

            {selected.hasAttachment && (
              <div className="mt-8">
                <p className="mb-3 text-xs font-medium text-muted-foreground">1 anexo</p>
                <div className="flex items-center gap-3 rounded-lg border bg-muted/30 p-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary/10">
                    <Paperclip className="h-4 w-4 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">relatorio-mensal-novembro.pdf</p>
                    <p className="text-xs text-muted-foreground">2.4 MB · PDF</p>
                  </div>
                  <Button variant="outline" size="sm" className="h-7 text-xs">Baixar</Button>
                </div>
              </div>
            )}

            <div className="mt-10 rounded-xl border bg-gradient-to-br from-primary/5 to-transparent p-5">
              <div className="mb-3 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Sugestão de resposta com IA</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Olá! Muito obrigado pelo update. Fico à disposição para agendarmos a call ainda esta semana — que tal quinta-feira às 14h?
              </p>
              <div className="mt-4 flex gap-2">
                <Button size="sm" className="gap-1.5"><Sparkles className="h-3.5 w-3.5" /> Usar resposta</Button>
                <Button size="sm" variant="ghost">Regenerar</Button>
              </div>
            </div>
          </article>
        </ScrollArea>
      </section>

      <ComposerDialog open={composerOpen} onOpenChange={setComposerOpen} />
    </div>
  );
}
