import { createFileRoute } from "@tanstack/react-router";
import { MailView } from "@/components/mail-view";
import { mockEmails } from "@/lib/mock-data";

export const Route = createFileRoute("/drafts")({
  head: () => ({ meta: [{ title: "Drafts — MailFlow AI" }] }),
  component: () => <MailView title="Drafts" emails={mockEmails.slice(0, 3)} />,
});
