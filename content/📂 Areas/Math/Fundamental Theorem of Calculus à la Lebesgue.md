---
categories:
  - "[[Measure Theory]]"
  - "[[Real Analysis]]"
  - "[[Theorem]]"
created: 2024-10-21 16:30
updated: 2024-11-12 11:22
---
**Fundamental Theorem of Calculus à la Lebesgue**

- **Statement**: Let $f \in L^1([a, b])$ be a Lebesgue integrable function, and define its cumulative distribution function $F(x)$ by:
  $$
  F(x) = \int_a^x f(t) \, dt
  $$
  for $x \in [a, b]$. Then:
  1. **Absolute Continuity**: $F(x)$ is absolutely continuous on $[a, b]$.
  2. **Differentiability**: $F'(x) = f(x)$ almost everywhere on $[a, b]$.

- **Intuition**: This result generalizes the classical [[Fundamental Theorem of Calculus]] to Lebesgue integrable functions. The derivative of the cumulative integral $F(x)$ exists almost everywhere and equals the original function $f$, even if $f$ is not continuous or pointwise defined everywhere.

- **Key Properties**:
  1. $F(x)$ is well-defined and absolutely continuous due to $f \in L^1([a, b])$.
  2. $F'(x) = f(x)$ holds almost everywhere, meaning that the points where the derivative fails to exist form a set of measure zero.

- **Proof Outline**:
  1. **Cumulative Function**: The definition of $F(x)$ as an integral of $f$ ensures that $F$ is an absolutely continuous function.
  2. **Lebesgue Differentiation Theorem**: Apply the [[Lebesgue Differentiation Theorem]] to $F'(x)$ to show that the derivative of $F$ equals $f$ almost everywhere.
