import { type ComponentType } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Inbox,
  Send,
  FileEdit,
  Star,
  ShieldAlert,
  Trash2,
  Megaphone,
  Users,
  ListChecks,
  LayoutTemplate,
  Workflow,
  BarChart3,
  Sparkles,
  Wand2,
  Lightbulb,
  Settings,
  ChevronsUpDown,
  Plus,
  Search,
  Sun,
  Moon,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "./theme-provider";

const mailItems = [
  { title: "Inbox", url: "/inbox", icon: Inbox, badge: "12" },
  { title: "Sent", url: "/sent", icon: Send },
  { title: "Drafts", url: "/drafts", icon: FileEdit, badge: "3" },
  { title: "Starred", url: "/starred", icon: Star },
  { title: "Spam", url: "/spam", icon: ShieldAlert },
  { title: "Trash", url: "/trash", icon: Trash2 },
];

const marketingItems = [
  { title: "Campaigns", url: "/campaigns", icon: Megaphone },
  { title: "Contacts", url: "/contacts", icon: Users },
  { title: "Lists", url: "/lists", icon: ListChecks },
  { title: "Templates", url: "/templates", icon: LayoutTemplate },
  { title: "Automations", url: "/automations", icon: Workflow },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
];

const aiItems = [
  { title: "AI Assistant", url: "/ai-assistant", icon: Sparkles },
  { title: "AI Templates", url: "/ai-templates", icon: Wand2 },
  { title: "AI Insights", url: "/ai-insights", icon: Lightbulb },
];

export function AppSidebar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { theme, toggle } = useTheme();

  const renderItem = (item: { title: string; url: string; icon: any; badge?: string }) => {
    const active = pathname === item.url;
    return (
      <SidebarMenuItem key={item.title}>
        <SidebarMenuButton asChild isActive={active} tooltip={item.title}>
          <Link to={item.url} className="flex items-center gap-2">
            <item.icon className="h-4 w-4" />
            <span className="flex-1">{item.title}</span>
            {item.badge && (
              <Badge variant="secondary" className="h-5 px-1.5 text-[10px] font-medium">
                {item.badge}
              </Badge>
            )}
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  };

  return (
    <Sidebar collapsible="icon" className="border-r">
      <SidebarHeader className="gap-3 pt-3">
        <div className="flex items-center gap-2 px-2">
          <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-500/20">
            <Sparkles className="h-4 w-4 text-white" strokeWidth={2.5} />
          </div>
          <div className="flex min-w-0 flex-col group-data-[collapsible=icon]:hidden">
            <span className="truncate text-sm font-semibold tracking-tight">MailFlow AI</span>
            <span className="truncate text-[10px] text-muted-foreground">v2.0 · Pro plan</span>
          </div>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="mx-1 h-auto justify-start gap-2 px-2 py-1.5 group-data-[collapsible=icon]:hidden"
            >
              <Avatar className="h-6 w-6">
                <AvatarFallback className="bg-primary/15 text-[10px] text-primary">
                  AC
                </AvatarFallback>
              </Avatar>
              <div className="flex min-w-0 flex-col items-start">
                <span className="truncate text-xs font-medium">Acme Corp</span>
                <span className="truncate text-[10px] text-muted-foreground">Workspace</span>
              </div>
              <ChevronsUpDown className="ml-auto h-3.5 w-3.5 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuLabel>Workspaces</DropdownMenuLabel>
            <DropdownMenuItem>Acme Corp</DropdownMenuItem>
            <DropdownMenuItem>Personal</DropdownMenuItem>
            <DropdownMenuItem>Aurora Studios</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Plus className="mr-2 h-4 w-4" /> Novo workspace
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="mx-1 group-data-[collapsible=icon]:hidden">
          <div className="relative">
            <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
            <input
              placeholder="Buscar tudo…"
              className="h-8 w-full rounded-md border bg-background/40 pl-8 pr-2 text-xs outline-none placeholder:text-muted-foreground focus:border-primary/50"
            />
            <kbd className="pointer-events-none absolute right-2 top-1/2 hidden -translate-y-1/2 items-center gap-0.5 rounded border bg-muted px-1 text-[10px] text-muted-foreground sm:flex">
              ⌘K
            </kbd>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="scrollbar-thin">
        <SidebarGroup>
          <SidebarGroupLabel>Mail</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>{mailItems.map(renderItem)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Marketing</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>{marketingItems.map(renderItem)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>AI</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>{aiItems.map(renderItem)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/settings"} tooltip="Settings">
              <Link to="/settings">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={toggle} tooltip="Alternar tema">
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              <span>{theme === "dark" ? "Light mode" : "Dark mode"}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <div className="flex items-center gap-2 px-2 py-1.5 group-data-[collapsible=icon]:hidden">
          <Avatar className="h-7 w-7">
            <AvatarFallback className="bg-violet-500/20 text-[10px] text-violet-300">
              JD
            </AvatarFallback>
          </Avatar>
          <div className="flex min-w-0 flex-col">
            <span className="truncate text-xs font-medium">João Dev</span>
            <span className="truncate text-[10px] text-muted-foreground">joao@mailflow.ai</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
