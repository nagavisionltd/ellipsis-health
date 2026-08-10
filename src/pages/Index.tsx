import { useEffect, useState } from "react";
import {
  ArrowRight, Check, Menu, X, Sparkles, FlaskConical, Leaf, Quote,
  Users, Trophy, TrendingDown, Rocket, Mail, Instagram, Linkedin, Download,
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Orbits } from "@/components/Orbits";
import { BeforeAfter } from "@/components/BeforeAfter";
import { useReveal } from "@/hooks/use-reveal";
import { useBooking } from "@/components/BookingDialog";
import { toast } from "@/hooks/use-toast";
import logo from "@/assets/ellipsis-logo.png.asset.json";
import heroImg from "@/assets/hero-cosmic.jpg";
import pillarPersonalised from "@/assets/pillar-personalised.jpg";
import pillarScience from "@/assets/pillar-science.jpg";
import pillarSustainable from "@/assets/pillar-sustainable.jpg";
import jackAsset from "@/assets/dr-jack.jpeg.asset.json";

const nav = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Results", href: "#results" },
  { label: "FAQs", href: "#faqs" },
];

const pillars = [
  { icon: Sparkles, title: "Personalised", desc: "Every programme is built around your goals.", img: pillarPersonalised },
  { icon: FlaskConical, title: "Science-led", desc: "Evidence based training and nutrition.", img: pillarScience },
  { icon: Leaf, title: "Sustainable", desc: "Results that fit around real life.", img: pillarSustainable },
];

const services = [
  {
    title: "Online Coaching",
    tagline: "For complete accountability.",
    listLabel: "Includes",
    items: ["Weekly check-ins", "Training programme", "Nutrition coaching", "Habit tracking"],
    cta: "Start Here",
  },
  {
    title: "Online Personal Training",
    tagline: "Live online sessions.",
    listLabel: "Perfect for",
    items: ["Beginners", "Fat loss", "Strength", "Confidence"],
    cta: "Book Session",
  },
  {
    title: "Nutrition Consultation",
    tagline: "One-off consultation.",
    listLabel: "Receive",
    items: ["Assessment", "Bespoke Nutrition Plan", "Supplement Advice", "Lifestyle Recommendations"],
    cta: "Book Consultation",
  },
  {
    title: "Masterclass",
    tagline: "Pre-recorded education.",
    listLabel: "Topics",
    items: ["Fat Loss", "Muscle Building", "Mindset", "Nutrition"],
    cta: "Get Access",
  },
];

const stats = [
  { icon: Users, value: "500+", label: "Clients Helped" },
  { icon: Trophy, value: "95%", label: "Client Satisfaction" },
  { icon: TrendingDown, value: "Thousands", label: "of kg Lost" },
];

const testimonials = [
  { quote: "I lost 14kg without giving up my social life. The plan fitted around my job, not the other way round.", name: "James R.", role: "Finance, London" },
  { quote: "Jack explains the why behind everything. First time training has ever felt sustainable.", name: "Priya S.", role: "Consultant" },
  { quote: "Stronger at 44 than I was at 30. The weekly check-ins are what kept me honest.", name: "Mark T.", role: "Founder" },
];

const steps = [
  { n: "01", title: "Book Consultation", desc: "Tell us about your goals and current lifestyle." },
  { n: "02", title: "Build Your Plan", desc: "We create a personalised plan just for you." },
  { n: "03", title: "Weekly Coaching", desc: "Check-ins, adjustments and accountability." },
  { n: "04", title: "Long-Term Results", desc: "Sustainable habits. Next level you." },
];

const faqs = [
  { q: "How does online coaching work?", a: "You get a personalised training and nutrition plan in your app, weekly check-ins with Dr Jack, and direct messaging between sessions. Everything is adjusted as your results and life change." },
  { q: "Do I need equipment?", a: "No. Plans are built around what you actually have access to — a full gym, a few dumbbells, or nothing but bodyweight." },
  { q: "How often do we meet?", a: "Coaching clients check in weekly. Online personal training is live one-to-one sessions scheduled around you, typically one to three times a week." },
  { q: "Can I train from home?", a: "Absolutely. Many clients train entirely at home with minimal kit and still hit fat loss and strength goals." },
  { q: "How is nutrition personalised?", a: "We assess your intake, preferences, schedule and health markers, then build targets and meal structures you can actually keep to — no elimination diets." },
  { q: "How do I book?", a: "Hit any Book Consultation button, fill in the short form, then choose a time that suits you. You'll get an email confirmation straight away." },
];

