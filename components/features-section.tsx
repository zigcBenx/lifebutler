"use client"
import { Car, ShieldAlert, Stethoscope, Briefcase, Mail, Calendar } from "lucide-react"

const features = [
  {
    icon: Car,
    title: "Car Value Monitoring",
    description: "Know exactly when your car is worth the most. We track market trends so you don't have to.",
  },
  {
    icon: ShieldAlert,
    title: "Insurance Reminders",
    description: "Never miss a renewal. We remind you before it expires and help you find better rates.",
  },
  {
    icon: Stethoscope,
    title: "Doctor Reminders",
    description: "Keep your health in check. We remind you when it's time for checkups and appointments.",
  },
  {
    icon: Briefcase,
    title: "Auto Job Search",
    description: "Looking for a better position? We constantly scan for opportunities that match your profile.",
  },
  {
    icon: Mail,
    title: "Auto Email Reply",
    description: "Save hours on inbox management. We draft smart replies for you to approve and send.",
  },
  {
    icon: Calendar,
    title: "Smart Calendar",
    description: "We organize your schedule, fix conflicts, and ensure you never double-book yourself.",
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
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">What We Do</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-balance">
            Everything handled on autopilot.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-8 hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
