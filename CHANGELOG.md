# Changelog

## 2026-11-22

- Improved text contrast in the GitHub Pages quiz in light and dark mode. The attribution controls are now grouped in a Site credits landmark for screen readers. ([#6](https://github.com/rodneyg/AI-Research-1/pull/6))

## 2026-11-21

- Restored the quiz at [GitHub Pages](https://rodneyg.github.io/AI-Research-1/) and added the quiz source and static build to this repository. The accessibility patches are maintained separately for the original Vercel snapshot. ([#4](https://github.com/rodneyg/AI-Research-1/pull/4))

- Added a quiz interaction patch for the original Vercel snapshot. It exposes selected answers to assistive technology, moves focus between quiz headings and results, and enlarges quiz buttons on narrow screens. Long code lines scroll within a named, keyboard-focusable region. ([#3](https://github.com/rodneyg/AI-Research-1/pull/3))

- Added a [quiz deployment patch](deployment-fixes/README.md) that improves text contrast on the quiz and results screens in light and dark mode, and groups the attribution controls in a named Site credits landmark for screen readers. Applying and building the patch requires the source snapshot listed in the instructions. ([#1](https://github.com/rodneyg/AI-Research-1/pull/1))
