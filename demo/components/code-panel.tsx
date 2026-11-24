import { FileCode2 } from "lucide-react"

type Props = {
  filename: string
  code: string
}

export function CodePanel({ filename, code }: Props) {
  return (
    <section className="min-w-0 rounded-xl border border-border bg-card">
      <header className="flex items-center gap-2 border-b border-border px-4 py-2.5">
        <FileCode2 className="size-4 text-muted-foreground" aria-hidden="true" />
        <span className="font-mono text-xs text-muted-foreground">{filename}</span>
      </header>
      <pre
        role="region"
        aria-label={`Code example: ${filename}`}
        tabIndex={0}
        className="overflow-x-auto px-4 py-4 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring"
      >
        <code className="font-mono text-[0.8rem] leading-relaxed text-foreground">{code}</code>
      </pre>
    </section>
  )
}
