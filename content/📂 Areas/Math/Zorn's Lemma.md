---
categories:
  - "[[📂 Areas/Math/Set theory|Set theory]]"
  - "[[Theorem]]"
  - "[[Real Analysis]]"
created: 2024-11-02 12:44
updated: 2024-11-15 15:52
---
**Statement**: Let $S$ be a partially ordered set in which every chain (i.e., totally ordered subset) has an upper bound in $S$. Then, $S$ contains at least one maximal element.

A **maximal element** $m \in S$ is an element such that there is no other element in $S$ strictly greater than $m$ with respect to the partial order.

### Intuition
Zorn's Lemma ensures that under certain conditions, a set with a partial ordering contains elements that cannot be "extended" further within the set. It's particularly useful in proofs where we want to show the existence of a maximal or "largest" element without needing to construct it explicitly.

### Key Concepts
- **Partial Order**: A relation $\leq$ on $S$ that is reflexive, antisymmetric, and transitive.
- **Chain**: A subset $C \subset S$ in which every pair of elements is comparable, i.e., for any $x, y \in C$, either $x \leq y$ or $y \leq x$.
- **Upper Bound**: An element $u \in S$ is an upper bound of a chain $C \subset S$ if $x \leq u$ for all $x \in C$.

### Applications
Zorn's Lemma is crucial in many areas of mathematics, particularly in situations where constructive methods are difficult or impossible:
- **Existence of Bases**: It is used to prove that every vector space has a basis (Hamel basis), even for infinite-dimensional spaces.
- **Existence of Maximal Ideals**: In ring theory, Zorn's Lemma guarantees the existence of maximal ideals in any nontrivial ring with unity.
- **Extension of Linear Operators**: It helps extend linear functionals from subspaces to entire vector spaces.

### Relation to the Axiom of Choice
Zorn's Lemma is equivalent to the **Axiom of Choice** and **Hausdorff's Maximal Principle** in standard set theory (Zermelo-Fraenkel set theory, ZF). This means any one of these statements can be derived from the others, and they are often used interchangeably to establish existence results in mathematics.