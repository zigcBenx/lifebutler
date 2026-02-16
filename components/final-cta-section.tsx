"use client"

import { ArrowRight } from "lucide-react"

export function FinalCtaSection() {
  return (
    <footer className="py-12 border-t border-border bg-black/20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Logo & Copyright */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="font-heading font-bold text-foreground">LifeButler</span>
          </div>
          <span className="hidden md:inline text-muted-foreground">•</span>
          <p className="text-sm text-muted-foreground">
            © 2026 LifeButler. All rights reserved.
          </p>
        </div>

        {/* Powered By */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Powered by</span>
          <a
            href="https://openclaw.ai"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1"
          >
            OpenClaw
            <ArrowRight className="w-3 h-3 -rotate-45" />
          </a>
        </div>

      </div>
    </footer>
  )
}
