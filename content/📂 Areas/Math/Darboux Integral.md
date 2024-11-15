---
categories:
  - "[[Real Analysis]]"
  - "[[Definition]]"
created: 2024-10-15 19:29
updated: 2024-11-12 11:22
---
## Definition
Darboux Integrability is a method for defining the integral of a function based on the concept of upper and lower sums. It is particularly useful for determining the integrability of functions that may not be Riemann integrable.

### Darboux Upper and Lower Sums
For a function $f: [a, b] \to \mathbb{R}$ and a partition $P = \{ x_0, x_1, \ldots, x_n \}$ of the interval $[a, b]$, where $a = x_0 < x_1 < \cdots < x_n = b$:

- **Lower Sum** \( L(f, P) \):
  
$$
L(f, P) = \sum_{i=0}^{n-1} m_i (x_{i+1} - x_i)
$$

where 

$$
m_i = \inf_{x \in [x_i, x_{i+1}]} f(x).
$$

- **Upper Sum** \( U(f, P) \):

$$
U(f, P) = \sum_{i=0}^{n-1} M_i (x_{i+1} - x_i)
$$

where 

$$
M_i = \sup_{x \in [x_i, x_{i+1}]} f(x).
$$

## Integrability Condition
A function $f$ is said to be Darboux integrable on the interval $[a, b]$ if the lower and upper sums can be made arbitrarily close as the partition gets finer. Formally, $f$ is Darboux integrable if:

$$
\lim_{||P|| \to 0} (U(f, P) - L(f, P)) = 0
$$

where \( ||P|| \) is the norm of the partition, defined as:

$$
||P|| = \max_{i} (x_{i+1} - x_i).
$$

## Relationship to Riemann Integrability
- A function is Riemann integrable if and only if it is Darboux integrable.
- The concepts of upper and lower sums provide an alternative perspective on Riemann integration, allowing one to analyze functions with potentially discontinuous behavior.

## Properties
1. **Monotonic Functions**: If $f$ is monotonic on $[a, b]$, then  $f$ is Darboux integrable.
  
2. **Continuous Functions**: If $f$ is continuous on $[a, b]$, then it is Darboux integrable.

3. **Discontinuities**: A bounded function that has a finite number of discontinuities on $[a, b]$ is Darboux integrable.

## Example
Consider the function $f(x) = x$ on the interval $[0, 1]$.

1. **Choose a partition** $P = \{ 0, \frac{1}{2}, 1 \}$

   - Lower sum 

   $$
   L(f, P) = m_0 (x_1 - x_0) + m_1 (x_2 - x_1) = 0 \cdot \frac{1}{2} + \frac{1}{2} \cdot \frac{1}{2} = \frac{1}{4}.
   $$
   
   - Upper sum 

   $$
   U(f, P) = M_0 (x_1 - x_0) + M_1 (x_2 - x_1) = 1 \cdot \frac{1}{2} + 1 \cdot \frac{1}{2} = 1.
   $$

2. **Refine the partition** to make the upper and lower sums converge.

Ultimately, as the partition is refined, the lower and upper sums will converge to the same value, which is the definite integral:

$$
\int_0^1 f(x) \, dx = \frac{1}{2}.
$$