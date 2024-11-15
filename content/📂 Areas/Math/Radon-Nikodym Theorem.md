---
categories:
  - "[[Measure Theory]]"
  - "[[Theorem]]"
created: 2024-11-03 21:17
updated: 2024-11-12 11:22
---
**Statement**:  
Let $(X, \mathcal{F}, \mu)$ be a [[Sigma-Finite Measure]] space and $\nu$ be another $\sigma$-finite measure on the same measurable space such that $\nu \ll \mu$ (i.e., $\nu$ is [[Absolute continuity|absolutely continuous]] with respect to $\mu$). Then there exists a measurable function $f: X \rightarrow [0, \infty)$, called the Radon-Nikodym derivative, such that:

$$
\nu(A) = \int_A f \, d\mu \quad \text{for all } A \in \mathcal{F}.
$$

The function $f$ is denoted by $\frac{d\nu}{d\mu}$ and satisfies:

$$
\frac{d\nu}{d\mu} \in L^1(\mu) \quad \text{and} \quad \nu(A) = \int_A \frac{d\nu}{d\mu} \, d\mu.
$$

**Intuition**:  
The Radon-Nikodym theorem allows us to express the measure $\nu$ as being "scaled" by a density function $f$ with respect to the reference measure $\mu$. This is analogous to expressing one probability distribution in terms of another via a probability density function.

**Key Properties**:
- The Radon-Nikodym derivative $\frac{d\nu}{d\mu}$ is unique $\mu$-almost everywhere.
- If $\mu$ is a probability measure, $f$ can be interpreted as the conditional density of $\nu$ relative to $\mu$.

**Proof Outline**:
1. Construct a sequence of sets $\{A_n\}$ with $\mu(A_n) < \infty$ that cover $X$.
2. Apply the [[Hahn Decomposition Theorem]] to decompose $\nu - \lambda f \mu$ into positive and negative parts, where $f$ is chosen iteratively.
3. Prove that this construction results in a valid Radon-Nikodym derivative using monotone convergence arguments.