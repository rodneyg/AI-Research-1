import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { ReviewComment, Verdict } from "@/lib/review-data"
import { VERDICT_LABEL } from "@/lib/review-data"

type Props = {
  comment: ReviewComment
  index: number
  choice: Verdict | undefined
  onChoose: (verdict: Verdict) => void
}

export function ReviewCommentCard({ comment, index, choice, onChoose }: Props) {
  const answered = choice !== undefined
  const correct = choice === comment.answer

  return (
    <li className="rounded-xl border border-border bg-card p-4">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-md bg-muted font-mono text-xs text-muted-foreground">
          {index + 1}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-pretty text-foreground">{comment.text}</p>

          <p className="mt-2 text-xs text-muted-foreground">Real signal, or just noise?</p>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <Button
              size="sm"
              variant={choice === "signal" ? "default" : "outline"}
              onClick={() => onChoose("signal")}
              className={cn(choice === "signal" && "bg-signal text-signal-foreground [a]:hover:bg-signal/80")}
            >
              Signal
            </Button>
            <Button
              size="sm"
              variant={choice === "noise" ? "default" : "outline"}
              onClick={() => onChoose("noise")}
              className={cn(choice === "noise" && "bg-noise text-noise-foreground [a]:hover:bg-noise/80")}
            >
              Noise
            </Button>
          </div>

          {answered && (
            <div
              className={cn(
                "mt-3 flex items-start gap-2 rounded-lg px-3 py-2",
                comment.answer === "signal" ? "bg-signal-muted" : "bg-noise-muted",
              )}
            >
              {comment.answer === "signal" ? (
                <Check className="mt-0.5 size-4 shrink-0 text-foreground" aria-hidden="true" />
              ) : (
                <X className="mt-0.5 size-4 shrink-0 text-foreground" aria-hidden="true" />
              )}
              <p className="text-xs leading-relaxed text-foreground">
                <span className="font-semibold">
                  {correct ? "Correct — " : "Answer: "}
                  {VERDICT_LABEL[comment.answer]}.
                </span>{" "}
                {comment.why}
              </p>
            </div>
          )}
        </div>
      </div>
    </li>
  )
}
