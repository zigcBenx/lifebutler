"use client"

import { ArrowRight, Check, Shield } from "lucide-react"

const features = [
  "Deep Calendar Integration",
  "Car Value & Marketplace Monitoring",
  "Medical & Insurance Reminders",
  "Smart Email Auto-Drafts",
  "Job Market Auto-Search",
  "Weekly Life Butler Report",
  "Lifetime Access — No Monthly Fees",
  "Prioritized Feature Requests",
]

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 md:py-32">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(255,0,60,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">Founding Members</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-balance">
            Your Personal Butler.
          </h2>
        </div>

        {/* Pricing card */}
        <div className="relative rounded-2xl border border-primary/30 bg-card/60 backdrop-blur-sm overflow-hidden">
          {/* Glow border */}
          <div
            className="absolute -inset-px rounded-2xl pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,0,60,0.3) 0%, transparent 40%, transparent 60%, rgba(255,23,68,0.2) 100%)",
            }}
          />

          {/* Badge */}
          <div className="relative flex justify-center -mt-px">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary text-primary-foreground text-xs font-bold tracking-wider uppercase rounded-b-lg">
              <Shield className="w-3.5 h-3.5" />
              Founding Member
            </div>
          </div>

          <div className="relative p-8 md:p-10">
            <div className="text-center mb-8">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-6xl md:text-7xl font-heading font-bold text-foreground">
                  {"€19"}
                </span>
                <span className="text-xl text-muted-foreground">/ month</span>
              </div>
              <p className="text-muted-foreground mt-2">Simple monthly pricing. Cancel anytime.</p>
              <p className="text-sm text-primary/80 mt-1">Money-back guarantee included</p>
            </div>

            <ul className="space-y-3 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/10">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-foreground text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="group relative flex items-center justify-center gap-2 w-full py-4 bg-primary text-primary-foreground font-semibold rounded-xl text-lg transition-all hover:scale-[1.02] active:scale-[0.98]">
              <span className="absolute inset-0 rounded-xl bg-primary/50 blur-xl opacity-0 group-hover:opacity-60 transition-opacity" aria-hidden="true" />
              <span className="relative">Join Early Access</span>
              <ArrowRight className="relative w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            <p className="text-center text-xs text-muted-foreground mt-4">
              Only 200 spots available. 47 already claimed.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
