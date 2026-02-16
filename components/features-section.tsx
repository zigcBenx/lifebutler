"use client"

import { Bell, BarChart3, Zap } from "lucide-react"

const features = [
  {
    icon: Bell,
    title: "Smart Ritual Reminders",
    description:
      "Input your important dates once. Your assistant tracks deadlines, sends proactive reminders, and prepares the next step — email templates, booking links, call scripts.",
  },
  {
    icon: BarChart3,
    title: "Asset Monitoring",
    description:
      "Track your car's market value, subscription renewals, and more. Get notified when conditions change — like when your car's value peaks or a subscription is about to auto-renew.",
  },
  {
    icon: Zap,
    title: "Action-Ready Suggestions",
    description:
      "It doesn't just remind — it prepares. Get draft emails, booking links, and smart prompts so you can take action in seconds, not hours.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(255,0,60,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">Core Features</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-balance">
            Meet Your Personal Life Assistant.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-8 hover:border-primary/40 transition-all duration-500"
            >
              {/* Glow effect */}
              <div
                className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                aria-hidden="true"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,0,60,0.15) 0%, transparent 50%, rgba(255,23,68,0.1) 100%)",
                }}
              />
              <div className="relative">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 mb-6">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
