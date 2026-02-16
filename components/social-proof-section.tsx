"use client"

import { Users, Lock, Sparkles } from "lucide-react"

export function SocialProofSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-2xl border border-border bg-card/40 backdrop-blur-sm">
            <Users className="w-8 h-8 text-primary mx-auto mb-4" />
            <p className="font-heading text-2xl font-bold text-foreground mb-2">200 Spots</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Early access limited to 200 founding members. Join before it closes.
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl border border-border bg-card/40 backdrop-blur-sm">
            <Lock className="w-8 h-8 text-primary mx-auto mb-4" />
            <p className="font-heading text-2xl font-bold text-foreground mb-2">Privacy First</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your data stays yours. No selling, no sharing. Built with security at its core.
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl border border-border bg-card/40 backdrop-blur-sm">
            <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
            <p className="font-heading text-2xl font-bold text-foreground mb-2">Built for Ambition</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Designed for professionals who want control without chaos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
