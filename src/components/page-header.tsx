import { type ReactNode } from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export function PageHeader({
  title,
  section,
  actions,
  description,
}: {
  title: string;
  section?: string;
  actions?: ReactNode;
  description?: string;
}) {
  return (
    <header className="sticky top-0 z-10 flex flex-col gap-3 border-b bg-background/80 px-4 py-3 backdrop-blur md:px-6">
      <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3">
        <div className="flex items-center gap-2">
          <SidebarTrigger />
          <Separator orientation="vertical" className="h-5" />
          <Breadcrumb>
            <BreadcrumbList>
              {section && (
                <>
                  <BreadcrumbItem>
                    <BreadcrumbLink>{section}</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </>
              )}
              <BreadcrumbItem>
                <BreadcrumbPage className="font-medium">{title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div />
        <div className="flex items-center gap-2 justify-self-end">{actions}</div>
      </div>
      {description && <p className="text-xs text-muted-foreground">{description}</p>}
    </header>
  );
}
