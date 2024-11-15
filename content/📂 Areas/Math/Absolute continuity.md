---
categories:
  - "[[Measure Theory]]"
  - "[[Definition]]"
created: 2024-11-02 14:56
updated: 2024-11-12 11:22
---
**Absolute Continuity**

In measure theory, absolute continuity describes a specific relationship between two measures. Intuitively, a measure $\mu$ is absolutely continuous with respect to another measure $\nu$ if $\mu$ "follows" $\nu$ in the sense that $\mu$ assigns no "weight" to any set where $\nu$ has zero measure.

### Definition
Let $(X, \Sigma)$ be a measurable space, and let $\mu$ and $\nu$ be two measures on $(X, \Sigma)$. The measure $\mu$ is said to be **absolutely continuous** with respect to $\nu$ (written $\mu \ll \nu$) if:
$$
\text{for any measurable set } A \subset X, \quad \nu(A) = 0 \Rightarrow \mu(A) = 0.
$$
In other words, $\mu$ "inherits" the null sets of $\nu$.

### Examples
1. **[[Lebesgue Measure]] and Weighted Measures**: Let $\nu$ be the Lebesgue measure on $\mathbb{R}$, and let $\mu$ be defined by $\mu(A) = \int_A f(x) \, dx$ for a non-negative function $f \in L^1(\mathbb{R})$. Then $\mu \ll \nu$, because any set of Lebesgue measure zero will also have zero measure under $\mu$.
   
2. **Discrete vs. Continuous Measures**: If $\nu$ is the Lebesgue measure and $\mu$ is the Dirac delta measure at some point $x_0 \in \mathbb{R}$ (defined by $\mu(A) = 1$ if $x_0 \in A$ and $\mu(A) = 0$ otherwise), then $\mu$ is **not** absolutely continuous with respect to $\nu$, as $\mu$ assigns weight to a set (the single point $\{x_0\}$) that has Lebesgue measure zero.

### Properties
1. **Preservation of Null Sets**: Absolute continuity implies that $\mu$ assigns zero measure to every $\nu$-null set, but not necessarily vice versa.
2. **[[Total Variation]]**: If $\mu$ is absolutely continuous with respect to $\nu$, then the total variation of $\mu$ is also absolutely continuous with respect to $\nu$.
3. **Implication for Functions**: In the context of real analysis, if a function $F$ is absolutely continuous on an interval $[a, b]$, then it has a derivative almost everywhere, and $F$ can be represented as an integral of its derivative.