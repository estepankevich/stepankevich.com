---
categories:
  - "[[Real Analysis]]"
  - "[[Functional analysis]]"
  - "[[Theorem]]"
created: 2024-11-02 13:49
updated: 2024-11-12 11:22
---
### Statement
Let $(X, \Sigma, \mu)$ be a measure space, and let $1 \leq p < \infty$. For any measurable functions $f, g : X \to \mathbb{R}$ (or $\mathbb{C}$), we have:
$$
\|f + g\|_p \leq \|f\|_p + \|g\|_p,
$$
For $p = \infty$, the inequality holds as well, with:
$$
\|f + g\|_\infty \leq \|f\|_\infty + \|g\|_\infty.
$$

### Intuition
Minkowski's inequality generalizes the triangle inequality from finite-dimensional spaces to $L^p$ spaces. It says that in an $L^p$ space, the "length" of the sum $f + g$ is at most the sum of the "lengths" of $f$ and $g$.

### Proof Outline for $1 \leq p < \infty$
1. **Raise Both Sides to the $p$-th Power**: Consider $\|f + g\|_p^p$ and expand it as:
   $$
   \|f + g\|_p^p = \int_X |f(x) + g(x)|^p \, d\mu.
   $$
2. **Apply the $p$-Norm Triangle Inequality for Sums**: Using the convexity of the function $t \mapsto t^p$ (for $p \geq 1$) and applying the inequality $|a + b|^p \leq 2^{p-1}(|a|^p + |b|^p)$, we obtain:
   $$
   \|f + g\|_p^p \leq \int_X \left(|f(x)| + |g(x)|\right)^p \, d\mu \leq \left(\|f\|_p + \|g\|_p\right)^p.
   $$
3. **Take the $p$-th Root**: Taking the $p$-th root on both sides yields:
   $$
   \|f + g\|_p \leq \|f\|_p + \|g\|_p.
   $$

### Special Cases
- **$p = 1$**: Minkowski's inequality reduces to the triangle inequality for integrals:
  $$
  \int_X |f(x) + g(x)| \, d\mu \leq \int_X |f(x)| \, d\mu + \int_X |g(x)| \, d\mu.
  $$
- **$p = 2$**: This case corresponds to the triangle inequality in $L^2$, often used in Hilbert space theory.