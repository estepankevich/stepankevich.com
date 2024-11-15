---
categories:
  - "[[Functional analysis]]"
  - "[[Definition]]"
created: 2024-11-02 12:37
updated: 2024-11-11 20:01
---
A **linear functional** is a [[Linear map]] from a vector space $V$ over a field $F$ to the field $F$ itself

### Intuition
A linear functional "evaluates" vectors by assigning them scalar values, preserving the structure of vector addition and scalar multiplication. For example, in $F^n$, a linear functional can often be represented by a dot product with a fixed vector

### Properties
- The set of all linear functionals on $V$ forms the [[Dual Space]] $V^*$.
- If $V$ is finite-dimensional with basis $\{e_1, e_2, \dots, e_n\}$, any linear functional $\varphi \in V^*$ can be written as:
  $$ \varphi(x) = \sum_{i=1}^n a_i x_i $$
  where $a_i \in F$ are constants and $x_i$ are the coordinates of $x$ in this basis.

### Example
For $V = \mathbb{R}^n$, a linear functional $\varphi : \mathbb{R}^n \to \mathbb{R}$ can be given by:
$$ \varphi(x) = a_1 x_1 + a_2 x_2 + \dots + a_n x_n $$
where $(a_1, a_2, \dots, a_n)$ is a fixed vector in $\mathbb{R}^n$.