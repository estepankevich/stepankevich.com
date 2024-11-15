---
categories:
  - "[[Measure Theory]]"
  - "[[Theorem]]"
created: 2024-10-20 18:00
updated: 2024-11-12 11:22
---
Let $(X, \mathcal{A}, \mu)$ be a measure space, and let $f: X \to [0, \infty)$ be a non-negative measurable function. For any $\alpha > 0$, the inequality states:
$$
\mu(\{x \in X : f(x) \geq \alpha\}) \leq \frac{1}{\alpha} \int_X f \, d\mu.
$$
### Intuition:
Markov's inequality tells us that the "size" (measure) of the set where a function $f$ exceeds a certain threshold $\alpha$ is bounded by the average value (integral) of $f$ divided by $\alpha$. 

### Proof:
1. **Define the set**:
   Let $A_\alpha = \{x \in X : f(x) \geq \alpha\}$ be the set where $f(x)$ exceeds the threshold $\alpha$. We want to find an upper bound for $\mu(A_\alpha)$.

2. **Bound $f$ on the set $A_\alpha$**:
   By definition of $A_\alpha$, for all $x \in A_\alpha$, we have $f(x) \geq \alpha$. Thus, we can write:
   $$
   f(x) \geq \alpha \cdot \mathbb{I}_{A_\alpha}(x),
   $$
   where $\mathbb{I}_{A_\alpha}(x)$ is the indicator function of the set $A_\alpha$, which is $1$ if $x \in A_\alpha$ and $0$ otherwise.

3. **Integrate both sides**:
   Now integrate both sides over the entire space $X$ with respect to the measure $\mu$:
   $$
   \int_X f(x) \, d\mu(x) \geq \int_X \alpha \cdot \mathbb{I}_{A_\alpha}(x) \, d\mu(x).
   $$

4. **Simplify the right-hand side**:
   Since $\mathbb{I}_{A_\alpha}(x)$ is $1$ only on the set $A_\alpha$ and $0$ elsewhere, the integral on the right-hand side simplifies to:
   $$
   \int_X \alpha \cdot \mathbb{I}_{A_\alpha}(x) \, d\mu(x) = \alpha \cdot \mu(A_\alpha).
   $$

5. **Final inequality**:
   Therefore, we have:
   $$
   \int_X f(x) \, d\mu(x) \geq \alpha \cdot \mu(A_\alpha).
   $$

6. **Rearrange to obtain Markov's inequality**:
   Dividing both sides by $\alpha$ (where $\alpha > 0$), we obtain:
   $$
   \mu(A_\alpha) = \mu(\{x \in X : f(x) \geq \alpha\}) \leq \frac{1}{\alpha} \int_X f(x) \, d\mu(x).
   $$