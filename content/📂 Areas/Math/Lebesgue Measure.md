---
categories:
  - "[[Measure Theory]]"
  - "[[Definition]]"
created: 2024-10-20 17:28
updated: 2024-11-12 11:22
---
The Lebesgue measure is a way to assign a "size" or "volume" to subsets of $\mathbb{R}^n$ that generalizes the intuitive concept of length, area, and volume. It extends beyond simple geometric shapes to more complex sets, making it a foundational tool in measure theory and integration.

### Key Properties:
- **Translation invariance**: 
	- If $A \subset \mathbb{R}^n$ has Lebesgue measure $m(A)$, then for any vector $v \in \mathbb{R}^n$, the translated set $A + v$ has the same measure: $m(A+v) = m(A)$
- **Countable additivity**: 
	- If $A = \bigcup_{i=1}^{\infty} A_i$ is a countable union of disjoint sets $A_i$, then $m(A) = \sum_{i=1}^{\infty} m(A_i)$
- **Null sets**: 
	- A set $A \subset \mathbb{R}^n$ has Lebesgue measure zero if for every $\epsilon > 0$, there exists a countable cover of $A$ by open intervals whose total length is less than $\epsilon$

### Formal Definition:
For an interval $I = [a_1, b_1] \times [a_2, b_2] \times \cdots \times [a_n, b_n] \subset \mathbb{R}^n$, the Lebesgue measure of $I$ is defined as:
$$
m(I) = (b_1 - a_1)(b_2 - a_2) \cdots (b_n - a_n).
$$
The Lebesgue measure of more general sets is defined through the concept of [[Outer Measure]], which approximates sets using intervals, and is extended via [[Carathéodory’s criterion]]. 

### Intuition:
Lebesgue measure generalizes the concept of length (1D), area (2D), and volume (3D) to arbitrary sets in $\mathbb{R}^n$, allowing for a rigorous treatment of integration and convergence in analysis. It overcomes limitations of the Riemann integral by handling more irregular sets and functions.