---
categories:
  - "[[Measure Theory]]"
  - "[[Real Analysis]]"
  - "[[Theorem]]"
created: 2024-10-21 16:40
updated: 2024-11-12 11:22
---
- **Statement**: Let $f: \mathbb{R}^{n+m} \to \mathbb{R}$ be a measurable function on the product space $\mathbb{R}^n \times \mathbb{R}^m$.

  1. If $f \in L^1(\mathbb{R}^{n+m})$, then:
     $$
     \int_{\mathbb{R}^n} \left( \int_{\mathbb{R}^m} f(x, y) \, dy \right) dx = \int_{\mathbb{R}^m} \left( \int_{\mathbb{R}^n} f(x, y) \, dx \right) dy = \int_{\mathbb{R}^{n+m}} f(x, y) \, d(x, y)
     $$
     In other words, the order of integration can be interchanged.

  2. For non-negative measurable functions $f \geq 0$, the integrals may not be finite, but the result still holds:
     $$
     \int_{\mathbb{R}^n} \left( \int_{\mathbb{R}^m} f(x, y) \, dy \right) dx = \int_{\mathbb{R}^{n+m}} f(x, y) \, d(x, y)
     $$

- **Intuition**: Fubini’s theorem allows us to compute double integrals by integrating iteratively, first over one variable and then over the other. It ensures that for functions that are either integrable or non-negative, the order of integration can be swapped without affecting the result.

- **Key Conditions**:
  1. **Integrability**: $f \in L^1(\mathbb{R}^{n+m})$ guarantees that the integrals are finite and the theorem applies.
  2. **Non-negative functions**: For non-negative measurable functions, even if the function is not integrable, the double integral can still be computed iteratively.

- **Applications**: Fubini’s theorem is used in various contexts, such as probability theory, multivariable calculus, and measure theory, where changing the order of integration simplifies calculations.