---
categories:
  - "[[Measure Theory]]"
  - "[[Real Analysis]]"
  - "[[Theorem]]"
created: 2024-10-21 16:42
updated: 2024-11-12 11:22
---
- **Statement**: Let $f: \mathbb{R}^{n+m} \to [0, \infty]$ be a non-negative measurable function on the product space $\mathbb{R}^n \times \mathbb{R}^m$. Then:
  $$
  \int_{\mathbb{R}^n} \left( \int_{\mathbb{R}^m} f(x, y) \, dy \right) dx = \int_{\mathbb{R}^m} \left( \int_{\mathbb{R}^n} f(x, y) \, dx \right) dy = \int_{\mathbb{R}^{n+m}} f(x, y) \, d(x, y)
  $$

- **Intuition**: Tonelli’s theorem allows us to interchange the order of integration for non-negative functions without requiring that the function is integrable. This is a key generalization of [[Fubini’s Theorem]], applicable to non-negative functions that may not be in $L^1(\mathbb{R}^{n+m})$.

- **Key Conditions**:
  1. **Non-negativity**: The function $f(x, y) \geq 0$ must be non-negative.
  2. **Measurability**: $f$ must be measurable on the product space $\mathbb{R}^{n+m}$.

- **Applications**: Tonelli’s theorem is especially useful when dealing with non-negative functions that are not necessarily integrable. It is frequently used in probability theory, measure theory, and in the derivation of more general integration theorems like Fubini’s theorem.

- **Difference from Fubini’s Theorem**: While[[Fubini’s Theorem]] requires $f \in L^1(\mathbb{R}^{n+m})$, Tonelli’s theorem applies to any non-negative measurable function, even if $f$ is not integrable.