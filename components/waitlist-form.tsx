"use client"

import { useState } from "react"
import { ArrowRight, Check, Loader2 } from "lucide-react"

export function WaitlistForm() {
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError("")

        try {
            const res = await fetch("/api/waitlist", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            })

            if (!res.ok) throw new Error("Something went wrong")

            setSuccess(true)
            setEmail("")
        } catch (err) {
            setError("Failed to join. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    if (success) {
        return (
            <div className="w-full py-4 px-6 bg-primary/10 border border-primary/20 rounded-xl text-center">
                <div className="flex items-center justify-center gap-2 text-primary font-semibold mb-1">
                    <Check className="w-5 h-5" />
                    <span>You're on the list!</span>
                </div>
                <p className="text-sm text-muted-foreground">We'll notify you when your spot is ready.</p>
                <button
                    onClick={() => setSuccess(false)}
                    className="text-xs text-primary underline mt-2 hover:text-primary/80"
                >
                    Add another email
                </button>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="w-full relative">
            <div className="flex flex-col gap-3">
                <div className="relative">
                    <input
                        type="email"
                        required
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-14 pl-4 pr-32 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50"
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="absolute right-1.5 top-1.5 bottom-1.5 px-4 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                        {loading ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                            <>
                                Join List
                                <ArrowRight className="w-4 h-4" />
                            </>
                        )}
                    </button>
                </div>
                {error && <p className="text-destructive text-sm text-center">{error}</p>}
                <p className="text-center text-xs text-muted-foreground">
                    Only 200 spots available. 47 already claimed.
                </p>
            </div>
        </form>
    )
}
