---
categories:
  - "[[Linear algebra]]"
  - "[[Definition]]"
created: 2024-10-30 16:44
updated: 2024-11-12 11:22
---
A linear map (or linear transformation) is a function $T: V \to W$ between two vector spaces $V$ and $W$ over the same field (typically $\mathbb{R}$ or $\mathbb{C}$) that preserves vector addition and scalar multiplication.

### Definition
A function $T: V \to W$ is linear if, for all $x, y \in V$ and scalars $\alpha \in \mathbb{R}$ (or $\mathbb{C}$):
1. **Additivity**: $T(x + y) = T(x) + T(y)$,
2. **Homogeneity**: $T(\alpha x) = \alpha T(x)$.

### Key Properties
- **Zero Map**: $T(0) = 0$, since $T(0) = T(0 \cdot x) = 0 \cdot T(x) = 0$.
- **Linearity of Composition**: If $S: W \to Z$ is also linear, then $S \circ T: V \to Z$ is linear.
- **Matrix Representation**: If $V$ and $W$ are finite-dimensional, $T$ can be represented as a [[Matrix]] that describes its action in terms of basis vectors.

### Examples
1. **Scaling**: $T(x) = \alpha x$ for a fixed scalar $\alpha$ is linear.
2. **Differentiation**: $D(f) = f'$ is a linear map from the space of differentiable functions to itself.