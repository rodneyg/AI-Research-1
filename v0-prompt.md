# v0 Prompt

Build a simple interactive demo called "AI Code Review: Signal or Noise".

Use React, TypeScript, Tailwind, shadcn/ui, and lucide-react icons.

Keep the language very simple. Write like a smart 5th grader can understand it. No AI buzzwords. No marketing copy.

## Main Idea

The demo should show this question:

"If you ask AI to find code problems, will it find real bugs or just make up things to fix?"

## Page Layout

Create one clean page with:

1. A short title section
2. A code sample panel
3. A "Review Code" button
4. A list of AI review comments
5. A way to mark each comment as Signal or Noise
6. A final score panel
7. A short "What this shows" section

## Code Sample

Show this code:

```ts
type LineItem = {
  priceCents: number;
  quantity: number;
};

export function subtotalCents(items: LineItem[]) {
  return items.reduce(
    (sum, item) => sum + item.priceCents * item.quantity,
    0
  );
}
```

## Review Comments

When the user clicks "Review Code", show these comments one at a time:

1. "What if quantity is below zero?"
2. "What if priceCents is not a whole number?"
3. "What if the total gets too large?"
4. "Should this check taxes?"
5. "Should this check discounts?"

Each comment should have:

- The comment text
- A short reason
- Two buttons: "Signal" and "Noise"
- A small label after the user picks

## Context Toggle

Add a toggle called "App already checks inputs".

When this toggle is on, show that most comments are noise because the app already checks price and quantity before this function runs.

When this toggle is off, show that some comments become signal because the app may allow bad inputs.

## Final Score

After the user marks all comments, show:

- Signal count
- Noise count
- Time cost
- A simple message:
  - If noise is high: "The AI found comments, but most did not matter."
  - If signal is high: "The AI helped because the comments pointed to real risk."

## Rules For The Demo

- Do not call a real AI API.
- This is a simulation.
- Do not pretend the comments came from a live model.
- Make the UI feel like a useful lab test, not a startup landing page.
- Use clear cards, small labels, and simple buttons.
- Make it work well on mobile.
- Use neutral colors with one accent color.
- Keep all text short.

## Copy To Use

Hero:
"AI Code Review: Signal or Noise"

Subtext:
"AI can always find something to say. This demo asks which comments actually matter."

What this shows:
"AI review is useful when it gives proof. It is weak when it gives more work with no clear win."

Final takeaway:
"The goal is not more comments. The goal is better comments."
