import { createContext, useContext, useState, type ReactNode } from "react";
import { ArrowRight, Loader2, Check, CalendarCheck } from "lucide-react";
import { z } from "zod";
import {
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

/** Update this to Dr Jack's real Calendly link. */
export const CALENDLY_URL = "https://calendly.com/drjackdarby/consultation";
const CONTACT_EMAIL = "drjackdarby@gmail.com";

export const SERVICES = [
  "Online Coaching",
  "Online Personal Training",
  "Nutrition Consultation",
  "Masterclass",
  "Not sure yet",
] as const;

const GOALS = ["Fat loss", "Build strength & muscle", "Better health markers", "Energy & focus", "Habits & consistency"];
const LEVELS = ["Just getting started", "Train occasionally", "Train regularly", "Advanced / athlete"];
const TIMES = ["Weekday mornings", "Weekday lunchtimes", "Weekday evenings", "Weekends"];

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z.string().trim().min(6, "Please enter a contact number").max(30),
  goal: z.string().trim().min(1, "Please choose your main goal").max(100),
  level: z.string().trim().min(1, "Please choose your current fitness level").max(100),
  service: z.string().trim().min(1, "Please choose a service").max(100),
  time: z.string().trim().min(1, "Please choose a preferred time").max(100),
});

type BookingCtx = { open: (service?: string) => void };
const Ctx = createContext<BookingCtx>({ open: () => {} });
export const useBooking = () => useContext(Ctx);

const field =
  "w-full h-11 rounded-xl border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/40";

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [service, setService] = useState<string>("Not sure yet");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      goal: fd.get("goal"),
      level: fd.get("level"),
      service: fd.get("service"),
      time: fd.get("time"),
    });
    if (!parsed.success) {
      toast({ title: "Check your details", description: parsed.error.issues[0].message, variant: "destructive" });
      return;
    }
    setSending(true);
    try {
      const d = parsed.data;
      const body = [
        "New consultation request — Ellipsis Health",
        "",
        `Name: ${d.name}`,
        `Email: ${d.email}`,
        `Phone: ${d.phone}`,
        `Main goal: ${d.goal}`,
        `Current fitness level: ${d.level}`,
        `Preferred service: ${d.service}`,
        `Preferred time: ${d.time}`,
      ].join("\n");
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        `Consultation request — ${d.name}`
      )}&body=${encodeURIComponent(body)}`;
      setSent(true);
    } finally {
      setSending(false);
    }
  };

  const open = (preselect?: string) => {
    setSent(false);
    if (preselect) setService(preselect);
    setIsOpen(true);
  };

  return (
    <Ctx.Provider value={{ open }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="glass border-border/70 sm:max-w-lg max-h-[90dvh] overflow-y-auto rounded-3xl">
          <DialogHeader>
            <DialogTitle className="font-display text-3xl">
              Book your <span className="gradient-text">consultation</span>
            </DialogTitle>
            <DialogDescription>
              Take the first step. Fill in your details and we'll be in touch to confirm.
            </DialogDescription>
          </DialogHeader>

          {sent ? (
            <div className="py-6 text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 text-primary grid place-items-center mx-auto mb-5">
                <Check className="w-6 h-6" />
              </div>
              <p className="font-display text-2xl mb-2">Thank you</p>
              <p className="text-sm text-muted-foreground mb-6">
                Your details are with Dr Jack. Pick a time that suits you now, or wait for us to reach out — either way you'll get an email confirmation.
              </p>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
                <CalendarCheck className="w-4 h-4" /> Choose your time
              </a>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4 pt-1">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="bk-name">Full name</Label>
                  <Input id="bk-name" name="name" required maxLength={100} placeholder="Jane Doe" className="h-11 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bk-phone">Phone</Label>
                  <Input id="bk-phone" name="phone" required maxLength={30} placeholder="+44 7700 900000" className="h-11 rounded-xl" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bk-email">Email</Label>
                <Input id="bk-email" name="email" type="email" required maxLength={255} placeholder="jane@company.com" className="h-11 rounded-xl" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="bk-goal">Main goal</Label>
                  <select id="bk-goal" name="goal" required defaultValue="" className={field}>
                    <option value="" disabled>Select a goal</option>
                    {GOALS.map((g) => <option key={g} value={g}>{g}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bk-level">Current fitness level</Label>
                  <select id="bk-level" name="level" required defaultValue="" className={field}>
                    <option value="" disabled>Select your level</option>
                    {LEVELS.map((l) => <option key={l} value={l}>{l}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bk-service">Preferred service</Label>
                  <select id="bk-service" name="service" required value={service} onChange={(e) => setService(e.target.value)} className={field}>
                    {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bk-time">Preferred time</Label>
                  <select id="bk-time" name="time" required defaultValue="" className={field}>
                    <option value="" disabled>Select a time</option>
                    {TIMES.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>
              <button type="submit" disabled={sending} className="btn-primary w-full disabled:opacity-60">
                {sending ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Let's get started <ArrowRight className="w-4 h-4" /></>}
              </button>
              <p className="text-[11px] text-center text-muted-foreground">
                Your information is secure and will never be shared.
              </p>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </Ctx.Provider>
  );
};
