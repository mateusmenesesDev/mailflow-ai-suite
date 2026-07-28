import { createFileRoute } from "@tanstack/react-router";
import { MailView } from "@/components/mail-view";
import { mockEmails } from "@/lib/mock-data";

export const Route = createFileRoute("/spam")({
  head: () => ({ meta: [{ title: "Spam — MailFlow AI" }] }),
  component: () => <MailView title="Spam" emails={mockEmails.slice(15, 18)} />,
});
