---
categories:
  - "[[Measure Theory]]"
  - "[[Theorem]]"
created: 2024-11-02 14:46
updated: 2024-11-12 11:22
---
The Hahn Decomposition Theorem is a result in measure theory that applies to signed measures. It states that any measurable space can be divided into two disjoint sets: one on which a signed measure is non-negative and one on which it is non-positive.

### Statement
Let $(X, \Sigma)$ be a measurable space, and let $\mu$ be a **signed measure** on $(X, \Sigma)$. Then, there exist two disjoint measurable sets $P, N \in \Sigma$ such that:
1. $P \cup N = X$ (the sets $P$ and $N$ form a partition of $X$),
2. $\mu(A) \geq 0$ for every measurable subset $A \subseteq P$,
3. $\mu(A) \leq 0$ for every measurable subset $A \subseteq N$.

The sets $P$ and $N$ are called a **Hahn decomposition** of $X$ with respect to the signed measure $\mu$. This decomposition is not unique, but any two Hahn decompositions will differ only by a set of measure zero.

### Key Implications
1. **[[Jordan Decomposition]]**
2. **[[Total Variation]]**
### Outline of Proof
1. **Supremum of Positive Sets**: Define $P$ as the set where $\mu$ is "maximally positive" by considering subsets with non-negative measure and taking a supremum.
2. **Complement as Negative Set**: Define $N = X \setminus P$. By construction, $N$ will be the set where $\mu$ is "maximally negative."
3. **Verification**: Show that $\mu$ is non-negative on all subsets of $P$ and non-positive on all subsets of $N$, completing the decomposition. 

The Hahn Decomposition Theorem is foundational for further analysis in measure theory, particularly in the study of signed and complex measures.