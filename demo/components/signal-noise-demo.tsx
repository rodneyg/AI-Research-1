"use client"

import { useMemo, useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CodePanel } from "@/components/code-panel"
import { ReviewCommentCard } from "@/components/review-comment-card"
import { ScorePanel } from "@/components/score-panel"
import { EXAMPLES, type Verdict } from "@/lib/review-data"

export function SignalNoiseDemo() {
  const [step, setStep] = useState(0)
  const [finished, setFinished] = useState(false)
  // Keyed by comment id so choices persist across steps.
  const [choices, setChoices] = useState<Record<string, Verdict>>({})

  const example = EXAMPLES[step]

  const choose = (id: string, verdict: Verdict) => {
    setChoices((prev) => ({ ...prev, [id]: verdict }))
  }

  const allMarkedThisStep = example.comments.every((c) => choices[c.id] !== undefined)
  const isLastStep = step === EXAMPLES.length - 1

  const next = () => {
    if (isLastStep) {
      setFinished(true)
    } else {
      setStep((s) => s + 1)
    }
  }

  const restart = () => {
    setStep(0)
    setChoices({})
    setFinished(false)
  }

  const { correct, total, signalTotal, noiseTotal } = useMemo(() => {
    const all = EXAMPLES.flatMap((e) => e.comments)
    return {
      total: all.length,
      correct: all.filter((c) => choices[c.id] === c.answer).length,
      signalTotal: all.filter((c) => c.answer === "signal").length,
      noiseTotal: all.filter((c) => c.answer === "noise").length,
    }
  }, [choices])

  if (finished) {
    return (
      <ScorePanel
        correct={correct}
        total={total}
        signalTotal={signalTotal}
        noiseTotal={noiseTotal}
        onRestart={restart}
      />
    )
  }

  return (
    <div className="grid gap-6">
      {/* Progress */}
      <div className="flex items-center gap-2">
        {EXAMPLES.map((e, i) => (
          <div
            key={e.id}
            className={`h-1.5 flex-1 rounded-full ${i <= step ? "bg-signal" : "bg-muted"}`}
            aria-hidden="true"
          />
        ))}
      </div>
      <p className="-mt-3 text-xs text-muted-foreground">
        Example {step + 1} of {EXAMPLES.length}
      </p>

      <CodePanel filename={example.filename} code={example.code} />

      {/* Comments */}
      <section className="grid gap-3">
        <h2 className="text-sm font-semibold text-foreground">The AI left {example.comments.length} comments</h2>
        <ul className="grid gap-3">
          {example.comments.map((comment, i) => (
            <ReviewCommentCard
              key={comment.id}
              comment={comment}
              index={i}
              choice={choices[comment.id]}
              onChoose={(verdict) => choose(comment.id, verdict)}
            />
          ))}
        </ul>
      </section>

      <Button onClick={next} disabled={!allMarkedThisStep}>
        {isLastStep ? "See result" : "Next example"}
        <ArrowRight className="size-4" aria-hidden="true" />
      </Button>
    </div>
  )
}
