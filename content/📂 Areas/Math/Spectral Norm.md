---
categories:
  - "[[Linear algebra]]"
  - "[[Norm]]"
created: 2024-11-23 16:51
updated: 2024-12-07 12:11
---
### **Definition**
The **spectral norm** of a matrix $A \in \mathbb{R}^{m \times n}$ is defined as the largest singular value of $A$, denoted by $\sigma_{\max}(A)$. It is equivalent to the [[Norm of an operator]] induced by the vector 2-norm:
$$
\|A\|_2 = \max_{\mathbf{x} \neq 0} \frac{\|A\mathbf{x}\|_2}{\|\mathbf{x}\|_2}.
$$

Alternatively:
$$
\|A\|_2 = \max_{\|\mathbf{x}\|_2 = 1} \|A\mathbf{x}\|_2.
$$

For square matrices, $\|A\|_2$ is also the square root of the largest eigenvalue of $A^T A$:
$$
\|A\|_2 = \sqrt{\lambda_{\max}(A^T A)}.
$$

---

### **Properties**
1. **Non-Negativity**:  
   $\|A\|_2 \geq 0$.

2. **Zero Matrix**:  
   $\|A\|_2 = 0$ if and only if $A = 0$.

3. **Submultiplicativity**:  
   For compatible matrices $A$ and $B$:
   $$
   \|AB\|_2 \leq \|A\|_2 \|B\|_2.
   $$

4. **Unitary Invariance**:  
   The spectral norm is invariant under orthogonal or unitary transformations:
   $$
   \|A\|_2 = \|UA\|_2 = \|AV\|_2,
   $$
   where $U$ and $V$ are orthogonal (or unitary) matrices.

5. **Relationship to Singular Values**:  
   The spectral norm is the largest singular value $\sigma_{\max}(A)$:
   $$
   \|A\|_2 = \sigma_{\max}(A).
   $$

6. **Relation to Vector Norms**:  
   The spectral norm satisfies:
   $$
   \|A\mathbf{x}\|_2 \leq \|A\|_2 \|\mathbf{x}\|_2 \quad \forall \mathbf{x}.
   $$

---

### **Computation**
1. **[[Singular Value Decomposition (SVD)]]**:
   The spectral norm is the largest singular value obtained from the SVD of $A$:
   $$
   A = U \Sigma V^T, \quad \|A\|_2 = \sigma_{\max}.
   $$

2. **Power Iteration Method** (Approximation):  
   Iteratively compute the dominant eigenvalue of $A^T A$ to estimate $\|A\|_2$:
   - Start with a random vector $\mathbf{x}$.
   - Iterate: $\mathbf{y} = A^T A \mathbf{x}$, $\mathbf{x} = \frac{\mathbf{y}}{\|\mathbf{y}\|_2}$.
   - Converges to the eigenvector associated with $\lambda_{\max}(A^T A)$.
