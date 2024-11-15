---
categories:
  - "[[Measure Theory]]"
  - "[[Definition]]"
created: 2024-10-20 17:37
updated: 2024-11-12 11:22
---
**Carathéodory’s Criterion**

Carathéodory’s criterion provides a condition for a set to be measurable with respect to the [[Lebesgue Measure]]. A set $E \subset \mathbb{R}^n$ is Lebesgue measurable if, for any set $A \subset \mathbb{R}^n$, the [[Outer Measure]] satisfies the following relation:

$$
m^*(A) = m^*(A \cap E) + m^*(A \cap E^c),
$$

where $m^*$ is the Lebesgue outer measure and $E^c$ is the complement of $E$.
### Intuition:
The criterion essentially states that a set $E$ is measurable if its presence or absence does not distort the outer measure of any set $A$. In other words, $E$ "splits" any set $A$ cleanly into two parts, without causing irregularities in how the size (outer measure) of $A$ is computed.