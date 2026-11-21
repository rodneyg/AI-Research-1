#!/usr/bin/env python3
"""Fail if deployment-fixes patches are missing or not valid unified diffs."""
from __future__ import annotations

import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
FIXES = ROOT / "deployment-fixes"


def is_unified_diff(text: str) -> bool:
    lines = text.splitlines()
    has_old = any(line.startswith("--- ") for line in lines)
    has_new = any(line.startswith("+++ ") for line in lines)
    has_hunk = any(line.startswith("@@") for line in lines)
    return has_old and has_new and has_hunk


def main() -> int:
    if not FIXES.is_dir():
        print("deployment-fixes directory is missing", file=sys.stderr)
        return 1
    patches = sorted(FIXES.glob("*.patch"))
    if not patches:
        print("no .patch files under deployment-fixes", file=sys.stderr)
        return 1
    failed = 0
    for path in patches:
        text = path.read_text(errors="replace")
        if not text.strip():
            print(f"{path.name}: empty", file=sys.stderr)
            failed += 1
            continue
        if not is_unified_diff(text):
            print(f"{path.name}: not a unified diff", file=sys.stderr)
            failed += 1
            continue
        print(f"{path.name}: ok ({len(text.splitlines())} lines)")
    if failed:
        return 1
    print(f"validated {len(patches)} patch file(s)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
