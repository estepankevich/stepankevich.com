---
categories:
  - "[[Real Analysis]]"
  - "[[Theorem]]"
created: 2024-10-16 16:54
updated: 2024-11-12 11:22
---

The **Fundamental Theorem of Calculus** links the concepts of differentiation and integration, showing that they are inverse processes of each other. It has two main parts: the **First** and **Second Fundamental Theorem of Calculus**.

### First Fundamental Theorem of Calculus

The first part states that if $f$ is a continuous real-valued function on the interval $[a, b]$, and $F$ is an antiderivative of $f$ on $[a, b]$ (i.e., $F'(x) = f(x)$), then:

$$
\int_{a}^{b} f(x) \, dx = F(b) - F(a)
$$

This theorem tells us that the definite integral of a function can be computed by evaluating its antiderivative at the boundaries of the interval.

### Second Fundamental Theorem of Calculus

The second part relates differentiation and integration. It states that if $f$ is a continuous function on the interval $[a, b]$, then the function $F$ defined as:

$$
F(x) = \int_{a}^{x} f(t) \, dt
$$

is differentiable on $(a, b)$, and its derivative is the original function $f(x)$. In other words:

$$
\frac{d}{dx} \left( \int_{a}^{x} f(t) \, dt \right) = f(x)
$$

### Intuition

- The **First Theorem** shows that integration (finding the area under the curve) can be reversed by differentiation (finding the rate of change), provided we know the antiderivative.
- The **Second Theorem** demonstrates that the accumulation of values of a function (through integration) has a rate of change that is the original function itself.

### Summary

The **Fundamental Theorem of Calculus** establishes the deep connection between differentiation and integration, which are often viewed as inverse operations. It allows us to compute definite integrals using antiderivatives and shows that the process of accumulation (integration) is naturally related to the concept of change (differentiation).
