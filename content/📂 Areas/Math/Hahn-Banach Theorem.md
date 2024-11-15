---
categories:
  - "[[Functional analysis]]"
  - "[[Theorem]]"
created: 2024-11-02 12:55
updated: 2024-11-02 12:59
---
The Hahn-Banach Theorem is a fundamental result in functional analysis. It allows the extension of a bounded[[Linear Functional]] defined on a subspace of a vector space to the whole space, without increasing its norm.

### Statement 
Let $X$ be a normed vector space over $\mathbb{R}$ or $\mathbb{C}$, and let $U \subset X$ be a subspace. If $f_0 : U \to \mathbb{R}$ is a bounded linear functional with norm $\|f_0\| \leq C$, then there exists an extension $f : X \to \mathbb{R}$ with $\|f\| = \|f_0\|$.

### Key Properties and Implications
1. **Extension of Linear Functionals**: Any linear functional defined on a subspace can be extended to the whole space without increasing its norm.
2. **Separation of Convex Sets**: The Hahn-Banach Theorem implies that disjoint convex sets can often be separated by a hyperplane, an important tool in optimization and convex analysis.
3. **Dual Space Density**: In a normed space $X$, the [[Dual Space]] $X^*$ is rich in functionals, making it possible to approximate points and study [[Compactness]].

### Intuition
The theorem guarantees that "small" information (a linear functional on a subspace) can be extended consistently to "larger" contexts (the entire space) without losing control over its behavior, making it crucial for defining and studying dual spaces and continuous functionals.

### Outline of Proof (Normed Space Version)
1. **Extension Process**: Begin with $f_0$ on $U$. Gradually extend $f_0$ to larger subspaces by defining values on vectors outside $U$ while maintaining boundedness.
2. **Zorn’s Lemma**: The construction uses[[Zorn's Lemma]] to ensure the extension can be made over all of $X$ while keeping $\|f\| = \|f_0\|$.