const Index = () => {
  useReveal();
  const { open } = useBooking();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onEbook = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = String(new FormData(e.currentTarget).get("email") || "").trim();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || email.length > 255) {
      toast({ title: "Check your email", description: "Enter a valid email address.", variant: "destructive" });
      return;
    }
    e.currentTarget.reset();
    toast({ title: "Guide on its way", description: "Check your inbox for Dr Jack's free guide." });
    setTimeout(() => open("Not sure yet"), 900);
  };

  return (
    <div id="home" className="min-h-screen bg-background">
      {/* Nav */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "glass shadow-soft" : "bg-transparent border-transparent"}`}>
        <div className="container-tight flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-3">
            <img src={logo.url} alt="Ellipsis Health logo" className="h-12 w-auto" width={53} height={48} />
          </a>
          <nav className="hidden lg:flex items-center gap-9">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button onClick={() => open()} className="btn-primary hidden sm:inline-flex !py-3 !px-6">Book</button>
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="lg:hidden glass border-t border-border/60">
            <div className="container-tight py-6 flex flex-col gap-4">
              {nav.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)} className="text-sm text-muted-foreground">
                  {n.label}
                </a>
              ))}
              <button onClick={() => { setMenuOpen(false); open(); }} className="btn-primary w-full">Book Your Consultation</button>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative hero-bg pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <Orbits />
        <div className="container-tight relative grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="eyebrow mb-6">Mission control for your health</span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.03] mb-7">
              Unlock the <span className="gradient-text">2.0</span> version of yourself
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-9 leading-relaxed">
              We believe life is a game of brain chemistry. It's not about material possessions—it's about feeling
              fulfilled. When your neurochemistry is right, you unlock the 2.0 version of yourself and those
              million-pound hours of productivity and creativity.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => open()} className="btn-primary">
                Book Your Consultation <ArrowRight className="w-4 h-4" />
              </button>
              <a href="#ebook" className="btn-ghost">
                <Download className="w-4 h-4" /> Download Free E-book
              </a>
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              Small steps. Extraordinary transformation.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-primary/5 blur-2xl" aria-hidden="true" />
            <img
              src={heroImg}
              alt="Coaching client looking ahead, surrounded by orbital light lines"
              width={1280}
              height={1600}
              className="relative rounded-[2.5rem] w-full object-cover shadow-lift"
            />
            <div className="absolute -bottom-6 left-6 right-6 glass rounded-2xl p-4 flex items-center justify-between shadow-soft">
              <div>
                <p className="text-xs text-muted-foreground">Bespoke online coaching</p>
                <p className="text-sm font-medium">For busy professionals</p>
              </div>
              <button onClick={() => open()} className="text-sm font-medium text-primary inline-flex items-center gap-1">
                Start <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Ellipsis Health */}
      <section className="py-28 md:py-36">
        <div className="container-tight">
          <div className="reveal max-w-2xl mb-16">
            <span className="eyebrow mb-5">Why Ellipsis Health?</span>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Your journey to better health starts here.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div key={p.title} className="reveal soft-card">
                <div className="w-12 h-12 rounded-2xl grid place-items-center mb-6" style={{ background: "var(--gradient-brand)" }}>
                  <p.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-2xl mb-3">{p.title}</h3>
                <p className="text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 md:py-32 bg-secondary/60 relative overflow-hidden">
        <Orbits className="opacity-60" />
        <div className="container-tight relative">
          <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="eyebrow mb-5">Choose your journey</span>
              <h2 className="font-display text-4xl md:text-5xl">Four ways to work with Dr Jack.</h2>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Science-backed coaching built around you — every path starts with the same short consultation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="reveal soft-card flex flex-col !p-7">
                <h3 className="text-xl mb-1.5">{s.title}</h3>
                <p className="text-sm text-primary mb-6">{s.tagline}</p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-4">{s.listLabel}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {s.items.map((i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
                <button onClick={() => open(s.title)} className="btn-ghost w-full !py-3">{s.cta}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Dr Jack */}
      <section id="about" className="py-28 md:py-36">
        <div className="container-tight grid lg:grid-cols-[0.85fr_1fr] gap-14 items-center">
          <div className="reveal relative">
            <div className="absolute -inset-5 rounded-[3rem] bg-accent/5 blur-2xl" aria-hidden="true" />
            <img
              src={jackAsset.url}
              alt="Portrait of Dr Jack Darby"
              width={800}
              height={800}
              loading="lazy"
              className="relative rounded-[2.5rem] w-full object-cover shadow-lift"
            />
          </div>
          <div className="reveal">
            <span className="eyebrow mb-5">Meet Dr Jack</span>
            <h2 className="font-display text-4xl md:text-5xl mb-6">Clinical expertise. Real-world coaching.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-9 max-w-xl">
              Dr Jack combines clinical knowledge with years of coaching experience to help busy people transform their
              health without extreme diets or unsustainable routines.
            </p>
            <button onClick={() => open()} className="btn-primary">
              Book With Jack <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="py-24 md:py-32 bg-secondary/60">
        <div className="container-tight">
          <div className="reveal text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow mb-5">Success stories</span>
            <h2 className="font-display text-4xl md:text-5xl">Real people. Lasting change.</h2>
          </div>

          <div className="grid lg:grid-cols-[0.8fr_1fr] gap-10 items-start mb-16">
            <div className="reveal">
              <BeforeAfter />
              <p className="text-xs text-muted-foreground mt-4 text-center">Drag to compare — 16 weeks of coaching.</p>
            </div>
            <div className="grid sm:grid-cols-1 gap-5">
              {testimonials.map((t) => (
                <figure key={t.name} className="reveal soft-card !p-7">
                  <Quote className="w-6 h-6 text-primary/40 mb-4" />
                  <blockquote className="text-muted-foreground leading-relaxed mb-5">"{t.quote}"</blockquote>
                  <figcaption className="text-sm">
                    <span className="font-medium">{t.name}</span>
                    <span className="text-muted-foreground"> · {t.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="reveal soft-card text-center">
                <div className="w-12 h-12 rounded-2xl glass grid place-items-center mx-auto mb-5">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="font-display text-4xl mb-1">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-28 md:py-36 relative overflow-hidden">
        <Orbits className="opacity-50" />
        <div className="container-tight relative">
          <div className="reveal max-w-2xl mb-16">
            <span className="eyebrow mb-5">How it works</span>
            <h2 className="font-display text-4xl md:text-5xl">Four steps. Simple.</h2>
          </div>
          <ol className="relative grid md:grid-cols-4 gap-8">
            <div className="hidden md:block absolute top-7 left-[12%] right-[12%] h-px bg-gradient-to-r from-primary/40 via-accent/40 to-primary/10" aria-hidden="true" />
            {steps.map((s) => (
              <li key={s.n} className="reveal relative">
                <div className="w-14 h-14 rounded-full grid place-items-center text-sm font-semibold text-primary-foreground mb-6" style={{ background: "var(--gradient-brand)" }}>
                  {s.n}
                </div>
                <h3 className="text-xl mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* E-book */}
      <section id="ebook" className="py-24 md:py-32 bg-secondary/60">
        <div className="container-tight">
          <div className="reveal soft-card !p-10 md:!p-14 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="eyebrow mb-5">Free e-book</span>
              <h2 className="font-display text-4xl md:text-5xl mb-5">Start Your Transformation Today</h2>
              <p className="text-muted-foreground leading-relaxed max-w-lg">
                Download Dr Jack's free guide and learn the habits that build lasting health.
              </p>
            </div>
            <div>
              <form onSubmit={onEbook} className="flex flex-col sm:flex-row gap-3">
                <Input name="email" type="email" required maxLength={255} placeholder="Enter your email address" className="h-14 rounded-full px-6" aria-label="Email address" />
                <button type="submit" className="btn-primary shrink-0 !py-4">Get Free Guide</button>
              </form>
              <p className="text-xs text-muted-foreground mt-4">No spam. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-28 md:py-36">
        <div className="container-tight max-w-3xl">
          <div className="reveal mb-12 text-center">
            <span className="eyebrow mb-5">FAQs</span>
            <h2 className="font-display text-4xl md:text-5xl">Frequently asked questions</h2>
          </div>
          <Accordion type="single" collapsible className="reveal space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`i${i}`} className="soft-card !p-0 border border-border/70 overflow-hidden hover:!translate-y-0">
                <AccordionTrigger className="px-6 py-5 text-left text-base hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative dark-bg py-28 md:py-36 overflow-hidden">
        <Orbits className="opacity-40" />
        <div className="container-tight relative text-center">
          <div className="reveal">
            <div className="w-16 h-16 rounded-full glass-dark grid place-items-center mx-auto mb-8">
              <Rocket className="w-6 h-6 text-accent" />
            </div>
            <h2 className="font-display text-4xl md:text-6xl text-white mb-5">Ready For Lift Off?</h2>
            <p className="text-white/70 text-lg mb-10">Your healthiest chapter starts today.</p>
            <button onClick={() => open()} className="btn-primary !px-9 !py-4">
              Book Consultation <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-14 border-t border-border/70">
        <div className="container-tight flex flex-col md:flex-row items-center justify-between gap-8">
          <img src={logo.url} alt="Ellipsis Health" className="h-12 w-auto" width={53} height={48} loading="lazy" />
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="mailto:drjackdarby@gmail.com" className="hover:text-foreground transition-colors inline-flex items-center gap-1.5">
              <Mail className="w-4 h-4" /> Contact
            </a>
            <a href="#faqs" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#faqs" className="hover:text-foreground transition-colors">Terms</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors inline-flex items-center gap-1.5">
              <Instagram className="w-4 h-4" /> Instagram
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors inline-flex items-center gap-1.5">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </nav>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Ellipsis Health</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
