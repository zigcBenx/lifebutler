"use client"

import { TrendingUp, Calendar, X, Stethoscope, Car, ArrowUpRight } from "lucide-react"

const reportItems = [
  {
    icon: Calendar,
    type: "Renewal",
    title: "Car Insurance Renewal",
    description: "Expires in 12 days. Draft email ready to send to your broker.",
    urgency: "urgent",
  },
  {
    icon: Car,
    type: "Market Update",
    title: "BMW 320i — Market Value Up",
    description: "Value increased 12% in your region. Above 6-month average — good time to sell.",
    urgency: "opportunity",
  },
  {
    icon: Stethoscope,
    type: "Health",
    title: "Schedule Dentist Checkup",
    description: "Last visit was 11 months ago. Booking link attached.",
    urgency: "normal",
  },
  {
    icon: X,
    type: "Subscription",
    title: "Cancel Unused Subscription",
    description: "Adobe Creative Cloud — not opened in 47 days. Saves €54/month.",
    urgency: "savings",
  },
]

const urgencyColors: Record<string, string> = {
  urgent: "bg-primary/20 text-primary",
  opportunity: "bg-emerald-500/20 text-emerald-400",
  normal: "bg-blue-500/20 text-blue-400",
  savings: "bg-amber-500/20 text-amber-400",
}

export function DashboardPreview() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">Weekly Life Report</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-balance">
            Your Sunday Briefing.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto leading-relaxed">
            Every week, your assistant compiles everything you need to know — and everything you need to do.
          </p>
        </div>

        {/* Dashboard mock */}
        <div className="relative rounded-2xl border border-border bg-card/60 backdrop-blur-sm overflow-hidden">
          {/* Top bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse-glow" />
              <span className="font-heading font-semibold text-foreground">Weekly Life Report</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">Sunday, Feb 15, 2026</span>
              <TrendingUp className="w-4 h-4 text-primary" />
            </div>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {[
              { label: "Active Reminders", value: "7" },
              { label: "Due This Week", value: "3" },
              { label: "Potential Savings", value: "€127" },
              { label: "Assets Tracked", value: "2" },
            ].map((stat) => (
              <div key={stat.label} className="bg-card px-6 py-4">
                <p className="text-2xl font-heading font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Report items */}
          <div className="divide-y divide-border">
            {reportItems.map((item) => (
              <div
                key={item.title}
                className="group flex items-start gap-4 px-6 py-5 hover:bg-secondary/30 transition-colors"
              >
                <div className="flex-shrink-0 mt-0.5">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${urgencyColors[item.urgency]}`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {item.type}
                    </span>
                  </div>
                  <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                  <p className="text-muted-foreground text-sm mt-0.5">{item.description}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
