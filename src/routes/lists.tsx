import { createFileRoute } from "@tanstack/react-router";
import { Plus, Users, Clock, MoreHorizontal } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { mockLists, initials, avatarColor } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/lists")({
  head: () => ({ meta: [{ title: "Lists — MailFlow AI" }] }),
  component: ListsPage,
});

function ListsPage() {
  return (
    <div className="flex min-w-0 flex-1 flex-col">
      <PageHeader
        section="Marketing"
        title="Lists"
        actions={
          <Button size="sm" className="gap-1.5"><Plus className="h-3.5 w-3.5" /> Nova lista</Button>
        }
      />
      <ScrollArea className="flex-1">
        <div className="mx-auto grid max-w-7xl gap-3 p-4 sm:grid-cols-2 md:p-6 lg:grid-cols-3">
          {mockLists.map((list) => (
            <Card key={list.id} className="group cursor-pointer p-5 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
              <div className="mb-4 flex items-start justify-between">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10">
                  <Users className="h-4 w-4 text-primary" />
                </div>
                <Button variant="ghost" size="icon" className="h-7 w-7 opacity-0 transition-opacity group-hover:opacity-100">
                  <MoreHorizontal className="h-3.5 w-3.5" />
                </Button>
              </div>
              <h3 className="text-base font-semibold">{list.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{list.contacts.toLocaleString()} contatos</p>
              <div className="mt-4 flex items-center justify-between border-t pt-3 text-[11px] text-muted-foreground">
                <div className="flex items-center gap-1.5"><Clock className="h-3 w-3" /> {list.updated}</div>
                <div className="flex items-center gap-1.5">
                  <Avatar className="h-4 w-4"><AvatarFallback className={cn("text-[8px]", avatarColor(list.creator))}>{initials(list.creator)}</AvatarFallback></Avatar>
                  {list.creator}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
