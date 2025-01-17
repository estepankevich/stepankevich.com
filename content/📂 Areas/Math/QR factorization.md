---
categories:
  - "[[Linear algebra]]"
  - "[[Factorization]]"
created: 2024-11-21 13:46
updated: 2024-12-07 13:45
---
**Definition**  
QR Factorization is the decomposition of a [[Matrix]] $A \in \mathbb{R}^{m \times n}$ (with $m \geq n$) into the product of two matrices:  
$$ A = QR, $$  
where:  
- $Q \in \mathbb{R}^{m \times m}$ is an [[Orthonormal matrix|orthogonal]] (or unitary) matrix ($Q^T Q = I$),  
- $R \in \mathbb{R}^{m \times n}$ is an upper triangular matrix.  

For the "reduced" QR factorization (when $m > n$), $Q$ becomes $m \times n$, and $R$ is $n \times n$.

**Intuition**  
QR factorization orthogonalizes the columns of $A$, representing $A$ as a combination of orthogonal basis vectors (columns of $Q$) scaled by $R$. It is analogous to the Gram-Schmidt process in vector spaces.

**Key Properties**  
1. **Existence and Uniqueness**:  
   - QR decomposition exists for any matrix $A$.  
   - If $A$ has full column rank, $R$ is nonsingular.  
   - Uniqueness depends on conventions for $R$ (e.g., diagonal entries of $R$ are positive).  
2. **Orthogonality of $Q$**:  
   - $Q^T Q = I$, meaning columns of $Q$ form an orthonormal basis.  
3. **Shape**:  
   - If $A$ is $m \times n$:  
     - $Q$ is $m \times m$ (or $m \times n$ for reduced QR).  
     - $R$ is $m \times n$ (or $n \times n$ for reduced QR).  

**Methods to Compute QR Factorization**  
1. **[[Gram-Schmidt Orthogonalization]]**:  
   - Orthogonalizes the columns of $A$ to construct $Q$ and determines $R$  from projections.  

2. **[[Householder Reflections]]**:  
   - Constructs $Q$ as a product of orthogonal reflections, ensuring numerical stability.  

3. **Givens Rotations**:  
   - Uses rotations to zero out entries below the diagonal of $R$, forming $Q$ as a product of rotations.  

4. **Modified Gram-Schmidt**:  
   - A numerically stable variation of Gram-Schmidt.  

**Applications**  
1. **Solving [[Linear Systems]]**:  
   - For $Ax = b$, compute $QR$ and solve $Rx = Q^T b$ using back substitution.  

2. **[[Least Squares Problems]]**:  
   - Minimize $\|Ax - b\|_2$ by solving $Rx = Q^T b$.  

3. **[[Eigenvalues and eigenvectors|Eigenvalues]] Algorithms**:  
   - Iterative QR algorithms are used to compute eigenvalues of matrices.  

4. **Orthogonalization**:  
   - QR decomposition orthogonalizes the columns of $A$.  

5. **Stability in Numerical Computations**:  
   - QR decomposition is preferred over LU decomposition for certain numerical problems due to better stability.  