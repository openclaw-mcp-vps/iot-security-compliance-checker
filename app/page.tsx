export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          FCC IoT Security Compliance
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
          Scan Your IoT Devices.<br />
          <span className="text-[#58a6ff]">Stay Compliant. Stay Secure.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Automatically discover IoT devices on your network, verify firmware versions against vulnerability databases, and generate audit-ready compliance reports aligned with proposed FCC security update requirements.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Scanning — $99/mo
          </a>
          <a
            href="#faq"
            className="inline-block border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-medium px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "🔍", title: "Network Discovery", desc: "Auto-detect every IoT device on your subnet in minutes." },
            { icon: "🛡️", title: "Firmware Verification", desc: "Cross-check firmware versions against live CVE and vendor databases." },
            { icon: "📋", title: "Compliance Reports", desc: "Export PDF/CSV reports ready for auditors and regulators." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="text-white font-semibold mb-1">{f.title}</h3>
              <p className="text-[#8b949e] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/5">
          <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4 border border-[#58a6ff]/20">
            Pro Plan
          </span>
          <div className="text-5xl font-extrabold text-white mb-1">$99<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need for full IoT compliance</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited device scans",
              "Real-time CVE vulnerability checks",
              "Automated compliance reports (PDF/CSV)",
              "Background scheduled scanning",
              "Multi-network / VLAN support",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>{item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Get Started Now
          </a>
          <p className="text-[#8b949e] text-xs mt-4">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "What IoT devices can it detect?",
              a: "The scanner discovers any IP-connected device on your network — routers, cameras, smart sensors, industrial controllers, medical devices, and more — using passive and active discovery techniques."
            },
            {
              q: "How does firmware compliance checking work?",
              a: "Detected firmware versions are matched against the NVD CVE database and vendor security advisories. Devices running outdated or vulnerable firmware are flagged with severity ratings and remediation guidance."
            },
            {
              q: "Is this aligned with FCC requirements?",
              a: "Yes. Reports are structured around the FCC's proposed IoT security labeling and update requirements, making them suitable for regulatory submissions and internal audits."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-[#8b949e] text-xs">
        © {new Date().getFullYear()} IoT Security Compliance Checker. All rights reserved.
      </footer>
    </main>
  );
}
