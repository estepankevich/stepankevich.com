---
categories:
  - "[[Linear algebra]]"
  - "[[Factorization]]"
created: 2024-11-21 13:46
updated: 2024-11-25 17:49
---
**Definition**  
Eigendecomposition is the process of decomposing a square matrix $A$ into a product of three matrices:  
$$ A = Q \Lambda Q^{-1}, $$  
where:  
- $Q$ is a matrix whose columns are the eigenvectors of $A$,  
- $\Lambda$ is a diagonal matrix with the eigenvalues of $A$ on the diagonal,  
- $Q^{-1}$ is the inverse of $Q$.

**Intuition**  
Eigendecomposition represents a transformation $A$ as a scaling operation in the directions defined by its eigenvectors. This decomposition allows the matrix to be expressed in terms of its most "natural" coordinate system.

**Key Properties**  
1. **Existence**:  
   - Not all matrices can be eigendecomposed. $A$ must be diagonalizable, which occurs if $A$ has $n$ linearly independent eigenvectors (where $A$ is $n \times n$).  
   - [[Symmetric Matrix]] is always diagonalizable.  

2. **Matrix Powers**:  
   - If $A = Q \Lambda Q^{-1}$, then $A^k = Q \Lambda^k Q^{-1}$, simplifying computations of matrix powers.  

3. **Diagonalization**:  
   - Eigendecomposition is equivalent to diagonalizing $A$ if possible.  

4. **Spectral Theorem**:  
   - If $A$ is symmetric, then $Q$  is orthogonal ($Q^{-1} = Q^T$), and the decomposition becomes $A = Q \Lambda Q^T$.  

**Applications**  
1. **[[PCA]]**:  
   - Eigendecomposition of the covariance matrix identifies the principal components.  

2. **Dynamical Systems**:  
   - Eigenvalues and eigenvectors describe system stability and modes of behavior.  

3. **Power Iteration and Matrix Approximations**:  
   - Used in iterative algorithms to compute dominant eigenvalues and eigenvectors.  

4. **Quantum Mechanics**:  
   - Decomposition of Hermitian operators represents physical observables.  

5. **Solving Differential Equations**:  
   - Linear systems of differential equations are simplified via eigendecomposition.  

**Examples**  
1. Given $A = \begin{bmatrix} 4 & 1 \\ 2 & 3 \end{bmatrix}$, find its eigendecomposition:  
   - Eigenvalues: $\lambda_1 = 5$, $\lambda_2 = 2$.  
   - Eigenvectors: $\mathbf{v}_1 = \begin{bmatrix} 1 \\ 2 \end{bmatrix}$, $\mathbf{v}_2 = \begin{bmatrix} -1 \\ 1 \end{bmatrix}$.  
   - $Q = \begin{bmatrix} 1 & -1 \\ 2 & 1 \end{bmatrix}$, $\Lambda = \begin{bmatrix} 5 & 0 \\ 0 & 2 \end{bmatrix}$.  
   - $A = Q \Lambda Q^{-1}$.  