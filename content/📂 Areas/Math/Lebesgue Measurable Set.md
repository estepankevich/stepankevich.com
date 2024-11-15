---
categories:
  - "[[Measure Theory]]"
  - "[[Definition]]"
created: 2024-10-20 17:46
updated: 2024-11-12 11:36
---
**Lebesgue Measurable Set**

A set $E \subset \mathbb{R}^n$ is called Lebesgue measurable if it satisfies one of the following **equivalent** definitions:

### 1. **[[Carathéodory’s criterion]]**:

### 2. **Approximability by Open Sets**:
A set $E \subset \mathbb{R}^n$ is Lebesgue measurable if for every $\epsilon > 0$, there exists an open set $O \supset E$ such that:
$$
m^*(O \setminus E) < \epsilon.
$$
This means that $E$ can be approximated from above by [[Open set|open sets]].

### 3. **Approximability by $F_\sigma$ Sets**:
A set $E \subset \mathbb{R}^n$ is Lebesgue measurable if there exists an $F_\sigma$ set $F \supset E$ (a countable union of closed sets) such that:
$$
m^*(F \setminus E) < \epsilon.
$$
This implies that $E$ can be approximated from above by $F_\sigma$ sets.

### 4. **Null Set Modulo Outer Measure**:
A set $E \subset \mathbb{R}^n$ is Lebesgue measurable if there exists a $G_\delta$ set $G \subset \mathbb{R}^n$ (a countable intersection of open sets) such that:
$$
m^*(E \triangle G) = 0,
$$
where $E \triangle G$ denotes the symmetric difference between $E$ and $G$. This indicates that $E$ differs from a $G_\delta$ set by a null set.

### 5. **Intersection with Every Set**:
A set $E \subset \mathbb{R}^n$ is Lebesgue measurable if for every $\epsilon > 0$, there exists a measurable set $M$ such that:
$$
m^*(E \triangle M) < \epsilon.
$$
This suggests that $E$ can be approximated by a [[Measurable Set]] up to an arbitrarily small error in measure.

### 6. **[[Borel Set]] Approximation**:
A set $E \subset \mathbb{R}^n$ is Lebesgue measurable if there exists a Borel sets $B \supset E$ and $A \subset E$ such that:
$$
m(B \setminus E) = 0.
$$
And
$$
m(E \setminus A) = 0.
$$
This implies that $E$ can be approximated from below and from above  by a Borel set, differing only by a null set. 