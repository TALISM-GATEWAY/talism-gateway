import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Box, CheckCircle2, ChevronRight, CircleDollarSign, FileText, Globe2, MapPin, Ship, Truck, Warehouse, Waves } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

const services = [
  { eyebrow: "01 / Global sourcing", title: "Order with us", body: "Buy from different parts of the world and let Talism coordinate the route to your door.", href: "/order", icon: Globe2, accent: "#73c4bd" },
  { eyebrow: "02 / Network coverage", title: "Warehouses", body: "Find Talism-owned and trusted partner receiving points across the world.", href: "/warehouses", icon: Warehouse, accent: "#e9a05b" },
  { eyebrow: "03 / Maritime visibility", title: "At sea", body: "See where your cargo is on the water, when it will reach port, and what happens next.", href: "/tracking/sea", icon: Ship, accent: "#a8a6dd" },
  { eyebrow: "04 / Financial clarity", title: "Taxes & cargo", body: "Keep every charge together, generate a control number, and move from due to paid.", href: "/payments", icon: CircleDollarSign, accent: "#84b7a2" },
  { eyebrow: "05 / Last-mile control", title: "At land", body: "Follow the final handoffs from clearance to delivery at your door.", href: "/tracking/land", icon: Truck, accent: "#73a9c4" },
];

