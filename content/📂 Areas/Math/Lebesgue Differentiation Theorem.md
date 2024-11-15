---
categories:
  - "[[Measure Theory]]"
  - "[[Real Analysis]]"
  - "[[Theorem]]"
created: 2024-10-21 16:20
updated: 2024-11-12 11:22
---
Let $f \in L^1(\mathbb{R}^n)$. For almost every point $x \in \mathbb{R}^n$, the following holds:
  $$
  \lim_{r \to 0} \frac{1}{|B(x, r)|} \int_{B(x, r)} f(y) \, dy = f(x)
  $$
where $B(x, r)$ is the ball of radius $r$ centered at $x$ and $|B(x, r)|$ is its Lebesgue measure.

**Intuition**: The theorem asserts that for functions integrable in the Lebesgue sense, the local average of the function over shrinking balls converges to the value of the function at almost every point.

**Key Properties**:
  1. This result generalizes the notion of pointwise differentiation to the setting of Lebesgue integrable functions.
  2. The limit is valid almost everywhere; it does not hold necessarily at every point but at almost every point in $\mathbb{R}^n$.
  
**Proof Outline**:
  1. **Maximal function**: Define the [[Hardy–Littlewood Maximal Function]] $M(f)(x) = \sup_{r > 0} \frac{1}{|B(x, r)|} \int_{B(x, r)} |f(y)| \, dy$. The boundedness of $M(f)$ on $L^p(\mathbb{R}^n)$ spaces (for $p > 1$) is key.
  2. **Dominated convergence**: Using properties of the maximal function and [[Dominated Convergence Theorem]], show that the averages of $f$ converge to $f(x)$ almost everywhere.