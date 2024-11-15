---
categories:
  - "[[Measure Theory]]"
  - "[[Definition]]"
created: 2024-10-17 20:32
updated: 2024-11-12 11:22
---
A function $f: X \to \mathbb{R}$ (or $\mathbb{C}$) defined on a measurable space $(X, \mathcal{A})$ is called *measurable* if for every [[Borel Set]] $B \subset \mathbb{R}$, the preimage of $B$ under $f$ is in $\mathcal{A}$, i.e.,
$$ f^{-1}(B) = \{ x \in X \mid f(x) \in B \} \in \mathcal{A}. $$
### Intuition:
A measurable function is one that "preserves" the structure of the $\sigma$-algebra on its domain. It ensures that applying the function to measurable sets gives measurable results.

### Key Properties:
1. **Preservation of [[Measure]]**: For any [[Borel Set]] $B$, the preimage $f^{-1}(B)$ is measurable.
2. **Composition with Measurable Functions**: If $f$ and $g$ are measurable, then $f + g$, $fg$, and $cf$ (for any constant $c$) are also measurable.
3. **Examples**:
   - [[Continuity|Continuous functions]] on a measurable space are measurable.
   - Indicator functions of measurable sets are measurable.