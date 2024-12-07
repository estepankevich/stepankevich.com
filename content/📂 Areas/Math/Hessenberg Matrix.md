---
categories:
  - "[[Linear algebra]]"
  - "[[Matrix]]"
created: 2024-12-07 11:49
updated: 2024-12-07 11:49
---
### **Definition**
A **Hessenberg matrix** is a square matrix that has zero entries below the first subdiagonal. Formally, an $n \times n$ matrix $H$ is called a Hessenberg matrix if:
$$
H_{ij} = 0, \quad \text{for all } i > j + 1.
$$

There are two types of Hessenberg matrices:
1. **Upper Hessenberg Matrix**: Non-zero elements appear only on the main diagonal, first subdiagonal, and above the diagonal:
   $$
   H =
   \begin{bmatrix}
   h_{11} & h_{12} & h_{13} & \cdots & h_{1n} \\
   h_{21} & h_{22} & h_{23} & \cdots & h_{2n} \\
   0 & h_{32} & h_{33} & \cdots & h_{3n} \\
   \vdots & \vdots & \ddots & \ddots & \vdots \\
   0 & 0 & \cdots & h_{n-1,n-1} & h_{n-1,n} \\
   0 & 0 & \cdots & 0 & h_{nn}
   \end{bmatrix}.
   $$

2. **Lower Hessenberg Matrix**: Non-zero elements appear only on the main diagonal, first superdiagonal, and below the diagonal:
   $$
   H =
   \begin{bmatrix}
   h_{11} & h_{12} & 0 & \cdots & 0 \\
   h_{21} & h_{22} & h_{23} & \cdots & 0 \\
   h_{31} & h_{32} & h_{33} & \cdots & 0 \\
   \vdots & \vdots & \vdots & \ddots & h_{n-1,n} \\
   h_{n1} & h_{n2} & h_{n3} & \cdots & h_{nn}
   \end{bmatrix}.
   $$

---

### **Properties**
1. **Reduction to Hessenberg Form**:
   Any square matrix $A \in \mathbb{R}^{n \times n}$ can be reduced to an upper Hessenberg form $H$ using orthogonal similarity transformations:
   $$
   H = Q^T A Q,
   $$
   where $Q$ is an orthogonal matrix.

2. **Sparsity**:
   - Upper Hessenberg matrices have $O(n)$ non-zero entries below the diagonal, making them computationally efficient for certain operations.
   - Symmetric matrices reduced to Hessenberg form become **tridiagonal matrices**.

3. **Eigenvalue Preservation**:
   The eigenvalues of $H$ are the same as those of the original matrix $A$.

4. **QR Algorithm**:
   Hessenberg matrices are commonly used in the QR algorithm for finding eigenvalues since QR iterations preserve the Hessenberg structure.

5. **Determinant**:
   The determinant of a Hessenberg matrix can be computed efficiently using its structure, e.g., through LU decomposition.

---

### **Applications**
1. **Eigenvalue Computation**:  
   Reducing a matrix to Hessenberg form is the first step in efficient algorithms for computing eigenvalues (e.g., QR algorithm).

2. **Numerical Linear Algebra**:  
   Hessenberg matrices simplify many matrix operations, such as solving linear systems or performing iterative factorizations.

3. **Control Theory**:  
   Hessenberg matrices arise in companion matrix representations of polynomials, important in system analysis.

---

### **Examples**

#### **1. Upper Hessenberg Matrix Example**:
$$
H =
\begin{bmatrix}
2 & 3 & 4 & 5 \\
1 & -1 & 0 & 2 \\
0 & 2 & 1 & 6 \\
0 & 0 & 3 & 1
\end{bmatrix}.
$$
This is an upper Hessenberg matrix because all entries below the first subdiagonal are zero.

#### **2. Reduction to Hessenberg Form**:
Given:
$$
A = \begin{bmatrix}
4 & 1 & 2 \\
1 & 3 & 0 \\
2 & 0 & 5
\end{bmatrix},
$$
applying an orthogonal similarity transformation produces an upper Hessenberg matrix:
$$
H = \begin{bmatrix}
4 & 1.5 & 1.2 \\
2.2 & 3 & 0.8 \\
0 & 1.3 & 5
\end{bmatrix}.
$$

---

### **Algorithms for Hessenberg Reduction**
1. **Householder Transformations**:
   Uses a sequence of orthogonal Householder reflectors to zero out subdiagonal entries.

2. **Givens Rotations**:
   Iteratively applies Givens rotations to create the Hessenberg form while preserving numerical stability.