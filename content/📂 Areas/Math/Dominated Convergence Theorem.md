---
categories:
  - "[[Measure Theory]]"
  - "[[Real Analysis]]"
  - "[[Theorem]]"
created: 2024-10-21 16:22
updated: 2024-11-12 11:22
---
Let $\{f_n\}$ be a sequence of measurable functions on a measure space $(X, \mathcal{M}, \mu)$ such that:
  1. $f_n(x) \to f(x)$ pointwise almost everywhere on $X$.
  2. There exists an integrable function $g \in L^1(X)$ such that $|f_n(x)| \leq g(x)$ for all $n$ and almost every $x \in X$.

  Then:
  $$
  \lim_{n \to \infty} \int_X f_n(x) \, d\mu(x) = \int_X \lim_{n \to \infty} f_n(x) \, d\mu(x) = \int_X f(x) \, d\mu(x)
  $$

**Intuition**: The theorem allows us to exchange the limit and the integral if the functions $f_n$ are uniformly dominated by an integrable function $g$. The domination ensures that the sequence doesn't "blow up" despite pointwise convergence.

**Key Conditions**:
  1. **Pointwise convergence**: $f_n \to f$ almost everywhere.
  2. **Uniform domination**: There exists an integrable bound $g$ such that $|f_n| \leq g$ for all $n$.
  
**Application in Proofs**: In the context of the [[Lebesgue Differentiation Theorem]], the dominated convergence theorem is used to justify the interchange of limit and integration when taking the limit of averages of $f$ over shrinking balls.