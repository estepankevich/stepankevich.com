---
categories:
  - "[[Linear algebra]]"
  - "[[Definition]]"
created: 2024-10-30 16:48
updated: 2024-11-24 17:40
---
# Equivalent Definitions of the Operator Norm

The operator norm of a [[Linear map]] $T: X \rightarrow Y$, where $X$ and $Y$ are [[Normed Vector Space|normed vector spaces]], measures the "size" of $T$ in terms of how much it can stretch vectors. The operator norm is defined by several equivalent formulations:

### Definition 1: Supremum Form
$$
\|T\| = \sup_{\|x\| \leq 1} \|T(x)\|
$$
This defines $\|T\|$ as the supremum of $\|T(x)\|$ over all $x$ with $\|x\| \leq 1$, meaning it is the maximum amount $T$ can stretch any vector of unit length.

### Definition 2: Infimum of Bounds
$$
\|T\| = \inf \{ C \geq 0 : \|T(x)\| \leq C \|x\|, \, \forall x \in X \}
$$
This characterizes $\|T\|$ as the smallest constant $C$ such that $T$ is bounded by $C$ times the norm of $x$, for all $x \in X$.

### Definition 3: Supremum of Ratios (if $x \neq 0$)
$$
\|T\| = \sup_{x \neq 0} \frac{\|T(x)\|}{\|x\|}
$$
This expresses $\|T\|$ as the supremum of the ratio $\frac{\|T(x)\|}{\|x\|}$ over all non-zero $x$, capturing the maximal relative stretching of $T$.

### Properties
- **Non-negativity**: $\|T\| \geq 0$, and $\|T\| = 0$ if and only if $T$ is the zero map.
- **Sub-multiplicativity**: If $T: X \to Y$ and $S: Y \to Z$ are operators, then $\|ST\| \leq \|S\| \cdot \|T\|$.
- **Triangle Inequality**: $\|T + S\| \leq \|T\| + \|S\|$.

Each of these definitions provides a different perspective but leads to the same norm value for the operator $T$.