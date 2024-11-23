---
categories:
  - "[[Linear algebra]]"
  - "[[Operation]]"
created: 2024-11-21 19:45
updated: 2024-11-21 19:45
---
**Definition**  
The **inverse** of a square matrix $A \in \mathbb{R}^{n \times n}$ is a matrix $A^{-1}$ such that:  
$$ A A^{-1} = A^{-1} A = I, $$
where $I$ is the identity matrix of size $n \times n$.  

A matrix is invertible (or nonsingular) if and only if it is square and its [[Determinant]] is nonzero, i.e., $\det(A) \neq 0$.  

**Intuition**  
Matrix inversion generalizes division for matrices. If $A$ represents a linear transformation, $A^{-1}$ reverses that transformation. 

**Key Properties**  
1. **Uniqueness**:  
   - If $A$ is invertible, its inverse $A^{-1}$ is unique.  

2. **Inversion of a Product**:  
   $$ (AB)^{-1} = B^{-1} A^{-1}, $$  
   where $A$ and $B$ are invertible.  

3. **Inversion of a Transpose**:  
   $$ (A^T)^{-1} = (A^{-1})^T. $$  

4. **Inversion of a Scalar Multiple**:  
   $$ (\alpha A)^{-1} = \frac{1}{\alpha} A^{-1}, \quad \alpha \neq 0. $$  

5. **Invertibility and Determinants**:  
   $$ \det(A^{-1}) = \frac{1}{\det(A)}. $$  

6. **Block Matrices**:  
   Invertibility of block matrices follows specific conditions. For example, if $A$ and $D - CA^{-1}B$ are invertible in:  
   $$ \begin{bmatrix} A & B \\ C & D \end{bmatrix}, $$  
   the entire matrix can be inverted using Schur complements.  

**Methods to Compute $A^{-1}$**  
1. **Analytical Formula (2x2 Matrix)**:  
   For $A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$:  
   $$ A^{-1} = \frac{1}{\det(A)} \begin{bmatrix} d & -b \\ -c & a \end{bmatrix}, \quad \det(A) = ad - bc. $$  

2. **Gaussian Elimination**:  
   - Augment $A$ with $I$: $[A | I]$.  
   - Apply row reduction to transform $[A | I] \to [I | A^{-1}]$.  

3. [[Lower–Upper Factorization (LU)]]:  
   - Use $A = LU$ (if $A$ is invertible and $LU$ exists), then solve $AX = I$ via:  
     - $LY = I$ (forward substitution),  
     - $UX = Y$ (backward substitution).  

4. **Adjugate Method**:  
   $$ A^{-1} = \frac{1}{\det(A)} \text{adj}(A), $$  
   where $\text{adj}(A)$ is the adjugate (transpose of cofactor matrix).  

5. **Numerical Methods**:  
   - Iterative methods (e.g., Newton’s method) are used for large matrices.  

**Applications**  
1. **Solving Linear Systems**:  
   - $Ax = b$ is solved as $x = A^{-1}b$ if $A^{-1}$ is precomputed.  

2. **Control Theory**:  
   - Matrix inverses are crucial in state-space models and transfer functions.  

3. **Statistical Models**:  
   - Used in covariance matrix computations and generalized least squares.  

4. **Signal Processing**:  
   - Inverse filtering relies on matrix inversions to restore original signals.  

**Examples**  
1. For $A = \begin{bmatrix} 2 & 3 \\ 1 & 4 \end{bmatrix}$:  
   $$ \det(A) = 2 \cdot 4 - 3 \cdot 1 = 5, $$  
   $$ A^{-1} = \frac{1}{5} \begin{bmatrix} 4 & -3 \\ -1 & 2 \end{bmatrix}. $$  

2. For $A = \begin{bmatrix} 1 & 2 & 3 \\ 0 & 1 & 4 \\ 5 & 6 & 0 \end{bmatrix}$, use Gaussian elimination to compute $A^{-1}$.  
