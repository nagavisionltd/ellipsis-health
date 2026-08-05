import { createContext, useContext, useState, type ReactNode } from "react";
import { ArrowRight, Loader2, Check } from "lucide-react";
import { z } from "zod";
import {
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z.string().trim().max(30).optional(),
  message: z.string().trim().max(1000).optional(),
});

type BookingCtx = { open: () => void };
const Ctx = createContext<BookingCtx>({ open: () => {} });
export const useBooking = () => useContext(Ctx);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      toast({ title: "Check your details", description: parsed.error.issues[0].message, variant: "destructive" });
      return;
    }
    setSending(true);
    try {
      const d = parsed.data;
      const body = [
        `New masterclass booking — The 2.0 Version of You`,
        ``,
        `Name: ${d.name}`,
        `Email: ${d.email}`,
        `Phone: ${d.phone || "—"}`,
        ``,
        `Message:`,
        d.message || "—",
      ].join("\n");
      const url = `mailto:drjackdarby@gmail.com?subject=${encodeURIComponent(
        `New booking — ${d.name}`
      )}&body=${encodeURIComponent(body)}`;
      window.location.href = url;
      setSent(true);
    } finally {
      setSending(false);
    }
  };

  const open = () => {
    setSent(false);
    setIsOpen(true);
  };

  return (
    <Ctx.Provider value={{ open }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="glass-strong border-border/60 sm:max-w-lg max-h-[90dvh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-display text-3xl font-light">
              Reserve your <span className="italic gradient-gold-text">seat</span>
            </DialogTitle>
            <DialogDescription>
              £100 · 3-hour live masterclass · limited to 50 seats. Dr Jack will be in touch to confirm.
            </DialogDescription>
          </DialogHeader>

          {sent ? (
            <div className="py-8 text-center">
              <div className="w-14 h-14 rounded-full bg-primary/15 text-primary grid place-items-center mx-auto mb-5">
                <Check className="w-6 h-6" />
              </div>
              <p className="font-display text-2xl mb-2">Nearly there</p>
              <p className="text-sm text-muted-foreground">
                Your email app should have opened with your booking request. Send it and Dr Jack will confirm your seat.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4 pt-2">
              <div className="space-y-2">
                <Label htmlFor="bk-name">Full name</Label>
                <Input id="bk-name" name="name" required maxLength={100} placeholder="Jane Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bk-email">Email</Label>
                <Input id="bk-email" name="email" type="email" required maxLength={255} placeholder="jane@company.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bk-phone">Phone <span className="text-muted-foreground">(optional)</span></Label>
                <Input id="bk-phone" name="phone" maxLength={30} placeholder="+44 7700 900000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bk-message">Anything Dr Jack should know? <span className="text-muted-foreground">(optional)</span></Label>
                <Textarea id="bk-message" name="message" maxLength={1000} rows={3} placeholder="Your goals, questions…" />
              </div>
              <button type="submit" disabled={sending} className="btn-primary w-full justify-center disabled:opacity-60">
                {sending ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Send booking request <ArrowRight className="w-4 h-4" /></>}
              </button>
              <p className="text-[11px] text-center text-muted-foreground">
                Your request goes straight to Dr Jack Darby.
              </p>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </Ctx.Provider>
  );
};
