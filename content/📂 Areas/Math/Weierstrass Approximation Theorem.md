---
categories:
  - "[[Real Analysis]]"
  - "[[Theorem]]"
created: 2024-10-16 17:48
updated: 2024-11-12 11:22
---

The **Weierstrass Approximation Theorem** is a fundamental result in analysis that states any continuous function defined on a closed interval can be uniformly approximated by polynomials.

### Statement of the Theorem

Let $f(x)$ be a continuous function defined on a closed interval $[a, b]$. The **Weierstrass Approximation Theorem** asserts that for every $\epsilon > 0$, there exists a polynomial $P_n(x)$ such that:

$$
\sup_{x \in [a, b]} |f(x) - P_n(x)| < \epsilon
$$

This means that for any continuous function $f(x)$ on $[a, b]$ and any degree of accuracy $\epsilon$, we can find a polynomial $P_n(x)$ that uniformly approximates $f(x)$ within that accuracy.

### Intuition

The Weierstrass Approximation Theorem shows that polynomials, which are relatively simple functions, can be used to approximate more complicated continuous functions as closely as we like, on any closed interval.

### Consequences

- **Uniform Convergence**: The theorem guarantees **uniform convergence**, meaning the approximation is valid across the entire interval $[a, b]$ and not just at individual points.
  
- **Approximation by Polynomials**: This result is central in approximation theory, as it allows us to approximate continuous functions using polynomials, which are easier to manipulate and calculate.

### Example

Consider the continuous function $f(x) = \sin(x)$ on the interval $[0, \pi]$. By the Weierstrass Approximation Theorem, there exists a sequence of polynomials $\{P_n(x)\}$ such that:

$$
\lim_{n \to \infty} \sup_{x \in [0, \pi]} | \sin(x) - P_n(x) | = 0
$$

This means that for any given $\epsilon > 0$, we can find a polynomial $P_n(x)$ that approximates $\sin(x)$ within $\epsilon$ uniformly on $[0, \pi]$.

### Applications
- **Fourier Series**: The result is related to Fourier series and other function approximations, where functions are approximated by simpler components (in this case, polynomials).
  
- **Chebyshev Polynomials**: In practice, **Chebyshev polynomials** are often used for approximating functions because they minimize the approximation error better than arbitrary polynomials.
