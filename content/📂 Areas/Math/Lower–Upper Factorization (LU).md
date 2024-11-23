---
categories:
  - "[[Linear algebra]]"
  - "[[Factorization]]"
created: 2024-11-21 13:46
updated: 2024-11-21 19:42
---
**Definition**  
Lower–Upper (LU) Factorization is a matrix decomposition technique where a square matrix $A$ is expressed as the product of two matrices:  
$$ A = LU, $$  
where:  
- $L$ is a lower triangular matrix (with ones on its diagonal),  
- $U$ is an upper triangular matrix.  

For certain matrices, permutation is required, and the factorization becomes:  
$$ PA = LU, $$  
where $P$ is a [[Permutation Matrix]].  

**Intuition**  
LU factorization transforms a complex system into a simpler triangular form, facilitating efficient computation of solutions to linear systems via forward and backward substitution.

**Key Properties**  
1. **Existence**:  
   - Not every matrix has an LU decomposition without permutation.  
   - A sufficient condition for existence is that all leading principal minors of $A$ are nonzero.  

2. **Uniqueness**:  
   - If $A$ can be factored as $A = LU$ with $L$ having unit diagonal entries, the factorization is unique.  

3. **Complexity**:  
   - LU decomposition has a computational complexity of $O(n^3)$ for an $n \times n$ matrix.  

4. **Efficiency**:  
   - Once decomposed, solving $Ax = b$ reduces to solving two triangular systems:  
     - Solve $Ly = b$ (forward substitution),  
     - Solve $Ux = y$ (backward substitution).  

**Applications**  
1. **Solving Linear Systems**:  
   - LU factorization allows solving $Ax = b$ efficiently for multiple right-hand sides $b$.  

2. **[[Matrix Inversion]]**:  
   - The inverse of $A$ can be computed using $LU$ by solving systems for columns of the identity matrix.  

3. **[[Determinant]] Calculation**:  
   - The determinant of $A$ is the product of the diagonal entries of $U$: $\det(A) = \prod u_{ii}$ (for $PA = LU$, $\det(A) = \det(P)\prod u_{ii}$).  

4. **Numerical Analysis**:  
   - LU is a core method in numerical linear algebra, particularly in Gaussian elimination.  

**Examples**  
1. For $A = \begin{bmatrix} 4 & 3 \\ 6 & 3 \end{bmatrix}$:  
   - $L = \begin{bmatrix} 1 & 0 \\ 1.5 & 1 \end{bmatrix}$,  
   - $U = \begin{bmatrix} 4 & 3 \\ 0 & -1.5 \end{bmatrix}$.  
   - Verify: $LU = A$.  

2. For $A = \begin{bmatrix} 0 & 3 & 1 \\ 2 & 6 & 4 \\ 1 & -3 & 2 \end{bmatrix}$:  
   - Pivoting required, $P = \begin{bmatrix} 0 & 1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{bmatrix}$,  
   - $PA = LU$, with computed $L$ and $U$.  