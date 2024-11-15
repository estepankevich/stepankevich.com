---
categories:
  - "[[Real Analysis]]"
  - "[[Theorem]]"
created: 2024-11-02 13:13
updated: 2024-11-12 11:22
---
**Young's Inequality**

Young's inequality provides a bound for the product of two non-negative numbers in terms of their powers, using conjugate exponents. It is a useful result in analysis, particularly in the context of [[Hölder's Inequality]] and convex functions.

### Statement (Real Numbers)
For any $a, b \geq 0$ and $p, q > 1$ such that $\frac{1}{p} + \frac{1}{q} = 1$, we have:
$$
ab \leq \frac{a^p}{p} + \frac{b^q}{q}.
$$
Equality holds if and only if $a^p = b^q$.

### Proof Sketch
1. **[[Convex Function]]**: Consider the function $f(x) = x^p/p$ for $x \geq 0$, which is convex since its second derivative is non-negative.
2. **Tangent Line Argument**: By the convexity of $f$, for any $b \geq 0$ we have:
   $$
   f(b) \geq f(a) + f'(a)(b - a).
   $$
   Setting up this inequality with the appropriate values of $a$ and $b$ yields the desired result.