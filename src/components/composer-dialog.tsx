import { useState } from "react";
import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Link2,
  Image as ImageIcon,
  Smile,
  Paperclip,
  Send,
  Clock,
  Save,
  Sparkles,
  X,
  Minus,
  Wand2,
  Languages,
  ScanText,
  SpellCheck,
} from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export function ComposerDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const [showCc, setShowCc] = useState(false);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl gap-0 overflow-hidden p-0 sm:rounded-xl">
        <header className="flex items-center justify-between border-b bg-muted/30 px-4 py-2.5">
          <span className="text-sm font-medium">Nova mensagem</span>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="h-7 w-7">
              <Minus className="h-3.5 w-3.5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => onOpenChange(false)}>
              <X className="h-3.5 w-3.5" />
            </Button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_220px]">
          <div className="flex min-h-[520px] flex-col">
            <div className="grid gap-0 border-b">
              <FieldRow label="Para">
                <Input className="h-8 border-0 shadow-none focus-visible:ring-0" placeholder="destinatario@email.com" />
                <button className="text-xs text-muted-foreground hover:text-foreground" onClick={() => setShowCc((v) => !v)}>
                  Cc/Bcc
                </button>
              </FieldRow>
              {showCc && (
                <>
                  <FieldRow label="Cc">
                    <Input className="h-8 border-0 shadow-none focus-visible:ring-0" />
                  </FieldRow>
                  <FieldRow label="Bcc">
                    <Input className="h-8 border-0 shadow-none focus-visible:ring-0" />
                  </FieldRow>
                </>
              )}
              <FieldRow label="Assunto">
                <Input className="h-8 border-0 shadow-none focus-visible:ring-0" placeholder="Assunto do email" />
              </FieldRow>
            </div>

            <div className="flex-1 p-4">
              <div
                contentEditable
                suppressContentEditableWarning
                className="min-h-[280px] rounded-md p-2 text-sm outline-none"
              >
                Escreva sua mensagem…
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-1 border-t bg-muted/20 px-2 py-1.5">
              {[Bold, Italic, Underline].map((Icon, i) => (
                <Button key={i} variant="ghost" size="icon" className="h-7 w-7">
                  <Icon className="h-3.5 w-3.5" />
                </Button>
              ))}
              <Separator orientation="vertical" className="mx-1 h-4" />
              {[List, ListOrdered].map((Icon, i) => (
                <Button key={i} variant="ghost" size="icon" className="h-7 w-7">
                  <Icon className="h-3.5 w-3.5" />
                </Button>
              ))}
              <Separator orientation="vertical" className="mx-1 h-4" />
              {[Link2, ImageIcon, Smile, Paperclip].map((Icon, i) => (
                <Button key={i} variant="ghost" size="icon" className="h-7 w-7">
                  <Icon className="h-3.5 w-3.5" />
                </Button>
              ))}
            </div>

            <div className="flex items-center justify-between border-t bg-background px-4 py-3">
              <div className="flex items-center gap-2">
                <Button className="gap-2">
                  <Send className="h-4 w-4" /> Send
                </Button>
                <Button variant="outline" size="icon">
                  <Clock className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Save className="h-4 w-4" /> Rascunho
                </Button>
              </div>
              <span className="text-xs text-muted-foreground">Salvo há 3s</span>
            </div>
          </div>

          <aside className="hidden flex-col gap-1 border-l bg-muted/20 p-3 md:flex">
            <div className="mb-2 flex items-center gap-2 px-1">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-medium">AI Assistente</span>
            </div>
            {[
              { icon: Wand2, label: "Escrever email" },
              { icon: ScanText, label: "Melhorar texto" },
              { icon: Sparkles, label: "Mais persuasivo" },
              { icon: SpellCheck, label: "Corrigir gramática" },
              { icon: ScanText, label: "Resumir" },
              { icon: Languages, label: "Traduzir" },
              { icon: Wand2, label: "Gerar assunto" },
              { icon: Sparkles, label: "Gerar CTA" },
            ].map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                size="sm"
                className="justify-start gap-2 text-xs font-normal text-muted-foreground hover:text-foreground"
              >
                <item.icon className="h-3.5 w-3.5 text-primary" /> {item.label}
              </Button>
            ))}
          </aside>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function FieldRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 border-b px-4 last:border-0">
      <span className="w-16 text-xs text-muted-foreground">{label}</span>
      <div className="flex flex-1 items-center gap-2">{children}</div>
    </div>
  );
}
