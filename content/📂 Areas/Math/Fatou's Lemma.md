---
categories:
  - "[[Real Analysis]]"
  - "[[Measure Theory]]"
  - "[[Theorem]]"
created: 2024-11-03 21:45
updated: 2024-11-12 11:22
---
**Statement**:  
Let $(X, \mathcal{F}, \mu)$ be a measure space, and let $\{f_n\}$ be a sequence of non-negative measurable functions on $X$. Then:

$$
\int_X \liminf_{n \to \infty} f_n \, d\mu \leq \liminf_{n \to \infty} \int_X f_n \, d\mu.
$$

**Intuition**:  
Fatou's Lemma provides an inequality that bounds the integral of the pointwise $\liminf$ of a sequence of non-negative functions by the $\liminf$ of the integrals of those functions. This lemma is useful in analysis when dealing with the limits of sequences of functions and their integrals, ensuring that we do not overestimate the integral of the limit.

**Key Points**:
- The lemma holds for non-negative functions.
- It guarantees that taking the limit infimum under the integral sign will not yield a value larger than taking the integral of the limit infimum.