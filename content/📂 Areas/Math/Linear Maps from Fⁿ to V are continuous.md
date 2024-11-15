---
categories:
  - "[[Functional analysis]]"
  - "[[Theorem]]"
created: 2024-11-02 13:00
updated: 2024-11-02 13:07
---
**Every Linear Map from $\mathbb{F}^n$ to $V$ is Continuous**

Let $\mathbb{F}$ denote either the field of real numbers $\mathbb{R}$ or complex numbers $\mathbb{C}$. Suppose $V$ is a normed vector space over $\mathbb{F}$. Then, every linear map $T: \mathbb{F}^n \to V$ is continuous.

### Explanation and Proof Outline

1. **Finite-Dimensional Domain**: In the vector space $\mathbb{F}^n$, all norms are equivalent (see [[Equivalence of Norms in Fⁿ ]])
2. **Linearity and Continuity**: To show continuity, we only need to show that $T$ is bounded. Since $T$ is linear, continuity at a single point (e.g., $0$) implies continuity everywhere.
3. **Boundedness of $T$**: Given the equivalence of norms in $\mathbb{F}^n$, there exists a constant $C > 0$ such that:
   $$
   \|T(x)\| \leq C \|x\|
   $$
   for all $x \in \mathbb{F}^n$. This inequality shows that $T$ is bounded with respect to any norm on $\mathbb{F}^n$ and hence is continuous.