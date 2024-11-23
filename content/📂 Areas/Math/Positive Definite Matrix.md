---
categories:
  - "[[Linear algebra]]"
  - "[[Matrix]]"
created: 2024-04-02 20:44
updated: 2024-11-23 16:41
aliases: 
---
**Definition**  
A square [[Matrix]] $A \in \mathbb{R}^{n \times n}$ (or $\mathbb{C}^{n \times n}$) is **positive definite** if:  
1. $A$ is [[Symmetric Matrix|symmetric]] (or Hermitian if $A$ is complex): $A = A^T$ (or $A = A^*$).  
2. For all non-zero vectors $x \in \mathbb{R}^n$ (or $\mathbb{C}^n$):  
   $$x^T A x > 0.$$  
   (In the complex case, $x^* A x > 0$, where $x^*$ is the conjugate transpose of $x$.)  

**Intuition**  
- A positive definite matrix corresponds to a **quadratic form** $x^T A x$ that always produces positive values for non-zero $x$.  
- It represents a multidimensional generalization of a convex parabola, where the energy (or quadratic form) reaches a unique minimum, often associated with optimization and stability.  

In [[Deep Learning]], a positive definite [[Hessian matrix]] (second-derivative matrix) of a loss function guarantees that the function is [[Convex Function|convex]], ensuring the existence of a unique minimum.  

**Key Properties**  
1. **[[Eigenvalues and eigenvectors|Eigenvalues]]**:  
   All eigenvalues of $A$ are positive: $\lambda_i > 0$.  
2. **[[Determinant]] and Leading Principal Minors**:  
   - $\det(A) > 0$.  
   - All leading principal minors (determinants of top-left submatrices) are positive.  
3. **[[Cholesky Decomposition]]**:  
   A positive definite matrix $A$ can be decomposed as:  
   $$A = LL^T,$$  
   where $L$ is a lower triangular matrix with positive diagonal entries.  
4. **[[Matrix Inversion]]**:  
   A positive definite matrix is always invertible.  
5. **[[Norm]] Property**:  
   $$\|Ax\|_2 > 0 \quad \text{for all non-zero } x.$$  
6. **Relation to Convexity**:  
   - If $A$ is the Hessian of a scalar function $f(x)$, i.e., $\nabla^2 f(x) = A$, then $f(x)$ is strictly convex.  

**Applications in Deep Learning**  
1. **[[Optimization]]**:  
   - Positive definite matrices arise in the Hessian of loss functions. If the Hessian is positive definite, the loss is convex, and gradient descent converges to the unique minimum.  
   - Convexity ensures no local minima exist, making optimization simpler and more predictable.  
2. **Energy Landscape**:  
   In machine learning models, ensuring a positive definite structure means the "energy" (loss function) has a well-defined minimum, stabilizing training.  
3. **[[Covariance Matrix]]**:  
   Positive definite matrices often represent covariance matrices in probabilistic models and Gaussian distributions.  

**Examples**  
1. **Basic Example**:  
   $$A = \begin{bmatrix} 2 & 0 \\ 0 & 3 \end{bmatrix}.$$  
   $A$ is symmetric, and for any $x = \begin{bmatrix} x_1 \\ x_2 \end{bmatrix}$:  
   $$x^T A x = 2x_1^2 + 3x_2^2 > 0 \quad \text{for all } x \neq 0.$$

2. **Non-positive Definite Example**:  
   $$B = \begin{bmatrix} 1 & 2 \\ 2 & 1 \end{bmatrix}.$$  
   Eigenvalues of $B$ are $\lambda_1 = 3$, $\lambda_2 = -1$. Since $\lambda_2 < 0$, $B$ is not positive definite.  