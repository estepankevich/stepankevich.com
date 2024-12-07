---
categories:
  - "[[Linear algebra]]"
  - "[[Definition]]"
created: 2024-11-28 19:12
updated: 2024-12-07 10:44
---
### **Definition**
The **condition number** of a matrix $A \in \mathbb{R}^{n \times n}$ is a measure of how sensitive the solution of a [[Linear Systems|linear system]] $A\mathbf{x} = \mathbf{b}$ is to changes in $\mathbf{b}$ or perturbations in $A$. It is defined as:
$$
\kappa(A) = \|A\| \cdot \|A^{-1}\|,
$$
where $\|\cdot\|$ is a matrix norm, commonly the [[Spectral Norm]] ($\|A\|_2$) or [[Frobenius Norm]] ($\|A\|_F$).

For the spectral norm (2-norm), the condition number can be expressed in terms of the singular values $\sigma_{\max}$ and $\sigma_{\min}$ of $A$:
$$
\kappa_2(A) = \frac{\sigma_{\max}}{\sigma_{\min}},
$$
where $\sigma_{\max}$ and $\sigma_{\min}$ are the largest and smallest singular values of $A$.

### **Intuition**
- The condition number describes how much the output (solution $\mathbf{x}$) of the system $A\mathbf{x} = \mathbf{b}$ changes for a small change in the input $\mathbf{b}$.
- A large condition number indicates that the matrix is **ill-conditioned**, meaning it amplifies numerical errors and leads to unstable solutions.
- A small condition number indicates the matrix is **well-conditioned**, and solutions are stable under perturbations.

### **Properties**
1. **Range of Values**:
   - $\kappa(A) \geq 1$ for all invertible matrices $A$.
   - $\kappa(A) = 1$ if and only if $A$ is a scalar multiple of an orthogonal matrix (e.g., rotations, reflections).

2. **Invariance Under Scaling**:
   - $\kappa(cA) = \kappa(A)$ for any scalar $c \neq 0$.

3. **Relation to Matrix Singular Values**:
   - $\kappa(A) \to \infty$ as $\sigma_{\min} \to 0$, indicating near-singularity.

4. **Sensitivity to Perturbations**:
   - For small perturbations $\Delta A$, the relative change in the solution $\mathbf{x}$ satisfies:
     $$
     \frac{\|\Delta \mathbf{x}\|}{\|\mathbf{x}\|} \leq \kappa(A) \frac{\|\Delta \mathbf{b}\|}{\|\mathbf{b}\|}.
     $$
### **Examples**

1. **Diagonal Matrix**:  
   For $A = \text{diag}(1, 2, 10)$, the singular values are $\{1, 2, 10\}$:
   $$
   \kappa_2(A) = \frac{\sigma_{\max}}{\sigma_{\min}} = \frac{10}{1} = 10.
   $$

2. **Orthogonal Matrix**:  
   If $A$ is an orthogonal matrix ($A^T A = I$), then $\sigma_{\max} = \sigma_{\min} = 1$:
   $$
   \kappa_2(A) = 1.
   $$

3. **Nearly Singular Matrix**:  
   For $A = \begin{bmatrix} 1 & 1 \\ 1 & 1.0001 \end{bmatrix}$, $\kappa_2(A) \approx 10^4$, indicating instability in solutions.