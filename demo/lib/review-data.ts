export type Verdict = "signal" | "noise"

export type ReviewComment = {
  id: string
  text: string
  // The correct call for this comment.
  answer: Verdict
  // One short line explaining why.
  why: string
}

export type Example = {
  id: string
  filename: string
  code: string
  comments: ReviewComment[]
}

export const EXAMPLES: Example[] = [
  {
    id: "cart",
    filename: "cart.ts",
    code: `function subtotal(items) {
  return items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );
}`,
    comments: [
      {
        id: "cart-negative",
        text: "What if qty is negative? The total would be wrong.",
        answer: "signal",
        why: "A negative quantity breaks the math. This is a real bug.",
      },
      {
        id: "cart-rename",
        text: "Rename 'sum' to 'accumulator' for clarity.",
        answer: "noise",
        why: "Just a style opinion. It does not change how the code works.",
      },
      {
        id: "cart-tax",
        text: "Should this also add tax?",
        answer: "noise",
        why: "Tax is a separate step. This function only adds up items.",
      },
    ],
  },
  {
    id: "auth",
    filename: "login.ts",
    code: `function checkLogin(input, saved) {
  if (input === saved) {
    return true;
  }
  return false;
}`,
    comments: [
      {
        id: "auth-plain",
        text: "Passwords are compared as plain text. They should be hashed.",
        answer: "signal",
        why: "Storing and comparing raw passwords is a real security hole.",
      },
      {
        id: "auth-return",
        text: "You can return the comparison directly instead of if/else.",
        answer: "noise",
        why: "A tidy shortcut, but the code already works fine.",
      },
      {
        id: "auth-comment",
        text: "Add a comment above this function.",
        answer: "noise",
        why: "Nice to have, but it does not fix a real problem.",
      },
    ],
  },
  {
    id: "fetch",
    filename: "api.ts",
    code: `async function getUsers() {
  const res = await fetch("/api/users");
  const data = await res.json();
  return data;
}`,
    comments: [
      {
        id: "fetch-error",
        text: "There is no handling if the request fails.",
        answer: "signal",
        why: "A failed request would crash here. This is worth fixing.",
      },
      {
        id: "fetch-name",
        text: "The name 'data' is too generic.",
        answer: "noise",
        why: "A naming preference. It does not affect behavior.",
      },
      {
        id: "fetch-async",
        text: "Consider adding a loading state in the UI.",
        answer: "noise",
        why: "Out of scope. This function only fetches data.",
      },
    ],
  },
]

export const VERDICT_LABEL: Record<Verdict, string> = {
  signal: "Signal",
  noise: "Noise",
}
