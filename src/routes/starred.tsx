import { createFileRoute } from "@tanstack/react-router";
import { MailView } from "@/components/mail-view";
import { mockEmails } from "@/lib/mock-data";

export const Route = createFileRoute("/starred")({
  head: () => ({ meta: [{ title: "Starred — MailFlow AI" }] }),
  component: () => <MailView title="Starred" emails={mockEmails.filter((e) => e.starred)} />,
});
