---
categories:
  - "[[Linear algebra]]"
  - "[[Matrix]]"
created: 2024-04-02 20:44
updated: 2024-11-23 16:32
aliases: 
---
**Definition**  
A square [[Matrix]] $A \in \mathbb{R}^{n \times n}$ (or $\mathbb{C}^{n \times n}$) is **positive semi-definite** (PSD) if:  
1. $A$ is [[Symmetric Matrix]] (or Hermitian if $A$ is complex): $A = A^T$ (or $A = A^*$).  
2. For all vectors $x \in \mathbb{R}^n$ (or $\mathbb{C}^n$):  
   $$x^T A x \geq 0.$$  

**Intuition**  
A positive semi-definite matrix generalizes the concept of a [[Positive Definite Matrix]] by allowing the quadratic form $x^T A x$ to be zero for some non-zero $x$. Geometrically, this can correspond to flat directions in a quadratic function, indicating that the function is not strictly convex but still non-negative.  

**Key Properties**  
1. **[[Eigenvalues and eigenvectors|Eigenvalues]]**:  
   All eigenvalues of $A$ are non-negative: $\lambda_i \geq 0$.  
2. **[[Determinant]] and Leading Principal Minors**:  
   - $\det(A) \geq 0$.  
   - All leading principal minors are non-negative.  
3. **[[Cholesky Decomposition]]**:  
   If $A$ is positive semi-definite, it can be factorized as:  
   $$A = LL^T,$$  
   where $L$ is a lower triangular matrix, though $L$ may not be unique.  
4. **Relation to Positive Definiteness**:  
   $A$ is PSD if and only if it is positive definite or singular (non-invertible).  
5. **[[Norm]] Property**:  
   $$\|Ax\|_2^2 \geq 0 \quad \text{for all } x.$$  

**Applications**  
1. **[[Optimization]]**:  
   Positive semi-definite [[Hessian matrix]] indicate that the function is [[Convex Function]] (but not necessarily strictly convex).  
2. **Machine Learning**:  
   PSD matrices often represent covariance matrices in Gaussian processes, kernel methods, and other probabilistic models.  