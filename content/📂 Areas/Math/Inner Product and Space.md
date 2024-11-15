---
categories:
  - "[[Functional analysis]]"
  - "[[Definition]]"
created: 2024-11-02 14:03
updated: 2024-11-02 14:06
aliases:
  - Pre-Hilbert space
---
**Inner Product Space**
An **inner product space** (or **pre-Hilbert space**) is a vector space $V$ over the field $\mathbb{R}$ or $\mathbb{C}$ equipped with an **inner product**. The inner product provides a way to define geometric concepts such as angles, lengths, and orthogonality within the space.

### Definition
An **inner product** on a vector space $V$ is a function $\langle \cdot, \cdot \rangle : V \times V \to \mathbb{F}$ (where $\mathbb{F}$ is $\mathbb{R}$ or $\mathbb{C}$) that satisfies the following properties for all $u, v, w \in V$ and $\alpha \in \mathbb{F}$:

1. **Linearity** (in the first argument):
   $$
   \langle \alpha u + v, w \rangle = \alpha \langle u, w \rangle + \langle v, w \rangle.
   $$
   If $\mathbb{F} = \mathbb{C}$, the inner product is **conjugate-linear** in the first argument and linear in the second.

2. **Conjugate Symmetry**:
   $$
   \langle u, v \rangle = \overline{\langle v, u \rangle}.
   $$
   If $\mathbb{F} = \mathbb{R}$, this reduces to $\langle u, v \rangle = \langle v, u \rangle$.

3. **Positive Definiteness**:
   $$
   \langle v, v \rangle \geq 0, \quad \text{and} \quad \langle v, v \rangle = 0 \iff v = 0.
   $$

### Examples
1. **Euclidean Space**: In $\mathbb{R}^n$, the standard inner product is given by:
   $$
   \langle x, y \rangle = \sum_{i=1}^n x_i y_i.
   $$
2. **Complex Inner Product Space**: In $\mathbb{C}^n$, the standard inner product is:
   $$
   \langle x, y \rangle = \sum_{i=1}^n x_i \overline{y_i}.
   $$
3. **Function Spaces**: In $L^2([a, b])$, the inner product of functions $f$ and $g$ is:
   $$
   \langle f, g \rangle = \int_a^b f(x) \overline{g(x)} \, dx.
   $$

### Properties
1. **Norm Induced by Inner Product**: The inner product induces a [[Norm]] $\|v\| = \sqrt{\langle v, v \rangle}$, which satisfies the properties of a vector norm.
2. **[[Cauchy–Schwarz Inequality]]**: For any $u, v \in V$,
   $$
   |\langle u, v \rangle| \leq \|u\| \cdot \|v\|.
   $$
3. **Triangle Inequality**: For any $u, v \in V$,
   $$
   \|u + v\| \leq \|u\| + \|v\|.
   $$
4. **Orthogonality**: Vectors $u$ and $v$ are orthogonal if $\langle u, v \rangle = 0$.
