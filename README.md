# AI Code Review: Signal or Noise

## Question

If you ask AI to find problems in code, will it find real bugs or just make up things to fix?

## Why This Matters

AI code review can save time. It can also waste time.

One tool may say the code is fine. Another tool may find more issues. Then the real question is:

Did it find a real problem, or did it find something because we asked it to look?

## Try the quiz

In the [Signal or Noise quiz](https://rodneyg.github.io/AI-Research-1/), classify three example review comments on each of three code snippets. The quiz uses preset comments and answers, gives feedback after each choice, and shows a score at the end.

Here is a separate example of the kind of code a reviewer might see:

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

An AI reviewer might leave comments like these:

- What if quantity is below zero?
- What if priceCents is not a whole number?
- What if the total gets too large?
- Should this check taxes?
- Should this check discounts?

Those comments are not always wrong. They need context.

If the app already checks those rules somewhere else, the comments are noise.

If the app does not check them, the comments are signal.

## Signal

A useful AI review comment:

- Shows a failing test
- Shows a real way the app can break
- Points to a rule the code breaks
- Protects users or data

## Noise

A weak AI review comment:

- Says "consider" with no clear reason
- Asks for a check that already exists
- Is just a style opinion
- Only appears after asking AI to find more

## What The Research Says

- A study of 16 GitHub review actions analyzed four in depth. It classified 0.9% to 19.2% of AI comments, depending on the action, and 60.0% of human comments as valid and fully addressed (Table IX).
- In one evaluation, up to 24.8% of correct code samples received suggestions that broke the code.
- Atlassian reported a 38.7% code resolution rate for its RovoDev reviewer and 44.45% for human comments in its final measurement period.
- In a Tencent study, one method combining LLMs with static analysis filtered out 94% to 98% of false alarms, depending on the model.

## Takeaway

The value of AI code review is not how many comments it gives.

The value is how many comments survive proof.

AI should be allowed to say:

> No real issue found.

## Quiz source and static build

The quiz source in `demo/` was recovered from the original Vercel deployment snapshot. The Pages workflow uses Node.js 24 and pnpm 10.11.0. With those installed, run these commands from the repository root.

```sh
cd demo &&
pnpm install --frozen-lockfile &&
node .v0/inject-built-with-v0.mjs &&
pnpm build &&
pnpm exec tsc --noEmit
```

The build writes the static site to `demo/out/`. The GitHub Pages workflow sets `NEXT_PUBLIC_BASE_PATH` from the Pages configuration and publishes that directory.

## Vercel deployment patches

The GitHub Pages build uses the checked-in quiz source. It includes text contrast fixes, a Site credits landmark, and keyboard support for moving between examples and results and scrolling long code lines. The separate patch files target the original Vercel snapshot.

See the [deployment patch instructions](deployment-fixes/README.md) for the required snapshot, patch order, and build commands.

See the [changelog](CHANGELOG.md) for changes included in this repository.

## Sources

- [Does AI Code Review Lead to Code Changes?](https://arxiv.org/html/2508.18771v2)
- [Evaluating Large Language Models for Code Review](https://arxiv.org/html/2505.20206v1)
- [Bias in the Loop: Auditing LLM-as-a-Judge for Software Engineering](https://arxiv.org/html/2604.16790v1)
- [RovoDev Code Reviewer at Atlassian](https://arxiv.org/html/2601.01129v2)
- [Reducing False Positives in Static Bug Detection with LLMs](https://arxiv.org/html/2601.18844v1)
- [Human-AI Synergy in Agentic Code Review](https://arxiv.org/html/2603.15911v1)
