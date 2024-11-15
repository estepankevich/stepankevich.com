---
categories:
  - "[[Real Analysis]]"
  - "[[Theorem]]"
created: 2024-10-16 17:51
updated: 2024-11-12 11:22
---

The **Stone-Weierstrass Theorem** generalizes the [[Weierstrass Approximation Theorem]]. It extends the result from polynomials to a more general class of functions and provides conditions under which continuous functions on a compact space can be uniformly approximated.

### Statement of the Theorem

Let $X$ be a compact [[Hausdorff space]], and let $\mathcal{A}$ be a subalgebra of $C(X)$ (the set of continuous real-valued functions on $X$). The **Stone-Weierstrass Theorem** states that if $\mathcal{A}$:

1. Contains a constant function,
2. Separates points on $X$ (i.e., for any two distinct points $x, y \in X$, there exists a function $f \in \mathcal{A}$ such that $f(x) \neq f(y)$),

then $\mathcal{A}$ is **dense** in $C(X)$ with respect to the uniform norm. This means that for any continuous function $f \in C(X)$ and any $\epsilon > 0$, there exists a function $g \in \mathcal{A}$ such that:

$$
\sup_{x \in X} |f(x) - g(x)| < \epsilon
$$

### Intuition

The Stone-Weierstrass Theorem tells us that if a subalgebra of continuous functions satisfies certain properties, then we can uniformly approximate any continuous function on a compact space using functions from this subalgebra.

- The [[Weierstrass Approximation Theorem]] is a special case where the space $X = [a, b] \subseteq \mathbb{R}$ and the subalgebra $\mathcal{A}$ is the set of polynomials. The Stone-Weierstrass Theorem applies to much more general spaces and function classes. In the Weierstrass case, the approximating functions are polynomials, whereas in the Stone-Weierstrass Theorem, the approximating functions can be elements of any subalgebra that satisfies the two conditions (constant function and point separation).

### Example

Consider $X = [0, 1]$ and the subalgebra $\mathcal{A}$ of continuous functions spanned by $\{1, \cos(\pi x), \cos(2\pi x), \cos(3\pi x), \dots \}$. This set satisfies the conditions of the Stone-Weierstrass Theorem, so any continuous function on $[0, 1]$ can be uniformly approximated by a finite linear combination of cosine functions.

### Applications

- **Fourier Series**: In many cases, trigonometric polynomials (sums of sines and cosines) are used to approximate functions, and the Stone-Weierstrass Theorem guarantees that this type of approximation is possible.
  
- **Functional Analysis**: The theorem is important in the study of Banach algebras and approximation theory, as it ensures that large classes of functions can be approximated by simpler or more structured ones.