import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Anchor, ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, Route, Router as WouterRouter, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import NotFound from "./pages/NotFound";
import OrderWithUs from "./pages/OrderWithUs";
import Payments from "./pages/Payments";
import ShipmentDetail from "./pages/ShipmentDetail";
import TrackingLand from "./pages/TrackingLand";
import TrackingSea from "./pages/TrackingSea";
import Warehouses from "./pages/Warehouses";

const navItems = [
  { href: "/", label: "Overview" },
  { href: "/order", label: "Order with us" },
  { href: "/warehouses", label: "Warehouses" },
  { href: "/dashboard", label: "Track shipment" },
  { href: "/payments", label: "Payments" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/contact", label: "Contact" },
];

function SiteLayout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f3f5f1] text-[#132333]">
      <header className="sticky top-0 z-50 border-b border-[#dbe2dc]/80 bg-[#f3f5f1]/90 backdrop-blur-xl">
        <div className="container flex h-[76px] items-center justify-between">
          <Link href="/" className="group flex items-center gap-3" onClick={() => setMobileOpen(false)}>
            <span className="flex size-10 items-center justify-center rounded-[13px] bg-[#0b1a2a] text-[#f5a45a] shadow-[0_10px_30px_rgba(11,26,42,0.18)] transition-transform duration-200 group-hover:-rotate-6">
              <Anchor size={20} strokeWidth={2.4} />
            </span>
            <span className="leading-none">
              <span className="block font-display text-[20px] font-bold tracking-[0.08em] text-[#0b1a2a]">TALISM</span>
              <span className="block pt-1 text-[9px] font-bold uppercase tracking-[0.32em] text-[#70908d]">Gateway</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
            {navItems.map((item) => {
              const active = item.href === "/" ? location === "/" : location.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2.5 text-[12px] font-bold uppercase tracking-[0.12em] transition-all duration-200 ${
                    active ? "bg-[#0b1a2a] text-white shadow-[0_8px_20px_rgba(11,26,42,0.14)]" : "text-[#60746f] hover:bg-white hover:text-[#0b1a2a]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <span className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#60746f]">
              <span className="size-2 rounded-full bg-[#6ab89f] shadow-[0_0_0_4px_rgba(106,184,159,0.15)]" />
              Systems operational
            </span>
            <Link href="/payments" className="flex items-center gap-2 rounded-full bg-[#e6a15a] px-4 py-2.5 text-[12px] font-bold uppercase tracking-[0.12em] text-[#182534] transition-transform duration-200 hover:-translate-y-0.5">
              Pay a charge <ArrowUpRight size={14} />
            </Link>
          </div>

          <button className="rounded-full p-2 text-[#0b1a2a] md:hidden" onClick={() => setMobileOpen((open) => !open)} aria-label="Toggle navigation">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {mobileOpen && (
          <div className="border-t border-[#dbe2dc] bg-[#f3f5f1] px-5 py-4 md:hidden">
            <nav className="container flex flex-col gap-1" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="rounded-xl px-3 py-3 text-sm font-bold uppercase tracking-[0.12em] text-[#506862] hover:bg-white">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {children}

      <footer className="border-t border-[#dbe2dc] bg-[#f3f5f1]">
        <div className="container grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-lg bg-[#0b1a2a] text-[#f5a45a]"><Anchor size={17} /></span>
              <span className="font-display text-lg font-bold tracking-[0.1em] text-[#0b1a2a]">TALISM-GATEWAY</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-[#71827d]">A single operational view for every handoff between global supplier, warehouse, port, road, and doorstep.</p>
            <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#cbdad2] bg-white/60 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.13em] text-[#64857d]"><span className="size-1.5 rounded-full bg-[#6ab89f]" /> Frontend MVP demo</span>
          </div>
          <div><p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#6b8b84]">Explore</p><div className="mt-4 flex flex-col items-start gap-3 text-sm font-bold text-[#365951]"><Link href="/order" className="hover:text-[#0b1a2a]">Order with us</Link><Link href="/warehouses" className="hover:text-[#0b1a2a]">Warehouses</Link><Link href="/dashboard" className="hover:text-[#0b1a2a]">Track shipment</Link><Link href="/how-it-works" className="hover:text-[#0b1a2a]">How it works</Link></div></div>
          <div><p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#6b8b84]">Customer care</p><div className="mt-4 flex flex-col items-start gap-3 text-sm font-bold text-[#365951]"><Link href="/payments" className="hover:text-[#0b1a2a]">Payments</Link><Link href="/contact" className="hover:text-[#0b1a2a]">Contact operations</Link><a href="mailto:support@talism-gateway.com" className="hover:text-[#0b1a2a]">Email support</a><span className="font-normal text-[#71827d]">Mon–Fri · 08:00–17:00 EAT</span></div></div>
          <div><p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#6b8b84]">Stay in the loop</p><p className="mt-4 text-sm leading-6 text-[#71827d]">Get a clear answer on your next shipment, sourcing request, or warehouse handoff.</p><Link href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#0b1a2a] px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.13em] text-white transition hover:bg-[#173c3d]">Talk to operations <ArrowUpRight size={14} /></Link></div>
        </div>
        <div className="border-t border-[#dbe2dc]"><div className="container flex flex-col gap-3 py-5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#81918b] sm:flex-row sm:items-center sm:justify-between"><span>© 2026 TALISM-GATEWAY</span><span>Demo data shown for product presentation</span><span>Global cargo coordination</span></div></div>
      </footer>
    </div>
  );
}

function Router() {
  const routerBase = import.meta.env.BASE_URL === "/" ? "" : import.meta.env.BASE_URL.replace(/\/$/, "");
  return (
    <SiteLayout>
      <WouterRouter base={routerBase}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/shipment/:id" component={ShipmentDetail} />
          <Route path="/order" component={OrderWithUs} />
          <Route path="/warehouses" component={Warehouses} />
          <Route path="/how-it-works" component={HowItWorks} />
          <Route path="/contact" component={Contact} />
          <Route path="/tracking/sea" component={TrackingSea} />
          <Route path="/payments" component={Payments} />
          <Route path="/tracking/land" component={TrackingLand} />
          <Route path="/404" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </WouterRouter>
    </SiteLayout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
