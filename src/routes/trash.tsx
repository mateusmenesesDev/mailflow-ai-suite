import { createFileRoute } from "@tanstack/react-router";
import { MailView } from "@/components/mail-view";
import { mockEmails } from "@/lib/mock-data";

export const Route = createFileRoute("/trash")({
  head: () => ({ meta: [{ title: "Trash — MailFlow AI" }] }),
  component: () => <MailView title="Trash" emails={mockEmails.slice(20)} />,
});
