import { useEffect, useState } from "react";
import {
  Stethoscope, Activity, Users, BadgeCheck, Brain, Dumbbell, Mountain, Compass,
  Sparkles, Wallet, FlaskConical, MessageSquare, BookOpen, Trophy, Gift, ScrollText,
  Check, ArrowRight, Quote, Menu, X, GraduationCap, Briefcase, HeartPulse, Award,
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Particles } from "@/components/Particles";
import { Countdown } from "@/components/Countdown";
import { useReveal } from "@/hooks/use-reveal";
import { useBooking } from "@/components/BookingDialog";
import heroImg from "@/assets/hero.jpg";
import jackImg from "@/assets/jack.jpg";

const nav = [
  { label: "Curriculum", href: "#curriculum" },
  { label: "Why", href: "#why" },
  { label: "Dr Jack", href: "#about" },
  { label: "Benefits", href: "#benefits" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const trustBadges = [
  { icon: Stethoscope, label: "Medical Doctor" },
  { icon: Activity, label: "Sports Science" },
  { icon: MessageSquare, label: "Interactive Live" },
  { icon: Users, label: "Limited to 50 Seats" },
];

const curriculum = [
  {
    no: "01",
    icon: Brain,
    title: "Neurochemical Mastery & Mental Optimisation",
    desc: "Engineer dopamine, serotonin and focus. Build a brain that performs on demand — without burnout.",
    points: ["Dopamine reset protocols", "Stress & cortisol control", "Deep-work neurochemistry"],
  },
  {
    no: "02",
    icon: Dumbbell,
    title: "Physical Optimisation & Lifestyle Levers",
    desc: "The training, nutrition and sleep architecture that transformed me from 105kg to 80kg — and kept it off.",
    points: ["Body recomposition", "Sleep & circadian design", "Movement minimums"],
  },
  {
    no: "03",
    icon: Mountain,
    title: "Mental Toughness & Spiritual Growth",
    desc: "Forge resilience through adversity. Build the inner architecture of an unbreakable mind.",
    points: ["Stoic practice", "Identity & values work", "Discomfort training"],
  },
  {
    no: "04",
    icon: Compass,
    title: "Integration & Daily Protocol Design",
    desc: "Walk away with your personal 2.0 protocol — calibrated to your life, your goals, your biology.",
    points: ["Personalised daily stack", "Habit architecture", "90-day execution plan"],
  },
];

const why = [
  { icon: Wallet, title: "Affordable", desc: "Premium transformation at a price that respects you." },
  { icon: Sparkles, title: "Practical", desc: "Protocols you apply Monday morning, not theory." },
  { icon: FlaskConical, title: "Science-Based", desc: "Built on peer-reviewed performance medicine." },
  { icon: MessageSquare, title: "Interactive", desc: "Live Q&A, real coaching, real accountability." },
];

const timeline = [
  { icon: GraduationCap, title: "Medical Doctor", desc: "Practising physician with a clinical lens on human optimisation." },
  { icon: Activity, title: "Loughborough Sports Science", desc: "First-class foundation in performance physiology." },
  { icon: HeartPulse, title: "PT & Nutrition Specialist", desc: "Decade in the trenches coaching elite results." },
  { icon: Trophy, title: "105kg → 80kg", desc: "Lived the transformation. Engineered the method." },
  { icon: Briefcase, title: "Entrepreneur", desc: "Founder operating at the intersection of medicine and performance." },
  { icon: Award, title: "Advisor", desc: "Trusted by executives, athletes and operators." },
];

const benefits = [
  { icon: MessageSquare, title: "2-Month Coaching", desc: "Ongoing access after the masterclass for accountability and refinement.", tag: "Included" },
  { icon: BookOpen, title: "Signed Book", desc: "A complimentary copy of Dr Jack's forthcoming book.", tag: "Free" },
  { icon: Gift, title: "MediFit Retreat Giveaway", desc: "Every attendee entered to win a luxury MediFit retreat experience.", tag: "Worth £7,500" },
  { icon: ScrollText, title: "Complete Protocol", desc: "Your personalised 2.0 protocol — yours to keep, forever.", tag: "Lifetime" },
];

const faqs = [
  { q: "Who is this masterclass for?", a: "High-performers, professionals, parents and operators who want a credible, science-backed path to becoming the strongest version of themselves — without gimmicks." },
  { q: "Do I need any prior knowledge?", a: "None. Dr Jack walks you through the science and the practice from first principles, then helps you build your own protocol." },
  { q: "What's actually included for £100?", a: "A 3-hour live interactive session, your complete personal protocol, 2 months of follow-on coaching, a signed copy of the book, and entry to the £7,500 MediFit retreat giveaway." },
  { q: "Is it really limited to 50 seats?", a: "Yes. To preserve the quality of interaction and coaching, we cap attendance at 50. Once full, the doors close." },
  { q: "Will the session be recorded?", a: "Attendees receive lifetime access to the recording and accompanying protocol materials." },
];

const testimonials = [
  { quote: "Jack rebuilt the way I think about training, sleep and focus. Career-defining.", name: "M. Aldridge", role: "Founder, London" },
  { quote: "Finally — a doctor who lives what he teaches. The protocol just works.", name: "S. Patel", role: "Consultant Surgeon" },
  { quote: "I lost 14kg and got my edge back. Worth ten times the price.", name: "D. Okafor", role: "Investment Director" },
];

const Index = () => {
  useReveal();
  const { open: openBooking } = useBooking();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      setShowStickyCta(window.scrollY > 800);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.title = "Ellipsis Health — The 2.0 Version of You Masterclass | Dr Jack Darby";
    const meta = document.querySelector('meta[name="description"]') || (() => {
      const m = document.createElement("meta"); m.name = "description"; document.head.appendChild(m); return m;
    })();
    meta.setAttribute("content", "A 3-hour live masterclass with Dr Jack Darby. Engineer the 2.0 version of yourself with science-backed protocols. £100. Limited to 50 seats.");
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "glass-strong py-3" : "py-5"}`}>
        <div className="container-tight flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5 group">
            <span className="w-8 h-8 rounded-full border border-accent/60 grid place-items-center text-accent group-hover:bg-accent/10 transition">
              <span className="font-display text-lg leading-none">…</span>
            </span>
            <span className="font-display text-lg tracking-wide">
              Ellipsis <span className="text-muted-foreground">Health</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <button type="button" onClick={openBooking} className="hidden md:inline-flex btn-primary !py-2.5 !px-5 text-xs">
            Reserve Seat <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden glass-strong border-t hairline">
            <nav className="container-tight py-6 flex flex-col gap-4">
              {nav.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)} className="text-sm text-muted-foreground hover:text-foreground">
                  {n.label}
                </a>
              ))}
              <button type="button" onClick={() => { setMenuOpen(false); openBooking(); }} className="btn-primary justify-center mt-2">Reserve Your Seat</button>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden hero-bg noise">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Astronaut floating in a nebula of emerald and gold light" className="w-full h-full object-cover opacity-45" width={1600} height={1200} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
        </div>
        <Particles count={50} />

        <div className="container-tight relative z-10 pt-28 md:pt-32 pb-10 md:pb-14">
          <div className="max-w-3xl animate-fade-up">
            <div className="eyebrow mb-6 md:mb-8">
              <span className="w-8 h-px bg-accent" />
              Ellipsis Health × Dr Jack Darby
            </div>
            <h1 className="font-display text-[2.75rem] sm:text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight">
              Unlock the <span className="italic gradient-gold-text">2.0 Version</span><br />
              of You.
            </h1>
            <p className="mt-6 md:mt-8 text-base md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              A 3-hour live masterclass for the few who refuse to settle. Affordable. Science-led.
              Personally engineered by a medical doctor who's lived the transformation.
            </p>

            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <button type="button" onClick={openBooking} className="btn-primary group w-full sm:w-auto">
                Reserve Your Seat
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a href="#curriculum" className="btn-ghost w-full sm:w-auto">View Curriculum</a>
            </div>

            <div className="mt-10 md:mt-12 grid grid-cols-2 sm:flex sm:flex-wrap gap-x-6 gap-y-3 md:gap-x-8">
              {trustBadges.map((b) => (
                <div key={b.label} className="flex items-center gap-2.5 text-xs sm:text-sm text-muted-foreground">
                  <b.icon className="w-4 h-4 text-accent flex-shrink-0" strokeWidth={1.5} />
                  <span className="tracking-wide">{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Countdown — in flow, below hero content */}
        <div className="container-tight relative z-10 w-full pb-14 md:pb-16 animate-fade-in">
          <div className="glass rounded-2xl p-5 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <div className="eyebrow text-accent/80"><BadgeCheck className="w-3.5 h-3.5" />Doors close in</div>
              <div className="mt-1.5 text-sm text-muted-foreground">Cohort capped at 50 seats — first come, first served.</div>
            </div>
            <Countdown />
          </div>
        </div>
      </section>


      {/* CURRICULUM */}
      <section id="curriculum" className="relative py-28 md:py-40">
        <div className="container-tight">
          <div className="max-w-2xl mb-16 reveal">
            <div className="eyebrow mb-5"><span className="w-8 h-px bg-accent" />The Curriculum</div>
            <h2 className="font-display text-4xl md:text-6xl font-light leading-tight">
              Four pillars. <span className="italic gradient-emerald-text">One you.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Every module is engineered to compound. By the end of three hours, you'll hold a complete blueprint for your next decade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {curriculum.map((c) => (
              <article
                key={c.no}
                className="reveal card-gradient hairline border rounded-2xl p-8 md:p-10 relative overflow-hidden group hover:border-accent/40 transition-all duration-500"
              >
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="flex items-start justify-between mb-8">
                  <span className="font-display text-5xl font-extralight text-muted-foreground/40">{c.no}</span>
                  <div className="w-12 h-12 rounded-full glass grid place-items-center text-accent">
                    <c.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-medium leading-snug mb-4">{c.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{c.desc}</p>
                <ul className="space-y-2.5">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm">
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      <span className="text-foreground/85">{p}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="relative py-28 md:py-40 bg-charcoal">
        <div className="container-tight">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <div className="eyebrow justify-center mb-5"><span className="w-8 h-px bg-accent" />Why this works</div>
            <h2 className="font-display text-4xl md:text-6xl font-light leading-tight">
              Method, not <span className="italic text-muted-foreground">motivation.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {why.map((w) => (
              <div key={w.title} className="reveal glass rounded-2xl p-7 text-center hover:border-accent/40 transition-all">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 grid place-items-center mx-auto mb-5 text-accent">
                  <w.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl mb-2">{w.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT DR JACK */}
      <section id="about" className="relative py-28 md:py-40 overflow-hidden">
        <div className="absolute top-1/3 -left-40 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
        <div className="container-tight">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 reveal">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/20 via-transparent to-primary/20 blur-2xl" />
                <img
                  src={jackImg}
                  alt="Dr Jack Darby"
                  loading="lazy"
                  width={1200}
                  height={1504}
                  className="relative rounded-2xl w-full object-cover hairline border"
                />
              </div>
              <figure className="mt-10 relative pl-6 border-l-2 border-accent/60">
                <Quote className="absolute -left-3 -top-3 w-6 h-6 text-accent bg-background p-1 rounded-full" />
                <blockquote className="font-display text-xl md:text-2xl italic leading-relaxed text-foreground/90">
                  "Adversity is the forge by which we grow. Pain is not your enemy, but your teacher."
                </blockquote>
                <figcaption className="mt-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">— Dr Jack Darby</figcaption>
              </figure>
            </div>

            <div className="lg:col-span-7 reveal">
              <div className="eyebrow mb-5"><span className="w-8 h-px bg-accent" />Meet your guide</div>
              <h2 className="font-display text-4xl md:text-6xl font-light leading-tight">
                Dr Jack Darby.<br />
                <span className="italic gradient-gold-text">Lived it. Built it. Teaches it.</span>
              </h2>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                A medical doctor, sports scientist and entrepreneur who rebuilt himself from the inside out —
                and now codifies that method for the few willing to do the work.
              </p>

              <ol className="mt-10 space-y-5">
                {timeline.map((t, i) => (
                  <li key={t.title} className="flex gap-5 group">
                    <div className="flex flex-col items-center">
                      <div className="w-11 h-11 rounded-full glass grid place-items-center text-accent group-hover:bg-accent/15 transition">
                        <t.icon className="w-5 h-5" strokeWidth={1.5} />
                      </div>
                      {i < timeline.length - 1 && <span className="w-px flex-1 bg-border mt-2" />}
                    </div>
                    <div className="pb-3">
                      <h3 className="font-display text-xl">{t.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{t.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="relative py-28 md:py-40 bg-charcoal">
        <div className="container-tight">
          <div className="max-w-2xl mb-16 reveal">
            <div className="eyebrow mb-5"><span className="w-8 h-px bg-accent" />What's included</div>
            <h2 className="font-display text-4xl md:text-6xl font-light leading-tight">
              More than a masterclass. <span className="italic gradient-emerald-text">A trajectory.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="reveal card-gradient hairline border rounded-2xl p-8 flex gap-6 group hover:border-accent/40 transition-all">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/30 to-primary/20 grid place-items-center text-accent flex-shrink-0">
                  <b.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-2xl">{b.title}</h3>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-accent border border-accent/40 rounded-full px-2.5 py-1">
                      {b.tag}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-28 md:py-32">
        <div className="container-tight">
          <div className="text-center max-w-xl mx-auto mb-14 reveal">
            <div className="eyebrow justify-center mb-5"><span className="w-8 h-px bg-accent" />Voices</div>
            <h2 className="font-display text-4xl md:text-5xl font-light">Trusted by operators.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <figure key={i} className="reveal glass rounded-2xl p-7">
                <Quote className="w-5 h-5 text-accent mb-4" />
                <blockquote className="font-display text-lg italic leading-relaxed text-foreground/90">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t hairline">
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="relative py-28 md:py-40 overflow-hidden">
        <div className="absolute inset-0 hero-bg opacity-60" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[120px]" />
        <div className="container-tight relative">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <div className="eyebrow justify-center mb-5"><span className="w-8 h-px bg-accent" />Your investment</div>
            <h2 className="font-display text-4xl md:text-6xl font-light leading-tight">
              One evening. <span className="italic gradient-gold-text">One decision.</span>
            </h2>
          </div>

          <div className="max-w-2xl mx-auto reveal">
            <div className="relative glass-strong rounded-3xl p-10 md:p-14 shadow-elegant overflow-hidden animate-pulse-glow">
              <div className="absolute top-0 right-0 px-4 py-1.5 rounded-bl-2xl bg-gradient-to-br from-accent to-accent-glow text-accent-foreground text-[10px] uppercase tracking-[0.25em] font-semibold">
                50 Seats Only
              </div>

              <div className="text-center">
                <div className="font-display text-sm uppercase tracking-[0.35em] text-muted-foreground">The 2.0 Masterclass</div>
                <div className="mt-6 flex items-baseline justify-center gap-2">
                  <span className="text-3xl text-muted-foreground">£</span>
                  <span className="font-display text-8xl md:text-9xl font-light gradient-gold-text leading-none">100</span>
                </div>
                <div className="mt-3 text-sm text-muted-foreground">One-time. No subscriptions. No upsells.</div>
              </div>

              <ul className="mt-10 space-y-3.5 max-w-md mx-auto">
                {[
                  "3-hour live interactive session with Dr Jack",
                  "Your personalised 2.0 protocol",
                  "2 months of follow-on coaching",
                  "Signed copy of Dr Jack's book",
                  "Entry to £7,500 MediFit Retreat giveaway",
                  "Lifetime access to recording & materials",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                    <span className="text-foreground/90">{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col items-center gap-4">
                <button type="button" onClick={openBooking} className="btn-primary w-full sm:w-auto justify-center">
                  Reserve Your Seat <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-xs text-muted-foreground">Secure checkout · Instant confirmation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative py-28 md:py-32 bg-charcoal">
        <div className="container-tight">
          <div className="max-w-2xl mx-auto reveal">
            <div className="eyebrow justify-center mb-5"><span className="w-8 h-px bg-accent" />Questions</div>
            <h2 className="font-display text-4xl md:text-5xl font-light text-center mb-12">
              Everything you'd ask first.
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="card-gradient hairline border rounded-xl px-6 data-[state=open]:border-accent/40 transition"
                >
                  <AccordionTrigger className="font-display text-lg md:text-xl text-left hover:no-underline py-5">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative pt-20 pb-10 border-t hairline">
        <div className="container-tight">
          <div className="grid md:grid-cols-3 gap-10 mb-14">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-8 h-8 rounded-full border border-accent/60 grid place-items-center text-accent">
                  <span className="font-display text-lg leading-none">…</span>
                </span>
                <span className="font-display text-lg">Ellipsis Health</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                Performance medicine, made personal. In partnership with MediFit.
              </p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Explore</div>
              <ul className="space-y-2.5 text-sm">
                {nav.map((n) => (
                  <li key={n.href}>
                    <a href={n.href} className="text-foreground/80 hover:text-accent transition-colors">{n.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Contact</div>
              <ul className="space-y-2.5 text-sm text-foreground/80">
                <li>hello@ellipsishealth.co</li>
                <li>London, United Kingdom</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t hairline flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Ellipsis Health × MediFit. All rights reserved.
            </div>
            <div className="text-xs text-muted-foreground flex items-center gap-2">
              <span>Crafted in collaboration with</span>
              <span className="gradient-gold-text font-medium">MediFit</span>
            </div>
          </div>
        </div>
      </footer>

      {/* STICKY CTA */}
      <div
        className={`fixed bottom-5 inset-x-4 md:inset-x-auto md:right-6 md:bottom-6 z-40 transition-all duration-500 ${
          showStickyCta ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0 pointer-events-none"
        }`}
      >
        <button
          type="button"
          onClick={openBooking}
          className="shadow-elegant rounded-full pl-5 pr-2 py-2 flex items-center gap-3 sm:gap-4 max-w-md w-full mx-auto md:mx-0 text-left bg-card/95 backdrop-blur-xl border border-border"
        >
          <div className="flex-1 min-w-0">
            <div className="text-[10px] uppercase tracking-[0.25em] text-accent">Limited · 50 seats</div>
            <div className="text-sm font-medium truncate">Reserve your seat — £100</div>
          </div>
          <span className="btn-primary !py-2.5 !px-4 text-xs whitespace-nowrap">
            Reserve <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Index;