export default function Home() {
  const [, navigate] = useLocation();
  const [trackingId, setTrackingId] = useState("");
  const [mode, setMode] = useState<"sea" | "land">("sea");

  const handleTrack = () => {
    navigate(mode === "sea" ? "/tracking/sea" : "/tracking/land");
  };

  return (
    <main>
      <section className="relative isolate overflow-hidden bg-[#0b1a2a] text-white">
        <div className="absolute inset-0 bg-cover bg-[center_45%] opacity-[0.8]" style={{ backgroundImage: `url("${import.meta.env.BASE_URL}talism-hero.jpg")` }} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,20,34,0.98)_0%,rgba(7,20,34,0.88)_34%,rgba(7,20,34,0.32)_76%,rgba(7,20,34,0.44)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b1a2a] to-transparent" />
        <div className="container relative flex min-h-[650px] flex-col justify-between pb-12 pt-20 lg:min-h-[690px] lg:pt-28">
          <div className="max-w-3xl animate-rise">
            <div className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#a7c8bf]">
              <span className="h-px w-9 bg-[#e7a15a]" />
              Global cargo gateway / 2026
            </div>
            <h1 className="max-w-4xl font-display text-[clamp(3.5rem,8vw,7.5rem)] font-bold uppercase leading-[0.85] tracking-[-0.045em] text-[#f7f7f1]">
              Cargo visibility,<br /><span className="text-[#73c4bd]">from departure</span><br />to delivery.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-[#c1d0cb] sm:text-lg">TALISM-GATEWAY brings sea tracking, cargo payments, and last-mile delivery into one clear operational view.</p>
          </div>

          <div className="mt-16 grid items-end gap-8 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl rounded-[22px] border border-white/15 bg-[#102538]/80 p-3 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-2 px-3 pb-3 pt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#91b4ad]">
                <span className="size-1.5 rounded-full bg-[#73c4bd]" /> Quick shipment lookup
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="flex flex-1 items-center gap-3 rounded-xl border border-white/10 bg-[#0b1b2b]/80 px-4">
                  <Box size={18} className="text-[#e7a15a]" />
                  <input value={trackingId} onChange={(event) => setTrackingId(event.target.value)} placeholder="Enter tracking or container number" className="h-12 w-full bg-transparent text-sm text-white outline-none placeholder:text-[#78908d]" />
                </div>
                <div className="flex rounded-xl border border-white/10 bg-[#0b1b2b]/80 p-1">
                  <button onClick={() => setMode("sea")} className={`rounded-lg px-3 text-[10px] font-bold uppercase tracking-[0.12em] transition ${mode === "sea" ? "bg-[#73c4bd] text-[#0b1a2a]" : "text-[#89a6a1]"}`}>Sea</button>
                  <button onClick={() => setMode("land")} className={`rounded-lg px-3 text-[10px] font-bold uppercase tracking-[0.12em] transition ${mode === "land" ? "bg-[#73c4bd] text-[#0b1a2a]" : "text-[#89a6a1]"}`}>Land</button>
                </div>
                <Button onClick={handleTrack} className="h-12 rounded-xl bg-[#e7a15a] px-6 text-sm font-bold text-[#132333] hover:bg-[#f1b675]">Track cargo <ArrowRight size={16} /></Button>
              </div>
            </div>
            <div className="hidden items-center gap-3 text-right lg:flex">
              <div><p className="font-display text-3xl font-bold text-white">24/7</p><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#89a6a1]">Signal monitoring</p></div>
              <div className="size-10 rounded-full border border-[#73c4bd]/50 p-2"><Waves className="size-full text-[#73c4bd]" /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#dbe2dc] bg-[#0b1a2a] pb-20 text-white">
        <div className="container">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link key={service.href} href={service.href} className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-[#13283a] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-[#183246]">
                  <div className="absolute right-0 top-0 size-32 rounded-full opacity-10 blur-2xl" style={{ background: service.accent }} />
                  <div className="relative flex min-h-[220px] flex-col justify-between">
                    <div className="flex items-start justify-between"><span className="flex size-11 items-center justify-center rounded-xl" style={{ background: `${service.accent}20`, color: service.accent }}><Icon size={21} /></span><span className="font-display text-3xl font-bold text-white/25">0{index + 1}</span></div>
                    <div><p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#87a9a3]">{service.eyebrow}</p><h2 className="font-display text-3xl font-bold uppercase tracking-[-0.02em]">{service.title}</h2><p className="mt-3 max-w-sm text-sm leading-6 text-[#a9bdb8]">{service.body}</p></div>
                    <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em]" style={{ color: service.accent }}>Open module <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f5f1] py-24">
        <div className="container grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#6a8c87]"><span className="h-px w-8 bg-[#e7a15a]" /> Why Talism</p>
            <h2 className="mt-6 max-w-lg font-display text-5xl font-bold uppercase leading-[0.9] tracking-[-0.04em] text-[#102234] sm:text-6xl">One journey.<br /><span className="text-[#6b9e9a]">No blind spots.</span></h2>
            <p className="mt-7 max-w-md text-base leading-7 text-[#657872]">Import logistics should not require a spreadsheet maze. Talism keeps your shipment, payment status, and delivery handoff connected in a single view.</p>
            <Link href="/tracking/sea" className="mt-9 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#0b1a2a] underline decoration-[#e7a15a] decoration-2 underline-offset-8">Explore live visibility <ArrowRight size={15} /></Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: MapPin, title: "Know the handoff", text: "Port, customs, warehouse, and doorstep milestones in sequence.", color: "#73c4bd" },
              { icon: FileText, title: "Keep the paperwork moving", text: "See what is due, what is cleared, and what needs your attention.", color: "#e7a15a" },
              { icon: BarChart3, title: "Act on signal, not noise", text: "A concise operational view built for fast decisions.", color: "#a8a6dd" },
              { icon: CheckCircle2, title: "Finish with confidence", text: "Follow the final mile until your cargo arrives where it belongs.", color: "#84b7a2" },
            ].map((item) => { const Icon = item.icon; return <div key={item.title} className="rounded-[20px] border border-[#dbe2dc] bg-white/60 p-6 shadow-[0_12px_40px_rgba(25,50,45,0.04)]"><span className="mb-10 flex size-10 items-center justify-center rounded-xl" style={{ color: item.color, background: `${item.color}20` }}><Icon size={19} /></span><h3 className="font-display text-2xl font-bold uppercase tracking-[-0.02em] text-[#163044]">{item.title}</h3><p className="mt-3 text-sm leading-6 text-[#74837e]">{item.text}</p></div>; })}
          </div>
        </div>
      </section>

      <section className="bg-[#e1e9e4] py-20">
        <div className="container">
          <div className="flex flex-col justify-between gap-5 border-b border-[#bfcfc7] pb-8 sm:flex-row sm:items-end"><div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6b8b84]">The gateway sequence</p><h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-[-0.03em] text-[#102234]">Every mile, accounted for.</h2></div><p className="max-w-xs text-sm leading-6 text-[#678079]">From booking to box opening, Talism gives the journey a shared language.</p></div>
          <div className="grid gap-0 pt-10 md:grid-cols-4">
            {[{ n: "01", title: "Depart", icon: Ship }, { n: "02", title: "Arrive", icon: Waves }, { n: "03", title: "Clear", icon: FileText }, { n: "04", title: "Deliver", icon: Truck }].map((step, index) => { const Icon = step.icon; return <div key={step.n} className="relative border-l border-[#bfcfc7] py-2 pl-6 pr-8 md:min-h-[150px] md:border-l-0 md:border-t md:pt-6"><span className="font-display text-4xl font-bold text-[#89aaa1]">{step.n}</span><div className="mt-7 flex items-center gap-3"><Icon size={18} className={index === 0 ? "text-[#0b1a2a]" : "text-[#82a49c]"} /><h3 className="font-display text-2xl font-bold uppercase text-[#102234]">{step.title}</h3></div>{index < 3 && <ChevronRight className="absolute -right-3 top-[-10px] hidden size-6 bg-[#e1e9e4] text-[#8aa79f] md:block" />}</div>; })}
          </div>
        </div>
      </section>
    </main>
  );
}
