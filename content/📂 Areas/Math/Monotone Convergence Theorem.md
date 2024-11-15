---
categories:
  - "[[Measure Theory]]"
  - "[[Theorem]]"
  - "[[Real Analysis]]"
created: 2024-11-03 21:43
updated: 2024-11-12 11:22
aliases:
  - MCT
---
**Statement**:  
Let $(X, \mathcal{F}, \mu)$ be a measure space, and let $\{f_n\}$ be a sequence of non-negative measurable functions such that:

1. $f_n(x) \leq f_{n+1}(x)$ for all $x \in X$ and all $n$ (i.e., $\{f_n\}$ is non-decreasing).
2. $f_n(x) \rightarrow f(x)$ pointwise as $n \rightarrow \infty$ for some measurable function $f$.

Then:

$$
\lim_{n \to \infty} \int_X f_n \, d\mu = \int_X \left(\lim_{n \to \infty} f_n\right) d\mu = \int_X f \, d\mu.
$$

**Intuition**:  
The theorem ensures that if a sequence of functions increases pointwise to a limit, then the integral of the limit function is the limit of the integrals. This is useful because it allows interchanging the order of the limit and the integral under certain conditions.

**Key Properties**:
- The theorem applies only to non-negative functions.
- The integrals $\int_X f_n \, d\mu$ are finite for each $n$, and the limit exists in $[0, \infty]$.

**Proof Sketch**:
1. Show that $\{f_n\}$ being non-decreasing implies $f_n \leq f$ for all $n$.
2. Use [[Fatou's Lemma]] to show that $\liminf_{n \to \infty} \int_X f_n \, d\mu \geq \int_X f \, d\mu$.
3. The monotonicity of the sequence implies $\int_X f \, d\mu \geq \lim_{n \to \infty} \int_X f_n \, d\mu$.
4. Combine these results to conclude equality.