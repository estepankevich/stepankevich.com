---
categories:
  - "[[Real Analysis]]"
  - "[[Theorem]]"
  - "[[Topology]]"
created: 2024-11-02 13:05
updated: 2024-11-12 11:22
---
**Equivalence of Norms in $\mathbb{F}^n$**
In a finite-dimensional vector space $\mathbb{F}^n$ (where $\mathbb{F}$ is either $\mathbb{R}$ or $\mathbb{C}$), any two norms are equivalent. This means that if $\|\cdot\|_a$ and $\|\cdot\|_b$ are any two norms on $\mathbb{F}^n$, then there exist positive constants $C_1$ and $C_2$ such that for all $x \in \mathbb{F}^n$:
$$
C_1 \|x\|_a \leq \|x\|_b \leq C_2 \|x\|_a.
$$

### Implications
The equivalence of norms implies that:
- **Topology**: All norms on $\mathbb{F}^n$ induce the same topology. Therefore, convergence, continuity, and open or closed sets in $\mathbb{F}^n$ are independent of the specific norm chosen.
- **Continuity of Linear Maps**: Any linear map from $\mathbb{F}^n$ to another normed space is continuous regardless of the norm on $\mathbb{F}^n$, since the equivalence of norms provides boundedness.

### Example: Common Norms on $\mathbb{F}^n$
1. **Euclidean Norm**: $\|x\|_2 = \left(\sum_{i=1}^n |x_i|^2\right)^{1/2}$.
2. **1-Norm**: $\|x\|_1 = \sum_{i=1}^n |x_i|$.
3. **Infinity Norm**: $\|x\|_\infty = \max_{1 \leq i \leq n} |x_i|$.

For example, in $\mathbb{R}^n$, we have the relationships:
$$
\|x\|_\infty \leq \|x\|_2 \leq \sqrt{n} \|x\|_\infty
$$
and
$$
\|x\|_2 \leq \|x\|_1 \leq \sqrt{n} \|x\|_2.
$$
These inequalities confirm that the norms $\|\cdot\|_1$, $\|\cdot\|_2$, and $\|\cdot\|_\infty$ are equivalent in $\mathbb{F}^n$.

### Proof Sketch of Norm Equivalence in Finite Dimensions
For any norm $\|\cdot\|$ on $\mathbb{F}^n$, consider the unit sphere with respect to one norm, say $\| \cdot \|_a$. Since this sphere is compact in finite dimensions, $\|\cdot\|_b$ achieves a maximum and minimum value on this set. These values give the constants $C_1$ and $C_2$ that bound $\|\cdot\|_b$ in terms of $\|\cdot\|_a$, establishing equivalence.