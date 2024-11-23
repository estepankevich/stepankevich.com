---
categories:
  - "[[Linear algebra]]"
  - "[[Definition]]"
created: 2024-11-22 18:19
updated: 2024-11-23 16:54
---
**Definition**  
Let $A \in \mathbb{R}^{n \times n}$ be a square matrix. A scalar $\lambda \in \mathbb{R}$ (or $\mathbb{C}$) is an **eigenvalue** of $A$ if there exists a non-zero vector $v \in \mathbb{R}^n$ (or $\mathbb{C}^n$), called an **eigenvector**, such that:  
$$A v = \lambda v.$$  
Equivalently, $\lambda$ and $v$ satisfy the equation $(A - \lambda I)v = 0$, where $I$ is the identity matrix.  (see also [[Eigendecomposition]])

**Intuition**  
- An eigenvalue $\lambda$ represents the factor by which the eigenvector $v$ is scaled under the transformation defined by $A$.  
- Eigenvectors point in directions that remain unchanged (up to scaling) under the transformation $A$.  

**Key Properties**  
1. **Characteristic Equation**:  
   The eigenvalues are the roots of the characteristic polynomial $\det(A - \lambda I) = 0$.  
2. **Number of Eigenvalues**:  
   An $n \times n$ matrix has at most $n$ eigenvalues (counting multiplicities).  
3. **Diagonalizability**:  
   $A$ is diagonalizable if there exists a basis of eigenvectors, which occurs if $A$ has $n$ linearly independent eigenvectors.  
4. **[[Matrix trace]] and [[Determinant]]**:  
   - The trace of $A$, $\text{tr}(A)$, equals the sum of its eigenvalues: $\text{tr}(A) = \sum_{i=1}^n \lambda_i$.  
   - The determinant of $A$ equals the product of its eigenvalues: $\det(A) = \prod_{i=1}^n \lambda_i$.  
5. **[[Symmetric Matrix]]**:  
   If $A$ is symmetric ($A = A^T$), all eigenvalues of $A$ are real, and its eigenvectors can be chosen to be orthogonal.  
6. **Singularity**:  
   $A$ is singular (not [[Matrix Inversion|invertible]]) if and only if $0$ is an eigenvalue.  