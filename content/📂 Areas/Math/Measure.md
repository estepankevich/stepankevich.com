---
categories:
  - "[[Measure Theory]]"
  - "[[Definition]]"
created: 2024-10-17 20:25
updated: 2024-11-12 11:22
---
A measure is a function that assigns a non-negative value, representing size, length, area, or volume, to subsets of a given space. Formally, a measure $\mu$ on a set $X$ is defined on a $\sigma$-algebra $\mathcal{A}$ of subsets of $X$, satisfying the following properties:
### Key Properties:
- **Non-negativity**: For any $A \in \mathcal{A}$, $\mu(A) \geq 0$.
- **Null empty set**: $\mu(\emptyset) = 0$.
- **Countable additivity (σ-additivity)**: If $\{A_i\}_{i=1}^{\infty}$ is a countable collection of disjoint sets in $\mathcal{A}$, then:
  $$
  \mu\left(\bigcup_{i=1}^{\infty} A_i\right) = \sum_{i=1}^{\infty} \mu(A_i).
  $$

### Common Examples:
- **[[Lebesgue Measure|Lebesgue measure]]**: The standard measure on $\mathbb{R}^n$, assigning the usual notion of length, area, and volume to intervals and other sets.
- **Counting measure**: A measure that assigns to each finite set the number of elements it contains.
- **Dirac measure**: Given a point $x_0 \in X$, the Dirac measure $\delta_{x_0}$ is defined by $\delta_{x_0}(A) = 1$ if $x_0 \in A$, and $\delta_{x_0}(A) = 0$ otherwise.

### Formal Definition:
A measure $\mu$ on a measurable space $(X, \mathcal{A})$ is a function $\mu: \mathcal{A} \to [0, \infty]$ such that:
1. $\mu(\emptyset) = 0$,
2. For any countable collection of disjoint sets $\{A_i\} \subset \mathcal{A}$, 
$$
\mu\left(\bigcup_{i=1}^{\infty} A_i\right) = \sum_{i=1}^{\infty} \mu(A_i).
$$