---
categories:
  - "[[Measure Theory]]"
  - "[[Theorem]]"
created: 2024-11-02 14:48
updated: 2024-11-12 11:22
---
The Jordan Decomposition is a theorem in measure theory that applies to signed measures. It states that any signed measure can be decomposed into the difference of two non-negative measures, which are mutually singular (i.e., they have disjoint supports). This decomposition is directly related to the [[Hahn Decomposition Theorem]].

### Statement
Let $(X, \Sigma)$ be a measurable space, and let $\mu$ be a **signed measure** on $(X, \Sigma)$. Then, there exist two unique non-negative measures $\mu^+$ and $\mu^-$ such that:
1. $\mu = \mu^+ - \mu^-$,
2. $\mu^+$ and $\mu^-$ are **mutually singular**, meaning there exists a measurable set $P \subset X$ such that:
   - $\mu^+(P^c) = 0$,
   - $\mu^-(P) = 0$.

The measures $\mu^+$ and $\mu^-$ are called the **positive part** and **negative part** of $\mu$, respectively. This decomposition $\mu = \mu^+ - \mu^-$ is called the **Jordan decomposition** of $\mu$.

### Construction of $\mu^+$ and $\mu^-$
1. **Hahn Decomposition**: Use the Hahn Decomposition Theorem to find a partition of $X$ into two disjoint sets $P$ and $N$ such that:
   - $\mu(A) \geq 0$ for all measurable $A \subset P$,
   - $\mu(A) \leq 0$ for all measurable $A \subset N$.
   
2. **Define Positive and Negative Parts**:
   - Define $\mu^+$ as the measure that agrees with $\mu$ on $P$ and is zero on $N$: 
     $$
     \mu^+(A) = \mu(A \cap P).
     $$
   - Define $\mu^-$ as the measure that agrees with $-\mu$ on $N$ and is zero on $P$:
     $$
     \mu^-(A) = -\mu(A \cap N).
     $$

3. **Verification**: By construction, $\mu = \mu^+ - \mu^-$ and $\mu^+$, $\mu^-$ are mutually singular.

### Properties
1. **Uniqueness**: The Jordan decomposition $\mu = \mu^+ - \mu^-$ is unique.

### Intuition
The Jordan Decomposition breaks down a signed measure into purely "positive" and "negative" parts that do not overlap. This decomposition is fundamental in understanding the structure of signed measures, as it allows any signed measure to be analyzed in terms of non-negative measures, which are easier to work with in integration and measure theory.

### Applications
- **Absolute Continuity and [[Radon-Nikodym Theorem]]**: Jordan decomposition is essential in defining and analyzing the Radon-Nikodym derivative of signed measures.
- **[[Total Variation Norm]]**: The total variation $|\mu|$ is used to define the total variation norm on the space of signed measures, which plays an important role in convergence and integration with respect to signed measures.