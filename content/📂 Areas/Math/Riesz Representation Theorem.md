---
categories:
  - "[[Functional analysis]]"
  - "[[Theorem]]"
created: 2024-11-02 14:35
updated: 2024-11-02 14:38
---
The Riesz Representation Theorem is a foundational result in functional analysis, particularly in [[Hilbert Space]] theory. It establishes a correspondence between [[Linear Functional|linear functionals]] and elements of a Hilbert space, providing a way to "represent" each continuous linear functional as an inner product with a unique vector in the space.

### Statement
Let $H$ be a Hilbert space over $\mathbb{R}$ or $\mathbb{C}$. For every continuous linear functional $f : H \to \mathbb{F}$ (where $\mathbb{F}$ is $\mathbb{R}$ or $\mathbb{C}$), there exists a unique vector $u \in H$ such that for all $v \in H$,
$$
f(v) = \langle v, u \rangle.
$$
The vector $u$ is uniquely determined and satisfies $\|f\| = \|u\|$, where $\|f\|$ denotes the operator norm of the functional $f$.

### Intuition
The theorem tells us that every continuous linear functional on a Hilbert space $H$ can be represented as taking the inner product with a fixed vector in $H$. In other words, functionals in $H^*$ (the dual space of $H$) can be identified with elements of $H$ itself, allowing us to treat $H$ and its dual space $H^*$ as isometrically isomorphic.

### Properties and Implications
1. **Isomorphism Between $H$ and $H^*$**: The map $\Phi : H \to H^*$ given by $\Phi(u)(v) = \langle v, u \rangle$ is an isometric isomorphism. Thus, $H$ and $H^*$ are essentially the same in the sense of normed spaces.
   
2. **Norm Preservation**: The norm of the functional $f$ equals the norm of its corresponding vector $u$, i.e., $\|f\| = \|u\|$.

3. **Self-Duality**: In a Hilbert space, this theorem allows us to "represent" every continuous linear functional as an element of the space itself, unlike in general Banach spaces.

### Applications
- **Solution to Optimization Problems**: This theorem provides the foundation for various optimization techniques, such as finding the best approximation in least squares problems.
- **Weak Convergence**: It allows for an inner product-based characterization of weak convergence in Hilbert spaces.
- **Spectral Theory**: The theorem is instrumental in developing the spectral theory of operators on Hilbert spaces by connecting functionals and vectors.

### Proof Sketch
1. **Define Candidate Vector**: For a given $f \in H^*$, if $f = 0$, let $u = 0$. Otherwise, use the Hilbert space structure to find a vector $u$ such that $f(v) = \langle v, u \rangle$ for all $v \in H$.
   
2. **Uniqueness and Norm Preservation**: Uniqueness of $u$ follows from the properties of inner products, and norm preservation is verified using the[[Cauchy–Schwarz Inequality]] and properties of $f$.

The Riesz Representation Theorem elegantly bridges the structure of a Hilbert space and its dual, making it one of the most powerful tools in functional analysis.