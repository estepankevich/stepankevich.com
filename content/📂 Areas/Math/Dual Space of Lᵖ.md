---
categories:
  - "[[Functional analysis]]"
  - "[[Theorem]]"
created: 2024-11-03 22:02
updated: 2024-11-03 22:09
---
The [[Dual Space]] $(L^p([a, b]))^*$ consists of all continuous [[Linear Functional|linear functionals]]  on $L^p([a, b])$, where $1 \leq p < \infty$.
  - For $1 < p < \infty$, the dual space $(L^p)^*$ is isometrically isomorphic to $L^q([a, b])$, where $\frac{1}{p} + \frac{1}{q} = 1$. Specifically, for $f \in L^q([a, b])$, the corresponding functional $T_f$ is defined by:
    $$
    T_f(g) = \int_a^b f(x) g(x) \, dx, \quad \text{for all } g \in L^p([a, b]).
    $$
  - For $p = 1$, the dual space $(L^1)^*$ is $L^\infty([a, b])$, with the same type of pairing:
    $$
    T_f(g) = \int_a^b f(x) g(x) \, dx, \quad \text{for all } g \in L^1([a, b]).
    $$

- **Properties**:
  - The functional $T_f$ is bounded and linear.
  - The norm $\|T_f\|$ in the dual space satisfies $\|T_f\| = \|f\|_q$, establishing an isometric isomorphism.

- **Intuition**:
  - The dual pairing $\langle f, g \rangle = \int f g \, dx$ connects the function spaces $L^p$ and $L^q$, where they act as 'partners' under the [[Hölder's Inequality]], which ensures that such pairings are finite.