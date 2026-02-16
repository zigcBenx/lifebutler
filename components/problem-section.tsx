"use client"

import { AlertTriangle, CalendarX, CreditCard, TrendingDown, Stethoscope } from "lucide-react"

const problems = [
  {
    icon: CalendarX,
    title: "Insurance Renewals",
    description: "Missed your renewal window? Now you're paying 30% more.",
  },
  {
    icon: Stethoscope,
    title: "Doctor Checkups",
    description: "That yearly checkup you keep postponing? It's been 3 years.",
  },
  {
    icon: CreditCard,
    title: "Subscription Traps",
    description: "Still paying for that app you haven't opened since last summer.",
  },
  {
    icon: TrendingDown,
    title: "Missed Opportunities",
    description: "Your car's value peaked last month. You didn't know.",
  },
  {
    icon: AlertTriangle,
    title: "Expiring Documents",
    description: "Passport expires in 2 weeks. You just found out at the airport.",
  },
]

export function ProblemSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">The Problem</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-balance">
            Life Is Full of Things You Forget.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="group relative p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
              <div className="relative">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  <problem.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">{problem.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
