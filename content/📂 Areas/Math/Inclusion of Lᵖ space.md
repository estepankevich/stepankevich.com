---
categories:
  - "[[Theorem]]"
  - "[[Functional analysis]]"
created: 2024-11-02 13:42
updated: 2024-11-15 16:04
---
For a measure space $(X, \Sigma, \mu)$, if $0 < \mu(X) < \infty$ and $1 \leq p < q \leq \infty$, then there is a continuous embedding of $L^p(X, \mu)$ into $L^q(X, \mu)$. This means that if $f \in L^p(X, \mu)$, then $f \in L^q(X, \mu)$, and $\|f\|_q \leq C \|f\|_p$ for some constant $C$ depending on $p$, $q$, and $\mu(X)$.

### Statement
Let $1 \leq p < q \leq \infty$ and assume that $\mu(X) < \infty$. Then for any measurable function $f$,
$$
\|f\|_q \leq \|f\|_p \cdot \mu(X)^{\frac{1}{p} - \frac{1}{q}}.
$$
Thus, if $f \in L^p(X, \mu)$, then $f \in L^q(X, \mu)$ and the inclusion map from $L^p(X, \mu)$ to $L^q(X, \mu)$ is continuous.

### Intuition
When $p < q$, the $L^p$ norm penalizes larger values of $|f|$ less strongly than the $L^q$ norm does. Consequently, an $L^p$ function tends to have "more integrability" when viewed in the $L^q$ space, allowing for inclusion.

### Proof Outline
1. **Power Mean Inequality**: Using [[Hölder's Inequality]], observe that for any $f \in L^p(X, \mu)$ and $\mu(X) < \infty$, $|f|^p$ is integrable, so $|f|^q$ is also integrable since $p < q$.
2. **Estimate**: Apply Hölder’s inequality with exponents $\frac{q}{p}$ and $\frac{q}{q - p}$ to obtain:
   $$
   \|f\|_q \leq \|f\|_p \cdot \mu(X)^{\frac{1}{p} - \frac{1}{q}}.
   $$