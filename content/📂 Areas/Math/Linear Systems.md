---
categories:
  - "[[Linear algebra]]"
  - "[[Definition]]"
created: 2024-11-23 16:52
updated: 2024-12-07 12:01
---
### **Definition**
A **linear system** consists of a set of linear equations that describe the relationships between a set of variables. In matrix form, a linear system can be written as:
$$
A \mathbf{x} = \mathbf{b},
$$
where:
- $A \in \mathbb{R}^{m \times n}$ is the coefficient matrix,
- $\mathbf{x} \in \mathbb{R}^n$ is the vector of unknown variables,
- $\mathbf{b} \in \mathbb{R}^m$ is the vector of constants.

### **Types of Linear Systems**
1. **Consistent**:  
   There exists at least one solution $\mathbf{x}$.
2. **Inconsistent**:  
   No solution exists.
3. **Underdetermined**:  
   $m < n$ (fewer equations than variables), leading to infinitely many solutions if the system is consistent.
4. **Overdetermined**:  
   $m > n$ (more equations than variables). Solutions may not exist or require a least-squares approach.

### **Solving Linear Systems**

#### **1. Direct Methods**
These methods solve $A \mathbf{x} = \mathbf{b}$ exactly (if possible).

1. **Gaussian Elimination**:  
   - Eliminates variables systematically to reduce $A$ to row-echelon form.
   - Computational Complexity: $O(n^3)$.

2. **[[Lower–Upper Factorization (LU)]]**:  
   - Factorizes $A$ into $LU$:
     $$
     A = LU, \quad L \text{ is lower triangular, } U \text{ is upper triangular.}
     $$
   - Solve $L \mathbf{y} = \mathbf{b}$ (forward substitution), then $U \mathbf{x} = \mathbf{y}$ (backward substitution).

3. **[[Cholesky Decomposition]]**:  
   - Specialized for symmetric positive definite matrices:
     $$
     A = LL^T, \quad L \text{ is lower triangular.}
     $$

4. **[[QR factorization]]**:  
   - Factorizes $A$ into $QR$:
     $$
     A = QR, \quad Q \text{ is orthogonal, } R \text{ is upper triangular.}
     $$
   - Solve $R \mathbf{x} = Q^T \mathbf{b}$.

---

#### **2. Iterative Methods**
Used for large, sparse systems where direct methods are computationally expensive.

1. **Jacobi Method**:  
   Iteratively updates each variable assuming all others remain fixed:
   $$
   x_i^{(k+1)} = \frac{1}{a_{ii}} \left( b_i - \sum_{j \neq i} a_{ij} x_j^{(k)} \right).
   $$

2. **Gauss-Seidel Method**:  
   Similar to Jacobi, but uses updated values immediately in each iteration.

3. **[[Conjugate Gradient Method]]**:  
   Efficient for symmetric positive definite matrices. Minimizes the quadratic form:
   $$
   \mathbf{x}^{(k+1)} = \arg \min_\mathbf{x} \frac{1}{2} \mathbf{x}^T A \mathbf{x} - \mathbf{b}^T \mathbf{x}.
   $$

4. **GMRES (Generalized Minimal Residual Method)**:  
   Uses [[Krylov Subspace]] to approximate solutions for general (non-symmetric) matrices.

---

### **Existence and Uniqueness**
For $A \mathbf{x} = \mathbf{b}$:
1. **Unique Solution**:  
   If $A$ is square ($m = n$) and invertible:
   $$
   \mathbf{x} = A^{-1} \mathbf{b}.
   $$

2. **Infinite Solutions**:  
   If $A$ is rank-deficient, the system may have infinitely many solutions.

3. **No Solution**:  
   If $\mathbf{b}$ is not in the column space of $A$, the system is inconsistent.

### **Special Cases**
1. **Symmetric Positive Definite Systems**:  
   Solved efficiently using Cholesky or Conjugate Gradient methods.

2. **Sparse Systems**:  
   Iterative methods like [[GMRES]] or Jacobi are preferred.

3. **[[Least Squares Problems]]**:  
   When $A \mathbf{x} = \mathbf{b}$ is overdetermined ($m > n$), solve:
   $$
   \mathbf{x} = (A^T A)^{-1} A^T \mathbf{b}.
   $$

### **Example**

#### **Given**:
$$
A = \begin{bmatrix} 2 & 1 \\ 1 & 3 \end{bmatrix}, \quad \mathbf{b} = \begin{bmatrix} 5 \\ 7 \end{bmatrix}.
$$

#### **Solve Using Gaussian Elimination**:
1. Augment the matrix:
   $$
   \begin{bmatrix} 2 & 1 & 5 \\ 1 & 3 & 7 \end{bmatrix}.
   $$

2. Eliminate $x_1$ in the second row:
   $$
   \begin{bmatrix} 2 & 1 & 5 \\ 0 & 2.5 & 4.5 \end{bmatrix}.
   $$

3. Back-substitution:
   $$
   x_2 = \frac{4.5}{2.5} = 1.8, \quad x_1 = \frac{5 - 1 \cdot 1.8}{2} = 1.6.
   $$

#### **Solution**:
$$
\mathbf{x} = \begin{bmatrix} 1.6 \\ 1.8 \end{bmatrix}.
$$