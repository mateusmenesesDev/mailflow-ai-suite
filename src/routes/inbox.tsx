import { createFileRoute } from "@tanstack/react-router";
import { MailView } from "@/components/mail-view";
import { mockEmails } from "@/lib/mock-data";

export const Route = createFileRoute("/inbox")({
  head: () => ({
    meta: [
      { title: "Inbox — MailFlow AI" },
      { name: "description", content: "Sua caixa de entrada unificada com IA integrada." },
    ],
  }),
  component: () => <MailView title="Inbox" emails={mockEmails} />,
});
