"use client"

const steps = [
  {
    number: "01",
    title: "Add What Matters",
    description:
      "Input your important dates, assets, and subscriptions once. Car insurance, doctor visits, passport expiry — everything in one place.",
  },
  {
    number: "02",
    title: "Assistant Monitors",
    description:
      "Your assistant works silently in the background. Tracking deadlines, watching market changes, and preparing smart suggestions.",
  },
  {
    number: "03",
    title: "Smart Prompts",
    description:
      "At the perfect moment, you receive actionable notifications. Not just reminders — full action plans ready to execute.",
  },
  {
    number: "04",
    title: "Approve and Move On",
    description:
      "Review the suggestion, approve, and it's done. No research, no overthinking. Life runs on autopilot.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">How It Works</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-balance">
            Four Steps. Zero Stress.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative flex gap-6 p-6 rounded-xl border border-border bg-card/40 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <span className="font-heading text-4xl font-bold text-primary/20 group-hover:text-primary/50 transition-colors">
                  {step.number}
                </span>
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold mb-2 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
