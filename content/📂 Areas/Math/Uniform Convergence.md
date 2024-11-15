---
categories:
  - "[[Real Analysis]]"
  - "[[Definition]]"
created: 2024-10-16 17:07
updated: 2024-11-12 11:22
---
**Uniform convergence** of a sequence of functions means that the functions converge to a limit function at the same rate across the entire domain.

### Definition

Let $\{f_n(x)\}$ be a sequence of functions defined on a set $D \subseteq \mathbb{R}$. The sequence $\{f_n(x)\}$ **converges uniformly** to a function $f(x)$ on $D$ if, for every $\epsilon > 0$, there exists an integer $N$ such that for all $n \geq N$ and for all $x \in D$:

$$
|f_n(x) - f(x)| < \epsilon
$$

The key point here is that $N$ does not depend on $x$; it is uniform for all $x \in D$.

### Formal Statement

The sequence of functions $\{f_n(x)\}$ converges uniformly to $f(x)$ if:

$$
\lim_{n \to \infty} \sup_{x \in D} |f_n(x) - f(x)| = 0
$$

This means that the maximum difference between $f_n(x)$ and $f(x)$ over the entire domain $D$ can be made arbitrarily small for sufficiently large $n$, and this holds uniformly across all $x \in D$.

### Intuition

- In **uniform convergence**, the speed of convergence is the same across the entire domain. This contrasts with **pointwise convergence**, where the rate of convergence can vary depending on the point $x$.
- Uniform convergence guarantees that the function sequence behaves consistently over the whole domain, making it stronger than pointwise convergence.

### Example

Consider the sequence of functions $\{f_n(x)\}$ on $[0, 1]$ given by:

$$
f_n(x) = x^n
$$

For $x \in [0, 1)$, $f_n(x) \to 0$ as $n \to \infty$, but for $x = 1$, $f_n(1) = 1$ for all $n$. The pointwise limit is:

$$
f(x) = \begin{cases}
0, & \text{if } 0 \leq x < 1 \\
1, & \text{if } x = 1
\end{cases}
$$

However, $\{f_n(x)\}$ does **not** converge uniformly to $f(x)$ because the rate of convergence varies depending on $x$. Specifically, near $x = 1$, the convergence is slower, and no single $N$ can ensure $|f_n(x) - f(x)| < \epsilon$ for all $x \in [0, 1]$.

### Comparison to Pointwise Convergence

- In **pointwise convergence**, convergence happens for each point individually, and the rate of convergence can vary with $x$.
- In **uniform convergence**, the convergence occurs at the same rate over the entire domain, providing stronger guarantees about the behavior of the sequence.