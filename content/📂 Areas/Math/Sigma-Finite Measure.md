---
categories:
  - "[[Measure Theory]]"
  - "[[Definition]]"
created: 2024-11-03 21:37
updated: 2024-11-12 11:22
---
**Definition**:  
A measure $\mu$ defined on a measurable space $(X, \mathcal{F})$ is called *$\sigma$-finite* if $X$ can be expressed as a countable union of measurable sets $\{A_n\}_{n=1}^{\infty}$ such that:

1. $\mu(A_n) < \infty$ for each $n$.
2. $A_n \in \mathcal{F}$ for all $n$.

Formally:
$$
X = \bigcup_{n=1}^{\infty} A_n \quad \text{with} \quad \mu(A_n) < \infty.
$$

**Intuition**:  
A measure $\mu$ is $\sigma$-finite if we can decompose the space $X$ into a sequence of smaller, finite measure pieces. This concept generalizes the idea of finite measures to larger spaces by allowing for countable coverings with finite measure components.

**Examples**:
- The [[Lebesgue Measure]] on $\mathbb{R}$ is $\sigma$-finite because $\mathbb{R}$ can be covered by intervals $(-n, n)$ for $n \in \mathbb{N}$, and each interval has finite Lebesgue measure.
- Counting measure on any countable set (e.g., $\mathbb{N}$) is $\sigma$-finite because we can decompose the set into singletons, each with measure 1. 

**Non-Example**:
- A measure that assigns $\infty$ to the entire space and cannot be decomposed into finite measure parts is not $\sigma$-finite.