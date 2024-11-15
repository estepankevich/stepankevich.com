---
categories:
  - "[[Functional analysis]]"
  - "[[Definition]]"
created: 2024-11-02 12:38
updated: 2024-11-02 12:52
---
**Dual Space**
The dual space of a vector space $V$ over a field $F$, denoted $V^*$ or $V'$, is the set of all [[Linear Functional|Linear Functionals]] from $V$ to $F$.

### Definition
If $V$ is a vector space over a field $F$, then:
$$
V^* = \{ f : V \to F \mid f \text{ is linear} \}
$$
Each element $f \in V^*$ is called a linear functional.

### Properties
1. **Vector Space Structure**: $V^*$ is itself a vector space over $F$, where addition and scalar multiplication are defined pointwise:
   $$
   (f + g)(v) = f(v) + g(v), \quad (\alpha f)(v) = \alpha \cdot f(v)
   $$
   for $f, g \in V^*$, $v \in V$, and $\alpha \in F$.

2. **Dimension**: If $V$ is finite-dimensional, $\dim(V^*) = \dim(V)$. If $\{e_1, e_2, \dots, e_n\}$ is a basis of $V$, then there exists a dual basis $\{e^1, e^2, \dots, e^n\}$ in $V^*$ such that:
   $$
   e^i(e_j) = \delta_{ij}
   $$
   where $\delta_{ij}$ is the Kronecker delta.

3. **Evaluation Map**: There exists a natural evaluation map $V \to V^{**}$ (the double dual), defined by:
   $$
   v \mapsto \hat{v}, \quad \hat{v}(f) = f(v) \quad \text{for } f \in V^*
   $$
   This map is an isomorphism if $V$ is finite-dimensional.

### Example
For $V = \mathbb{R}^n$, elements of $V^*$ can be represented as row vectors, acting on column vectors in $V$ by matrix multiplication.