---
categories:
  - "[[Functional analysis]]"
  - "[[Theorem]]"
created: 2024-11-02 14:39
updated: 2024-11-02 14:43
---
**Bessel's Inequality**

Bessel's inequality is a fundamental result in the theory of [[Hilbert Space|Hilbert spaces]]. It provides an upper bound for the sum of squared coefficients in the expansion of a vector with respect to an orthonormal set. This inequality is particularly useful in[[ Fourier analysis]] and in studying convergence properties of orthogonal expansions.

### Statement
Let $H$ be a Hilbert space, and let $\{e_i\}_{i \in I}$ be an orthonormal set in $H$. For any vector $v \in H$, we have:
$$
\sum_{i \in I} |\langle v, e_i \rangle|^2 \leq \|v\|^2.
$$
The inner products $\langle v, e_i \rangle$ are called the **Fourier coefficients** of $v$ with respect to the orthonormal set $\{e_i\}$.

### Intuition
Bessel’s inequality shows that the "energy" (squared norm) of a vector $v$ in $H$ is at least as large as the sum of the squared magnitudes of its projections onto each vector in any orthonormal set. This guarantees that only a limited amount of the vector's "energy" can be captured by any subset of orthonormal components, unless the subset spans the entire space.

### Implications
1. **Convergence of Orthogonal Expansions**: If $\{e_i\}$ is a complete orthonormal [[Basis]], then Bessel's inequality becomes an equality, leading to the **[[Parseval’s Identity]]**:
   $$
   \sum_{i \in I} |\langle v, e_i \rangle|^2 = \|v\|^2.
   $$

2. **Bounding Fourier Series**: In the context of Fourier series, Bessel's inequality ensures that the sum of the squares of Fourier coefficients is bounded by the $L^2$ norm of the function.

### Proof Outline
1. **Orthogonal Projection**: Consider the finite partial sum $S_n = \sum_{i=1}^n \langle v, e_i \rangle e_i$, which is the projection of $v$ onto the span of $\{e_1, e_2, \dots, e_n\}$.
   
2. **Pythagorean Theorem**: Since $v - S_n$ is orthogonal to each $e_i$ for $i \leq n$, by the Pythagorean theorem:
   $$
   \|v\|^2 = \|S_n\|^2 + \|v - S_n\|^2.
   $$
   
3. **Take the Limit**: As $n \to \infty$, $\|S_n\|^2$ is given by $\sum_{i=1}^n |\langle v, e_i \rangle|^2$, leading to:
   $$
   \sum_{i \in I} |\langle v, e_i \rangle|^2 \leq \|v\|^2.
   $$
