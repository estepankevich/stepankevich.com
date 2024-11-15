---
categories:
  - "[[Measure Theory]]"
  - "[[Definition]]"
created: 2024-10-21 16:35
updated: 2024-11-12 11:22
---
**Measure of Cross Section**

**Definition**: Given a measurable set $A \subseteq \mathbb{R}^{n+m}$ and a fixed point $x \in \mathbb{R}^n$, the **cross section** of $A$ at $x$ is defined as:
  $$
  A_x = \{ y \in \mathbb{R}^m : (x, y) \in A \}
  $$
The **measure of the cross section** is then the Lebesgue measure of $A_x$ in $\mathbb{R}^m$, denoted by:
  $$
  \mu_m(A_x) = \int_{\mathbb{R}^m} \chi_{A_x}(y) \, dy
  $$
**Intuition**: The measure of cross sections provides a way to slice a higher-dimensional set into lower-dimensional pieces

**Key Application**:  [[Fubini’s Theorem]] and [[Tonelli’s Theorem]]