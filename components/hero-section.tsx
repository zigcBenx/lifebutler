"use client"

import { ArrowRight, Shield, Sparkles } from "lucide-react"
import { ParticleBackground } from "./particle-background"
import { HeroVisualization } from "./hero-visualization"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10 sm:pt-32 sm:pb-20">
      <ParticleBackground />

      {/* Scan line effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute inset-x-0 h-px bg-primary/10 animate-scan" />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,0,60,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,60,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(circle, rgba(255,0,60,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Column: Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1 max-w-2xl mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium tracking-wide">Early Access Now Open</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-balance mb-6 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              Your Life. <br />
              <span className="text-primary">On Autopilot.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              Chat with your personal AI assistant to handle insurance, health, and finances. We track the boring stuff so you don't have to.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
              <a
                href="#pricing"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg text-lg transition-all hover:scale-105 shadow-[0_0_20px_-5px_rgba(255,0,60,0.5)] hover:shadow-[0_0_30px_-5px_rgba(255,0,60,0.7)]"
              >
                <span className="absolute inset-0 rounded-lg bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                <span className="relative flex items-center gap-2">
                  Start Free
                  <Sparkles className="w-4 h-4" />
                </span>
                <ArrowRight className="relative w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-medium rounded-lg text-lg hover:bg-secondary transition-colors"
              >
                Features
              </a>
            </div>

            <p className="mt-6 text-sm text-muted-foreground animate-fade-in-up" style={{ animationDelay: "500ms" }}>
              Limited to the first 200 founding members
            </p>
          </div>

          {/* Right Column: Visualization */}
          <div className="order-1 lg:order-2 animate-fade-in-up" style={{ animationDelay: "500ms" }}>
            <HeroVisualization />
          </div>

        </div>
      </div>
    </section>
  )
}
