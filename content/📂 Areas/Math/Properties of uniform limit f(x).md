---
categories:
  - "[[Real Analysis]]"
  - "[[Theorem]]"
created: 2024-10-16 17:11
updated: 2024-11-12 11:22
---
- **Continuity**: If a sequence of [[Continuity|continuous]] functions $\{f_n(x)\}$ converges [[Uniform Convergence|uniformly]] to $f(x)$, then $f(x)$ is also continuous.
- **Integration**: Uniform convergence allows for the interchange of limits and [[Riemann Integral]]:
  
$$
\int_a^b \lim_{n \to \infty} f_n(x) \, dx = \lim_{n \to \infty} \int_a^b f_n(x) \, dx
$$