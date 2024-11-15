---
categories:
  - "[[Measure Theory]]"
  - "[[Theorem]]"
created: 2024-10-17 20:26
updated: 2024-11-12 11:22
---
Egorov's theorem provides a relationship between pointwise convergence and uniform convergence for measurable functions, under the assumption of finite measure.

### Statement:
Let $\{f_n\}$ be a sequence of measurable functions defined on a measurable set $E$ with finite measure, i.e., $\mu(E) < \infty$. If $f_n \to f$ pointwise almost everywhere on $E$, then for every $\epsilon > 0$, there exists a subset $A_\epsilon \subseteq E$ such that:
- $\mu(A_\epsilon) < \epsilon$.
- $f_n \to f$ uniformly on $E \setminus A_\epsilon$.

### Intuition:
While pointwise convergence can be "slow" and irregular, Egorov's theorem guarantees that, outside of a small exceptional set of arbitrarily small measure, the convergence is uniform. This exceptional set can have arbitrarily small measure but may depend on $\epsilon$.
