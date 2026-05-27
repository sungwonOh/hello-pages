export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
              D
            </div>
            <span className="font-bold text-lg tracking-tight">Demo Studio</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-600">
            <a href="#features" className="hover:text-zinc-900 transition">Features</a>
            <a href="#stats" className="hover:text-zinc-900 transition">Numbers</a>
            <a href="#pricing" className="hover:text-zinc-900 transition">Pricing</a>
            <a href="#cta" className="hover:text-zinc-900 transition">Get Started</a>
          </nav>
          <a href="#cta" className="text-sm font-medium px-4 py-2 rounded-lg bg-zinc-900 text-white hover:bg-zinc-700 transition">
            Try free →
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(99,102,241,0.15),_transparent_50%)]" />
        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-32 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            New · v2.0 just shipped
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 leading-[1.05]">
            Build faster.
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Ship smarter.
            </span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            A modern toolkit that helps small teams move
            <br className="hidden md:block" />
            from idea to production in days, not months.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#cta" className="px-6 py-3 rounded-lg bg-zinc-900 text-white font-medium hover:bg-zinc-700 transition">
              Start for free
            </a>
            <a href="#features" className="px-6 py-3 rounded-lg border border-zinc-300 text-zinc-700 font-medium hover:bg-zinc-50 transition">
              See features
            </a>
          </div>
          <p className="mt-8 text-xs text-zinc-400">No credit card required · 14-day trial</p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest">Features</p>
            <h2 className="mt-3 text-4xl font-bold text-zinc-900">Everything you need, nothing you don&apos;t</h2>
            <p className="mt-4 text-zinc-600 text-lg">Designed for teams who care about both speed and craft.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "⚡", title: "Lightning fast", desc: "Sub-second response time, optimized for keyboard-first workflows." },
              { icon: "🔒", title: "Secure by default", desc: "End-to-end encryption, SSO, and granular permission controls." },
              { icon: "🧩", title: "Plays well with others", desc: "Connects to 200+ tools via native integrations and an open API." },
              { icon: "📊", title: "Real-time analytics", desc: "Track what matters with live dashboards and custom reports." },
              { icon: "🤝", title: "Built for teams", desc: "Comments, mentions, and shared workspaces — no friction." },
              { icon: "🚀", title: "Deploy anywhere", desc: "Cloud, on-prem, or hybrid. Your data stays where you want it." },
            ].map((f) => (
              <div key={f.title} className="p-6 rounded-2xl border border-zinc-200 hover:border-indigo-300 hover:shadow-lg transition group">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="text-lg font-bold text-zinc-900 group-hover:text-indigo-600 transition">{f.title}</h3>
                <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="py-20 bg-zinc-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "10k+", label: "Active users" },
              { num: "99.9%", label: "Uptime SLA" },
              { num: "200+", label: "Integrations" },
              { num: "4.9★", label: "Customer rating" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  {s.num}
                </div>
                <div className="mt-2 text-sm text-zinc-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest">Pricing</p>
            <h2 className="mt-3 text-4xl font-bold text-zinc-900">Simple, transparent pricing</h2>
            <p className="mt-4 text-zinc-600 text-lg">Start free. Upgrade when you&apos;re ready.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Starter", price: "Free", features: ["1 user", "Up to 3 projects", "Community support"], highlight: false },
              { name: "Pro", price: "$12", suffix: "/mo", features: ["Unlimited projects", "Priority support", "Advanced analytics", "Custom integrations"], highlight: true },
              { name: "Enterprise", price: "Custom", features: ["SSO + SAML", "Dedicated CSM", "On-prem option", "99.99% SLA"], highlight: false },
            ].map((p) => (
              <div key={p.name} className={`p-8 rounded-2xl border-2 ${p.highlight ? "border-indigo-500 shadow-xl scale-[1.02] bg-gradient-to-b from-indigo-50/50 to-white" : "border-zinc-200"} flex flex-col`}>
                {p.highlight && <div className="inline-block self-start px-2 py-0.5 rounded-md bg-indigo-600 text-white text-xs font-medium mb-3">MOST POPULAR</div>}
                <h3 className="text-lg font-bold text-zinc-900">{p.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-zinc-900">{p.price}</span>
                  {p.suffix && <span className="text-zinc-500">{p.suffix}</span>}
                </div>
                <ul className="mt-6 space-y-2 text-sm text-zinc-600 flex-1">
                  {p.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <span className="text-indigo-500 mt-0.5">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <a href="#cta" className={`mt-8 block text-center py-2.5 rounded-lg font-medium transition ${p.highlight ? "bg-zinc-900 text-white hover:bg-zinc-700" : "border border-zinc-300 text-zinc-700 hover:bg-zinc-50"}`}>
                  {p.name === "Enterprise" ? "Contact sales" : "Get started"}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-24 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-zinc-900">Ready to build?</h2>
          <p className="mt-4 text-lg text-zinc-600">Join thousands of teams shipping faster with Demo Studio.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#" className="px-6 py-3 rounded-lg bg-zinc-900 text-white font-medium hover:bg-zinc-700 transition">Start free trial</a>
            <a href="#" className="px-6 py-3 rounded-lg border border-zinc-300 text-zinc-700 font-medium hover:bg-white transition">Book a demo</a>
          </div>
          <p className="mt-6 text-xs text-zinc-500">No credit card · Cancel anytime</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-zinc-200 py-12 mt-auto">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs">D</div>
              <span className="font-semibold text-sm text-zinc-700">Demo Studio</span>
            </div>
            <div className="flex items-center gap-6 text-xs text-zinc-500">
              <a href="#" className="hover:text-zinc-900">Privacy</a>
              <a href="#" className="hover:text-zinc-900">Terms</a>
              <a href="#" className="hover:text-zinc-900">Contact</a>
            </div>
            <div className="text-xs text-zinc-400">© 2026 Demo Studio. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
