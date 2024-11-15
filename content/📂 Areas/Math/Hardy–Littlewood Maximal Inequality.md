---
categories:
  - "[[Measure Theory]]"
  - "[[Real Analysis]]"
  - "[[Theorem]]"
created: 2024-10-20 18:40
updated: 2024-11-12 11:22
aliases:
  - Weak-Type (1,1) Inequality
---
The Hardy–Littlewood maximal inequality provides a bound on the measure of the set where the Hardy–Littlewood maximal function exceeds a given threshold, in terms of the $L^1$ norm of the original function. 

### Statement :
Let $f \in L^1(\mathbb{R}^n)$ (locally integrable function on $\mathbb{R}^n$). Then there exists a constant $C_n > 0$, depending only on the dimension $n$, such that for any $\lambda > 0$:
$$
|\{x \in \mathbb{R}^n : Mf(x) > \lambda\}| \leq \frac{C_n}{\lambda} \int_{\mathbb{R}^n} |f(y)| \, dy,
$$
where $Mf$ is the [[Hardy–Littlewood Maximal Function]]

### Proof Outline:
The proof relies on the [[Vitali covering lemma]] and some properties of the maximal function.

1. **Decomposition of the set**: Consider the set $A_\lambda = \{x \in \mathbb{R}^n : Mf(x) > \lambda\}$. By the definition of $Mf(x)$, for each $x \in A_\lambda$, there is a ball $B_x$ centered at $x$ such that:
   $$
   \frac{1}{|B_x|} \int_{B_x} |f(y)| \, dy > \lambda.
   $$

2. **Vitali covering lemma**: Use the Vitali covering lemma to select a countable, disjoint subcollection of these balls $\{B_i\}$ that still cover most of the set $A_\lambda$ up to a set of measure zero.

3. **Estimate using the disjoint balls**: For each ball $B_i$, we know:
   $$
   \lambda |B_i| < \int_{B_i} |f(y)| \, dy.
   $$

   Summing over the disjoint collection $\{B_i\}$, we get:
   $$
   \lambda \sum_i |B_i| < \sum_i \int_{B_i} |f(y)| \, dy \leq \int_{\mathbb{R}^n} |f(y)| \, dy.
   $$

4. **Conclusion**: Since $\{B_i\}$ are disjoint and cover most of $A_\lambda$, we have:
   $$
   |A_\lambda| \leq \sum_i |B_i| \leq \frac{1}{\lambda} \int_{\mathbb{R}^n} |f(y)| \, dy.
   $$

Thus, the measure of the set where $Mf(x) > \lambda$ is controlled by $\frac{1}{\lambda}$ times the $L^1$ norm of $f$.