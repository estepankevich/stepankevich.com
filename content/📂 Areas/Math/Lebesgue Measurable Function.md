---
categories:
  - "[[Measure Theory]]"
  - "[[Definition]]"
  - "[[Real Analysis]]"
created: 2024-10-20 17:55
updated: 2024-11-12 11:22
---
A function $f: X \to \mathbb{R}$ defined on a measurable space $(X, \mathcal{A})$ is called **Lebesgue measurable** if the preimage of every [[Borel Set]] in $\mathbb{R}$ is a [[Measurable Set]] in $X$. More formally, for every Borel set $B \subset \mathbb{R}$, the set:
$$
f^{-1}(B) = \{x \in X : f(x) \in B\}
$$
belongs to the $\sigma$-algebra $\mathcal{A}$.

### Equivalent Definitions:

1. **Preimage of Intervals**: A function $f: X \to \mathbb{R}$ is Lebesgue measurable if for every real number $a \in \mathbb{R}$, the preimage of the interval $(-\infty, a]$ is a measurable set:
   $$
   \{x \in X : f(x) \leq a\} \in \mathcal{A}.
   $$

2. **Preimage of Open Sets**: $f$ is Lebesgue measurable if for every open set $O \subset \mathbb{R}$, the preimage $f^{-1}(O)$ is a measurable set in $X$:
   $$
   f^{-1}(O) \in \mathcal{A}.
   $$

3. **Pointwise Limit of Simple Functions**: A function $f$ is Lebesgue measurable if there exists a sequence of simple functions $\{s_n\}$, each measurable and taking a finite number of values, such that $f(x) = \lim_{n \to \infty} s_n(x)$ almost everywhere.

### Intuition:
A Lebesgue measurable function behaves "well" with respect to the measure on $X$—its values and the sets they map to can be handled in the framework of measure theory. These functions are the ones we can integrate using the Lebesgue integral, making them essential in real analysis.