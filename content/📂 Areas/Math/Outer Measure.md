---
categories:
  - "[[Measure Theory]]"
  - "[[Definition]]"
created: 2024-10-17 19:41
updated: 2024-11-12 11:22
properties: "[[Nonadditivity of Outer Measure for Disjoint Subsets]]"
---
### Definition:
The **outer measure** is a generalization of the concept of length or volume to possibly more complex sets. Given a set $A \subseteq \mathbb{R}^n$, the outer measure of $A$, denoted by $m^*(A)$, is defined as:

$$
m^*(A) = \inf \left\{ \sum_{i=1}^\infty l(I_i) \mid A \subseteq \bigcup_{i=1}^\infty I_i, \, I_i \text{ are intervals} \right\}
$$

where $l(I_i)$ denotes the length of the interval $I_i$, and the union $\bigcup_{i=1}^\infty I_i$ is a countable covering of $A$ by intervals.

### Properties:
1. **Monotonicity**: If $A \subseteq B$, then $m^*(A) \leq m^*(B)$.
2. **Countable Subadditivity**: For any countable collection of sets $A_i$,
   $$
   m^*\left( \bigcup_{i=1}^\infty A_i \right) \leq \sum_{i=1}^\infty m^*(A_i)
   $$
3. **Translation Invariance**: If $T_c(A) = A + c$ for some constant vector $c$, then $m^*(T_c(A)) = m^*(A)$.

### Intuition:
Outer measure tries to assign a "smallest possible" value to a set by covering it with intervals and summing up their lengths. It serves as a foundation for defining more rigorous measures, such as the Lebesgue measure.