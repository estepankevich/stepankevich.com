---
categories:
  - "[[Functional analysis]]"
  - "[[Real Analysis]]"
  - "[[Definition]]"
created: 2024-11-02 14:09
updated: 2024-11-12 11:22
---
In a [[Hilbert Space]] $H$, the **orthogonal projection** onto a closed subspace $M \subset H$ is the operation that maps any vector in $H$ to its "closest" vector in $M$. This projection has key properties and is a foundational concept in functional analysis and applications such as Fourier analysis.

### Definition
Let $H$ be a Hilbert space, and let $M \subset H$ be a closed subspace. For any vector $v \in H$, there exists a unique vector $u \in M$ such that:
$$
\|v - u\| = \inf_{w \in M} \|v - w\|.
$$
The vector $u$ is called the **orthogonal projection** of $v$ onto $M$, and it is denoted by $P_M(v)$.

### Properties
1. **Existence and Uniqueness**: For any $v \in H$, there exists a unique projection $u = P_M(v)$ in $M$ such that $v - u$ is orthogonal to every vector in $M$. That is,
   $$
   \langle v - P_M(v), w \rangle = 0 \quad \text{for all } w \in M.
   $$

2. **Idempotence**: The projection operator $P_M$ satisfies $P_M^2 = P_M$, meaning that projecting twice has the same effect as projecting once.

3. **Linearity**: $P_M$ is a [[Linear map]] on $H$.

4. **Norm Non-Increasing**: For any $v \in H$, we have $\|P_M(v)\| \leq \|v\|$.

5. **Orthogonality Decomposition**: Every vector $v \in H$ can be uniquely decomposed as:
   $$
   v = P_M(v) + (v - P_M(v)),
   $$
   where $P_M(v) \in M$ and $(v - P_M(v)) \in M^\perp$ (the orthogonal complement of $M$ in $H$).

### Geometric Intuition
The orthogonal projection $P_M(v)$ is the "shadow" of $v$ onto the subspace $M$, meaning it is the vector in $M$ that minimizes the distance to $v$. This concept is similar to projecting a point onto a line in Euclidean space, where the projection is the point on the line closest to the original point.

### Example in $L^2$ Space
In the Hilbert space $L^2([a, b])$, let $M$ be the subspace of functions spanned by a set $\{e_1, e_2, \dots, e_n\}$ of orthonormal functions. The orthogonal projection of $f \in L^2([a, b])$ onto $M$ is:
$$
P_M(f) = \sum_{i=1}^n \langle f, e_i \rangle e_i.
$$