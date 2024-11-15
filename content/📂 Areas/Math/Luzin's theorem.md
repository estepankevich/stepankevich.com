---
categories:
  - "[[Measure Theory]]"
  - "[[Theorem]]"
created: 2024-10-17 20:29
updated: 2024-11-12 11:22
---
Luzin's theorem relates measurable functions and [[Continuity|continuous functions]] by stating that any measurable function can be approximated by continuous functions, except on a set of arbitrarily small measure.

### Statement:

Let $f$ be a measurable function defined on a set $E \subset \mathbb{R}^n$ with finite measure, i.e., $\mu(E) < \infty$. For every $\epsilon > 0$, there exists a closed set $F_\epsilon \subseteq E$ such that:

- $\mu(E \setminus F_\epsilon) < \epsilon$.
- The restriction of $f$ to $F_\epsilon$ is continuous.

### Intuition:

Luzin's theorem shows that any measurable function behaves "almost" like a continuous function. More precisely, for any small $\epsilon$, the function can be made continuous on most of its domain, except for a small set of measure less than $\epsilon$.