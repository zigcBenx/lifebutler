"use client"

import { useEffect, useState, useRef } from "react"
import { Send } from "lucide-react"

interface ChatMessage {
  role: "user" | "assistant"
  text: string
}

const chatScript: ChatMessage[] = [
  { role: "user", text: "When does my car insurance expire?" },
  {
    role: "assistant",
    text: "Your BMW 320i policy with Allianz expires on March 2nd — 14 days from now. I already drafted a renewal email to your broker. Want me to send it?",
  },
  { role: "user", text: "Yes, send it. Also, any doctor appointments I'm late on?" },
  {
    role: "assistant",
    text: "Your last dentist visit was 11 months ago. Dr. Muller has openings next Thursday at 2PM and Friday at 10AM. Should I book one?",
  },
  { role: "user", text: "Book Thursday. What about unused subscriptions?" },
  {
    role: "assistant",
    text: "You haven't opened Adobe Creative Cloud in 47 days — that's \u20AC54/month. I can draft a cancellation email right now. Also, your Spotify family plan has 2 unused slots.",
  },
]

export function HeroChat() {
  const [visibleMessages, setVisibleMessages] = useState<
    { role: "user" | "assistant"; text: string; isTyping?: boolean }[]
  >([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (currentIndex >= chatScript.length) {
      // Loop: restart after a pause
      const loopTimer = setTimeout(() => {
        setVisibleMessages([])
        setCurrentIndex(0)
      }, 6000)
      return () => clearTimeout(loopTimer)
    }

    const message = chatScript[currentIndex]
    const isUser = message.role === "user"

    // Delay before showing the next message
    const delay = isUser ? 1800 : 800

    const timer = setTimeout(() => {
      if (!isUser) {
        // Show typing indicator first
        setVisibleMessages((prev) => [
          ...prev,
          { role: "assistant", text: "", isTyping: true },
        ])

        // Then replace with the actual message after "typing"
        const typingDuration = Math.min(message.text.length * 15, 2200)
        const typeTimer = setTimeout(() => {
          setVisibleMessages((prev) => {
            const updated = [...prev]
            updated[updated.length - 1] = { role: "assistant", text: message.text }
            return updated
          })
          setCurrentIndex((i) => i + 1)
        }, typingDuration)

        return () => clearTimeout(typeTimer)
      } else {
        setVisibleMessages((prev) => [...prev, { role: "user", text: message.text }])
        setCurrentIndex((i) => i + 1)
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [currentIndex])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [visibleMessages])

  return (
    <div className="flex flex-col h-full rounded-2xl border border-border bg-card/60 backdrop-blur-sm overflow-hidden">
      {/* Chat header */}
      <div className="flex items-center gap-3 px-5 py-3.5 border-b border-border">
        <div className="relative">
          <div className="w-2.5 h-2.5 rounded-full bg-primary" />
          <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-primary animate-ping opacity-40" />
        </div>
        <span className="font-heading text-sm font-semibold text-foreground">Ask LifeButler</span>
        <span className="ml-auto text-[10px] text-muted-foreground tracking-wider uppercase">Live</span>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 min-h-0 scrollbar-hide">
        {visibleMessages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-fade-in-up`}
            style={{ animationDelay: "0ms" }}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${msg.role === "user"
                  ? "bg-primary text-primary-foreground rounded-br-md"
                  : "bg-secondary text-secondary-foreground rounded-bl-md"
                }`}
            >
              {msg.isTyping ? (
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:0ms]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:150ms]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:300ms]" />
                </span>
              ) : (
                msg.text
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Input area */}
      <div className="px-4 py-3 border-t border-border">
        <div className="flex items-center gap-2 rounded-xl bg-secondary/60 px-4 py-2.5">
          <span className="flex-1 text-sm text-muted-foreground">Ask about your life...</span>
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/20">
            <Send className="w-4 h-4 text-primary" />
          </div>
        </div>
      </div>
    </div>
  )
}
