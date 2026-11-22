import { RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

type Props = {
  correct: number
  total: number
  signalTotal: number
  noiseTotal: number
  onRestart: () => void
}

export function ScorePanel({ correct, total, signalTotal, noiseTotal, onRestart }: Props) {
  return (
    <section className="rounded-xl border border-border bg-card p-5">
      <h2 className="text-sm font-semibold text-foreground">Your result</h2>

      <p className="mt-2 text-3xl font-semibold text-foreground">
        {correct} <span className="text-lg font-normal text-muted-foreground">of {total} right</span>
      </p>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-signal-muted p-3 text-center">
          <div className="text-2xl font-semibold text-foreground">{signalTotal}</div>
          <div className="text-xs text-muted-foreground">were real Signal</div>
        </div>
        <div className="rounded-lg bg-noise-muted p-3 text-center">
          <div className="text-2xl font-semibold text-foreground">{noiseTotal}</div>
          <div className="text-xs text-muted-foreground">were just Noise</div>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-pretty text-foreground">
        The AI made {total} comments, but only {signalTotal} pointed at a real problem. The rest was noise. More
        comments is not the same as more help.
      </p>

      <Button variant="outline" className="mt-4 bg-transparent" onClick={onRestart}>
        <RotateCcw className="size-4" aria-hidden="true" />
        Start over
      </Button>
    </section>
  )
}
