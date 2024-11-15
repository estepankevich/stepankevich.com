---
categories:
  - "[[Measure Theory]]"
  - "[[Definition]]"
  - "[[Functional analysis]]"
created: 2024-11-02 14:51
updated: 2024-11-12 11:22
---
The total variation of a signed measure provides a way to measure its "size" by converting it into a non-negative measure. It captures the "magnitude" of a signed measure without regard to sign

### Definition
Let $(X, \Sigma)$ be a measurable space, and let $\mu$ be a signed measure on $(X, \Sigma)$. The **total variation** of $\mu$, denoted by $|\mu|$, is defined as:
$$
|\mu|(A) = \sup \sum_{i=1}^n |\mu(A_i)|,
$$
where the supremum is taken over all finite measurable partitions $\{A_i\}_{i=1}^n$ of $A$, with $A = \bigcup_{i=1}^n A_i$ and $A_i \in \Sigma$ disjoint.

### Properties
1. **Non-Negativity**: $|\mu|$ is a non-negative measure, even though $\mu$ itself may take negative values on certain sets.
2. **Total Variation Norm**: The total variation norm of $\mu$ is defined as $\|\mu\|_{TV} = |\mu|(X)$. This norm is used to quantify the "size" of $\mu$ and is fundamental in defining the space of signed measures.
3. **Boundedness**: For any measurable set $A \subset X$, we have $|\mu(A)| \leq |\mu|(A)$.

### Jordan Decomposition and Total Variation
The total variation $|\mu|$ of a signed measure $\mu$ can also be expressed in terms of the [[Jordan Decomposition]] $\mu = \mu^+ - \mu^-$, where $\mu^+$ and $\mu^-$ are the positive and negative parts of $\mu$. In this case:
$$
|\mu| = \mu^+ + \mu^-.
$$

### Intuition
The total variation $|\mu|$ measures the "absolute size" of a signed measure by summing up the absolute values of $\mu$ over disjoint sets. It effectively "removes" the sign from $\mu$, allowing us to treat it similarly to a non-negative measure, which simplifies analysis.

### Applications
1. **Norm on the Space of Signed Measures**: The total variation norm $\|\mu\|_{TV}$ is used as the standard norm in the space of signed measures, making this space a complete metric space.
2. **[[Absolute continuity]]**: In the Radon-Nikodym Theorem, the total variation measure $|\mu|$ helps in defining when a signed measure is absolutely continuous with respect to another measure.
3. **Convergence of Signed Measures**: The total variation norm is used to define convergence criteria for sequences of signed measures, such as total variation convergence.