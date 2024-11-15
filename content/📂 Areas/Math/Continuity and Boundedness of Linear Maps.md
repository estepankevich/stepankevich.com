---
categories:
  - "[[Functional analysis]]"
  - "[[Theorem]]"
  - "[[Linear algebra]]"
created: 2024-10-30 16:40
updated: 2024-11-12 11:22
---
For a [[Linear map]] $T: X \to Y$ between [[Normed Vector Space|normed spaces]] $X$ and $Y$, the concepts of [[Continuity]] and boundedness are equivalent.

### Theorem
A linear map $T: X \to Y$ is continuous if and only if it is bounded.

### Intuition
For linear maps, continuity at any single point (usually the origin) implies continuity at every point due to linearity. Boundedness means there exists a constant $C \geq 0$ such that $\|T(x)\| \leq C \|x\|$ for all $x \in X$. Thus, a bounded linear map cannot "blow up" and maps bounded sets in $X$ to bounded sets in $Y$.

### Proof Outline
1. **Boundedness implies continuity**:
   - Suppose $T$ is bounded; then there exists $C \geq 0$ such that $\|T(x)\| \leq C \|x\|$ for all $x \in X$.
   - For any $\epsilon > 0$, choose $\delta = \epsilon / C$. Then, for $\|x\| < \delta$, we have:
     $$ \|T(x)\| \leq C \|x\| < C \cdot \frac{\epsilon}{C} = \epsilon, $$
     showing that $T$ is continuous at $0$, and hence everywhere.

2. **Continuity implies boundedness**:
   - Assume $T$ is continuous at $0$. Then, there exists $\delta > 0$ and $M > 0$ such that $\|x\| < \delta$ implies $\|T(x)\| < M$.
   - For any $x \neq 0$, consider $y = \delta x / \|x\|$. Since $\|y\| = \delta$, we have $\|T(y)\| \leq M$, leading to:
     $$ \|T(x)\| = \frac{\|x\|}{\delta} \|T(y)\| \leq \frac{M}{\delta} \|x\|. $$
   - Setting $C = M / \delta$, we find $\|T(x)\| \leq C \|x\|$, showing that $T$ is bounded.

