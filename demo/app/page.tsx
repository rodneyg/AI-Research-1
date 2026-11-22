import { FlaskConical } from "lucide-react"
import { SignalNoiseDemo } from "@/components/signal-noise-demo"

export default function Page() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-2xl px-4 py-10 sm:py-14">
      {/* Title */}
      <header className="mb-8">
        <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-border bg-muted px-2.5 py-1 text-xs text-muted-foreground">
          <FlaskConical className="size-3.5" aria-hidden="true" />
          Lab test
        </div>
        <h1 className="text-2xl font-semibold text-balance text-foreground sm:text-3xl">Signal or Noise?</h1>
        <p className="mt-2 text-sm leading-relaxed text-pretty text-muted-foreground">
          When AI reviews code, it always finds something to say. Some comments point at a real problem
          (&quot;signal&quot;). Others are just filler (&quot;noise&quot;). For each comment below, make the call.
        </p>
      </header>

      <SignalNoiseDemo />

      {/* What this shows */}
      <section className="mt-8 rounded-xl border border-border bg-muted/50 p-5">
        <p className="text-sm font-medium text-pretty text-foreground">
          The goal is not more comments. The goal is better comments.
        </p>
      </section>

      <p className="mt-6 text-center text-xs text-muted-foreground">This is a simulation. No AI was called.</p>
    </main>
  )
}
