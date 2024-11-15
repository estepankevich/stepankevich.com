---
categories:
  - "[[Real Analysis]]"
  - "[[Definition]]"
created: 2024-11-02 13:36
updated: 2024-11-12 11:22
---
A function $f : \mathbb{R} \to \mathbb{R}$ is called **convex** if, for all $x, y \in \mathbb{R}$ and $\lambda \in [0, 1]$, we have:
$$
f(\lambda x + (1 - \lambda) y) \leq \lambda f(x) + (1 - \lambda) f(y).
$$
This inequality states that the line segment connecting $(x, f(x))$ and $(y, f(y))$ lies above or on the graph of $f$.

### Equivalent Definitions
For differentiable functions, convexity can also be characterized by:
1. **First Derivative Condition**: $f$ is convex if $f(y) \geq f(x) + f'(x)(y - x)$ for all $x, y \in \mathbb{R}$.
2. **Second Derivative Condition**: If $f$ is twice differentiable, then $f$ is convex if and only if $f''(x) \geq 0$ for all $x \in \mathbb{R}$.

For functions $f: \mathbb{R}^n \to \mathbb{R}$, convexity is defined similarly:
$$
f(\lambda x + (1 - \lambda) y) \leq \lambda f(x) + (1 - \lambda) f(y) \quad \text{for all } x, y \in \mathbb{R}^n \text{ and } \lambda \in [0, 1].
$$

### Key Properties
1. **Local Minimum is Global**: For a convex function on a convex set, any local minimum is also a global minimum.
2. **Convexity Preservation**: Non-negative weighted sums and pointwise limits of convex functions are also convex.
3. **[[Jensen’s Inequality]]**: For a convex function $f$ and a random variable $X$, we have $f(\mathbb{E}[X]) \leq \mathbb{E}[f(X)]$.

### Examples
1. **Quadratic Functions**: $f(x) = x^2$ is convex because $f''(x) = 2 > 0$.
2. **Exponential Functions**: $f(x) = e^x$ is convex since $f''(x) = e^x > 0$.
3. **Absolute Value**: $f(x) = |x|$ is convex as it satisfies the convexity inequality.

### Geometric Intuition
A convex function curves "upwards," meaning its graph lies below the line segment connecting any two points on it. This "bowl-shaped" property is essential in optimization, as it guarantees that gradient-based methods converge to global minima.