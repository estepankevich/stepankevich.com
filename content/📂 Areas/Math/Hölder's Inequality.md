---
categories:
  - "[[Real Analysis]]"
  - "[[Functional analysis]]"
  - "[[Theorem]]"
created: 2024-11-02 13:10
updated: 2024-11-12 11:22
---
Hölder's inequality is a fundamental result in analysis, providing an upper bound for the integral or sum of the product of two functions in terms of their $L^p$ and $L^q$ norms.

### Statement
Let $(X, \Sigma, \mu)$ be a measure space, and let $f, g : X \to \mathbb{R}$ (or $\mathbb{C}$) be measurable functions. For exponents $p, q \in [1, \infty]$ such that $\frac{1}{p} + \frac{1}{q} = 1$, we have:
$$
\int_X |f(x) g(x)| \, d\mu \leq \left( \int_X |f(x)|^p \, d\mu \right)^{1/p} \left( \int_X |g(x)|^q \, d\mu \right)^{1/q}.
$$
If $p = 1$ and $q = \infty$ (or vice versa), the inequality is interpreted as:
$$
\int_X |f(x) g(x)| \, d\mu \leq \|f\|_1 \|g\|_\infty.
$$

### Special Case: Finite Sums
For $f, g \in \mathbb{R}^n$ with components $f = (f_1, f_2, \dots, f_n)$ and $g = (g_1, g_2, \dots, g_n)$, Hölder's inequality reduces to:
$$
\sum_{i=1}^n |f_i g_i| \leq \left( \sum_{i=1}^n |f_i|^p \right)^{1/p} \left( \sum_{i=1}^n |g_i|^q \right)^{1/q}.
$$

### Key Cases
1. **[[Cauchy–Schwarz Inequality]]** ($p = q = 2$):
   $$
   \int_X |f(x) g(x)| \, d\mu \leq \left( \int_X |f(x)|^2 \, d\mu \right)^{1/2} \left( \int_X |g(x)|^2 \, d\mu \right)^{1/2}.
   $$
2. **[[Young's Inequality]]** ($p = 1$, $q = \infty$):
   $$
   \int_X |f(x) g(x)| \, d\mu \leq \|f\|_1 \|g\|_\infty.
   $$

### Intuition
Hölder's inequality bounds the integral (or sum) of the product $|f g|$ by leveraging the "spread" of $f$ and $g$ over different $L^p$ and $L^q$ norms. This inequality is essential for establishing the completeness of $L^p$ spaces and has applications across analysis, probability, and partial differential equations.

### Proof Outline
1. **Convexity**: Use Young's inequality for products of real numbers, which asserts that for any $a, b \geq 0$:
   $$
   ab \leq \frac{a^p}{p} + \frac{b^q}{q}.
   $$
2. **Apply to Integrals**: Set $a = |f(x)|$ and $b = |g(x)|$, integrate both sides, and simplify using properties of integrals and norms