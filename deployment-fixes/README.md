# Quiz accessibility patches

The GitHub Pages workflow builds the checked-in `demo/` source without applying these patches. See the [static build instructions](../README.md#quiz-source-and-static-build) for that workflow.

Apply both patches in the order shown at the root of the source snapshot for Vercel deployment `dpl_Fq3TxDak5Rezv8dr7s6m678jSSe9`. The source is available through the Vercel Deployment Files API.

```sh
git apply --check /path/to/t10396-accessibility.patch &&
git apply /path/to/t10396-accessibility.patch &&
git apply --check /path/to/t11108-quiz-interaction.patch &&
git apply /path/to/t11108-quiz-interaction.patch &&
node .v0/inject-built-with-v0.mjs &&
pnpm exec next build &&
pnpm exec tsc --noEmit
```

The [first patch](t10396-accessibility.patch) increases text contrast and puts the attribution controls in a named landmark. The [second patch](t11108-quiz-interaction.patch) exposes the selected answer to assistive technology, moves keyboard focus to the current heading after advancing, scoring, or restarting, and increases the size of the main quiz buttons on narrow screens. Long lines scroll inside a named, keyboard-focusable code region.

If an apply check fails, confirm the source snapshot and which patches have already been applied before trying again.
