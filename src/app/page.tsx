export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-zinc-200/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-indigo-500/30">
              D
            </div>
            <span className="font-bold text-lg tracking-tight">Demo Studio</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-600">
            <a href="#features" className="hover:text-zinc-900 transition">Features</a>
            <a href="#testimonials" className="hover:text-zinc-900 transition">Customers</a>
            <a href="#pricing" className="hover:text-zinc-900 transition">Pricing</a>
            <a href="#faq" className="hover:text-zinc-900 transition">FAQ</a>
          </nav>
          <a href="#cta" className="text-sm font-medium px-4 py-2 rounded-lg bg-zinc-900 text-white hover:bg-zinc-700 transition shadow-sm">
            Try free →
          </a>
        </div>
      </header>

      {/* Hero with decorative blobs + mockup */}
      <section className="relative overflow-hidden pt-24 pb-32">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute top-0 -left-20 w-96 h-96 bg-indigo-300/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-purple-300/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-300/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob" style={{ animationDelay: "8s" }} />

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="fade-up inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-indigo-200 text-indigo-700 text-xs font-medium mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            New · v2.0 just shipped
          </div>
          <h1 className="fade-up text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 leading-[1.05]" style={{ animationDelay: "0.1s" }}>
            Build faster.
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Ship smarter.
            </span>
          </h1>
          <p className="fade-up mt-8 text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed" style={{ animationDelay: "0.2s" }}>
            A modern toolkit that helps small teams move
            <br className="hidden md:block" />
            from idea to production in days, not months.
          </p>
          <div className="fade-up mt-10 flex flex-col sm:flex-row gap-3 justify-center" style={{ animationDelay: "0.3s" }}>
            <a href="#cta" className="px-6 py-3 rounded-lg bg-zinc-900 text-white font-medium hover:bg-zinc-700 transition shadow-lg shadow-zinc-900/20">
              Start for free
            </a>
            <a href="#features" className="px-6 py-3 rounded-lg bg-white border border-zinc-300 text-zinc-700 font-medium hover:border-zinc-400 hover:bg-zinc-50 transition">
              See features
            </a>
          </div>
          <p className="fade-up mt-8 text-xs text-zinc-400" style={{ animationDelay: "0.4s" }}>
            No credit card required · 14-day trial
          </p>

          {/* Mockup browser window */}
          <div className="fade-up relative mt-16 max-w-4xl mx-auto" style={{ animationDelay: "0.5s" }}>
            <div className="rounded-2xl bg-zinc-900 shadow-2xl shadow-indigo-500/20 overflow-hidden border border-zinc-800">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 bg-zinc-950">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="ml-4 px-3 py-1 rounded-md bg-zinc-800 text-xs text-zinc-400 font-mono flex-1 max-w-md">
                  demo-studio.app/dashboard
                </div>
              </div>
              <div className="grid grid-cols-12 gap-4 p-6 text-left text-xs">
                <div className="col-span-3 space-y-2">
                  <div className="h-6 rounded bg-indigo-500/20 border border-indigo-500/30" />
                  <div className="h-6 rounded bg-zinc-800" />
                  <div className="h-6 rounded bg-zinc-800" />
                  <div className="h-6 rounded bg-zinc-800" />
                </div>
                <div className="col-span-9 space-y-3">
                  <div className="h-8 rounded bg-zinc-800/60 w-2/3" />
                  <div className="grid grid-cols-3 gap-3">
                    {[1,2,3].map(i => (
                      <div key={i} className="h-20 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/20" />
                    ))}
                  </div>
                  <div className="h-32 rounded-lg bg-zinc-800/40 border border-zinc-700/50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by — marquee */}
      <section className="py-12 border-y border-zinc-200 bg-zinc-50/50">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-6">
            Trusted by teams at
          </p>
          <div className="relative overflow-hidden">
            <div className="flex gap-16 animate-marquee w-max">
              {[...Array(2)].map((_, dup) => (
                <div key={dup} className="flex gap-16 items-center shrink-0">
                  {["ACME Corp", "Northwind", "Globex", "Initech", "Hooli", "Pied Piper", "Stark Ind.", "Wayne Tech"].map((n) => (
                    <span key={n} className="text-xl md:text-2xl font-bold text-zinc-400 hover:text-zinc-700 transition whitespace-nowrap">
                      {n}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest">Features</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-zinc-900">
              Everything you need, <span className="text-zinc-400">nothing you don&apos;t</span>
            </h2>
            <p className="mt-4 text-zinc-600 text-lg">Designed for teams who care about both speed and craft.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "⚡", title: "Lightning fast", desc: "Sub-second response time, optimized for keyboard-first workflows.", color: "from-yellow-400 to-orange-500" },
              { icon: "🔒", title: "Secure by default", desc: "End-to-end encryption, SSO, and granular permission controls.", color: "from-emerald-400 to-teal-500" },
              { icon: "🧩", title: "Integrations", desc: "Connects to 200+ tools via native integrations and an open API.", color: "from-indigo-400 to-purple-500" },
              { icon: "📊", title: "Real-time analytics", desc: "Track what matters with live dashboards and custom reports.", color: "from-pink-400 to-rose-500" },
              { icon: "🤝", title: "Built for teams", desc: "Comments, mentions, and shared workspaces — no friction.", color: "from-sky-400 to-blue-500" },
              { icon: "🚀", title: "Deploy anywhere", desc: "Cloud, on-prem, or hybrid. Your data stays where you want it.", color: "from-violet-400 to-fuchsia-500" },
            ].map((f) => (
              <div key={f.title} className="group relative p-6 rounded-2xl border border-zinc-200 bg-white hover:border-transparent hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300">
                <div className={`absolute -top-px -left-px -right-px h-1 bg-gradient-to-r ${f.color} rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center text-2xl mb-4 shadow-lg`}>
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-zinc-900">{f.title}</h3>
                <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats — dark with shine */}
      <section className="relative py-20 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.2),transparent_50%)]" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "10k+", label: "Active users" },
              { num: "99.9%", label: "Uptime SLA" },
              { num: "200+", label: "Integrations" },
              { num: "4.9★", label: "Customer rating" },
            ].map((s) => (
              <div key={s.label} className="group">
                <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent group-hover:scale-110 transition-transform inline-block">
                  {s.num}
                </div>
                <div className="mt-2 text-sm text-zinc-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest">Loved by teams</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-zinc-900">What our customers say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: "Cut our release cycle from weeks to hours. The team has never been this productive.", name: "Sarah Chen", role: "CTO, ACME Corp", initial: "S", color: "from-indigo-500 to-purple-500" },
              { quote: "The integrations alone are worth the price. We connected everything in an afternoon.", name: "Marcus Patel", role: "Lead Engineer, Hooli", initial: "M", color: "from-emerald-500 to-teal-500" },
              { quote: "Best onboarding experience I&apos;ve had with any tool. Our whole team was up and running on day one.", name: "Yuki Tanaka", role: "PM, Stark Industries", initial: "Y", color: "from-pink-500 to-rose-500" },
            ].map((t) => (
              <div key={t.name} className="p-6 rounded-2xl border border-zinc-200 bg-gradient-to-b from-white to-zinc-50/50 hover:shadow-xl transition">
                <div className="flex gap-1 text-yellow-400 mb-4">{"★★★★★"}</div>
                <p className="text-zinc-700 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-semibold shadow`}>
                    {t.initial}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-900">{t.name}</p>
                    <p className="text-xs text-zinc-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-gradient-to-b from-white to-indigo-50/30">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest">Pricing</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-zinc-900">Simple, transparent pricing</h2>
            <p className="mt-4 text-zinc-600 text-lg">Start free. Upgrade when you&apos;re ready.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Starter", price: "Free", features: ["1 user", "Up to 3 projects", "Community support"], highlight: false },
              { name: "Pro", price: "$12", suffix: "/mo", features: ["Unlimited projects", "Priority support", "Advanced analytics", "Custom integrations"], highlight: true },
              { name: "Enterprise", price: "Custom", features: ["SSO + SAML", "Dedicated CSM", "On-prem option", "99.99% SLA"], highlight: false },
            ].map((p) => (
              <div key={p.name} className={`relative p-8 rounded-2xl flex flex-col transition ${p.highlight ? "border-2 border-indigo-500 shadow-2xl shadow-indigo-500/20 bg-white md:scale-[1.04]" : "border border-zinc-200 bg-white hover:shadow-lg"}`}>
                {p.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-semibold shadow-lg">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-lg font-bold text-zinc-900">{p.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-zinc-900">{p.price}</span>
                  {p.suffix && <span className="text-zinc-500">{p.suffix}</span>}
                </div>
                <ul className="mt-6 space-y-3 text-sm text-zinc-700 flex-1">
                  {p.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <a href="#cta" className={`mt-8 block text-center py-3 rounded-lg font-medium transition ${p.highlight ? "bg-zinc-900 text-white hover:bg-zinc-700 shadow-lg" : "border border-zinc-300 text-zinc-700 hover:bg-zinc-50"}`}>
                  {p.name === "Enterprise" ? "Contact sales" : "Get started"}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest">FAQ</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-zinc-900">Frequently asked questions</h2>
          </div>
          <div className="space-y-3">
            {[
              { q: "Is there a free tier?", a: "Yes — Starter is free forever for 1 user with up to 3 projects. No credit card required." },
              { q: "Can I cancel anytime?", a: "Of course. Cancel with a single click from your dashboard. Your data is exportable anytime." },
              { q: "Do you offer on-premise deployment?", a: "Yes, available on the Enterprise plan. We support both air-gapped and hybrid setups." },
              { q: "How does pricing scale?", a: "Pro is flat $12/user/mo. Enterprise is custom — contact sales for volume pricing." },
              { q: "What integrations do you support?", a: "200+ out of the box including Slack, GitHub, Jira, Linear, Notion, and more. Open API for custom." },
            ].map((item) => (
              <details key={item.q} className="group rounded-xl border border-zinc-200 bg-white hover:border-indigo-200 transition overflow-hidden">
                <summary className="px-6 py-4 flex items-center justify-between gap-4">
                  <span className="font-semibold text-zinc-900">{item.q}</span>
                  <span className="text-zinc-400 group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
                </summary>
                <div className="px-6 pb-5 text-zinc-600 leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_50%)]" />
        <div className="relative max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold">Ready to ship?</h2>
          <p className="mt-4 text-lg text-indigo-100">Join thousands of teams building with Demo Studio.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#" className="px-6 py-3 rounded-lg bg-white text-zinc-900 font-semibold hover:bg-zinc-100 transition shadow-xl">
              Start free trial
            </a>
            <a href="#" className="px-6 py-3 rounded-lg bg-white/10 backdrop-blur border border-white/30 text-white font-medium hover:bg-white/20 transition">
              Book a demo
            </a>
          </div>
          <p className="mt-6 text-xs text-indigo-200">No credit card · Cancel anytime</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 text-zinc-400 py-16 mt-auto">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs">D</div>
                <span className="font-semibold text-sm text-white">Demo Studio</span>
              </div>
              <p className="text-xs leading-relaxed">Modern toolkit for shipping faster. Built for teams of any size.</p>
            </div>
            {[
              { title: "Product", links: ["Features", "Pricing", "Integrations", "Changelog"] },
              { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
              { title: "Resources", links: ["Docs", "API Reference", "Status", "Privacy"] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="font-semibold text-sm text-white mb-4">{col.title}</h4>
                <ul className="space-y-2 text-xs">
                  {col.links.map((l) => (
                    <li key={l}><a href="#" className="hover:text-white transition">{l}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>© 2026 Demo Studio. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" aria-label="Twitter" className="hover:text-white transition">𝕏</a>
              <a href="#" aria-label="GitHub" className="hover:text-white transition">GH</a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white transition">IN</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
