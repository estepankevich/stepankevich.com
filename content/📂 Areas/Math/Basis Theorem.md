---
categories:
  - "[[Linear algebra]]"
  - "[[Theorem]]"
created: 2024-11-02 12:40
updated: 2024-11-12 11:36
aliases:
  - Hamel Basis Theorem
---
### Statement
Every vector space $V$ over a field $F$ has a [[Basis]]

### Proof Outline
1. **Finite-dimensional case**: The proof can proceed by extending any linearly independent set to a spanning set, ensuring that a basis exists for finite-dimensional spaces.
2. **Infinite-dimensional case**: The existence of a basis for any vector space (even infinite-dimensional) is guaranteed using [[Zorn's Lemma]], a result equivalent to the [[Axiom of choice]]. Zorn's Lemma ensures that every linearly independent subset of $V$ can be extended to a maximal linearly independent set, which is then a basis for $V$.

### Consequences
- For a finite-dimensional vector space $V$ of dimension $n$, every basis of $V$ has exactly $n$ elements.
- For infinite-dimensional spaces, bases can be uncountably infinite, and different bases can have different cardinalities in spaces without finite dimension.