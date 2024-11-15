---
categories:
  - "[[Measure Theory]]"
  - "[[Definition]]"
created: 2024-11-02 14:56
updated: 2024-11-12 11:22
---
**Singular Measures**

- **Definition**: A measure $\mu$ on a measurable space $(X, \mathcal{A})$ is said to be *singular* with respect to another measure $\nu$ (denoted $\mu \perp \nu$) if there exists a set $A \in \mathcal{A}$ such that:
  - $\mu(A^c) = 0$ (i.e., $\mu$ is concentrated on $A$)
  - $\nu(A) = 0$ (i.e., $\nu$ is concentrated on $A^c$)

- **Intuition**: Singular measures do not share common support; one measure assigns positive measure to a set where the other measure assigns zero and vice versa.

- **Example**:
  - The *Lebesgue measure* $\lambda$ on $\mathbb{R}$ and the *Dirac measure* $\delta$ at a point $x_0 \in \mathbb{R}$ are singular, as $\lambda(\{x_0\}) = 0$ and $\delta(\mathbb{R} \setminus \{x_0\}) = 0$.

- **Properties**:
  - If $\mu \perp \nu$, then there exists a partition $X = A \cup A^c$ such that $\mu$ is supported on $A$ and $\nu$ on $A^c$.
  - Singular measures often arise in contexts where continuous and discrete measures coexist.