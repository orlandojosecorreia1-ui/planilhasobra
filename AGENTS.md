<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- The sales page (`src/routes/index.tsx`) is styled only through the Notion token
  set in `src/styles.css` (paper canvas `#f6f5f4`, single blue primary `#0075de`,
  white hairline cards, accent cards marigold/coral/sky/midnight, no gradients,
  no card shadows) so rebranding stays a token edit — never hardcode colors in
  `src/components/sales/*`.
- Fonts are self-hosted via `@fontsource-variable/inter` and
  `@fontsource/source-serif-4` imported in `src/styles.css` (Tailwind v4 /
  Lightning CSS cannot `@import` remote font URLs).
- Sales copy, prices, plan contents, buyer list, WhatsApp chats and the two
  checkout links (`pay.vanqir.com`) live in `src/components/sales/data.ts` only,
  so content edits never touch layout code.
