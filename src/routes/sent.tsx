import { createFileRoute } from "@tanstack/react-router";
import { MailView } from "@/components/mail-view";
import { mockEmails } from "@/lib/mock-data";

export const Route = createFileRoute("/sent")({
  head: () => ({ meta: [{ title: "Sent — MailFlow AI" }] }),
  component: () => <MailView title="Sent" emails={mockEmails.slice(0, 12)} />,
});
