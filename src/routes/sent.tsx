import { createFileRoute } from "@tanstack/react-router";
export { Route as default } from "./index";
export const Route = createFileRoute("/sent")({
  head: () => ({ meta: [{ title: "Sent — MailFlow AI" }] }),
  component: () => {
    const Comp = require("./index").Route.options.component;
    return <Comp />;
  },
});
