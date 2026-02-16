"use client"

import { HeroChat } from "./hero-chat"
import { TrendingUp, Calendar, X, Stethoscope, Car, ArrowUpRight, Shield, Activity, Wallet } from "lucide-react"

const reportItems = [
    {
        icon: Calendar,
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        title: "Car Insurance",
        status: "Renewed",
        time: "2h ago",
    },
    {
        icon: Wallet,
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
        title: "Money Saved",
        status: "+€127.50",
        time: "4h ago",
    },
    {
        icon: Activity,
        color: "text-rose-400",
        bg: "bg-rose-500/10",
        title: "Health Check",
        status: "Scheduled",
        time: "Yesterday",
    },
]

export function HeroVisualization() {
    return (
        <div className="relative w-full max-w-5xl mx-auto h-[500px] md:h-[600px] perspective-1000">

            {/* Main Card: Weekly Report */}
            <div className="absolute top-0 left-0 right-0 md:right-1/4 bottom-10 bg-card/60 backdrop-blur-md border border-border rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up z-10 origin-bottom-left" style={{ transform: "rotateY(5deg) rotateX(2deg)" }}>

                {/* Header */}
                <div className="px-6 py-4 border-b border-border flex items-center justify-between bg-black/20">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/20">
                            <Shield className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-heading font-semibold text-foreground">Weekly Life Report</h3>
                            <p className="text-xs text-muted-foreground">Your personal summary</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-xs font-medium text-muted-foreground">All Systems Normal</span>
                    </div>
                </div>

                {/* Grid Stats */}
                <div className="grid grid-cols-3 divide-x divide-border border-b border-border bg-black/10">
                    <div className="p-6 text-center">
                        <p className="text-2xl font-bold text-foreground">94<span className="text-sm text-muted-foreground">%</span></p>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Health</p>
                    </div>
                    <div className="p-6 text-center">
                        <p className="text-2xl font-bold text-foreground">12<span className="text-sm text-muted-foreground">hrs</span></p>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Saved</p>
                    </div>
                    <div className="p-6 text-center">
                        <p className="text-2xl font-bold text-foreground">0</p>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Missed</p>
                    </div>
                </div>

                {/* List Items */}
                <div className="p-4 space-y-2">
                    {reportItems.map((item, i) => (
                        <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.bg} ${item.color}`}>
                                <item.icon className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                                <p className="font-medium text-sm text-foreground">{item.title}</p>
                                <p className="text-xs text-muted-foreground">{item.time}</p>
                            </div>
                            <div className="text-right">
                                <p className="font-medium text-sm text-foreground">{item.status}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Faux Graph/Visual at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
            </div>

            {/* Floating Chat Interface */}
            <div className="absolute -bottom-4 md:bottom-12 right-4 md:right-0 w-[90%] md:w-[380px] h-[400px] shadow-2xl z-20 animate-fade-in-up [animation-delay:400ms]">
                <HeroChat />
            </div>

        </div>
    )
}
