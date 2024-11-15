---
categories:
  - "[[Real Analysis]]"
  - "[[Definition]]"
created: 2024-10-16 16:46
updated: 2024-11-12 11:22
---
The **Riemann integral** is a method for assigning a number to the area under a curve, typically defined over a closed interval $[a, b]$.

### Definition

Given a function $f(x)$ defined on the interval $[a, b]$, the Riemann integral is the limit of the sum of the areas of rectangles as the width of the partitions approaches zero. This is expressed as:

$$
\int_{a}^{b} f(x) \, dx = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_i^*) \Delta x_i
$$

Where:

- $[a, b]$ is the interval of integration.
- $\Delta x_i = x_i - x_{i-1}$ is the width of each subinterval.
- $x_i^*$ is any point in the subinterval $[x_{i-1}, x_i]$.
- $n$ is the number of subintervals (the larger the $n$, the better the approximation).

### Intuition

The Riemann integral approximates the area under the curve by summing up the areas of small rectangles, where the height of each rectangle is determined by the value of the function $f(x)$ at a chosen point within each subinterval.

As the subintervals become infinitely small, the sum converges to the exact area under the curve