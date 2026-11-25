## GTM lab: ICP account scorer

Beyond job analysis, CareerOS includes a small GTM tool at `/icp`: paste a CSV of
companies and get them scored against a weighted ICP rubric, ranked into tiers A/B/C,
with a one-sentence explanation per score and draft openers for Tier A accounts.
Scoring is rule-based and auditable; Claude only writes the explanations, and the
app falls back to rule-based text if the API is unavailable. See
[docs/ICP_SCORING.md](docs/ICP_SCORING.md).
