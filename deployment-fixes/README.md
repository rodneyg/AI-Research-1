# Quiz accessibility patch

Apply [t10396-accessibility.patch](t10396-accessibility.patch) at the root of the source snapshot for Vercel deployment `dpl_Fq3TxDak5Rezv8dr7s6m678jSSe9`. The source is available through the Vercel Deployment Files API.

```sh
git apply --check /path/to/t10396-accessibility.patch
git apply /path/to/t10396-accessibility.patch
node .v0/inject-built-with-v0.mjs
pnpm exec next build
pnpm exec tsc --noEmit
```

The patch increases text contrast in the quiz and puts the attribution controls in a named landmark.
