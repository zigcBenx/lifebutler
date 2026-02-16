"use client"

import { ArrowRight } from "lucide-react"

export function FinalCtaSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse, rgba(255,0,60,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-balance mb-6">
          Stop Managing Everything.
          <br />
          <span className="text-primary">Let Your Assistant Do It.</span>
        </h2>

        <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Join 200 founding members who are building a smarter way to live. One-time payment. Lifetime access.
        </p>

        <a
          href="#pricing"
          className="group relative inline-flex items-center gap-2 px-10 py-5 bg-primary text-primary-foreground font-bold rounded-xl text-lg transition-all hover:scale-105"
        >
          <span className="absolute inset-0 rounded-xl bg-primary/50 blur-xl opacity-0 group-hover:opacity-60 transition-opacity" aria-hidden="true" />
          <span className="relative">Join Early Access</span>
          <ArrowRight className="relative w-5 h-5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>

      {/* Footer */}
      <div className="relative mt-24 pt-8 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="font-heading font-bold text-foreground">LifePilot</span>
          </div>
          <p className="text-sm text-muted-foreground">
            {"© 2026 LifePilot. All rights reserved."}
          </p>
        </div>
      </div>
    </section>
  )
}
