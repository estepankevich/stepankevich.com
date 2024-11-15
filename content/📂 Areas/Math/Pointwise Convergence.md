---
categories:
  - "[[Real Analysis]]"
  - "[[Definition]]"
created: 2024-10-16 17:04
updated: 2024-11-12 11:22
---

**Pointwise convergence** describes the convergence of a sequence of functions at each individual point in the domain.

### Definition

Let $\{f_n(x)\}$ be a sequence of functions defined on a set $D \subseteq \mathbb{R}$. The sequence $\{f_n(x)\}$ **converges pointwise** to a function $f(x)$ on $D$ if, for every $x \in D$:

$$
\lim_{n \to \infty} f_n(x) = f(x)
$$

In other words, for each fixed $x \in D$, the values $f_n(x)$ approach $f(x)$ as $n \to \infty$.

### Formal Statement

Given a sequence of functions $\{f_n(x)\}$ defined on $D$, the pointwise limit of $\{f_n(x)\}$ is the function $f(x)$ such that, for every $x \in D$ and for every $\epsilon > 0$, there exists an integer $N = N(x, \epsilon)$ such that for all $n \geq N$:

$$
|f_n(x) - f(x)| < \epsilon
$$

This means that for each point $x$, after a sufficiently large number of steps, $f_n(x)$ gets arbitrarily close to $f(x)$.

### Intuition

- In **pointwise convergence**, the convergence happens for each individual point $x$ separately.
- It does **not require** the same rate of convergence for all points; the function may converge faster at some points than others.
  
### Example

Consider the sequence of functions $\{f_n(x)\}$ on the interval $[0, 1]$ given by:

$$
f_n(x) = x^n
$$

As $n \to \infty$:
- For $x = 1$, $f_n(1) = 1$ for all $n$.
- For $x \in [0, 1)$, $f_n(x) \to 0$ as $n \to \infty$.

Hence, the pointwise limit function is:

$$
f(x) = \begin{cases}
0, & \text{if } 0 \leq x < 1 \\
1, & \text{if } x = 1
\end{cases}
$$

### Comparison to Uniform Convergence

In **uniform convergence**, the entire sequence of functions converges to $f(x)$ at the same rate across the domain, meaning that the speed of convergence does not depend on $x$. Pointwise convergence allows for different rates of convergence at different points, which can lead to discontinuities in the limit function.