---
categories:
  - "[[Measure Theory]]"
  - "[[Theorem]]"
created: 2024-11-02 14:54
updated: 2024-11-12 11:22
---
The Lebesgue Decomposition Theorem is a result in measure theory that provides a way to decompose any signed measure with respect to another measure into two mutually exclusive parts: one that is [[Absolute continuity|absolutely continuous]] with respect to the second measure and one that is [[Singular measures|singular]] with respect to it. This theorem is fundamental for understanding how one measure relates to another, especially when dealing with signed or complex measures.

### Statement
Let $(X, \Sigma)$ be a measurable space, and let $\nu$ be a $\sigma$-finite positive measure on $(X, \Sigma)$. Then, for any $\sigma$-finite signed measure $\mu$ on $(X, \Sigma)$, there exist two unique signed measures $\mu_{ac}$ and $\mu_s$ such that:
1. $\mu = \mu_{ac} + \mu_s$,
2. $\mu_{ac}$ is **absolutely continuous** with respect to $\nu$ (written $\mu_{ac} \ll \nu$),
3. $\mu_s$ is **singular** with respect to $\nu$ (written $\mu_s \perp \nu$).

This decomposition $\mu = \mu_{ac} + \mu_s$ is called the **Lebesgue decomposition** of $\mu$ with respect to $\nu$.

### Definitions
1. **Absolutely Continuous Measure**: A measure $\mu$ is absolutely continuous with respect to $\nu$ (denoted $\mu \ll \nu$) if, for every measurable set $A$, $\nu(A) = 0$ implies $\mu(A) = 0$.
2. **Singular Measure**: A measure $\mu$ is singular with respect to $\nu$ (denoted $\mu \perp \nu$) if there exists a measurable set $S$ such that $\mu$ is concentrated on $S$ and $\nu$ is concentrated on $S^c$, i.e., $\mu(S^c) = 0$ and $\nu(S) = 0$.

### Intuition
The Lebesgue Decomposition Theorem splits the measure $\mu$ into two parts relative to $\nu$:
- **The absolutely continuous part** $\mu_{ac}$ corresponds to the component of $\mu$ that "follows" $\nu$ in the sense that if $\nu$ has no "weight" on a set, then neither does $\mu_{ac}$.
- **The singular part** $\mu_s$ corresponds to the component of $\mu$ that is entirely "orthogonal" to $\nu$, meaning $\mu_s$ is concentrated on a set that $\nu$ "ignores" (i.e., a set of $\nu$-measure zero).

### Example
Suppose $\nu$ is the Lebesgue measure on $\mathbb{R}$, and let $\mu$ be a measure that assigns length (Lebesgue measure) to intervals plus an additional Dirac measure at a point $x_0 \in \mathbb{R}$. Then:
- The absolutely continuous part $\mu_{ac}$ would be the restriction of $\mu$ to intervals (i.e., Lebesgue measure),
- The singular part $\mu_s$ would be the Dirac measure at $x_0$, which is concentrated at a single point and therefore does not overlap with the Lebesgue measure.

### Applications
1. **Radon-Nikodym Theorem**: The absolutely continuous part $\mu_{ac}$ is significant in the Radon-Nikodym Theorem, which states that there exists a density function $f \in L^1(\nu)$ such that $\mu_{ac}(A) = \int_A f \, d\nu$ for all measurable $A$.
2. **Probability Theory**: The decomposition helps in distinguishing between continuous and discrete parts of probability measures.
3. **Signal Processing and Statistics**: The theorem aids in separating noise (often singular) from a signal (typically absolutely continuous) with respect to a reference measure.

### Proof Outline
1. **Hahn Decomposition**: Use the Hahn Decomposition Theorem to create sets where $\mu$ is positive and negative relative to $\nu$.
2. **Define Components**: Define $\mu_{ac}$ by using the Radon-Nikodym derivative with respect to $\nu$ (ensuring $\mu_{ac} \ll \nu$) and let $\mu_s = \mu - \mu_{ac}$.
3. **Uniqueness**: The uniqueness of $\mu_{ac}$ and $\mu_s$ follows from the properties of absolute continuity and singularity, as they describe mutually exclusive behaviors with respect to $\nu$.